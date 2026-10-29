/**
 * Card in evidenza dell'ultimo articolo: copertina 55% + testo, etichetta "ULTIMO" ambra, tag outline mono.
 * @startingPoint section="Sito" subtitle="Articolo in evidenza" viewport="900x320"
 */
export interface CardInEvidenzaProps {
  slug: string;
  titolo: string;
  data: string;
  minutiLettura: number;
  tag?: string[];
  descrizione: string;
  cover?: string;
  onClick?: () => void;
  /** layout mobile verticale */
  stacked?: boolean;
}
export declare function CardInEvidenza(props: CardInEvidenzaProps): JSX.Element;
