import React from "react";

/**
 * Titolo di capitolo numerato: "## capitolo 01" mono + [01 terracotta][titolo su card scura].
 * @startingPoint section="YouTube" subtitle="Titolo di capitolo numerato" viewport="960x540"
 */
export interface ChapterTitleProps {
  numero?: number;
  titolo: string;
  /** testo dopo "##", default "capitolo" */
  etichetta?: string;
  style?: React.CSSProperties;
}
export declare function ChapterTitle(props: ChapterTitleProps): JSX.Element;
