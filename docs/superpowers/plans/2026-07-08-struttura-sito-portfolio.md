# Struttura sito portfolio — Piano di implementazione

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Costruire il sito portfolio one-page + blog descritto in `docs/2026-07-08-struttura-sito-portfolio.md`: homepage a sezioni (hero, progetti, articoli, percorso, contatti), blog MDX su `/articoli`, stile "nerd chiaro" neo-brutalist soft con dark mode.

**Architecture:** One-page composta da componenti sezione indipendenti in `components/home/` (riordinabili spostando una riga in `app/page.tsx`). Articoli come file MDX in `content/articoli/` con metadata esportati, letti da `lib/articoli.ts` (fs + dynamic import). Progetti come dati tipizzati in `content/progetti.ts`. Design token Tailwind v4 in `app/globals.css`.

**Tech Stack:** Next.js 16 (App Router, Turbopack), React 19, TypeScript, Tailwind CSS v4, shadcn/ui (base-nova, Base UI), `@next/mdx`, `@tailwindcss/typography`, lucide-react, Geist + Geist Mono via `next/font`.

## Global Constraints

- **Next 16 ha breaking changes**: in caso di dubbio su un'API consultare `node_modules/next/dist/docs/` prima di scrivere codice (AGENTS.md). I pattern MDX/params di questo piano vengono da `01-app/02-guides/mdx.md` (in particolare: `params` è una `Promise` e va atteso con `await`).
- **Tailwind v4**: niente `tailwind.config`; tutti i token in `app/globals.css` via `@theme inline` e variabili CSS.
- **shadcn/ui usa Base UI (stile base-nova), non Radix.**
- **Lingua del sito: italiano.** Copy, slug, nomi di sezione in italiano.
- **Firma visiva "nerd chiaro"**: bordi `border-2 border-foreground`, ombre piene `shadow-brut` (3px 3px 0) / `shadow-brut-sm` (2px 2px 0), angoli `rounded-2xl`, dettagli in monospace (`font-mono`), accento arancione (`primary`).
- **Riordinabilità**: ogni sezione della home è un componente autonomo che riceve al massimo dati, mai stato condiviso; `app/page.tsx` è solo composizione.
- **Verifica**: non esistono test nel progetto. Ogni task si verifica con `npm run build` (deve terminare senza errori) e, dove indicato, controllo visivo su `npm run dev`. Prima del commit finale: `npm run lint`.
- **Commit**: `git add` solo dei file elencati nel task (il repo ha modifiche pre-esistenti non correlate da NON committare: `.claude/settings.local.json`, `CLAUDE.md`, `package.json`/`package-lock.json` vanno committati solo nei task che installano dipendenze). Ogni messaggio di commit termina con il trailer `Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>`.

## Dati da confermare con l'utente (non bloccanti)

- **Dominio**: il piano usa `https://michelecacciapuoti.it` in `lib/site.ts`. Chiedere conferma quando si arriva al deploy; è un valore in un solo file.
- **Social**: l'array `socials` in `lib/site.ts` parte vuoto (il rendering lo gestisce). L'utente aggiungerà i propri profili (Instagram, GitHub, YouTube…).
- **Progetti reali**: `content/progetti.ts` parte con un progetto di esempio con screenshot segnaposto SVG; l'utente lo sostituirà con i progetti veri.
- **Foto/avatar**: l'hero usa un riquadro gradiente; si sostituirà con una foto quando disponibile.

---

### Task 1: Design token "nerd chiaro" in globals.css

**Files:**
- Modify: `app/globals.css`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: variabili tema (`--background`, `--foreground`, `--primary`, `--secondary`, `--muted`, `--border`, …) con palette calda light/dark; utility Tailwind `shadow-brut` e `shadow-brut-sm`; `font-sans` → Geist, `font-mono` → Geist Mono. Tutti i task successivi usano queste utility.

- [ ] **Step 1: Sostituire i blocchi `:root` e `.dark` in `app/globals.css`**

Sostituire integralmente i blocchi `:root { … }` e `.dark { … }` esistenti con:

