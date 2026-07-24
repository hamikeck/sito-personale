# Importatore articoli da zip

Script CLI che importa un articolo scritto fuori dal progetto (cartella zippata
con un file `.md` + sottocartella di immagini) dentro il blog del sito.

## Come si usa

```bash
node scripts/importa-articolo.mjs percorso/articolo.zip
```

Lo script chiede interattivamente lo **slug** (es. `il-mio-primo-sito`), che
determina sia il nome del file MDX sia la cartella delle immagini.

## Cosa fa

1. **Estrae lo zip** in una cartella temporanea (usa `unzip` di sistema, nessuna
   dipendenza npm nuova).
2. **Trova il file `.md`** nella cartella estratta (se ce n'è più di uno si
   ferma con errore).
3. **Chiede lo slug** e lo valida: solo minuscole, numeri e trattini
   (kebab-case). Se `content/articoli/<slug>.mdx` esiste già, si ferma senza
   sovrascrivere.
4. **Ricava il titolo** dal primo heading `# H1` del file `.md` e lo rimuove dal
   corpo (il titolo viene renderizzato dalla pagina, non dal contenuto).
   Se non c'è un H1, usa lo slug come titolo provvisorio.
5. **Copia le immagini** dalla sottocartella dell'articolo in
   `public/articoli/<slug>/` (creandola).
6. **Riscrive i riferimenti alle immagini** nel corpo: i percorsi relativi tipo
   `![alt](immagini/foto.png)` o `![alt](./img/foto.png)` diventano
   `![alt](/articoli/<slug>/foto.png)`. Se un riferimento punta a un file che
   non esiste tra le immagini copiate, lo segnala con un avviso (ma non blocca).
7. **Prepara l'header** (`export const metadata`) in testa al file, da compilare
   a mano dopo l'import:

   ```js
   export const metadata = {
     titolo: "<dal primo H1>",
     data: "<data odierna YYYY-MM-DD>",
     descrizione: "", // da compilare
     tag: [], // da compilare
     // cover: "/articoli/<slug>/nome-immagine.jpg", // opzionale
     bozza: true, // rimuovi quando l'articolo è pronto
   };
   ```

   Con `bozza: true` l'articolo non compare sul sito finché non lo togli.

8. **Salva** il risultato in `content/articoli/<slug>.mdx` e stampa un
   riepilogo: file creato, immagini copiate, cosa resta da compilare.

## File coinvolti

- `scripts/importa-articolo.mjs` — nuovo, lo script (Node puro, ESM, nessuna
  dipendenza aggiuntiva).
- `content/articoli/<slug>.mdx` — output dell'import.
- `public/articoli/<slug>/` — immagini dell'articolo (coerente con la
  convenzione `cover` già prevista in `lib/articoli-meta.ts`).

Nessuna modifica al codice del sito: lo script scrive dove `lib/articoli.ts`
già legge.

## Casi limite gestiti

- Zip senza `.md` o con più `.md` → errore chiaro, nessuna scrittura.
- Slug non valido o già esistente → richiede di nuovo / si ferma.
- Immagini con lo stesso nome ma in sottocartelle diverse → errore (nomi file
  devono essere univoci, perché finiscono tutti in una cartella piatta).
- Riferimenti a immagini mancanti → avviso in console, import completato.
- Cartelle di sistema nello zip (`__MACOSX`, `.DS_Store`) → ignorate.
