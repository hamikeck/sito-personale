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
      "Sito per una pizzeria storica: hero immersivo, menù digitale, orari sempre visibili e CTA dirette per chiamata e prenotazione.",
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
  {
    nome: "Planet Gym",
    descrizione:
      "Sito per una palestra: tema scuro d'impatto, presentazione di corsi e servizi, prezzi chiari e prenotazione della consulenza gratuita.",
    url: "https://planet-gym.com",
    screenshot: "/progetti/planet-gym.jpg",
  },
  {
    nome: "Arturo Cerullo Pizzeria",
    descrizione:
      "Sito per una pizzeria napoletana di Qualiano: atmosfera neon, menù integrato, storia e informazioni sul locale, ordini rapidi su Glovo, Just Eat e Deliveroo.",
    url: "https://www.arturocerullopizzeria.it/",
    screenshot: "/progetti/arturo-cerullo.jpg",
  },
];