```css
:root {
  /* base chiara calda — carta #f4f2ec, inchiostro #22201a */
  --background: oklch(0.9601 0.0092 96);
  --foreground: oklch(0.2439 0.0111 92);
  --card: oklch(1 0 0);
  --card-foreground: oklch(0.2439 0.0111 92);
  --popover: oklch(1 0 0);
  --popover-foreground: oklch(0.2439 0.0111 92);
  /* accento arancione #e05d38 */
  --primary: oklch(0.6432 0.1741 36);
  --primary-foreground: oklch(0.985 0.005 96);
  /* secondario ambra #f0b35e */
  --secondary: oklch(0.8194 0.1183 75);
  --secondary-foreground: oklch(0.2439 0.0111 92);
  --muted: oklch(0.9245 0.0132 92);
  --muted-foreground: oklch(0.5104 0.0223 89);
  --accent: oklch(0.9245 0.0132 92);
  --accent-foreground: oklch(0.2439 0.0111 92);
  --destructive: oklch(0.577 0.245 27.325);
  /* bordi a inchiostro: firma neo-brutalist */
  --border: oklch(0.2439 0.0111 92);
  --input: oklch(0.2439 0.0111 92);
  --ring: oklch(0.6432 0.1741 36);
  --chart-1: oklch(0.6432 0.1741 36);
  --chart-2: oklch(0.8194 0.1183 75);
  --chart-3: oklch(0.5104 0.0223 89);
  --chart-4: oklch(0.2439 0.0111 92);
  --chart-5: oklch(0.9245 0.0132 92);
  --radius: 1rem;
  --sidebar: oklch(0.9601 0.0092 96);
  --sidebar-foreground: oklch(0.2439 0.0111 92);
  --sidebar-primary: oklch(0.6432 0.1741 36);
  --sidebar-primary-foreground: oklch(0.985 0.005 96);
  --sidebar-accent: oklch(0.9245 0.0132 92);
  --sidebar-accent-foreground: oklch(0.2439 0.0111 92);
  --sidebar-border: oklch(0.2439 0.0111 92);
  --sidebar-ring: oklch(0.6432 0.1741 36);
}

.dark {
  /* dark caldo — marrone scuro, non nero freddo */
  --background: oklch(0.2192 0.0125 75);
  --foreground: oklch(0.9245 0.0146 85);
  --card: oklch(0.2685 0.0148 75);
  --card-foreground: oklch(0.9245 0.0146 85);
  --popover: oklch(0.2685 0.0148 75);
  --popover-foreground: oklch(0.9245 0.0146 85);
  --primary: oklch(0.7051 0.1637 40);
  --primary-foreground: oklch(0.2192 0.0125 75);
  --secondary: oklch(0.8194 0.1183 75);
  --secondary-foreground: oklch(0.2192 0.0125 75);
  --muted: oklch(0.3128 0.0158 75);
  --muted-foreground: oklch(0.7042 0.0221 80);
  --accent: oklch(0.3128 0.0158 75);
  --accent-foreground: oklch(0.9245 0.0146 85);
  --destructive: oklch(0.704 0.191 22.216);
  --border: oklch(0.9245 0.0146 85);
  --input: oklch(0.9245 0.0146 85);
  --ring: oklch(0.7051 0.1637 40);
  --chart-1: oklch(0.7051 0.1637 40);
  --chart-2: oklch(0.8194 0.1183 75);
  --chart-3: oklch(0.7042 0.0221 80);
  --chart-4: oklch(0.9245 0.0146 85);
  --chart-5: oklch(0.3128 0.0158 75);
  --sidebar: oklch(0.2192 0.0125 75);
  --sidebar-foreground: oklch(0.9245 0.0146 85);
  --sidebar-primary: oklch(0.7051 0.1637 40);
  --sidebar-primary-foreground: oklch(0.2192 0.0125 75);
  --sidebar-accent: oklch(0.3128 0.0158 75);
  --sidebar-accent-foreground: oklch(0.9245 0.0146 85);
  --sidebar-border: oklch(0.9245 0.0146 85);
  --sidebar-ring: oklch(0.7051 0.1637 40);
}
```

- [ ] **Step 2: Correggere il mapping dei font e aggiungere le ombre nel blocco `@theme inline`**

Nel blocco `@theme inline` di `app/globals.css`, sostituire le due righe dei font:

```css
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
```

(prima era `--font-sans: var(--font-sans)`, un riferimento circolare: il layout definisce `--font-geist-sans`.)

E aggiungere in fondo allo stesso blocco `@theme inline`, prima della chiusura:

```css
  --shadow-brut: 3px 3px 0 0 var(--color-foreground);
  --shadow-brut-sm: 2px 2px 0 0 var(--color-foreground);
```

- [ ] **Step 3: Aggiornare `app/layout.tsx` (lingua e scroll morbido per gli anchor)**

Sostituire il contenuto con:

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michele Cacciapuoti",
  description: "Spazio personale di Michele Cacciapuoti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
```

(I metadata definitivi con `metadataBase` e template arrivano nel Task 8, che crea `lib/site.ts`.)

- [ ] **Step 4: Verificare la build**

Run: `npm run build`
Expected: build completata senza errori.

- [ ] **Step 5: Commit**

```bash
git add app/globals.css app/layout.tsx
git commit -m "feat: design token nerd chiaro (palette calda, ombre brut, lang it)" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 2: Dark mode senza flash + ThemeToggle

**Files:**
- Create: `components/site/theme-toggle.tsx`
- Modify: `app/layout.tsx`

