import Image from "next/image";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { SocialIcon } from "@/components/site/social-icon";
import { FraseRotante } from "@/components/home/frase-rotante";
import { coseCheFaccio } from "@/content/cose-che-faccio";
import { socials, youtube } from "@/lib/site";
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
          className="size-24 shrink-0 rounded-2xl border-2 border-foreground object-cover shadow-brut-sm sm:size-28"
        />
        <div>
          <h1 className="group/titolo text-3xl font-extrabold tracking-tight sm:text-4xl">
            Ciao, sono Michele{" "}
            <span className="inline-block origin-[70%_70%] motion-safe:animate-saluto motion-safe:group-hover/titolo:animate-saluto-subito">
              👋
            </span>
          </h1>
          <p className="font-mono text-lg text-primary sm:text-xl">
            <FraseRotante prefisso="A 16 anni" frasi={coseCheFaccio} />
          </p>
        </div>
      </div>
      <p className="mt-6 max-w-xl text-muted-foreground">
        Questo è il diario pubblico del mio percorso, dove racconto le mie
        passioni e la mia crescita: ogni sito che consegno, ogni esperimento,
        ogni cosa che imparo finisce qui. Se hai un&apos;attività e ti serve un
        sito, sei nel posto giusto.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/#progetti"
          className={cn(
            buttonVariants({ size: "lg" }),
            "premi premi-sm rounded-full border-2 border-foreground font-bold active:not-aria-[haspopup]:translate-y-0"
          )}
        >
          Guarda i progetti ↓
        </Link>
        <Link
          href="/articoli"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "premi premi-sm rounded-full border-2 border-foreground font-bold active:not-aria-[haspopup]:translate-y-0"
          )}
        >
          Leggi il blog
        </Link>
        <a
          href={youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            buttonVariants({ variant: "outline", size: "lg" }),
            "premi premi-sm rounded-full border-2 border-foreground font-bold active:not-aria-[haspopup]:translate-y-0"
          )}
        >
          Guarda i video
        </a>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        {socials.map((social) => (
          <a
            key={social.url}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.nome}
            title={social.nome}
            className="flex size-10 items-center justify-center rounded-full border-2 border-foreground bg-card premi premi-sm"
          >
            <SocialIcon icona={social.icona} className="size-5" />
          </a>
        ))}
      </div>
    </section>
  );
}
