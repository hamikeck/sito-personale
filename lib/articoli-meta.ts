// Tipi e utility degli articoli senza dipendenze da Node (importabili anche da client component).

export type ArticoloMeta = {
  slug: string;
  titolo: string;
  data: string; // ISO: "YYYY-MM-DD"
  descrizione: string;
  tag: string[];
  cover?: string; // path sotto public/, es. "/articoli/<slug>/cover.jpg"
  minutiLettura: number; // calcolato a build time, non va scritto nell'MDX
  bozza?: boolean;
};

export function formattaData(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
