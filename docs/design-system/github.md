repo: hamikeck/sito-personale
branch: main

## Last sync
date: 2026-10-18T15:11:10Z

### Updated in this project
- Token colore/raggi/ombre da app/globals.css
- Componenti ui, site, blog, home ricostruiti
- Foto, screenshot progetti e copertina copiati in assets/
- UI kit del sito (Home, Progetti, Articoli, Articolo, 404)

## Screen map
| Screen | Repo files |
|---|---|
| tokens/*.css | app/globals.css, app/layout.tsx |
| components/ui/* | components/ui/button.tsx, badge.tsx, card.tsx, separator.tsx |
| components/site/* | components/site/*.tsx, lib/site.ts |
| components/blog/* | components/blog/*.tsx |
| components/home/* | components/home/hero.tsx, sezione-contatti.tsx |
| ui_kits/sito/index.html (Home) | app/page.tsx, components/home/*.tsx |
| ui_kits/sito (Progetti) | app/progetti/page.tsx, content/progetti.ts |
| ui_kits/sito (Articoli/Articolo) | app/articoli/page.tsx, app/articoli/[slug]/page.tsx, content/articoli/*.mdx |
| ui_kits/sito (404) | app/not-found.tsx |
