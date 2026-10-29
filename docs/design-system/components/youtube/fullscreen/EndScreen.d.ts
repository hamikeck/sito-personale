import React from "react";

/**
 * Schermata finale 1920×1080: logo, saluto, foto tonda (elemento "iscriviti"), slot tratteggiati per gli elementi finali YouTube a destra.
 * @startingPoint section="YouTube" subtitle="Schermata finale con slot video" viewport="960x540"
 */
export interface EndScreenProps {
  titolo?: string;
  sottotitolo?: string;
  /** foto profilo nel cerchio */
  foto?: string;
  /** mostra gli slot tratteggiati (false in export finale) */
  guide?: boolean;
  scale?: number;
  style?: React.CSSProperties;
}
export declare function EndScreen(props: EndScreenProps): JSX.Element;
