import React from "react";

/** Copertina articolo: immagine, oppure fallback tipografico (titolo extrabold su primary/secondary scelto dallo slug). */
export interface CoverArticoloProps {
  slug: string;
  titolo: string;
  cover?: string;
  /** CSS aspect-ratio, default "16 / 9" (pagina articolo: "2 / 1") */
  aspect?: string;
  style?: React.CSSProperties;
}
export declare function CoverArticolo(props: CoverArticoloProps): JSX.Element;
