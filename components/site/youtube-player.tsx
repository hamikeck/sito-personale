"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import { cn } from "@/lib/utils";

// Player "leggero": finché non si clicca c'è solo la miniatura, così la
// pagina non scarica il JavaScript di YouTube per chi non guarda il video.
export function YouTubePlayer({
  id,
  titolo,
  sizes = "(min-width: 56rem) 54rem, 100vw",
  className,
}: {
  id: string;
  titolo: string;
  sizes?: string;
  className?: string;
}) {
  const [attivo, setAttivo] = useState(false);
  // maxresdefault manca per alcuni video: in quel caso si ripiega su hqdefault.
  const [miniatura, setMiniatura] = useState(
    `https://i.ytimg.com/vi/${id}/maxresdefault.jpg`
  );

  return (
    <div
      className={cn(
        "not-prose relative aspect-video overflow-hidden rounded-2xl border-2 border-foreground bg-foreground shadow-brut",
        className
      )}
    >
      {attivo ? (
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
          title={titolo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setAttivo(true)}
          aria-label={`Guarda il video: ${titolo}`}
          className="group absolute inset-0 size-full cursor-pointer focus-visible:outline-none"
        >
          <Image
            src={miniatura}
            alt=""
            fill
            sizes={sizes}
            onError={() =>
              setMiniatura(`https://i.ytimg.com/vi/${id}/hqdefault.jpg`)
            }
            className="object-cover"
          />
          <span className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-foreground bg-primary text-primary-foreground shadow-brut transition-transform group-hover:scale-110 group-focus-visible:scale-110 group-focus-visible:outline-2 group-focus-visible:outline-offset-4 group-focus-visible:outline-ring">
            <Play className="ml-1 size-7 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}

// Versione per gli articoli MDX: <YouTube id="..." titolo="..." />
export function YouTube({ id, titolo = "Video" }: { id: string; titolo?: string }) {
  return (
    <YouTubePlayer
      id={id}
      titolo={titolo}
      sizes="(min-width: 44rem) 42rem, 100vw"
      className="my-8"
    />
  );
}
