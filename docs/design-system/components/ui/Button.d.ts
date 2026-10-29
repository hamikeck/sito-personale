import React from "react";

/**
 * Pulsante del sito. Di default `brut` = pillola con bordo 2px a inchiostro, testo bold e ombra piena 2px (stile di Hero/404).
 * @startingPoint section="UI" subtitle="Pulsante soft-brutalist a pillola" viewport="700x260"
 */
export interface ButtonProps {
  variant?: "default" | "outline" | "secondary" | "ghost" | "destructive" | "link";
  /** lg = 36px (CTA del sito); xl = 44px (target touch) */
  size?: "xs" | "sm" | "default" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
  /** true: pillola + bordo 2px + shadow-brut-sm + bold. false: shadcn base (radius-lg, 500) */
  brut?: boolean;
  href?: string;
  disabled?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
