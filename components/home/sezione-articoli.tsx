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
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
