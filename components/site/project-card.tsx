import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import type { Progetto } from "@/content/progetti";

export function ProjectCard({ progetto }: { progetto: Progetto }) {
  return (
    <a
      href={progetto.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-brut transition-transform hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="relative aspect-[8/5] border-b-2 border-foreground">
        <Image
          src={progetto.screenshot}
          alt={`Screenshot del sito ${progetto.nome}`}
          fill
          className="object-cover"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="p-4">
        <h3 className="font-bold">{progetto.nome}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">
          {progetto.descrizione}
        </p>
        <p className="mt-2 inline-flex items-center gap-1 font-mono text-sm font-bold text-primary">
          visita il sito
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </p>
      </div>
    </a>
  );
}
