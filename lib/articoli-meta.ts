// Tipi e utility degli articoli senza dipendenze da Node (importabili anche da client component).

export type ArticoloMeta = {
  slug: string;
  titolo: string;
  data: string; // ISO: "YYYY-MM-DD"
  descrizione: string;
  tag: string[];
  bozza?: boolean;
};

export function formattaData(iso: string): string {
  return new Date(iso).toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
