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
