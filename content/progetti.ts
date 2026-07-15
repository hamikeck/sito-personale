export type Progetto = {
  nome: string;
  descrizione: string;
  url: string;
  /** percorso sotto /public, es. "/progetti/esempio.svg" */
  screenshot: string;
};

export const progetti: Progetto[] = [
  {
    nome: "Pizzeria da Salvatore",
    descrizione:
      "Sito per la storica pizzeria di Qualiano: hero immersivo, menù digitale, orari sempre visibili e CTA dirette per chiamata e prenotazione.",
    url: "https://pizzeriasalvatore.it",
    screenshot: "/progetti/pizzeria-da-salvatore.jpg",
  },
  {
    nome: "Belle Époque 1985",
    descrizione:
      "Sito per il bar pasticceria di Giugliano, in stile francese vintage: atmosfera d'altri tempi, storia del locale, vetrina dei prodotti e recensioni in evidenza.",
    url: "https://www.belleepoque1985.com/",
    screenshot: "/progetti/belle-epoque.jpg",
  },
];
