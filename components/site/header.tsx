import Link from "next/link";

import { ThemeToggle } from "@/components/site/theme-toggle";

const voci = [
  { nome: "Progetti", href: "/progetti" },
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