**Interfaces:**
- Produces: `<ThemeToggle />` (client component, nessuna prop) esportato da `@/components/site/theme-toggle`, usato dall'Header nel Task 6. Tema attivato dalla classe `.dark` su `<html>`, persistito in `localStorage` con chiave `theme` (valori `"light"` | `"dark"`).

- [ ] **Step 1: Aggiungere lo script anti-flash in `app/layout.tsx`**

Nel JSX di `RootLayout`, aggiungere `suppressHydrationWarning` all'elemento `<html>` e inserire lo script come primo figlio di `<body>`:

```tsx
    <html
      lang="it"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("theme");if(t==="dark"||(!t&&matchMedia("(prefers-color-scheme: dark)").matches))document.documentElement.classList.add("dark")}catch(e){}`,
          }}
        />
        {children}
      </body>
    </html>
```

- [ ] **Step 2: Creare `components/site/theme-toggle.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [dark, setDark] = useState<boolean | null>(null);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setDark(next);
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggle}
      aria-label={dark ? "Passa al tema chiaro" : "Passa al tema scuro"}
      className="rounded-full border-2 border-foreground shadow-brut-sm"
    >
      {dark === null ? (
        <Sun className="opacity-0" />
      ) : dark ? (
        <Sun />
      ) : (
        <Moon />
      )}
    </Button>
  );
}
```

(Lo stato parte `null` e si legge dal DOM al mount: evita mismatch di idratazione perché il server non conosce il tema.)

- [ ] **Step 3: Verifica visiva**

Run: `npm run dev` e aprire http://localhost:3000 (se la porta è occupata, riusare l'istanza attiva). In console del browser eseguire `document.documentElement.classList.add('dark')` e verificare che la pagina di default passi ai colori scuri caldi. Ricaricare con `localStorage.theme = 'dark'` impostato e verificare che NON ci sia flash chiaro.
Expected: colori dark caldi, nessun flash.

- [ ] **Step 4: Verificare la build**

Run: `npm run build`
Expected: build completata senza errori.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx components/site/theme-toggle.tsx
git commit -m "feat: dark mode con toggle e script anti-flash" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 3: Dati di sito e progetti

**Files:**
- Create: `lib/site.ts`
- Create: `content/progetti.ts`
- Create: `public/progetti/esempio.svg`

**Interfaces:**
- Produces:
  - `lib/site.ts`: `siteUrl: string`, `email: string`, `socials: { nome: string; url: string }[]`
  - `content/progetti.ts`: `type Progetto = { nome: string; descrizione: string; url: string; screenshot: string }` e `progetti: Progetto[]`
  - Usati da Task 6 (sezioni home) e Task 8 (SEO).

- [ ] **Step 1: Creare `lib/site.ts`**

```ts
// Dominio da confermare prima del deploy.
export const siteUrl = "https://michelecacciapuoti.it";

export const email = "michelecacciapuotipiccolo@gmail.com";

// Aggiungere qui i profili social man mano (es. { nome: "GitHub", url: "https://github.com/..." }).
export const socials: { nome: string; url: string }[] = [];
```

- [ ] **Step 2: Creare `public/progetti/esempio.svg`** (segnaposto per lo screenshot)

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
  <rect width="800" height="500" fill="#f0e8da"/>
  <rect x="40" y="40" width="720" height="60" rx="12" fill="#e8ddc9"/>
  <rect x="40" y="130" width="460" height="220" rx="12" fill="#e8ddc9"/>
  <rect x="530" y="130" width="230" height="220" rx="12" fill="#e05d38" opacity="0.35"/>
  <rect x="40" y="380" width="720" height="80" rx="12" fill="#e8ddc9"/>
  <text x="400" y="260" font-family="monospace" font-size="28" fill="#9a8a74" text-anchor="middle">screenshot in arrivo</text>
</svg>
```

- [ ] **Step 3: Creare `content/progetti.ts`**

```ts
export type Progetto = {
  nome: string;
  descrizione: string;
  url: string;
  /** percorso sotto /public, es. "/progetti/esempio.svg" */
  screenshot: string;
};

// Sostituire con i progetti reali (screenshot in public/progetti/).
export const progetti: Progetto[] = [
  {
    nome: "Progetto di esempio",
    descrizione: "Sito vetrina per un'attività locale",
    url: "https://example.com",
    screenshot: "/progetti/esempio.svg",
  },
];
```

- [ ] **Step 4: Verificare la build**

Run: `npm run build`
Expected: build completata senza errori.

- [ ] **Step 5: Commit**

