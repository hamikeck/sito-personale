# Progetti reali nella sezione "Siti che ho realizzato"

**Data:** 2026-07-15
**Stato:** implementato (2026-07-15)

## Obiettivo

Sostituire il progetto di esempio in `content/progetti.ts` con il primo
progetto reale. L'infrastruttura (tipo `Progetto`, `ProjectCard`, sezione)
resta invariata: cambiano solo dati e immagini.

## Primo progetto

- **Nome:** Pizzeria da Salvatore
- **URL:** https://pizzeriasalvatore.it (verificato: risponde)
- **Descrizione:** "Sito per la storica pizzeria di Qualiano: hero
  immersivo, menù digitale, orari sempre visibili e CTA dirette per
  chiamata e prenotazione." (testo dell'utente, leggermente rifluito)
- **Screenshot:** dal file fornito
  (`~/Desktop/Screenshot 2026-07-15 at 10.42.53.png`, 2880×1624, 4MB PNG)
  ricavo `public/progetti/pizzeria-da-salvatore.jpg`: ridimensionato a
  1600px di larghezza e convertito in JPEG (~qualità 80) per non tenere
  4MB nel repository. L'originale sul Desktop non si tocca.

## Interventi

| File | Intervento |
| --- | --- |
| `content/progetti.ts` | Il progetto di esempio viene sostituito dalla voce reale; rimosso il commento "Sostituire con i progetti reali". |
| `public/progetti/pizzeria-da-salvatore.jpg` | Nuovo screenshot ottimizzato. |
| `public/progetti/esempio.svg` | Rimosso (non più referenziato). |

## Note

- La card ritaglia l'immagine a 8:5 con `object-cover`: lo screenshot
  16:9 perde una piccola fascia laterale, verificare che il ritaglio
  visivo resti buono.
- Il nome nella card è "Pizzeria da Salvatore" senza "— Qualiano": la
  città è già nella descrizione, evitiamo la ripetizione.
- Nuovi progetti si aggiungono in coda all'array con lo stesso schema
  (screenshot in `public/progetti/`).

## Verifica

- `npm run build` + `npm run lint`.
- Controllo visivo della card su http://localhost:3000 (tema chiaro e
  scuro): immagine nitida, ritaglio sensato, link funzionante.
