# UI kit — Sito (michelecacciapuoti.it)

Ricostruzione click-through del sito personale, a partire da `hamikeck/sito-personale` (Next.js 16 + Tailwind v4 + shadcn/ui base-nova).

- `index.html` — router finto (Home, /progetti, /articoli, /articoli/[slug], 404). Pulsanti in basso a destra per saltare tra le pagine; il toggle tema nell'header commuta `.dark`.
- `home.jsx` — Home (Hero, Progetti, Articoli, Video), pagina Progetti, 404.
- `articoli.jsx` — elenco articoli con filtro tag + card in evidenza, pagina articolo (estratto reale).
- `data.js` — progetti, articoli e video reali del repo.

Tutti i componenti arrivano dal bundle del design system (`window.MicheleDesignSystem_402387`).
