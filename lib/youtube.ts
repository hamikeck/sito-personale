import { youtube } from "@/lib/site";

export type Video = {
  id: string;
  titolo: string;
  data: string; // ISO
};

// Feed RSS pubblico del canale: niente API key, restituisce gli ultimi ~15 video.
const feedUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=${youtube.channelId}`;

// Il feed è un XML piatto e stabile: due regex bastano, senza un parser.
function estrai(xml: string, tag: string): string | undefined {
  return xml.match(new RegExp(`<${tag}>([^<]*)</${tag}>`))?.[1];
}

function decodificaEntita(testo: string): string {
  return testo
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

// Pubblicato un video, compare sul sito entro un'ora senza nuovo deploy.
// Se il feed non risponde si torna una lista vuota: la sezione mostra
// l'invito al canale invece di rompere la build o la pagina.
export async function getVideo(): Promise<Video[]> {
  try {
    const risposta = await fetch(feedUrl, { next: { revalidate: 3600 } });
    if (!risposta.ok) return [];
    const xml = await risposta.text();

    return [...xml.matchAll(/<entry>([\s\S]*?)<\/entry>/g)]
      .map(([, entry]) => entry)
      // Gli Shorts sono verticali: non stanno nel layout 16:9.
      .filter((entry) => !entry.includes("/shorts/"))
      .flatMap((entry) => {
        const id = estrai(entry, "yt:videoId");
        const titolo = estrai(entry, "title");
        const data = estrai(entry, "published");
        return id && titolo && data
          ? [{ id, titolo: decodificaEntita(titolo), data }]
          : [];
      });
  } catch {
    return [];
  }
}
