import React from "react";

/**
 * Banner del canale 2048×1152 su marrone scuro a righe (quaderno), margine terracotta, nastri terracotta/ambra; tutto il testo nell'area sicura 1235×338.
 * @startingPoint section="YouTube" subtitle="Banner del canale 2048×1152" viewport="1024x576"
 */
export interface ChannelBannerProps {
  etichetta?: string;
  nome?: string;
  frase?: string;
  /** parte della frase in terracotta sottolineata */
  evidenza?: string;
  categorie?: string[];
  /** mostra il contorno dell'area sicura */
  guide?: boolean;
  scale?: number;
  style?: React.CSSProperties;
}
export declare function ChannelBanner(props: ChannelBannerProps): JSX.Element;
