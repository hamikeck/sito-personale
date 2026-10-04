import { formattaData } from "@/lib/articoli-meta";
import { youtube } from "@/lib/site";
import { getVideo } from "@/lib/youtube";
import { YouTubePlayer } from "@/components/site/youtube-player";
import { SectionHeading } from "@/components/site/section-heading";

export async function SezioneVideo() {
  const [inEvidenza, ...altri] = (await getVideo()).slice(0, 3);

  return (
    <section id="video" className="scroll-mt-20 border-t-2 border-foreground">
      <div className="mx-auto max-w-4xl px-4 py-16">
        <SectionHeading etichetta="Video" titolo="Ultimi video su YouTube 🎬" />
        {inEvidenza ? (
          <>
            <YouTubePlayer id={inEvidenza.id} titolo={inEvidenza.titolo} />
            <TitoloVideo
              titolo={inEvidenza.titolo}
              data={inEvidenza.data}
              className="text-xl"
            />
            {altri.length > 0 && (
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {altri.map((video) => (
                  <div key={video.id}>
                    <YouTubePlayer
                      id={video.id}
                      titolo={video.titolo}
                      sizes="(min-width: 40rem) 27rem, 100vw"
                    />
                    <TitoloVideo
                      titolo={video.titolo}
                      data={video.data}
                      className="text-base"
                    />
                  </div>
                ))}
              </div>
            )}
          </>
        ) : (
          // Feed irraggiungibile: niente sezione vuota, solo l'invito al canale.
          <div className="rounded-2xl border-2 border-dashed border-foreground bg-card p-6 text-muted-foreground">
            Sul mio canale racconto il mio percorso, le mie passioni e come vedo
            l&apos;AI da studente.
          </div>
        )}
        <a
          href={youtube.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block font-mono text-sm font-bold text-primary hover:underline"
        >
          → vai al canale
        </a>
      </div>
    </section>
  );
}

function TitoloVideo({
  titolo,
  data,
  className,
}: {
  titolo: string;
  data: string;
  className: string;
}) {
  return (
    <div className="mt-4">
      <p className="font-mono text-xs text-muted-foreground">
        {formattaData(data)}
      </p>
      <h3 className={`font-bold ${className}`}>{titolo}</h3>
    </div>
  );
}
