# Struttura del sito portfolio — Design

**Data:** 2026-07-08
**Stato:** approvato a voce, in attesa di revisione del documento

## Visione

Uno spazio personale che cresce insieme a Michele: oggi vetrina dei siti realizzati
per attività locali e blog (tech + esperienze personali), domani anche casa del
percorso raccontato su YouTube e di qualunque nuovo progetto o apprendimento.
Pubblico misto: persone che lo seguono e potenziali clienti. Il sito deve fare
effetto subito e portare contatti.

## Decisioni prese

| Tema | Decisione |
|---|---|
| Architettura | One-page + blog: homepage a sezioni, blog su pagine dedicate |
| Contenuti blog | File MDX nel repo (`content/articoli/`), niente CMS |
| Progetti | Card immediate con screenshot e link al sito live, senza case study |
| YouTube | Canale non ancora attivo: sezione "Percorso" come placeholder, predisposta a ospitare i video in futuro |
| Contatti | Link diretti (email + social), nessun form/backend |
| Lingua | Solo italiano |
| Stile visivo | "Nerd chiaro" (neo-brutalist soft): base chiara calda, monospace, bordi netti, ombre a offset, accento arancione. Dark mode come opzione |
| Ordine sezioni | Progetti subito dopo l'hero **per ora**: da rivedere quando usciranno i primi video (vedi "Requisito di riordinabilità") |

## Pagine

- `/` — one-page con tutte le sezioni
- `/articoli` — indice del blog con filtro per tag
- `/articoli/[slug]` — singolo articolo renderizzato da MDX

## Homepage: sezioni dall'alto

1. **Nav sticky** — logo `michele_`, link anchor alle sezioni, link ad Articoli, toggle dark/light
2. **Hero** — avatar/foto, "Ciao, sono Michele 👋", tagline monospace, 2–3 righe di presentazione, due CTA (Progetti / Blog)
3. **Progetti** — griglia di card: screenshot, nome attività, una riga di descrizione, link diretto al sito live
4. **Articoli** — ultimi 2–3 articoli con data e tag, link all'indice completo
5. **Percorso** — placeholder onesto ("presto su YouTube") con invito a seguire i social; quando il canale parte ospiterà i video senza toccare il resto
6. **Contatti / footer** — blocco a contrasto scuro: email cliccabile + link social

### Requisito di riordinabilità

Ogni sezione della home è un componente indipendente e autocontenuto; riordinare
le sezioni deve equivalere a spostare una riga in `app/page.tsx`. Michele vuole
rivedere l'ordine (probabilmente Percorso più in alto) appena pubblicherà i primi
video.

## Sistema dei contenuti

- **Articoli**: `content/articoli/*.mdx` con frontmatter: `titolo`, `data`,
  `descrizione`, `tag` (lista libera: oggi tech/vita, estendibile), `bozza`
  (esclusa da indice e home). Pubblicare = aggiungere un file e fare deploy.
- **Progetti**: `content/progetti.ts`, array tipizzato con `nome`, `descrizione`,
  `url`, `screenshot` (immagini in `public/progetti/`).
- **Rendering MDX**: supporto ufficiale Next.js. **Vincolo**: verificare la
  documentazione di Next 16 in `node_modules/next/dist/docs/` prima di scegliere
  e scrivere l'integrazione (breaking changes rispetto ai dati di training).

## Design system

- **Token Tailwind v4** in `app/globals.css` (`@theme` + variabili CSS):
  - sfondo caldo `#f4f2ec`, inchiostro `#22201a`, accento `#e05d38`, secondario ambra `#f0b35e`
  - variante dark calda (marrone scuro, non nero freddo) attivata dalla classe `.dark`
- **Firma neo-brutalist soft**: bordi ~1.5px, ombre piene a offset (es. `3px 3px 0`),
  angoli arrotondati generosi; applicata a card, bottoni, badge.
- **Font** via `next/font`: sans moderno ad alta leggibilità per i testi (gli
  articoli sono il cuore del sito), monospace per i dettagli nerd (logo, tag,
  date, etichette `##` delle sezioni).
- **Dark mode**: toggle con classe `.dark` sull'elemento radice (custom variant già
  presente in `globals.css`), preferenza persistita, senza flash al caricamento
  (script inline o libreria dedicata — scelta in fase di piano).
- **Componenti**: primitive shadcn/ui (stile base-nova, Base UI) ristilizzate dai
  token + componenti propri: `Header`, `Hero`, `ProjectCard`, `ArticleCard`,
  `SectionHeading`, `Footer`, `ThemeToggle`.

## SEO e meta

- Metadata API di Next per titoli/descrizioni per pagina e per articolo
- Sitemap e favicon coerente con il logo
- Open Graph di base (immagini OG dedicate: rimandate, non in questo scope)

## Fuori scope (esplicitamente rimandato)

- Integrazione YouTube (feed/video) — si attiva quando il canale pubblica
- Case study dei progetti — solo se arriveranno progetti più grandi
- Form di contatto, newsletter, inglese, immagini OG generate

## Verifica

Non esistono test nel progetto: la verifica è `npm run build` + `npm run lint`,
più controllo visivo del sito in dev (light e dark, mobile e desktop).

## Riferimenti visivi

I mockup approvati durante il brainstorming sono in
`.superpowers/brainstorm/56645-1783523859/content/` (stile E in
`visual-style-v2.html`, wireframe della home in `home-layout.html`).
