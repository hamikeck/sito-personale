import { Header } from "@/components/site/header";
import { Hero } from "@/components/home/hero";
import { SezioneProgetti } from "@/components/home/sezione-progetti";
import { SezioneArticoli } from "@/components/home/sezione-articoli";
import { SezioneVideo } from "@/components/home/sezione-video";
import { SezioneContatti } from "@/components/home/sezione-contatti";

// L'ordine delle sezioni è una scelta editoriale: per riordinare basta
// spostare le righe qui sotto.
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SezioneProgetti />
        <SezioneArticoli />
        <SezioneVideo />
        <SezioneContatti />
      </main>
    </>
  );
}
