"use client";

import { useState } from "react";

import type { ArticoloMeta } from "@/lib/articoli-meta";
import { ArticleCard } from "@/components/site/article-card";
import { CardInEvidenza } from "@/components/blog/card-in-evidenza";
import { Badge } from "@/components/ui/badge";

export function ElencoArticoli({ articoli }: { articoli: ArticoloMeta[] }) {
  const [tagAttivo, setTagAttivo] = useState<string | null>(null);

  const tags = [...new Set(articoli.flatMap((a) => a.tag))].sort();
  const visibili = tagAttivo
    ? articoli.filter((a) => a.tag.includes(tagAttivo))
    : articoli;
  const [inEvidenza, ...altri] = visibili;

  const stileTag =
    "h-auto cursor-pointer border-2 border-foreground px-4 py-1 font-mono text-sm font-bold";

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <Badge
          variant={tagAttivo === null ? "default" : "outline"}
          className={stileTag}
          render={
            <button
              type="button"
              aria-pressed={tagAttivo === null}
              onClick={() => setTagAttivo(null)}
            >
              tutti
            </button>
          }
        />
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant={tag === tagAttivo ? "default" : "outline"}
            className={stileTag}
            render={
              <button
                type="button"
                aria-pressed={tag === tagAttivo}
                onClick={() => setTagAttivo(tag === tagAttivo ? null : tag)}
              >
                {tag}
              </button>
            }
          />
        ))}
      </div>
      {inEvidenza ? (
        <div className="grid gap-6">
          <CardInEvidenza articolo={inEvidenza} />
          {altri.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {altri.map((articolo) => (
                <ArticleCard key={articolo.slug} articolo={articolo} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <p className="text-muted-foreground">
          Nessun articolo per questo tag.
        </p>
      )}
    </div>
  );
}
