import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
      <div className="flex items-center gap-5">
        <Image
          src="/michele.jpg"
          alt="Foto di Michele"
          width={440}
          height={440}
          preload
          className="size-20 shrink-0 rounded-2xl border-2 border-foreground object-cover shadow-brut-sm sm:size-24"
        />
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
