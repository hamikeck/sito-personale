import React from "react";

/** Tessera crema con bordo inchiostro e ombra piena che contiene l'icona vera di un'app; badge lucchetto ambra opzionale. */
export interface AppTileProps {
  /** immagine icona app (PNG/JPG reale) */
  src?: string;
  /** in alternativa, logo social Simple Icons */
  icona?: "github" | "linkedin" | "instagram" | "youtube";
  /** lato in px nel frame 1920×1080 (default 260) */
  size?: number;
  locked?: boolean;
  tone?: "light" | "dark";
  rotate?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function AppTile(props: AppTileProps): JSX.Element;
