import React from "react";

/** Glifo Lucide inline (stroke 2, 24×24). */
export interface IconProps {
  name: "moon" | "sun" | "arrow-up-right" | "play" | "lock";
  /** px, default 16 */
  size?: number;
  /** "currentColor" per il Play pieno */
  fill?: string;
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
