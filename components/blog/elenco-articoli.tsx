"use client";

import { useState } from "react";

import type { ArticoloMeta } from "@/lib/articoli-meta";
import { ArticleCard } from "@/components/site/article-card";
import { cn } from "@/lib/utils";

export function ElencoArticoli({ articoli }: { articoli: ArticoloMeta[] }) {
  const [tagAttivo, setTagAttivo] = useState<string | null>(null);

  const tags = [...new Set(articoli.flatMap((a) => a.tag))].sort();
  const visibili = tagAttivo
    ? articoli.filter((a) => a.tag.includes(tagAttivo))
    : articoli;

  const stileTag =
    "rounded-full border-2 border-foreground px-4 py-1 font-mono text-sm font-bold transition-colors";

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setTagAttivo(null)}
          className={cn(
            stileTag,
            tagAttivo === null
              ? "bg-primary text-primary-foreground shadow-brut-sm"
              : "bg-card hover:bg-muted"
          )}
        >
          tutti
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => setTagAttivo(tag === tagAttivo ? null : tag)}
            className={cn(
              stileTag,
              tag === tagAttivo
                ? "bg-primary text-primary-foreground shadow-brut-sm"
                : "bg-card hover:bg-muted"
            )}
          >
            {tag}
          </button>
        ))}
      </div>
      <div className="grid gap-4">
        {visibili.map((articolo) => (
          <ArticleCard key={articolo.slug} articolo={articolo} />
        ))}
      </div>
    </div>
  );
}
