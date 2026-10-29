/**
 * Card progetto: screenshot 8:5, nome, descrizione, link mono "visita il sito ↗".
 * @startingPoint section="Sito" subtitle="Card di un sito realizzato" viewport="420x420"
 */
export interface ProjectCardProps {
  nome: string;
  descrizione: string;
  url: string;
  /** JPG ~1600px in 8:5 */
  screenshot?: string;
  onClick?: (e: any) => void;
}
export declare function ProjectCard(props: ProjectCardProps): JSX.Element;
