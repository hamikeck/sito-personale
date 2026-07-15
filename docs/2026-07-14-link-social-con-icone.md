# Link social con icone (LinkedIn, GitHub, Instagram, YouTube)

**Data:** 2026-07-14
**Stato:** implementato (2026-07-14)

## Obiettivo

Aggiungere i profili social al sito, con icone coerenti con lo stile
neo-brutalist esistente (bordi `border-2 border-foreground`, ombre
`shadow-brut-sm`, forme `rounded-full`). Decisioni prese insieme:

- **Canali:** LinkedIn, GitHub, Instagram, YouTube (il canale è già
  annunciato nella sezione Percorso).
- **Posizioni:** sezione Contatti (le pillole esistenti guadagnano
  l'icona) **e** hero (fila di icone sotto i bottoni CTA).
- **Icone:** SVG inline in un componente locale, nessuna dipendenza nuova.
  I loghi ereditano il colore dal testo (`currentColor`), quindi si
  adattano da soli a dark mode e sfondo scuro dei Contatti.

## File coinvolti

| File | Intervento |
| --- | --- |
| `lib/site.ts` | Popolare `socials` aggiungendo il campo `icona` (slug: `github` \| `linkedin` \| `instagram` \| `youtube`). URL reali forniti dall'utente (hamikeck, michele-cacciapuoti-07586a33a, michelecaccia__, @michele-cacciapuoti). |
| `components/site/social-icon.tsx` | Nuovo componente `SocialIcon`: riceve lo slug e renderizza l'SVG inline corrispondente (viewBox 24×24, `fill="currentColor"`, dimensione via `className`). I path dei loghi verranno presi da una fonte ufficiale con licenza libera (Simple Icons o Bootstrap Icons) al momento dell'implementazione, non ricostruiti a memoria. |
| `components/home/sezione-contatti.tsx` | Ogni pillola social mostra icona (16px) + nome, layout `inline-flex items-center gap-2`. Nessun altro cambiamento alla sezione. |
| `components/home/hero.tsx` | Nuova fila sotto i bottoni CTA: bottoni circolari solo-icona (`size-10`, `rounded-full border-2 border-foreground shadow-brut-sm`, hover con `-translate-y-0.5` come le pillole dei Contatti), `aria-label` col nome del social, `target="_blank"` + `rel="noopener noreferrer"`. |

## Ordine di lavoro

1. `SocialIcon` con i 4 loghi (fonte ufficiale, verifica visiva).
2. `lib/site.ts` con i 4 profili (URL segnaposto + TODO).
3. Icone nelle pillole dei Contatti.
4. Fila di icone nella hero.
5. Verifica.

## Note

- Lucide-react (v1.23.0, quella installata) **non include più icone brand**:
  per questo i loghi vanno incorporati a mano.
- Tipografia e gerarchia della hero restano invariate: la fila di icone è
  visivamente secondaria rispetto alle CTA (icone outline, senza
  riempimento primario).

## Verifica

- `npm run build` (non ci sono test) + `npm run lint`.
- Controllo visivo su http://localhost:3000: icone nitide, allineate,
  leggibili in light e dark mode, hover funzionante, tab-focus visibile.
- Controllo che i 4 link compaiano nell'HTML prerenderizzato.
