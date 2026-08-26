import type { Metadata } from "next";

import { Header } from "@/components/site/header";
import { SezioneContatti } from "@/components/home/sezione-contatti";
import { SectionHeading } from "@/components/site/section-heading";

export const metadata: Metadata = {
  title: "Chi sono",
  description:
    "Ho 16 anni e costruisco siti per le attività della mia zona. Come ho iniziato, come lavoro e cosa faccio quando non sono al computer.",
};

/**
 * Segnaposto: marca un blocco ancora da scrivere.
 *
 * Il testo di questa pagina lo scrive Michele — vedi `wiki/tasks/lessons.md`
 * del 2026-08-05. Il riquadro è tratteggiato e dichiara sé stesso apposta:
 * finché resta a schermo, la sezione non è pronta per essere pubblicata.
 *
 * Per riempire una sezione: sostituisci <DaScrivere> con dei <p className="...">
 * e cancella il componente quando non ne resta più nessuno.
 */
function DaScrivere({ domanda }: { domanda: string }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-foreground/40 bg-card p-5">
      <p className="font-mono text-xs font-bold text-primary">## da scrivere</p>
      <p className="mt-2 text-muted-foreground">{domanda}</p>
    </div>
  );
}

function Sezione({
  etichetta,
  titolo,
  children,
}: {
  etichetta: string;
  titolo: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-14 first:mt-0">
      <SectionHeading etichetta={etichetta} titolo={titolo} className="mb-5" />
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export default function PaginaChiSono() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-16">
          <SectionHeading
            etichetta="Chi sono"
            titolo="Michele Cacciapuoti"
            livello="h1"
          />

          {/* Una riga sola, da leggere in tre secondi: chi sei e cosa fai.
              Non ripetere l'hero della home ("A 16 anni creo siti web"):
              qui c'è spazio per dire anche il perché. */}
          <DaScrivere domanda="In una frase: chi sei e cosa fai. Chi legge è appena arrivato, magari da un video." />

          <Sezione etichetta="Come ho iniziato" titolo="Il primo sito vero">
            {/* Un fatto, non un percorso. La regola del tuo piano editoriale:
                ogni pezzo nasce da qualcosa che è successo davvero. */}
            <DaScrivere domanda="Qual è stata la prima volta che qualcuno ti ha pagato per un sito? Parti da lì: chi era, cosa ti ha chiesto, come è andata." />
            <DaScrivere domanda="Cosa sapevi fare prima di quel momento, e cosa hai dovuto imparare mentre lo facevi?" />
          </Sezione>

          <Sezione etichetta="Adesso" titolo="Cosa faccio oggi">
            {/* Concreto: che tipo di attività, che tipo di lavoro.
                Se te la senti, i numeri veri valgono più di qualsiasi aggettivo. */}
            <DaScrivere domanda="Che tipo di attività aiuti, e cosa cambia per loro dopo che il sito è online?" />
          </Sezione>

          <Sezione etichetta="Metodo" titolo="Come lavoro">
            {/* La sezione che ti distingue. Chiunque a 16 anni può dire
                "faccio siti"; quasi nessuno sa dire come. */}
            <DaScrivere domanda="Cosa succede dalla prima chiacchierata alla consegna? Raccontalo come lo spiegheresti a un cliente seduto davanti a te." />
            <DaScrivere domanda="C'è qualcosa che ti rifiuti di fare, o che fai diversamente dagli altri? Quella è la parte interessante." />
          </Sezione>

          <Sezione etichetta="Fuori" titolo="Quando non sono al computer">
            {/* Tennis, palestra, il quaderno di carta, le passioni.
                Serve a non sembrare solo un fornitore di siti. */}
            <DaScrivere domanda="Cosa fai quando non lavori, e c'entra qualcosa con il modo in cui lavori?" />
          </Sezione>

          <Sezione etichetta="Scrivo" titolo="Perché questo sito esiste">
            {/* L'unico pezzo che eredita dal vecchio benvenuto: volevi un posto
                tuo, fuori dai formati dei social, che crescesse con te. */}
            <DaScrivere domanda="Perché un sito tuo invece di un profilo social? E cosa ci trova chi passa di qui ogni tanto?" />
          </Sezione>
        </div>
      </main>
      <SezioneContatti />
    </>
  );
}
