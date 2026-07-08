import { Header } from "@/components/site/header";
import { Hero } from "@/components/home/hero";
import { SezioneProgetti } from "@/components/home/sezione-progetti";
import { SezioneArticoli } from "@/components/home/sezione-articoli";
import { SezionePercorso } from "@/components/home/sezione-percorso";
import { SezioneContatti } from "@/components/home/sezione-contatti";

// L'ordine delle sezioni è una scelta editoriale: per riordinare basta
// spostare le righe qui sotto (rivedere quando parte il canale YouTube).
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SezioneProgetti />
        <SezioneArticoli />
        <SezionePercorso />
        <SezioneContatti />
      </main>
    </>
  );
}
