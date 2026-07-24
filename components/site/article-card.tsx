import Link from "next/link";

import { formattaData, type ArticoloMeta } from "@/lib/articoli-meta";
import { CoverArticolo } from "@/components/blog/cover-articolo";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ArticleCard({ articolo }: { articolo: ArticoloMeta }) {
  return (
    <Link
      href={`/articoli/${articolo.slug}`}
      className="group block h-full rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <Card className="h-full gap-0 rounded-2xl border-2 border-foreground p-0 shadow-brut ring-0 transition-transform group-hover:-translate-y-1 group-focus-visible:-translate-y-1">
        <CoverArticolo
          articolo={articolo}
          sizes="(min-width: 40rem) 50vw, 100vw"
          className="aspect-video border-b-2 border-foreground"
        />
        <CardHeader className="gap-1 p-4">
          <p className="font-mono text-xs text-muted-foreground">
            {formattaData(articolo.data)} · {articolo.minutiLettura} min ·{" "}
            {articolo.tag.join(" · ")}
          </p>
          <CardTitle className="text-base font-bold">
            {articolo.titolo}
          </CardTitle>
          <CardDescription className="line-clamp-2">
            {articolo.descrizione}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
