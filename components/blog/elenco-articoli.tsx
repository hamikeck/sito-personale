"use client";

import { useState } from "react";

import type { ArticoloMeta } from "@/lib/articoli-meta";
import { ArticleCard } from "@/components/site/article-card";
import { CardInEvidenza } from "@/components/blog/card-in-evidenza";
import { Badge } from "@/components/ui/badge";

export function ElencoArticoli({ articoli }: { articoli: ArticoloMeta[] }) {
  const [tagAttivo, setTagAttivo] = useState<string | null>(null);
  // Le card entrano animate solo quando si cambia filtro, non al primo caricamento.
  const [filtrato, setFiltrato] = useState(false);

  function filtra(tag: string | null) {
    setTagAttivo(tag);
    setFiltrato(true);
  }
  const entrata = (indice: number) =>
    filtrato
      ? {
          className: "motion-safe:animate-entra motion-reduce:animate-dissolvi",
          style: { animationDelay: `${indice * 50}ms` },
        }
      : {};

  const tags = [...new Set(articoli.flatMap((a) => a.tag))].sort();
  const visibili = tagAttivo
    ? articoli.filter((a) => a.tag.includes(tagAttivo))
    : articoli;
  const [inEvidenza, ...altri] = visibili;

  const stileTag =
    "premi premi-sm h-auto cursor-pointer border-2 border-foreground px-4 py-1 font-mono text-sm font-bold";

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
              onClick={() => filtra(null)}
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
                onClick={() => filtra(tag === tagAttivo ? null : tag)}
              >
                {tag}
              </button>
            }
          />
        ))}
      </div>
      {inEvidenza ? (
        // La key rimonta la lista a ogni filtro, così l'animazione d'entrata riparte.
        <div key={tagAttivo ?? "tutti"} className="grid gap-6">
          <div {...entrata(0)}>
            <CardInEvidenza articolo={inEvidenza} />
          </div>
          {altri.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2">
              {altri.map((articolo, i) => (
                <div key={articolo.slug} {...entrata(i + 1)}>
                  <ArticleCard articolo={articolo} />
                </div>
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
