# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Progetto

Sito web portfolio personale. Stack: Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, shadcn/ui.

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

## Architettura e convenzioni non ovvie

- **Next.js 16 ha breaking changes** rispetto ai dati di training: prima di scrivere codice consulta la documentazione inclusa in `node_modules/next/dist/docs/` (vedi AGENTS.md).
- **Tailwind v4 non ha `tailwind.config`**: tutta la configurazione del tema vive in `app/globals.css` tramite `@theme inline` e variabili CSS. I token di design (colori, font, radius) si modificano lì, non in un file JS.
- **shadcn/ui usa Base UI, non Radix**: lo stile configurato è `base-nova` (vedi `components.json`) e le primitive vengono da `@base-ui/react`. Gli esempi shadcn basati su Radix non sono direttamente applicabili. Icone: `lucide-react`.
- **Dark mode** basata su classe, senza theme provider: custom variant `@custom-variant dark (&:is(.dark *))` in `globals.css`; uno script inline in `app/layout.tsx` applica `.dark` a `<html>` al caricamento (localStorage o `prefers-color-scheme`) e `components/site/theme-toggle.tsx` la commuta salvando la scelta in `localStorage("theme")`.
- Alias di import: `@/*` punta alla root del progetto (`@/components`, `@/lib/utils`, `@/components/ui`, `@/hooks` — definiti in `components.json` e `tsconfig.json`).
- `lib/utils.ts` espone `cn()` (clsx + tailwind-merge) per comporre classi nei componenti.
