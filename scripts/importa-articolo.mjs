#!/usr/bin/env node
// Importa un articolo da uno zip (file .md + cartella immagini) dentro il blog:
// crea content/articoli/<slug>.mdx e copia le immagini in public/articoli/<slug>/.
// Uso: node scripts/importa-articolo.mjs percorso/articolo.zip

import { execFile } from "node:child_process";
import {
  copyFile,
  mkdir,
  mkdtemp,
  readdir,
  readFile,
  rm,
  stat,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import readline from "node:readline/promises";
import { promisify } from "node:util";

const eseguiComando = promisify(execFile);

const ESTENSIONI_IMMAGINE = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".webp",
  ".svg",
  ".avif",
]);
const CARTELLE_IGNORATE = new Set(["__MACOSX", "node_modules"]);
const REGEX_SLUG = /^[a-z0-9]+(-[a-z0-9]+)*$/;

function errore(messaggio) {
  console.error(`Errore: ${messaggio}`);
  process.exit(1);
}

// Elenca ricorsivamente i file dello zip estratto, saltando cartelle di
// sistema e file nascosti (.DS_Store ecc.).
async function elencaFile(dir) {
  const risultato = [];
  for (const voce of await readdir(dir, { withFileTypes: true })) {
    if (voce.name.startsWith(".") || CARTELLE_IGNORATE.has(voce.name)) continue;
    const percorso = path.join(dir, voce.name);
    if (voce.isDirectory()) {
      risultato.push(...(await elencaFile(percorso)));
    } else {
      risultato.push(percorso);
    }
  }
  return risultato;
}

async function chiediSlug(rl) {
  // Se lo stdin si chiude (Ctrl-D, pipe esaurita) la question resterebbe
  // appesa e il processo uscirebbe con 0 senza fare nulla: meglio un errore.
  const inputChiuso = new Promise((resolve) =>
    rl.once("close", () => resolve(null))
  );
  for (;;) {
    const risposta = await Promise.race([
      rl.question("Slug dell'articolo (es. il-mio-primo-sito): "),
      inputChiuso,
    ]);
    if (risposta === null) errore("input terminato senza uno slug valido.");
    const slug = risposta.trim();
    if (!REGEX_SLUG.test(slug)) {
      console.log(
        "Slug non valido: usa solo minuscole, numeri e trattini (kebab-case)."
      );
      continue;
    }
    return slug;
  }
}

function dataOdierna() {
  const oggi = new Date();
  const mese = String(oggi.getMonth() + 1).padStart(2, "0");
  const giorno = String(oggi.getDate()).padStart(2, "0");
  return `${oggi.getFullYear()}-${mese}-${giorno}`;
}

async function main() {
  const percorsoZip = process.argv[2];
  if (!percorsoZip) {
    errore("indica lo zip da importare.\nUso: node scripts/importa-articolo.mjs percorso/articolo.zip");
  }
  await stat(percorsoZip).catch(() => errore(`file non trovato: ${percorsoZip}`));

  const radice = process.cwd();
  const cartellaTemporanea = await mkdtemp(
    path.join(os.tmpdir(), "importa-articolo-")
  );

  try {
    await eseguiComando("unzip", ["-o", percorsoZip, "-d", cartellaTemporanea]).catch(
      () => errore(`impossibile estrarre lo zip: ${percorsoZip}`)
    );

    const file = await elencaFile(cartellaTemporanea);
    const fileMd = file.filter((f) => f.toLowerCase().endsWith(".md"));
    if (fileMd.length === 0) errore("nessun file .md trovato nello zip.");
    if (fileMd.length > 1) {
      errore(
        `trovati ${fileMd.length} file .md nello zip, ne serve uno solo:\n` +
          fileMd.map((f) => `  - ${path.relative(cartellaTemporanea, f)}`).join("\n")
      );
    }

    const immagini = file.filter((f) =>
      ESTENSIONI_IMMAGINE.has(path.extname(f).toLowerCase())
    );
    const nomiVisti = new Map();
    for (const img of immagini) {
      const nome = path.basename(img);
      if (nomiVisti.has(nome)) {
        errore(
          `due immagini con lo stesso nome "${nome}": i nomi devono essere univoci perché finiscono tutte in public/articoli/<slug>/.`
        );
      }
      nomiVisti.set(nome, img);
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const slug = await chiediSlug(rl);
    rl.close();

    const fileMdx = path.join(radice, "content", "articoli", `${slug}.mdx`);
    const esiste = await stat(fileMdx).then(() => true, () => false);
    if (esiste) {
      errore(`esiste già un articolo con questo slug: content/articoli/${slug}.mdx`);
    }

    let corpo = await readFile(fileMd[0], "utf-8");

    // Titolo dal primo H1, che viene rimosso: la pagina lo renderizza dai metadata.
    let titolo = slug;
    const h1 = corpo.match(/^#[ \t]+(.+?)[ \t]*$/m);
    if (h1) {
      titolo = h1[1].trim();
      corpo = corpo.replace(h1[0], "");
    } else {
      console.log("Avviso: nessun titolo H1 nel file .md, uso lo slug come titolo provvisorio.");
    }

    // Riscrive i riferimenti relativi alle immagini in /articoli/<slug>/<file>.
    const avvisi = [];
    corpo = corpo.replace(
      /(!\[[^\]]*\]\()([^)\s]+)((?:\s+"[^"]*")?\))/g,
      (originale, prima, riferimento, dopo) => {
        if (/^(https?:)?\/\//.test(riferimento) || riferimento.startsWith("/")) {
          return originale;
        }
        let decodificato = riferimento;
        try {
          decodificato = decodeURI(riferimento);
        } catch {}
        const nome = path.basename(decodificato);
        if (!nomiVisti.has(nome)) {
          avvisi.push(`immagine riferita nel testo ma assente nello zip: ${riferimento}`);
          return originale;
        }
        return `${prima}/articoli/${slug}/${encodeURI(nome)}${dopo}`;
      }
    );

    const cartellaImmagini = path.join(radice, "public", "articoli", slug);
    if (immagini.length > 0) {
      await mkdir(cartellaImmagini, { recursive: true });
      for (const img of immagini) {
        await copyFile(img, path.join(cartellaImmagini, path.basename(img)));
      }
    }

    const esempioCover = encodeURI(
      immagini.length > 0 ? path.basename(immagini[0]) : "cover.jpg"
    );
    const intestazione = `export const metadata = {
  titolo: ${JSON.stringify(titolo)},
  data: "${dataOdierna()}",
  descrizione: "", // da compilare
  tag: [], // da compilare
  // cover: "/articoli/${slug}/${esempioCover}", // opzionale
  bozza: true, // rimuovi quando l'articolo è pronto
};
`;

    await mkdir(path.dirname(fileMdx), { recursive: true });
    await writeFile(fileMdx, `${intestazione}\n${corpo.trim()}\n`);

    console.log("\nImport completato.");
    console.log(`  Articolo:  content/articoli/${slug}.mdx`);
    console.log(`  Titolo:    ${titolo}`);
    console.log(
      immagini.length > 0
        ? `  Immagini:  ${immagini.length} copiate in public/articoli/${slug}/`
        : "  Immagini:  nessuna trovata nello zip"
    );
    for (const avviso of avvisi) console.log(`  Avviso:    ${avviso}`);
    console.log(
      "\nDa compilare nell'header: descrizione, tag, eventuale cover; poi rimuovi bozza."
    );
  } finally {
    await rm(cartellaTemporanea, { recursive: true, force: true });
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
