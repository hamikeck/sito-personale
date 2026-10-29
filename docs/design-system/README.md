# michele_ — Design System

Personal brand di **Michele Cacciapuoti**, sedicenne di Napoli che costruisce: siti per attività locali, app (come quella per le interrogazioni della sua classe), sistemi per organizzarsi. Il brand vive su due superfici:

1. **Sito personale con blog** — michelecacciapuoti.it (oggi online su https://sito-personale-five.vercel.app). Home a sezioni, portfolio siti, blog MDX, 404. È la **fonte di verità** per colori, font e componenti.
2. **Canale YouTube** — https://www.youtube.com/@michele-cacciapuoti. Format "dal punto di vista di un sedicenne" (tech, IA, produttività, uso consapevole del telefono). Video a camera fissa + riprese dall'alto della scrivania con l'iPhone. Serve: miniature, banner, sovraimpressioni.

Le grafiche video finora usavano lime `#D7FF3A` + Inter; questo sistema le converte alla palette del sito (terracotta al posto del lime, Geist al posto di Inter) per un'identità unica.

## Fonti

- **GitHub:** https://github.com/hamikeck/sito-personale (branch `main`) — Next.js 16, React 19, Tailwind v4, shadcn/ui (stile `base-nova`, primitive Base UI), lucide-react. Token in `app/globals.css`; componenti in `components/{ui,site,blog,home}`; contenuti in `content/`. Vale la pena esplorare il repo (in particolare `CLAUDE.md`, `app/globals.css`, `components/`) per ricostruzioni più fedeli.
- **Upload:** `uploads/miniatura-1008.jpg` (miniatura con lime, ora `assets/youtube/miniatura-esempio-legacy.jpg`), `uploads/banner-2048x1152.png` (banner lime + font condensato, ora `assets/youtube/banner-legacy.png`), `uploads/IMG_1343.jpg` (ritratto, ora `assets/michele-ritratto.jpg`).

---

## CONTENT FUNDAMENTALS

**Lingua:** italiano. **Persona:** prima persona singolare, Michele parla direttamente ("A 16 anni creo siti web…", "Scrivimi."). Al lettore dà del **tu** ("Se hai un'attività e ti serve un sito, sei nel posto giusto"). Nei post apre con un saluto ("Ciao!", "Salve a tutti") e chiude informale ("A presto!").

**Tono:** caldo, personale, onesto e un po' umile ("Premetto che non sono un esperto…"). Posizionamento "builder & storyteller": il sito è un **diario pubblico di crescita** — ogni sito consegnato, ogni esperimento, ogni cosa imparata. Mai corporate, mai hype.

**Casing:** sentence case ovunque ("Siti che ho realizzato", "Ultime cose che ho scritto"). Il logo e i link mono sono **tutto minuscolo** ("michele_", "→ tutti gli articoli", "visita il sito", filtro "tutti"). Maiuscolo solo per etichette brevi ("ULTIMO", "PAGINA 16", "TECH · SPORT · VITA DA STUDENTE").

**Segni tipografici ricorrenti:**
- Etichette markdown: `## Progetti`, `## Contatti`, `## frase chiave`.
- Frecce come link/azioni: `→ vai al canale`, `← tutti gli articoli`, `Guarda i progetti ↓`, `visita il sito ↗`.
- Separatore puntato per i metadati: `5 agosto 2026 · 8 min · tecnologia · scuola`.
- Footer autoironico: `© 2026 michele_ · fatto con Next.js e caffè`.

**Emoji:** pochissime e solo a fine titolo di sezione, una per volta: 👋 (hero), 🎬 (video), ✉️ (contatti). Mai nel corpo, mai nelle grafiche video.

**Esempi verbatim dal sito:**
- "Ciao, sono Michele 👋" / "A 16 anni creo siti web e racconto le mie passioni e la mia crescita"
- "Hai un'attività e ti serve un sito? O vuoi solo dire ciao? Scrivimi."
- "Questa pagina non esiste (o non esiste più). Nessun problema: da qui puoi ripartire."
- "Il mio diario a cielo aperto" (banner YouTube)

**Video:** pochissimo testo sullo schermo. Miniature: 0–3 parole. Sovraimpressioni: nome app + un dettaglio mono; frasi chiave brevi e dichiarative con una parte evidenziata.

---

## VISUAL FOUNDATIONS

**Vibe:** "nerd chiaro" / soft-brutalist. Carta crema calda, inchiostro marrone-nero, un solo accento caldo (terracotta), monospace per i dettagli. Sembra un quaderno ordinato di uno che programma.

**Colori** (`tokens/colors.css`): primary terracotta `#E25D39`, secondary ambra `#F1B967`, sfondo crema `#F3F2EB` (light) / marrone scuro caldo `#221E17` (dark, "mai nero freddo"), card bianca / `#2D2920`, muted `#E9E6DC` / `#6B6658`, bordi = colore del testo (`#22201A`, in dark `#E8E3D7`). Gli stessi nomi semantici (`--background`, `--primary`, …) vengono ridefiniti dalla classe `.dark`. Ambra si usa per l'etichetta "ULTIMO", per "## Contatti" su fondo scuro e per i fallback copertina; terracotta per CTA, link mono, etichette `##`, Play.

**Tipografia** (`tokens/typography.css`): **Geist** per tutto il testo, titoli sempre **800 extrabold** con tracking -0.025em (3xl 30px per sezioni, 4xl/5xl per H1). **Geist Mono** per logo, etichette `##`, metadati, link-freccia, sottotitolo hero, 404. Corpo 16/24 in muted-foreground. Nessun serif, nessun font decorativo (il corsivo "a mano" del vecchio banner è sostituito da terracotta + sottolineatura).

**Bordi e ombre:** firma del brand. Bordo **2px** a inchiostro su card, pulsanti, immagini, header (border-bottom) e separatori di sezione (border-top). Ombra **piena e sfalsata, senza blur**: `--shadow-brut` 3px 3px, `--shadow-brut-sm` 2px 2px; 12px nelle immagini OG, ~10px nei frame video. In dark mode l'ombra diventa crema (segue `--foreground`). Nessuna ombra morbida, nessun inner shadow.

**Raggi:** `--radius` 1rem. Card/immagini usano `rounded-2xl` = 1.8rem (28.8px); pulsanti CTA, social, badge e filtri sono **pillole** (`9999px`). Raggi minori (sm/md/lg) solo per varianti shadcn base.

**Card:** fondo `--card` (bianco), bordo 2px, radius-2xl, shadow-brut, `overflow:hidden`; l'immagine sta in alto separata da un `border-bottom` 2px; testo con padding 16px. Nessuna card a bordo colorato.

**Layout:** colonna centrale `max-width: 56rem` (articolo 42rem), padding laterale 16px, sezioni con `py-16` (64px) separate da `border-top: 2px`. Header sticky con fondo crema al 90% + `backdrop-blur` (unico uso di trasparenza/blur sul sito). La sezione Contatti inverte i colori (fondo inchiostro, testo crema) e chiude ogni pagina.

**Sfondi:** tinta piatta, niente gradienti, niente pattern sul sito. Immagini sempre incorniciate (bordo + ombra). Nel canale: righe di quaderno sottili e margine terracotta (banner, schermata finale).

**Animazioni:** minime, solo `transition-transform` ~150ms ease. **Hover:** card e social si **sollevano** (-4px / -2px), il Play si ingrandisce (scale 1.1), la freccia ↗ scivola in diagonale, i link nav diventano terracotta, i link mono si sottolineano, i pulsanti primary passano a primary/80, gli outline a muted. **Press:** `translateY(1px)`. Focus: outline 2px `--ring` con offset 4px. Nessun bounce, nessun fade d'ingresso.

**Immagini:** foto reali, calde, non filtrate (ritratto, screenshot dei siti 8:5). Copertine senza immagine = fallback tipografico (titolo extrabold su terracotta o ambra).

**YouTube — leggibilità sopra il video:** il testo non va mai nudo sul video. Si usano card scure semi-opache (`--overlay-surface` 88%, `-strong` 96%) con bordo crema 4px e blur dietro, oppure contorno inchiostro + ombra piena (simbolo gigante delle miniature). Scala ×3 circa rispetto al web: bordi 4–8px, ombre 8–14px, radius ~40px.

**Miniature 1920×1080:** scrivania dall'alto, telefono al centro, un simbolo gigante (es. "?") crema con contorno e ombra inchiostro, icone vere delle app su tessere crema, fascia terracotta diagonale in un angolo, pochissimo testo.

---

## ICONOGRAPHY

- **Icone UI:** il sito usa **lucide-react** (stroke 2, 24px, linecap round) e solo 4 glifi: `Moon`, `Sun` (toggle tema), `ArrowUpRight` (card progetto), `Play` (player, riempito). Qui sono riprodotti dal set Lucide nel componente `Icon` (+ `lock` per le miniature). Se servono altre icone, usare Lucide da CDN (https://unpkg.com/lucide-static) con lo stesso stroke.
- **Loghi social:** SVG inline da **Simple Icons** (GitHub, LinkedIn, Instagram, YouTube) in `currentColor`, in `SocialIcon`. Lucide non ha icone brand.
- **Unicode come icone:** frecce `→ ← ↓ ↗` nel testo dei link e delle CTA; `·` come separatore; `_` come cursore del logo.
- **Emoji:** solo 👋 🎬 ✉️ a fine titolo (vedi Content).
- **Favicon:** `assets/icon.svg` — "m_" mono su tessera crema con bordo inchiostro.
- **YouTube:** icone **vere** delle app (PNG ufficiali) posate su `AppTile`. Non disegnarle: vanno fornite.

## Logo

Non esiste un marchio grafico: il logo è il **wordmark testuale `michele_`** (Geist Mono bold, trattino basso in primary come cursore) — componente `Logo`. Più il favicon `m_`.

---

## Index

- `styles.css` — entry point (solo `@import`): `tokens/fonts.css` (Geist + Geist Mono woff2 locali in `fonts/`), `colors.css`, `typography.css`, `spacing.css`, `base.css`.
- `guidelines/` — card di fondazione (Colors, Type, Spacing, Brand).
- `assets/` — `michele.jpg`, `michele-ritratto.jpg`, `icon.svg`, `progetti/*.jpg` (4 screenshot 8:5), `articoli/copertina-ia-sedicenne.jpg`, `youtube/*-legacy.*` (riferimenti vecchio stile, da non riusare).
- `components/` — vedi sotto.
- `ui_kits/sito/` — ricostruzione click-through del sito (Home, Progetti, Articoli, Articolo, 404).
- `ui_kits/youtube/` — miniatura, sequenza di sovraimpressioni, banner.
- `SKILL.md` — skill per Claude Code. `github.md` — associazione al repo.

## Components

Dal repo (`components/ui`, `site`, `blog`, `home`):
- **ui/** Button, Badge, Card (+ CardHeader, CardMeta, CardTitle, CardDescription), Separator, Icon
- **site/** Header, Logo, SectionHeading, SocialIcon, ThemeToggle, ProjectCard, ArticleCard, YouTubePlayer
- **blog/** CoverArticolo, CardInEvidenza, TagFilter
- **home/** Hero, SezioneContatti

YouTube (`components/youtube/…`):
- **thumbnail/** Thumbnail, AppTile
- **overlay/** AppCard, ChapterTitle, PillLabel
- **fullscreen/** KeyPhrase, EndScreen
- **banner/** ChannelBanner

### Intentional additions
- **Icon** — wrapper per i glifi Lucide (il sito importa `lucide-react`, non disponibile qui).
- **Logo** — nel sito il wordmark è inline nell'header/OG; estratto per riusarlo su YouTube.
- **TagFilter** — estratto da `elenco-articoli.tsx` (la logica di filtro resta nel kit).
- **Componenti YouTube** — richiesti esplicitamente; non esistono nel repo. Progettati sui token del sito.
- Le sezioni home Progetti/Articoli/Video vivono nel UI kit, non come componenti.
