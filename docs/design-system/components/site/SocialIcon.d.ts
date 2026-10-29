import React from "react";

/** Logo social monocromatico (Simple Icons) in currentColor. */
export interface SocialIconProps {
  icona: "github" | "linkedin" | "instagram" | "youtube";
  size?: number;
  style?: React.CSSProperties;
}
export declare function SocialIcon(props: SocialIconProps): JSX.Element;
export declare const SOCIALS: { nome: string; url: string; icona: SocialIconProps["icona"] }[];
