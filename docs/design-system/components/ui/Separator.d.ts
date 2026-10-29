import React from "react";

export interface SeparatorProps {
  orientation?: "horizontal" | "vertical";
  /** 2px invece di 1px (separatore negli articoli) */
  thick?: boolean;
  style?: React.CSSProperties;
}
export declare function Separator(props: SeparatorProps): JSX.Element;
