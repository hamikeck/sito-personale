import type { Metadata } from "next";
import Link from "next/link";

import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pagina non trovata",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="mx-auto max-w-2xl px-4 py-16 text-center sm:py-24">
          <p className="inline-block rounded-2xl border-2 border-foreground bg-card px-8 py-4 font-mono text-7xl font-extrabold tracking-tight shadow-brut sm:text-8xl">
            404
          </p>
          <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Pagina non trovata
          </h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            Questa pagina non esiste (o non esiste più). Nessun problema: da qui
            puoi ripartire.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-full border-2 border-foreground font-bold shadow-brut-sm"
              )}
            >
              Torna alla home
            </Link>
            <Link
              href="/articoli"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-full border-2 border-foreground font-bold shadow-brut-sm"
              )}
            >
              Leggi gli articoli
            </Link>
          </div>
        </section>
      </main>
      <SezioneContatti />
    </>
  );
}
