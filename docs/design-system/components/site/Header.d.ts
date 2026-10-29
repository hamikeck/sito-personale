/**
 * Header sticky del sito: logo "michele_", 4 voci, toggle tema; bordo inferiore 2px e fondo crema 90% sfocato.
 * @startingPoint section="Sito" subtitle="Barra di navigazione del sito" viewport="900x80"
 */
export interface HeaderProps {
  voci?: { nome: string; href: string }[];
  /** href della voce attiva (colorata in primary) */
  attiva?: string;
  /** se presente, intercetta i click (prototipi) */
  onNavigate?: (href: string) => void;
  themeTarget?: HTMLElement;
  sticky?: boolean;
}
export declare function Header(props: HeaderProps): JSX.Element;
