import React from "react";

/** Etichetta a pillola mono 40px sopra il video; tono "scura" per fondi chiari e misti, "terracotta" per l'enfasi. */
export interface PillLabelProps {
  tono?: "terracotta" | "ambra" | "scura" | "chiara";
  /** pallino iniziale (stile "live"/elenco) */
  punto?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PillLabel(props: PillLabelProps): JSX.Element;
