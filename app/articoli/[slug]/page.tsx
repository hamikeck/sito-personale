import type { Metadata } from "next";
import Link from "next/link";

import { formattaData, getArticoli, getCorrelati } from "@/lib/articoli";
import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";
import { ArticleCard } from "@/components/site/article-card";
import { CoverArticolo } from "@/components/blog/cover-articolo";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
  const [{ default: Articolo }, articoli, correlati] = await Promise.all([
    import(`@/content/articoli/${slug}.mdx`),
    getArticoli(),
    getCorrelati(slug),
  ]);
  const articolo = articoli.find((a) => a.slug === slug)!;

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
          <CoverArticolo
            articolo={articolo}
            priority
            sizes="(min-width: 44rem) 42rem, 100vw"
            className="mt-8 aspect-2/1 rounded-2xl border-2 border-foreground shadow-brut"
          />
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {articolo.titolo}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            <p className="font-mono text-sm text-muted-foreground">
              {formattaData(articolo.data)} · {articolo.minutiLettura} min di
              lettura
            </p>
            {articolo.tag.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-foreground font-mono"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="prose prose-neutral mt-8 dark:prose-invert prose-headings:font-extrabold prose-a:text-primary">
            <Articolo />
          </div>
          {correlati.length > 0 && (
            <>
              <Separator className="my-12 bg-foreground data-horizontal:h-0.5" />
              <h2 className="text-2xl font-extrabold tracking-tight">
                Continua a leggere
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {correlati.map((c) => (
                  <ArticleCard key={c.slug} articolo={c} />
                ))}
              </div>
            </>
          )}
        </article>
      </main>
      <SezioneContatti />
    </>
  );
}
