import Link from "next/link";

import { progetti } from "@/content/progetti";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";

export function SezioneProgetti() {
  return (
    <section id="progetti" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading etichetta="Progetti" titolo="Siti che ho realizzato" />
        <div className="grid gap-6 sm:grid-cols-2">
          {progetti.slice(0, 2).map((progetto) => (
            <ProjectCard key={progetto.url} progetto={progetto} />
          ))}
        </div>
        <Link
          href="/progetti"
          className="mt-6 inline-block font-mono text-sm font-bold text-primary hover:underline"
        >
          → tutti i progetti
        </Link>
      </div>
    </section>
  );
}
