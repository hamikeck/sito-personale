import React from "react";

/** Etichetta / tag a pillola. Nel sito: tag articolo (outline mono), filtri blog (md), "ULTIMO" (label su secondary). */
export interface BadgeProps {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive";
  /** sm = 20px shadcn · md = filtro tag blog · label = etichetta "ULTIMO" */
  size?: "sm" | "md" | "label";
  /** Geist Mono (default true) */
  mono?: boolean;
  as?: "span" | "a";
  /** se presente diventa un <button> con aria-pressed */
  onClick?: () => void;
  pressed?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
