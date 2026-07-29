import type { Metadata } from "next";

import { progetti } from "@/content/progetti";
import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";
import { ProjectCard } from "@/components/site/project-card";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Progetti",
  description: "Tutti i siti che ho realizzato per attività e clienti.",
};

export default function PaginaProgetti() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <SectionHeading
            etichetta="Progetti"
            titolo="Tutti i siti che ho realizzato"
            livello="h1"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {progetti.map((progetto) => (
              <ProjectCard key={progetto.url} progetto={progetto} />
            ))}
          </div>
        </div>
      </main>
      <SezioneContatti />
    </>
  );
}
