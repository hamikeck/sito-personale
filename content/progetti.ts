export type Progetto = {
  nome: string;
  descrizione: string;
  url: string;
  /** percorso sotto /public, es. "/progetti/esempio.svg" */
  screenshot: string;
};

// Sostituire con i progetti reali (screenshot in public/progetti/).
export const progetti: Progetto[] = [
  {
    nome: "Progetto di esempio",
    descrizione: "Sito vetrina per un'attività locale",
    url: "https://example.com",
    screenshot: "/progetti/esempio.svg",
  },
];
