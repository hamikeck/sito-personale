"use client";

import { useEffect, useState } from "react";

// Tempi in ms. La scrittura ha un filo di casualità per sembrare digitata a mano.
const SCRIVI = 28;
const VARIAZIONE = 22;
const CANCELLA = 14;
const TRA_FRASI = 250;
const PRIMA_PAUSA = 3000;
const RIDOTTO_OGNI = 3000;
// Le frasi lunghe restano ferme di più, così si fa in tempo a leggerle.
const pausa = (frase: string) => 1200 + frase.length * 20;

// Effetto macchina da scrivere: scrive una frase, la cancella e passa alla successiva.
// Nell'HTML del server c'è già la prima frase intera, così si legge anche senza JavaScript.
export function FraseRotante({
  prefisso,
  frasi,
}: {
  prefisso: string;
  frasi: string[];
}) {
  const [testo, setTesto] = useState(frasi[0]);

  useEffect(() => {
    const ridotto = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let indice = 0;
    let corrente = frasi[0];
    let fase: "scrivi" | "pausa" | "cancella" = "pausa";
    let timer: ReturnType<typeof setTimeout>;

    function passo() {
      // A scheda nascosta si ferma; riparte con visibilitychange.
      if (document.hidden) return;

      if (ridotto) {
        indice = (indice + 1) % frasi.length;
        setTesto(frasi[indice]);
        timer = setTimeout(passo, RIDOTTO_OGNI);
        return;
      }

      const frase = frasi[indice];
      if (fase === "scrivi") {
        corrente = frase.slice(0, corrente.length + 1);
        const finita = corrente === frase;
        if (finita) fase = "pausa";
        timer = setTimeout(
          passo,
          finita ? pausa(frase) : SCRIVI + Math.random() * VARIAZIONE
        );
      } else if (fase === "pausa") {
        fase = "cancella";
        timer = setTimeout(passo, CANCELLA);
      } else {
        corrente = corrente.slice(0, -1);
        if (corrente === "") {
          indice = (indice + 1) % frasi.length;
          fase = "scrivi";
          timer = setTimeout(passo, TRA_FRASI);
        } else {
          timer = setTimeout(passo, CANCELLA);
        }
      }
      setTesto(corrente);
    }

    function riprendi() {
      if (document.hidden) return;
      clearTimeout(timer);
      timer = setTimeout(passo, TRA_FRASI);
    }

    timer = setTimeout(passo, ridotto ? RIDOTTO_OGNI : PRIMA_PAUSA);
    document.addEventListener("visibilitychange", riprendi);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("visibilitychange", riprendi);
    };
  }, [frasi]);

  const piuLunga = frasi.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <>
      <span className="sr-only">
        {prefisso} {frasi.join(", ")}
      </span>
      {/* La frase più lunga, invisibile nella stessa cella della griglia, riserva
          sempre l'altezza giusta: la pagina non salta quando la frase va a capo. */}
      <span aria-hidden="true" className="grid">
        <span className="invisible [grid-area:1/1]">
          {prefisso} {piuLunga}_
        </span>
        <span className="[grid-area:1/1]">
          {prefisso} {testo}
          <span className="motion-safe:animate-cursore-continuo">_</span>
        </span>
      </span>
    </>
  );
}
