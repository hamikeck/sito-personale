# Frase rotante a macchina da scrivere nell'hero

## Obiettivo

Far scoprire a chi arriva sul sito quello che Michele sa fare davvero: chi lo conosce
solo di vista spesso lo sottovaluta. Il sottotitolo dell'hero diventa "A 16 anni" (lo
stesso aggancio del format YouTube "dal punto di vista di un sedicenne") seguito da una
frase che si scrive, resta ferma, si cancella e lascia il posto alla successiva.

Le frasi sono solo **cose concrete già fatte**; la lista cresce nel tempo: quando Michele
completa qualcosa di nuovo aggiunge una riga.

## Cosa verrà fatto

- Sotto "Ciao, sono Michele 👋" la riga arancione in mono diventa:
  `A 16 anni ` + frase rotante + cursore `_` arancione che lampeggia (lo stesso del logo
  `michele_`).
- Frasi iniziali, in ordine (prima la più forte):
  1. ho creato un'app per le interrogazioni della mia scuola
  2. ho aperto un brand e venduto tag NFC
  3. creo siti web per attività locali
  4. parlo di tecnologia su YouTube
  5. assemblo computer
- "racconto le mie passioni e la mia crescita" passa nel paragrafo sotto, che diventa:
  "Questo è il diario pubblico del mio percorso, dove racconto le mie passioni e la mia
  crescita: ogni sito che consegno, ogni esperimento, ogni cosa che imparo finisce qui. Se
  hai un'attività e ti serve un sito, sei nel posto giusto."

## Comportamento

- Velocità scelta dopo il confronto in anteprima ("Più veloce"): scrittura 28ms per
  lettera più 0–22ms casuali (sembra digitata da una persona), cancellazione 14ms per
  lettera, 250ms prima della frase successiva; poi ricomincia dalla prima.
- Pausa sulla frase completa proporzionale alla lunghezza: 1200ms + 20ms per lettera (le
  frasi corte scorrono, le lunghe si leggono). La prima frase resta ferma 3s, perché chi
  arriva guarda prima foto e titolo.
- Al caricamento (e nell'HTML generato dal server) c'è già la prima frase intera: chi
  arriva, Google e chi ha JavaScript spento leggono subito qualcosa di sensato.
  L'animazione parte cancellando la prima frase dopo la pausa.
- La pagina non "salta" quando una frase va a capo: nella stessa cella di una griglia
  CSS c'è, invisibile, la frase più lunga, che riserva sempre l'altezza giusta a
  qualsiasi larghezza (su telefono la frase più lunga occupa 3 righe).
- Si ferma quando la scheda non è visibile (`visibilitychange`) e riparte al ritorno.
- Accessibilità: il testo che si scrive è `aria-hidden`; per i lettori di schermo c'è un
  testo nascosto con tutte le frasi ("A 16 anni ho creato…, ho aperto…, …").
- "Riduci movimento" attivo: niente scrittura lettera per lettera; la frase cambia intera
  ogni 3 secondi e il cursore non lampeggia.

## Come verrà sviluppato

- **`content/cose-che-faccio.ts`** (nuovo): `export const coseCheFaccio: string[]`, con
  un commento che spiega che l'ordine conta e che si aggiunge una riga per ogni cosa nuova.
- **`components/home/frase-rotante.tsx`** (nuovo, client component): riceve le frasi
  come prop, gestisce le fasi scrittura → pausa → cancellazione con un `setTimeout` per
  passo dentro `useEffect`, pulito allo smontaggio; legge `prefers-reduced-motion` con
  `matchMedia`.
- **`components/home/hero.tsx`**: il `<p>` del sottotitolo usa `<FraseRotante>`; il
  paragrafo sotto viene aggiornato come sopra.
- Il cursore riusa il token `animate-cursore-continuo` già definito in `globals.css`
  (con `motion-safe:`).

Nessuna nuova dipendenza.

## Verifica

`npm run build` + lint sui sorgenti; in dev: ciclo completo delle frasi, light/dark,
mobile (nessun salto di layout), scheda in background, "Riduci movimento", HTML iniziale
con la prima frase (curl della home).