```bash
git add lib/site.ts content/progetti.ts public/progetti/esempio.svg
git commit -m "feat: dati sito e progetti tipizzati" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 4: Setup MDX e libreria articoli

**Files:**
- Modify: `next.config.ts`
- Modify: `package.json` (via npm install)
- Create: `mdx-components.tsx` (root del progetto)
- Create: `content/articoli/benvenuto.mdx`
- Create: `lib/articoli.ts`

**Interfaces:**
- Produces:
  - Ogni articolo è `content/articoli/<slug>.mdx` con `export const metadata = { titolo, data, descrizione, tag, bozza? }`
  - `lib/articoli.ts`: `type ArticoloMeta = { slug: string; titolo: string; data: string; descrizione: string; tag: string[]; bozza?: boolean }`, `getArticoli(): Promise<ArticoloMeta[]>` (esclude bozze, ordina per data discendente), `formattaData(iso: string): string`
  - Usati da Task 5 (ArticleCard), Task 6 (sezione articoli), Task 7 (pagine blog), Task 8 (sitemap).

- [ ] **Step 1: Installare le dipendenze MDX**

Run: `npm install @next/mdx @mdx-js/loader @mdx-js/react @types/mdx`
Expected: installazione senza errori.

- [ ] **Step 2: Configurare `next.config.ts`**

Sostituire il contenuto con:

```ts
import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
```

- [ ] **Step 3: Creare `mdx-components.tsx` nella root del progetto**

Obbligatorio per `@next/mdx` con App Router (vedi `node_modules/next/dist/docs/01-app/02-guides/mdx.md`). Lo stile arriva dalle classi `prose` (Task 7), quindi qui basta il minimo:

```tsx
import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {};

export function useMDXComponents(): MDXComponents {
  return components;
}
```

- [ ] **Step 4: Creare il primo articolo `content/articoli/benvenuto.mdx`**

```mdx
export const metadata = {
  titolo: "Benvenuto nel mio spazio",
  data: "2026-07-08",
  descrizione:
    "Perché ho creato questo sito e cosa ci troverai: progetti, articoli e il mio percorso.",
  tag: ["vita"],
};

Ciao! Questo è il primo articolo del mio spazio personale.

Qui racconterò quello che costruisco e quello che imparo: i siti che realizzo
per le attività della mia zona, gli esperimenti tech e — presto — il percorso
che documenterò anche su YouTube.

## Perché un sito personale

Volevo un posto **mio**, libero dai formati dei social, che potesse crescere
insieme a me.

A presto!
```

- [ ] **Step 5: Creare `lib/articoli.ts`**

```ts
import { readdir } from "node:fs/promises";
import path from "node:path";

export type ArticoloMeta = {
  slug: string;
  titolo: string;
  data: string; // ISO: "YYYY-MM-DD"
  descrizione: string;
  tag: string[];
  bozza?: boolean;
};

export async function getArticoli(): Promise<ArticoloMeta[]> {
  const dir = path.join(process.cwd(), "content", "articoli");
  const file = (await readdir(dir)).filter((f) => f.endsWith(".mdx"));

  const articoli = await Promise.all(
    file.map(async (f) => {
      const slug = f.replace(/\.mdx$/, "");
      const { metadata } = await import(`@/content/articoli/${slug}.mdx`);
      return { slug, ...metadata } as ArticoloMeta;
    })
  );

  return articoli
    .filter((a) => !a.bozza)
    .sort((a, b) => b.data.localeCompare(a.data));
}

export function formattaData(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
```

- [ ] **Step 6: Verificare la build**

Run: `npm run build`
Expected: build completata senza errori (l'import dinamico `.mdx` compila; nessuna pagina lo usa ancora, va bene così).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json next.config.ts mdx-components.tsx content/articoli/benvenuto.mdx lib/articoli.ts
git commit -m "feat: setup MDX con @next/mdx e libreria articoli" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 5: Componenti condivisi (SectionHeading, ProjectCard, ArticleCard)

**Files:**
- Create: `components/site/section-heading.tsx`
- Create: `components/site/project-card.tsx`
- Create: `components/site/article-card.tsx`

**Interfaces:**
- Consumes: `Progetto` da `@/content/progetti`, `ArticoloMeta`/`formattaData` da `@/lib/articoli`, utility `cn` da `@/lib/utils`, token/utility del Task 1.
- Produces:
  - `<SectionHeading etichetta="Progetti" titolo="Siti che ho realizzato" />` (+ `className?`)
  - `<ProjectCard progetto={p} />` — card con screenshot, link esterno
  - `<ArticleCard articolo={a} />` — card cliccabile verso `/articoli/[slug]`

- [ ] **Step 1: Creare `components/site/section-heading.tsx`**

```tsx
import { cn } from "@/lib/utils";

export function SectionHeading({
  etichetta,
  titolo,
  className,
}: {
  etichetta: string;
  titolo: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-8", className)}>
      <p className="font-mono text-sm font-bold text-primary">## {etichetta}</p>
      <h2 className="mt-1 text-3xl font-extrabold tracking-tight">{titolo}</h2>
    </div>
  );
}
```

- [ ] **Step 2: Creare `components/site/project-card.tsx`**

```tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Progetto } from "@/content/progetti";

