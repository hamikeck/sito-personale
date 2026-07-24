import Image from "next/image";

import type { ArticoloMeta } from "@/lib/articoli-meta";
import { cn } from "@/lib/utils";

// Colore deterministico dallo slug: lo stesso articolo ha sempre lo stesso fallback.
function coloreFallback(slug: string): string {
  const somma = [...slug].reduce((h, c) => h + c.charCodeAt(0), 0);
  return somma % 2 === 0
    ? "bg-primary text-primary-foreground"
    : "bg-secondary text-secondary-foreground";
}

export function CoverArticolo({
  articolo,
  sizes,
  priority = false,
  className,
}: {
  articolo: ArticoloMeta;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  if (articolo.cover) {
    return (
      <div className={cn("relative overflow-hidden", className)}>
        <Image
          src={articolo.cover}
          alt=""
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-end overflow-hidden p-4 sm:p-5",
        coloreFallback(articolo.slug),
        className
      )}
    >
      <span className="line-clamp-3 text-2xl leading-none font-extrabold tracking-tight text-balance sm:text-3xl">
        {articolo.titolo}
      </span>
    </div>
  );
}
