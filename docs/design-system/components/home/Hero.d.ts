/**
 * Hero della home: foto 112px con bordo e ombra, saluto extrabold, sottotitolo mono terracotta, 3 CTA a pillola e social tondi.
 * @startingPoint section="Sito" subtitle="Hero della homepage" viewport="900x460"
 */
export interface HeroProps {
  /** percorso foto profilo (assets/michele.jpg) */
  foto?: string;
  titolo?: string;
  sottotitolo?: string;
  testo?: string;
  onNavigate?: (href: string) => void;
}
export declare function Hero(props: HeroProps): JSX.Element;
