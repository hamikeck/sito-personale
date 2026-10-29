import React from "react";

/** Wordmark "michele_" in Geist Mono bold; il trattino basso è il cursore in primary. */
export interface LogoProps {
  /** font-size px (header: 18) */
  size?: number;
  cursorColor?: string;
  color?: string;
  /** cursore lampeggiante (video, intro) */
  blink?: boolean;
  href?: string;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
