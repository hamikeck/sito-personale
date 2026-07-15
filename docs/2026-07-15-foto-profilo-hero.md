# Foto profilo nella hero

**Data:** 2026-07-15
**Stato:** implementato (2026-07-15)

## Obiettivo

Sostituire il quadrato sfumato segnaposto nella hero con la foto di Michele
(`~/Downloads/IMG_1343.jpg`, 798×798, JPEG), mantenendo lo stile brut
(bordo `border-2`, `rounded-2xl`, `shadow-brut-sm`) e ingrandendo leggermente
il riquadro perché il viso resti riconoscibile.

## Passi

1. **Ritaglio**: la foto originale inquadra mezzo busto; per un avatar
   piccolo serve un taglio stretto sul viso. Ritaglio quadrato centrato sul
   volto con `sips` (senza toccare l'originale in Downloads), risultato
   ~500×500px salvato come `public/michele.jpg`. Verifica visiva del
   ritaglio prima di procedere.
2. **Componente**: in `components/home/hero.tsx` sostituire il `div`
   segnaposto (riga 11) con `Image` di `next/image`:
   - `src="/michele.jpg"`, `alt="Foto di Michele"`, dimensioni esplicite;
   - `priority` (è l'elemento LCP della pagina, sopra la piega);
   - stesse classi brut del segnaposto + `object-cover`;
   - dimensioni portate da `size-16 sm:size-20` a `size-20 sm:size-24`
     (80px mobile / 96px desktop); dopo una valutazione visiva insieme,
     ritoccate a `size-24 sm:size-28` (96px mobile / 112px desktop).
3. Rimuovere il commento "Sostituire con una foto quando disponibile".

## Note

- Prima di scrivere il codice, verifica della sintassi di `next/image` nella
  documentazione locale di Next 16 (`node_modules/next/dist/docs/`), come da
  AGENTS.md.
- La foto resta servita da `public/`: nessuna dipendenza o config nuova.

## Verifica

- `npm run build` + `npm run lint`.
- Controllo visivo su http://localhost:3000 (tema chiaro e scuro): viso
  leggibile, bordi e ombra coerenti, nessun layout shift.
