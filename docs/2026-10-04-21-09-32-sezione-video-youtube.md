# Sezione video YouTube

## Contesto

Il canale è partito il 2026-09-27 con un video sull'AI ("Vivere nell'era dell'AI: il punto di
vista di un sedicenne", id `lQXLUlokGOA`), e da lì la cadenza prevista è di un video a settimana a
camera fissa. Sul sito però c'è ancora il box "Presto anche su YouTube 🎬"
(`components/home/sezione-percorso.tsx`), che ormai non è più vero.

Vincoli presi dalla wiki di Michele:
- la scuola viene prima, quindi il sito **non deve chiedere lavoro in più a ogni video**;
- "un canale, un blog, nient'altro": il sito collega i due, non diventa un terzo progetto;
- per ora c'è **un solo video**, quindi niente pagine che sembrerebbero vuote.

## Cosa si fa

### 1. Sezione "Video" automatica in homepage (sostituisce "Percorso")

- Nuovo file `lib/youtube.ts` che legge il **feed RSS pubblico del canale**
  (`https://www.youtube.com/feeds/videos.xml?channel_id=UCbm4oVUReh7gwwVqxzJQEMg`): nessuna
  chiave API, nessun account. Estrae id, titolo e data degli ultimi video. Il feed è XML
  semplice, quindi basta un parsing minimo senza aggiungere librerie.
- Revalidate ogni ora: Next mette in cache il risultato e lo aggiorna da solo. Il progetto non
  usa `cacheComponents`, quindi si segue il modello "previous" (`fetch` con
  `next: { revalidate }`); prima di scrivere il codice verifico l'API esatta nella guida
  `caching-without-cache-components` dentro `node_modules/next/dist/docs/`.
  **Risultato: Michele pubblica su YouTube e al massimo entro un'ora il video è sul sito, senza
  push.** Se poi cambia titolo o miniatura, anche quelli si aggiornano da soli.
- Se il feed non risponde, la sezione mostra un semplice invito al canale invece di rompere la
  build o la pagina.
- `components/home/sezione-percorso.tsx` → `components/home/sezione-video.tsx` (id `#video`).
  Il layout si adatta al numero di video:
  - **1 video** → in evidenza, grande;
  - **2-3 video** → l'ultimo grande e gli altri in griglia accanto o sotto.
  Sotto, pulsante "Vai al canale".
- La voce di menu nell'header punta a `#video` se oggi punta a `#percorso`.

### 2. Player leggero (`components/site/youtube-player.tsx`)

Un iframe di YouTube pesa centinaia di KB di JavaScript anche se nessuno lo guarda. Mostro
quindi solo la **miniatura** (`i.ytimg.com/vi/<id>/hqdefault.jpg`) con un pulsante play nello
stile del sito (bordo netto, ombra a offset). L'iframe vero, da `youtube-nocookie.com`, si carica
**solo al click**. È un piccolo client component; il resto della sezione resta server.

### 3. Video ↔ articolo

- Componente MDX `<YouTube id="..." />` registrato in `mdx-components.tsx`, così un video si può
  inserire in qualsiasi articolo.
- Nell'articolo sull'AI aggiungo il video in cima con una riga tipo "Ne ho parlato anche in
  video". Il video cita l'articolo, quindi il collegamento va in entrambe le direzioni.
  **La frase la decide Michele.**

### 4. Hero

- Aggiungo YouTube come terzo pulsante ("Guarda i video") accanto a progetti e blog.
- **Testo dell'hero: decide Michele.** Oggi l'hero chiude con "Se hai un'attività e ti serve un
  sito, sei nel posto giusto", che parla ai clienti locali, mentre il canale punta a un pubblico
  nazionale di persone in crescita. Non tocco il testo; segnalo solo questa differenza di
  pubblico.

## Cosa NON si fa adesso (e quando farlo)

- **Pagina `/video`** → quando i video saranno 4-5. Il codice di `lib/youtube.ts` sarà già
  pronto: basterà una pagina che lo usa, più la voce in `app/sitemap.ts`.
- **Shorts separati, dati strutturati SEO `VideoObject`** → più avanti, se servono.
- **Riordino della homepage** → per ora la sezione video prende il posto di "Percorso". Spostarla
  più in alto è una riga in `app/page.tsx`, da decidere guardando il risultato.

## File coinvolti

| File | Modifica |
|---|---|
| `lib/youtube.ts` | nuovo: lettura e parsing del feed |
| `lib/site.ts` | id del canale accanto all'URL |
| `components/site/youtube-player.tsx` | nuovo: player leggero (client) |
| `components/home/sezione-video.tsx` | nuovo, sostituisce `sezione-percorso.tsx` |
| `app/page.tsx` | import della nuova sezione |
| `components/site/header.tsx` | ancora del menu, se serve |
| `components/home/hero.tsx` | pulsante YouTube |
| `mdx-components.tsx` | registra `<YouTube />` |
| `content/articoli/intelligenza-artificiale-sedicenne.mdx` | embed del video |
| `next.config.ts` | `images.remotePatterns` per `i.ytimg.com`, se uso `next/image` |

## Verifica

`npm run build` + `npm run lint`, poi controllo in dev: light/dark, mobile/desktop, click sul
player, comportamento con il feed irraggiungibile (simulato).

Branch: `youtube`, creato da `main` (il branch `chi-sono` resta fermo finché il testo non è
pronto). Push solo dopo la conferma di Michele.
