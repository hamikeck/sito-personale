import type { Metadata } from "next";

import { getArticoli } from "@/lib/articoli";
import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";
import { ElencoArticoli } from "@/components/blog/elenco-articoli";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Articoli",
  description: "Articoli su tech, progetti ed esperienze personali.",
};

export default async function PaginaArticoli() {
  const articoli = await getArticoli();

  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <SectionHeading
            etichetta="Articoli"
            titolo="Tutto quello che ho scritto"
          />
          <ElencoArticoli articoli={articoli} />
        </div>
      </main>
      <SezioneContatti />
    </>
  );
}