export function ProjectCard({ progetto }: { progetto: Progetto }) {
  return (
    <a
      href={progetto.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-brut transition-transform hover:-translate-y-1"
    >
      <div className="relative aspect-[8/5] border-b-2 border-foreground">
        <Image
          src={progetto.screenshot}
          alt={`Screenshot del sito ${progetto.nome}`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{progetto.nome}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {progetto.descrizione}
        </p>
        <p className="mt-2 inline-flex items-center gap-1 font-mono text-sm font-bold text-primary">
          visita il sito
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </a>
  );
}
```

- [ ] **Step 3: Creare `components/site/article-card.tsx`**

```tsx
import Link from "next/link";

import { formattaData, type ArticoloMeta } from "@/lib/articoli";

export function ArticleCard({ articolo }: { articolo: ArticoloMeta }) {
  return (
    <Link
      href={`/articoli/${articolo.slug}`}
      className="block rounded-2xl border-2 border-foreground bg-card p-4 shadow-brut transition-transform hover:-translate-y-1"
    >
      <p className="font-mono text-xs text-muted-foreground">
        {formattaData(articolo.data)} · {articolo.tag.join(" · ")}
      </p>
      <h3 className="mt-1 font-bold">{articolo.titolo}</h3>
      <p className="mt-1 text-sm text-muted-foreground">
        {articolo.descrizione}
      </p>
    </Link>
  );
}
```

- [ ] **Step 4: Verificare la build**

Run: `npm run build`
Expected: build completata senza errori.

- [ ] **Step 5: Commit**

```bash
git add components/site/section-heading.tsx components/site/project-card.tsx components/site/article-card.tsx
git commit -m "feat: componenti condivisi SectionHeading, ProjectCard, ArticleCard" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 6: Header, sezioni della home e composizione di page.tsx

**Files:**
- Create: `components/site/header.tsx`
- Create: `components/home/hero.tsx`
- Create: `components/home/sezione-progetti.tsx`
- Create: `components/home/sezione-articoli.tsx`
- Create: `components/home/sezione-percorso.tsx`
- Create: `components/home/sezione-contatti.tsx`
- Modify: `app/page.tsx` (sostituzione completa)

**Interfaces:**
- Consumes: `<ThemeToggle />` (Task 2), `progetti`/`email`/`socials` (Task 3), `getArticoli` (Task 4), `SectionHeading`/`ProjectCard`/`ArticleCard` (Task 5), `Button` da `@/components/ui/button`.
- Produces: sezioni con `id` per gli anchor: `progetti`, `articoli`, `percorso`, `contatti`. `app/page.tsx` è pura composizione: riordinare le sezioni = spostare una riga.

- [ ] **Step 1: Creare `components/site/header.tsx`**

```tsx
import Link from "next/link";

import { ThemeToggle } from "@/components/site/theme-toggle";

const voci = [
  { nome: "Progetti", href: "/#progetti" },
  { nome: "Articoli", href: "/articoli" },
  { nome: "Percorso", href: "/#percorso" },
  { nome: "Contatti", href: "/#contatti" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="font-mono text-lg font-bold">
          michele<span className="text-primary">_</span>
        </Link>
        <nav className="flex items-center gap-4">
          <ul className="hidden items-center gap-4 text-sm font-medium sm:flex">
            {voci.map((voce) => (
              <li key={voce.nome}>
                <Link href={voce.href} className="hover:text-primary">
                  {voce.nome}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
```

- [ ] **Step 2: Creare `components/home/hero.tsx`**

```tsx
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="flex items-center gap-5">
        {/* Sostituire con una foto quando disponibile */}
        <div className="size-16 shrink-0 rounded-2xl border-2 border-foreground bg-gradient-to-br from-secondary to-primary shadow-brut-sm sm:size-20" />
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ciao, sono Michele 👋
          </h1>
          <p className="font-mono text-lg text-primary sm:text-xl">
            builder &amp; storyteller
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-xl text-muted-foreground">
        Realizzo siti per attività locali e racconto quello che imparo lungo la
        strada: progetti, esperimenti tech ed esperienze personali. Questo è il
        mio spazio, e cresce insieme a me.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/#progetti"
          className={cn(
            buttonVariants({ size: "lg" }),
            "rounded-full border-2 border-foreground font-bold shadow-brut-sm"
          )}
        >
          Guarda i progetti ↓
        </Link>
        <Link
          href="/articoli"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "rounded-full border-2 border-foreground font-bold shadow-brut-sm"
          )}
        >
          Leggi il blog
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Creare `components/home/sezione-progetti.tsx`**

```tsx
import { progetti } from "@/content/progetti";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";

export function SezioneProgetti() {
  return (
    <section id="progetti" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading etichetta="Progetti" titolo="Siti che ho realizzato" />
        <div className="grid gap-6 sm:grid-cols-2">
          {progetti.map((progetto) => (
            <ProjectCard key={progetto.url} progetto={progetto} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Creare `components/home/sezione-articoli.tsx`**

```tsx
import Link from "next/link";

import { getArticoli } from "@/lib/articoli";
import { ArticleCard } from "@/components/site/article-card";
import { SectionHeading } from "@/components/site/section-heading";

export async function SezioneArticoli() {
  const articoli = (await getArticoli()).slice(0, 3);

  return (
    <section id="articoli" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading
          etichetta="Articoli"
          titolo="Ultime cose che ho scritto"
        />
        <div className="grid gap-4">
          {articoli.map((articolo) => (
            <ArticleCard key={articolo.slug} articolo={articolo} />
          ))}
        </div>
        <Link
          href="/articoli"
          className="mt-6 inline-block font-mono text-sm font-bold text-primary hover:underline"
        >
          → tutti gli articoli
        </Link>
      </div>
    </section>
  );
}
```

- [ ] **Step 5: Creare `components/home/sezione-percorso.tsx`**

```tsx
import { SectionHeading } from "@/components/site/section-heading";

export function SezionePercorso() {
  return (
    <section id="percorso" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading
          etichetta="Percorso"
          titolo="Presto anche su YouTube 🎬"
        />
        <div className="rounded-2xl border-2 border-dashed border-foreground bg-card p-6 text-muted-foreground">
          Sto preparando un canale dove racconterò il mio percorso: i progetti
          che avvio, quello che imparo, la vita intorno.{" "}
          <span className="font-bold text-foreground">
            Quando parte, i video appariranno qui.
          </span>{" "}
          Nel frattempo mi trovi nei contatti qui sotto.
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Creare `components/home/sezione-contatti.tsx`**

```tsx
import { email, socials } from "@/lib/site";

export function SezioneContatti() {
  return (
    <section
      id="contatti"
      className="scroll-mt-20 border-t-2 border-foreground bg-foreground text-background"
    >
      <div className="mx-auto max-w-4xl px-4 py-16">
        <p className="font-mono text-sm font-bold text-secondary">
          ## Contatti
        </p>
        <h2 className="mt-1 text-3xl font-extrabold tracking-tight">
          Parliamone ✉️
        </h2>
        <p className="mt-3 max-w-md text-background/70">
          Hai un&apos;attività e ti serve un sito? O vuoi solo dire ciao? Scrivimi.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${email}`}
            className="rounded-full border-2 border-background bg-primary px-5 py-2 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            {email}
          </a>
          {socials.map((social) => (
            <a
              key={social.url}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-background px-5 py-2 text-sm font-medium transition-transform hover:-translate-y-0.5"
            >
              {social.nome}
            </a>
          ))}
        </div>
        <p className="mt-12 font-mono text-xs text-background/50">
          © {new Date().getFullYear()} michele_ · fatto con Next.js e caffè
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 7: Sostituire `app/page.tsx`**

```tsx
import { Header } from "@/components/site/header";
import { Hero } from "@/components/home/hero";
import { SezioneProgetti } from "@/components/home/sezione-progetti";
import { SezioneArticoli } from "@/components/home/sezione-articoli";
import { SezionePercorso } from "@/components/home/sezione-percorso";
import { SezioneContatti } from "@/components/home/sezione-contatti";

// L'ordine delle sezioni è una scelta editoriale: per riordinare basta
// spostare le righe qui sotto (rivedere quando parte il canale YouTube).
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SezioneProgetti />
        <SezioneArticoli />
        <SezionePercorso />
        <SezioneContatti />
      </main>
    </>
  );
}
```

- [ ] **Step 8: Verifica visiva**

Run: `npm run dev` e aprire http://localhost:3000.
Expected: home completa con le 5 sezioni nell'ordine hero → progetti → articoli → percorso → contatti; anchor della nav funzionanti con scroll morbido; toggle dark/light coerente in entrambe le sezioni (contatti resta a contrasto invertito); layout leggibile anche a ~375px di larghezza.

- [ ] **Step 9: Verificare la build**

Run: `npm run build`
Expected: build completata senza errori.

- [ ] **Step 10: Commit**

```bash
git add components/site/header.tsx components/home app/page.tsx
git commit -m "feat: homepage one-page con sezioni componibili" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 7: Pagine blog (/articoli e /articoli/[slug])

**Files:**
- Modify: `package.json` (via npm install `@tailwindcss/typography`)
- Modify: `app/globals.css` (riga `@plugin`)
- Create: `components/blog/elenco-articoli.tsx`
- Create: `app/articoli/page.tsx`
- Create: `app/articoli/[slug]/page.tsx`

**Interfaces:**
- Consumes: `getArticoli`/`ArticoloMeta`/`formattaData` (Task 4), `ArticleCard` (Task 5), `Header` (Task 6), `SezioneContatti` (Task 6).
- Produces: rotte `/articoli` (indice con filtro per tag, client-side) e `/articoli/[slug]` (statiche via `generateStaticParams`, `dynamicParams = false`).

- [ ] **Step 1: Installare il plugin tipografico e attivarlo**

Run: `npm install -D @tailwindcss/typography`

Poi in `app/globals.css`, subito dopo la riga `@import "shadcn/tailwind.css";`, aggiungere:

```css
@plugin "@tailwindcss/typography";
```

- [ ] **Step 2: Creare `components/blog/elenco-articoli.tsx`** (filtro per tag, client)

```tsx
"use client";

import { useState } from "react";

import type { ArticoloMeta } from "@/lib/articoli";
import { ArticleCard } from "@/components/site/article-card";
import { cn } from "@/lib/utils";

export function ElencoArticoli({ articoli }: { articoli: ArticoloMeta[] }) {
  const [tagAttivo, setTagAttivo] = useState<string | null>(null);

  const tags = [...new Set(articoli.flatMap((a) => a.tag))].sort();
  const visibili = tagAttivo
    ? articoli.filter((a) => a.tag.includes(tagAttivo))
    : articoli;

  const stileTag =
    "rounded-full border-2 border-foreground px-4 py-1 font-mono text-sm font-bold transition-colors";

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTagAttivo(null)}
          className={cn(
            stileTag,
            tagAttivo === null
              ? "bg-primary text-primary-foreground shadow-brut-sm"
              : "bg-card hover:bg-muted"
          )}
        >
          tutti
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setTagAttivo(tag === tagAttivo ? null : tag)}
            className={cn(
              stileTag,
              tag === tagAttivo
                ? "bg-primary text-primary-foreground shadow-brut-sm"
                : "bg-card hover:bg-muted"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {visibili.map((articolo) => (
          <ArticleCard key={articolo.slug} articolo={articolo} />
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Creare `app/articoli/page.tsx`**

```tsx
import type { Metadata } from "next";

import { getArticoli } from "@/lib/articoli";
import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";
import { ElencoArticoli } from "@/components/blog/elenco-articoli";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Articoli",
  description: "Articoli su tech, progetti ed esperienze personali.",
};

export default async function PaginaArticoli() {
  const articoli = await getArticoli();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <SectionHeading
            etichetta="Articoli"
            titolo="Tutto quello che ho scritto"
          />
          <ElencoArticoli articoli={articoli} />
        </div>
      </main>
      <SezioneContatti />
    </>
  );
}
```

- [ ] **Step 4: Creare `app/articoli/[slug]/page.tsx`**

Pattern da `node_modules/next/dist/docs/01-app/02-guides/mdx.md` (import dinamico + `generateStaticParams`); `params` è una `Promise` in Next 16.

```tsx
import type { Metadata } from "next";
import Link from "next/link";

import { formattaData, getArticoli } from "@/lib/articoli";
import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";

export async function generateStaticParams() {
  const articoli = await getArticoli();
  return articoli.map((a) => ({ slug: a.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const articolo = (await getArticoli()).find((a) => a.slug === slug);
  return {
    title: articolo?.titolo,
    description: articolo?.descrizione,
  };
}

export default async function PaginaArticolo({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Articolo, metadata } = await import(
    `@/content/articoli/${slug}.mdx`
  );

  return (
    <>
      <Header />
      <main className="flex-1">
        <article className="mx-auto max-w-2xl px-4 py-16">
          <Link
            href="/articoli"
            className="font-mono text-sm font-bold text-primary hover:underline"
          >
            ← tutti gli articoli
          </Link>
          <p className="mt-8 font-mono text-sm text-muted-foreground">
            {formattaData(metadata.data)} · {metadata.tag.join(" · ")}
          </p>
          <h1 className="mt-2 text-4xl font-extrabold tracking-tight">
            {metadata.titolo}
          </h1>
          <div className="prose prose-neutral mt-8 dark:prose-invert prose-headings:font-extrabold prose-a:text-primary">
            <Articolo />
          </div>
        </article>
      </main>
      <SezioneContatti />
    </>
  );
}
```

- [ ] **Step 5: Verifica visiva**

Run: `npm run dev`, visitare http://localhost:3000/articoli e http://localhost:3000/articoli/benvenuto.
Expected: indice con badge filtro ("tutti", "vita") funzionanti; articolo leggibile con tipografia `prose` corretta in light e dark; link "← tutti gli articoli" funzionante; una URL inesistente (es. `/articoli/nope`) risponde 404.

- [ ] **Step 6: Verificare la build**

Run: `npm run build`
Expected: build senza errori; nell'output della build la rotta `/articoli/[slug]` risulta prerenderizzata (SSG) con `/articoli/benvenuto`.

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json app/globals.css components/blog/elenco-articoli.tsx app/articoli
git commit -m "feat: pagine blog con indice filtrabile e articoli MDX statici" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 8: SEO — metadata definitivi, sitemap, favicon

**Files:**
- Modify: `app/layout.tsx` (solo il blocco `metadata`)
- Create: `app/sitemap.ts`
- Create: `app/icon.svg`
- Delete: `app/favicon.ico`

**Interfaces:**
- Consumes: `siteUrl` (Task 3), `getArticoli` (Task 4).
- Produces: `<title>` con template su tutte le pagine, `/sitemap.xml`, favicon coerente col logo.

- [ ] **Step 1: Metadata definitivi in `app/layout.tsx`**

Sostituire il blocco `export const metadata` con:

```tsx
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Michele Cacciapuoti — builder & storyteller",
    template: "%s · Michele Cacciapuoti",
  },
  description:
    "Realizzo siti per attività locali e racconto quello che imparo: progetti, articoli su tech e vita, e il mio percorso.",
};
```

(L'import di `siteUrl` va in cima al file insieme agli altri import.)

- [ ] **Step 2: Creare `app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";

import { getArticoli } from "@/lib/articoli";
import { siteUrl } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const articoli = await getArticoli();

  return [
    { url: siteUrl, lastModified: new Date() },
    { url: `${siteUrl}/articoli`, lastModified: new Date() },
    ...articoli.map((a) => ({
      url: `${siteUrl}/articoli/${a.slug}`,
      lastModified: new Date(a.data),
    })),
  ];
}
```

- [ ] **Step 3: Creare `app/icon.svg` e rimuovere `app/favicon.ico`**

```svg
<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#f4f2ec" stroke="#22201a" stroke-width="4"/>
  <text x="32" y="44" font-family="ui-monospace, monospace" font-size="34" font-weight="bold" text-anchor="middle" fill="#22201a">m<tspan fill="#e05d38">_</tspan></text>
</svg>
```

Run: `rm app/favicon.ico` (Next userà `app/icon.svg` come favicon).

- [ ] **Step 4: Verifica**

Run: `npm run build`
Expected: build senza errori, rotta `/sitemap.xml` presente nell'output. Poi `npm run dev`: la tab del browser mostra l'icona "m_" e http://localhost:3000/sitemap.xml elenca home, `/articoli` e `/articoli/benvenuto`.

- [ ] **Step 5: Commit**

```bash
git add app/layout.tsx app/sitemap.ts app/icon.svg
git rm --cached app/favicon.ico 2>/dev/null; git add -u app
git commit -m "feat: metadata SEO, sitemap e favicon" -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"
```

---

### Task 9: Verifica finale

**Files:** nessuno (solo verifica; eventuali fix minori nei file già creati).

- [ ] **Step 1: Lint**

Run: `npm run lint`
Expected: nessun errore. Correggere eventuali segnalazioni e ricommittare con `fix: correzioni lint` (+ trailer Co-Authored-By).

- [ ] **Step 2: Build pulita**

Run: `npm run build`
Expected: nessun errore; rotte `/`, `/articoli`, `/articoli/[slug]` (SSG), `/sitemap.xml` presenti.

- [ ] **Step 3: Giro visivo completo**

Run: `npm run dev` e verificare:
1. Home: 5 sezioni, anchor nav, hover delle card (traslazione + ombra), CTA funzionanti
2. Toggle dark/light su ogni pagina; ricaricando la preferenza persiste e non c'è flash
3. `/articoli`: filtro tag; `/articoli/benvenuto`: tipografia prose in entrambi i temi
4. Mobile ~375px: nav compatta (solo logo + toggle), griglie a colonna singola
5. Link esterni del footer e mailto corretti

Expected: tutto funzionante; segnalare all'utente i "Dati da confermare" (dominio, social, progetti reali, foto).

---

## Self-review (fatta in stesura)

- **Copertura spec**: pagine (T6, T7), sezioni home nell'ordine approvato (T6), MDX + metadata articoli con tag e bozza (T4), progetti tipizzati (T3), design token + firma neo-brutalist + dark caldo (T1), toggle senza flash (T2), riordinabilità (T6 Step 7), SEO/sitemap/favicon (T8), verifica build+lint+visiva (T9). Fuori scope rispettato: nessuna integrazione YouTube, nessun form, nessuna OG image.
- **Tipi coerenti**: `ArticoloMeta`/`getArticoli`/`formattaData` (T4) usati identici in T5/T6/T7/T8; `Progetto`/`progetti` (T3) in T5/T6; `email`/`socials`/`siteUrl` (T3) in T6/T8.
- **Nessun placeholder di piano**: gli unici valori aperti (dominio, social, progetti reali, foto) sono contenuti che solo l'utente può fornire, raccolti nella sezione "Dati da confermare".
