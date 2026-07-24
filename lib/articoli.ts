import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

import type { ArticoloMeta } from "@/lib/articoli-meta";

export { formattaData, type ArticoloMeta } from "@/lib/articoli-meta";

const PAROLE_AL_MINUTO = 200;

function calcolaMinutiLettura(sorgente: string): number {
  const corpo = sorgente
    .replace(/^export const metadata = \{[\s\S]*?\};/m, "")
    .replace(/!\[.*?\]\(.*?\)/g, "")
    .replace(/[#*_>`\[\]()]/g, " ");
  const parole = corpo.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(parole / PAROLE_AL_MINUTO));
}

export async function getArticoli(): Promise<ArticoloMeta[]> {
  const dir = path.join(process.cwd(), "content", "articoli");
  const file = (await readdir(dir)).filter((f) => f.endsWith(".mdx"));

  const articoli = await Promise.all(
    file.map(async (f) => {
      const slug = f.replace(/\.mdx$/, "");
      const [{ metadata }, sorgente] = await Promise.all([
        import(`@/content/articoli/${slug}.mdx`),
        readFile(path.join(dir, f), "utf-8"),
      ]);
      return {
        slug,
        ...metadata,
        minutiLettura: calcolaMinutiLettura(sorgente),
      } as ArticoloMeta;
    })
  );

  return articoli
    .filter((a) => !a.bozza)
    .sort((a, b) => b.data.localeCompare(a.data));
}

// Articoli con più tag in comune; a parità vince il più recente.
export async function getCorrelati(
  slug: string,
  quanti = 2
): Promise<ArticoloMeta[]> {
  const articoli = await getArticoli();
  const corrente = articoli.find((a) => a.slug === slug);
  if (!corrente) return [];

  return articoli
    .filter((a) => a.slug !== slug)
    .map((a) => ({
      articolo: a,
      punteggio: a.tag.filter((t) => corrente.tag.includes(t)).length,
    }))
    .sort(
      (x, y) =>
        y.punteggio - x.punteggio ||
        y.articolo.data.localeCompare(x.articolo.data)
    )
    .slice(0, quanti)
    .map((x) => x.articolo);
}
