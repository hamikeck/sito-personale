# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Progetto

Sito web portfolio personale di Michele: homepage a sezioni, portfolio siti realizzati e blog. Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, shadcn/ui.

Pagine: `/` (one-page a sezioni), `/articoli` (gallery blog con filtro tag), `/articoli/[slug]` (articolo MDX statico), `/progetti` (tutti i progetti), `app/not-found.tsx` (404 personalizzata). Stile visivo "nerd chiaro" (neo-brutalist soft): base chiara calda, monospace per i dettagli, bordi netti `border-2`, ombre a offset (`shadow-brut`, `shadow-brut-sm`), accento arancione.

## Deploy

Online su Vercel (https://sito-personale-five.vercel.app) con auto-deploy: ogni push su `main` pubblica il sito. **Chiedere conferma prima di pushare.** `siteUrl` in `lib/site.ts` punta all'URL Vercel finché non verrà acquistato il dominio definitivo (a quel punto: aggiornare siteUrl, aggiungere robots.ts, analytics, feed RSS).

## Workflow per nuove funzionalità

Quando l'utente chiede di sviluppare una nuova funzionalità o implementazione:

1. **Prima di scrivere codice**, crea un documento di progetto che descriva l'implementazione prevista: cosa verrà fatto, come verrà sviluppato, quali file/componenti saranno coinvolti.
2. Il documento va salvato nella cartella `/docs` con nome `YYYY-MM-DD-HH-mm-ss-nome-funzione.md`.
3. **Verifica sempre la data corrente** (es. con `date`) prima di creare il file, così da usare la data corretta nel nome.
4. Dopo aver creato il documento, **attendi la conferma esplicita dell'utente** prima di procedere con lo sviluppo.

## Comandi

- `npm run dev` — dev server su http://localhost:3000 (se la porta è occupata, un'altra istanza è già attiva: riusala o terminala)
- `npm run build` — build di produzione (usala come verifica: non ci sono test)
- `npm run lint` — ESLint (flat config, `eslint.config.mjs`)
- `npx shadcn@latest add <componente>` — aggiunge un componente shadcn/ui in `components/ui/`
- `node scripts/importa-articolo.mjs <percorso.zip>` — importa un articolo scritto fuori dal progetto (zip con `.md` + immagini): chiede lo slug, copia le immagini in `public/articoli/<slug>/`, riscrive i riferimenti e prepara l'header con `bozza: true`. Gli export da Notion sono zip annidati: passare lo zip interno.

## Sistema dei contenuti

- **Articoli**: un file MDX per articolo in `content/articoli/<slug>.mdx`; lo slug è il nome del file e definisce l'URL. Metadati in testa al file via `export const metadata`: `titolo`, `data` (ISO), `descrizione`, `tag[]`, `cover?` (path immagine), `bozza?` (se `true` l'articolo non compare sul sito). `minutiLettura` è calcolato a build time da `lib/articoli.ts`, non va scritto a mano. Immagini in `public/articoli/<slug>/`, referenziate con sintassi Markdown standard; `mdx-components.tsx` le rende con `next/image` e l'alt diventa didascalia. Pagine generate staticamente (`generateStaticParams` + `dynamicParams = false`). Se manca la `cover`, `components/blog/cover-articolo.tsx` genera un fallback tipografico deterministico dallo slug.
- **Progetti**: array tipizzato in `content/progetti.ts` (`nome`, `descrizione`, `url`, `screenshot`). **L'ordine dell'array decide tutto**: i primi 2 compaiono in homepage, `/progetti` li mostra tutti. Screenshot in `public/progetti/` come JPG ~1600px in proporzione 8:5.
- **Sezioni homepage**: componenti indipendenti in `components/home/`; riordinare le sezioni = spostare una riga in `app/page.tsx` (requisito voluto: l'ordine cambierà quando partirà il canale YouTube).

## Architettura e convenzioni non ovvie

- **Next.js 16 ha breaking changes** rispetto ai dati di training: prima di scrivere codice consulta la documentazione inclusa in `node_modules/next/dist/docs/` (vedi AGENTS.md).
- **Tailwind v4 non ha `tailwind.config`**: tutta la configurazione del tema vive in `app/globals.css` tramite `@theme inline` e variabili CSS. I token di design (colori, font, radius) si modificano lì, non in un file JS.
- **shadcn/ui usa Base UI, non Radix**: lo stile configurato è `base-nova` (vedi `components.json`) e le primitive vengono da `@base-ui/react`. Gli esempi shadcn basati su Radix non sono direttamente applicabili. Icone: `lucide-react` (che però **non include icone brand**: i loghi social sono SVG inline in `components/site/social-icon.tsx`).
- **Dark mode** basata su classe, senza theme provider: custom variant `@custom-variant dark (&:is(.dark *))` in `globals.css`; uno script inline in `app/layout.tsx` applica `.dark` a `<html>` al caricamento (localStorage o `prefers-color-scheme`) e `components/site/theme-toggle.tsx` la commuta salvando la scelta in `localStorage("theme")`.
- **Immagini OG generate dal codice** con `ImageResponse` di `next/og`: `app/opengraph-image.tsx` (homepage) e `app/articoli/[slug]/opengraph-image.tsx` (per articolo). Dentro `ImageResponse` non c'è Tailwind: i colori dei token vanno ripetuti come esadecimali.
- Alias di import: `@/*` punta alla root del progetto (`@/components`, `@/lib/utils`, `@/components/ui`, `@/hooks` — definiti in `components.json` e `tsconfig.json`).
- `lib/utils.ts` espone `cn()` (clsx + tailwind-merge) per comporre classi nei componenti.

## Verifica

Non ci sono test: la verifica è `npm run build` + `npm run lint`, più controllo visivo in dev (light e dark, mobile e desktop). Le nuove pagine vanno aggiunte a `app/sitemap.ts`.
