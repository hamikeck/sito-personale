import React from "react";

/**
 * Frase chiave a tutto schermo 1920×1080: etichetta "## frase chiave", testo extrabold 132px con una parte evidenziata, logo in basso.
 * @startingPoint section="YouTube" subtitle="Frase chiave a tutto schermo" viewport="960x540"
 */
export interface KeyPhraseProps {
  frase: string;
  /** sottostringa da colorare (terracotta, o inchiostro su sfondo terracotta) */
  evidenza?: string;
  etichetta?: string;
  sfondo?: "scuro" | "crema" | "terracotta";
  scale?: number;
  style?: React.CSSProperties;
}
export declare function KeyPhrase(props: KeyPhraseProps): JSX.Element;
