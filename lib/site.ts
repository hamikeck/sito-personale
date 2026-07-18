// URL Vercel attuale; sostituire col dominio definitivo quando sarà registrato.
export const siteUrl = "https://sito-personale-five.vercel.app";

export const email = "michelecacciapuotipiccolo@gmail.com";

export type Social = {
  nome: string;
  url: string;
  icona: "github" | "linkedin" | "instagram" | "youtube";
};

export const socials: Social[] = [
  {
    nome: "GitHub",
    url: "https://github.com/hamikeck",
    icona: "github",
  },
  {
    nome: "LinkedIn",
    url: "https://www.linkedin.com/in/michele-cacciapuoti-07586a33a/",
    icona: "linkedin",
  },
  {
    nome: "Instagram",
    url: "https://www.instagram.com/michelecaccia__",
    icona: "instagram",
  },
  {
    nome: "YouTube",
    url: "https://www.youtube.com/@michele-cacciapuoti",
    icona: "youtube",
  },
];
