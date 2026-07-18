# Immagini OG generate dal codice

**Data:** 2026-07-18
**Stato:** implementato (2026-07-18)

## Obiettivo

Anteprime social (Open Graph) per tutto il sito, generate con
`ImageResponse` di `next/og` in stile brut coerente col sito: una card per
la homepage e una generata automaticamente per ogni articolo del blog.

## Interventi

| File | Intervento |
| --- | --- |
| `lib/site.ts` | `siteUrl` passa a `https://sito-personale-five.vercel.app` (con commento: tornare al dominio vero quando ci sarà). Oggi punta a `michelecacciapuoti.it`, non registrato: og:image e sitemap costruiti su quell'URL non funzionerebbero. |
| `app/opengraph-image.tsx` (+ export `alt`) | Card 1200×630 della homepage: sfondo crema, cornice spessa scura, foto profilo (letta da `public/michele.jpg` e incorporata), "michele_" in mono, nome e tagline. Niente emoji (in `ImageResponse` richiedono configurazione extra, non valgono la complessità). |
| `app/articoli/[slug]/opengraph-image.tsx` | Card per articolo: titolo grande, data e tag in mono, branding "michele_" — generata a build per gli articoli statici esistenti. |

## Note

- Colori ripresi dai token di `app/globals.css` (crema/foreground/primary)
  come valori esadecimali: dentro `ImageResponse` non c'è Tailwind.
- Font: si parte col default incorporato di `ImageResponse`; se in
  verifica la resa tipografica non convince, si caricano i TTF di Geist
  via `readFile` (come da documentazione Next 16).
- Twitter/X usa `og:image` come fallback: non serve un `twitter-image`
  separato.
- Effetto collaterale positivo: anche la sitemap smette di puntare al
  dominio fantasma.

## Verifica

- `npm run build` + `npm run lint`.
- Aprire `/opengraph-image` e `/articoli/benvenuto/opengraph-image` in
  locale e controllare la resa visiva delle due card.
- Verificare nei meta tag della homepage che `og:image` punti all'URL
  Vercel.
- Dopo il deploy: test reale con un validatore di anteprime (es.
  opengraph.xyz) sull'URL pubblico.
