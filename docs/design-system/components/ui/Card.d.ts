import React from "react";

/**
 * Contenitore soft-brutalist: radius-2xl, bordo 2px inchiostro, ombra piena 3px.
 * @startingPoint section="UI" subtitle="Card con bordo netto e ombra sfalsata" viewport="700x320"
 */
export interface CardProps {
  /** hover: solleva di 4px */
  interactive?: boolean;
  href?: string;
  /** bordo tratteggiato senza ombra (stato vuoto / fallback) */
  dashed?: boolean;
  padding?: number | string;
  onClick?: () => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
export declare function CardHeader(props: { children?: React.ReactNode; style?: React.CSSProperties }): JSX.Element;
/** riga mono xs muted: "5 agosto 2026 · 8 min · tecnologia" */
export declare function CardMeta(props: { children?: React.ReactNode; style?: React.CSSProperties }): JSX.Element;
export declare function CardTitle(props: { children?: React.ReactNode; style?: React.CSSProperties }): JSX.Element;
export declare function CardDescription(props: { children?: React.ReactNode; clamp?: number; style?: React.CSSProperties }): JSX.Element;
