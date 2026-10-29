import React from "react";

/**
 * Scheda app in sovraimpressione (px del frame 1920×1080): card scura semi-opaca con bordo crema, barra d'accento a sinistra, icona su tessera chiara.
 * @startingPoint section="YouTube" subtitle="Scheda app sopra il video" viewport="960x540"
 */
export interface AppCardProps {
  nome: string;
  /** riga mono ambra, es. "gratis · iOS" */
  dettaglio?: string;
  src?: string;
  icona?: "github" | "linkedin" | "instagram" | "youtube";
  /** colore della barra a sinistra (default terracotta) */
  accento?: string;
  style?: React.CSSProperties;
}
export declare function AppCard(props: AppCardProps): JSX.Element;
