import React from "react";
import type { AppTileProps } from "./AppTile";

/**
 * Miniatura YouTube 1920×1080: foto scrivania dall'alto con telefono al centro, simbolo gigante crema (bordo + ombra inchiostro), tessere app chiare, fascia terracotta in un angolo, al massimo 1–3 parole.
 * @startingPoint section="YouTube" subtitle="Miniatura 1920×1080" viewport="960x540"
 */
export interface ThumbnailProps {
  /** foto di sfondo (scrivania dall'alto); se assente mostra un segnaposto */
  image?: string;
  /** simbolo gigante, default "?" (anche "!", "×", "0", "%"); stringa vuota per nasconderlo */
  simbolo?: string;
  simboloLato?: "left" | "right";
  /** angolo della fascia diagonale; null per toglierla */
  fascia?: "top-left" | "top-right" | "bottom-left" | "bottom-right" | null;
  fasciaColore?: string;
  /** tessere app posizionate in px del frame */
  tessere?: (AppTileProps & { x: number; y: number })[];
  /** 1–3 parole, opzionale */
  testo?: string;
  /** scala di visualizzazione (0.5 = 960×540) */
  scale?: number;
  style?: React.CSSProperties;
}
export declare function Thumbnail(props: ThumbnailProps): JSX.Element;
