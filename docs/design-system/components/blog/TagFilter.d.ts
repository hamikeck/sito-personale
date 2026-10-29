/** Riga di filtri a pillola per i tag degli articoli. */
export interface TagFilterProps {
  tags: string[];
  /** null = "tutti" */
  attivo?: string | null;
  onChange?: (tag: string | null) => void;
}
export declare function TagFilter(props: TagFilterProps): JSX.Element;
