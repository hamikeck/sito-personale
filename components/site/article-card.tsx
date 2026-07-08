import Link from "next/link";

import { formattaData, type ArticoloMeta } from "@/lib/articoli-meta";

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
