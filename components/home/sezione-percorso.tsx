import { SectionHeading } from "@/components/site/section-heading";

export function SezionePercorso() {
  return (
    <section id="percorso" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading
          etichetta="Percorso"
          titolo="Presto anche su YouTube 🎬"
        />
        <div className="rounded-2xl border-2 border-dashed border-foreground bg-card p-6 text-muted-foreground">
          Sto preparando un canale dove racconterò il mio percorso: i progetti
          che avvio, quello che imparo, la vita intorno.{" "}
          <span className="font-bold text-foreground">
            Quando parte, i video appariranno qui.
          </span>{" "}
          Nel frattempo mi trovi nei contatti qui sotto.
        </div>
      </div>
    </section>
  );
}
