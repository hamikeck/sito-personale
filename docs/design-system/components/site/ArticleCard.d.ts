/**
 * Card articolo della griglia blog: copertina 16:9, meta mono, titolo bold, descrizione su 2 righe.
 * @startingPoint section="Sito" subtitle="Card articolo del blog" viewport="360x400"
 */
export interface ArticleCardProps {
  slug: string;
  titolo: string;
  /** già formattata, es. "5 agosto 2026" */
  data: string;
  minutiLettura: number;
  tag?: string[];
  descrizione: string;
  cover?: string;
  href?: string;
  onClick?: () => void;
}
export declare function ArticleCard(props: ArticleCardProps): JSX.Element;
