import Link from "next/link";

import { formattaData, type ArticoloMeta } from "@/lib/articoli-meta";
import { CoverArticolo } from "@/components/blog/cover-articolo";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export function CardInEvidenza({ articolo }: { articolo: ArticoloMeta }) {
  return (
    <Link
      href={`/articoli/${articolo.slug}`}
      className="group block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <Card className="gap-0 rounded-2xl border-2 border-foreground p-0 shadow-brut ring-0 transition-transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1 md:grid md:grid-cols-[55%_1fr]">
        <CoverArticolo
          articolo={articolo}
          priority
          sizes="(min-width: 56rem) 30rem, 100vw"
          className="aspect-video border-b-2 border-foreground md:aspect-auto md:h-full md:min-h-56 md:border-b-0"
        />
        <div className="flex flex-col gap-3 p-5 md:border-l-2 md:border-foreground md:p-6">
          <span className="w-fit rounded-full border-2 border-foreground bg-secondary px-3 py-0.5 font-mono text-xs font-bold text-secondary-foreground">
            ULTIMO
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            {articolo.titolo}
          </h2>
          <p className="text-muted-foreground">{articolo.descrizione}</p>
          <p className="font-mono text-sm text-muted-foreground">
            {formattaData(articolo.data)} · {articolo.minutiLettura} min di
            lettura
          </p>
          <div className="flex flex-wrap gap-1.5">
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
        </div>
      </Card>
    </Link>
  );
}
