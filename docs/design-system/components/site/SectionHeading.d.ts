import React from "react";

/**
 * Titolo di sezione: etichetta mono stile markdown ("## Progetti") + titolo extrabold.
 * @startingPoint section="Sito" subtitle="Etichetta ## + titolo di sezione" viewport="700x160"
 */
export interface SectionHeadingProps {
  /** senza "##", lo aggiunge il componente */
  etichetta: string;
  titolo: string;
  livello?: "h1" | "h2";
  /** su fondo inchiostro: etichetta in secondary (sezione Contatti) */
  inverse?: boolean;
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
