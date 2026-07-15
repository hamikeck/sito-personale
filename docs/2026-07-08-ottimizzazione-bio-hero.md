# Ottimizzazione bio nella hero

**Data:** 2026-07-08
**Stato:** implementato (2026-07-14)

## Obiettivo

Rendere la bio della homepage più incisiva, con taglio "storia in corso"
(building in public): l'età resta il gancio in evidenza, il percorso
documentato sul blog è il cuore del messaggio, l'invito commerciale chiude
il paragrafo. Decisioni prese insieme:

- pubblico: clienti locali e lettori del blog **in equilibrio**;
- il dettaglio "16 anni" resta **in evidenza** nella riga sotto il titolo;
- si può affermare che esistono **siti già online per clienti reali**.

## Cosa cambia

Solo il testo in `components/home/hero.tsx` (righe 13–25). Nessun cambiamento
a layout, stili o altri componenti.

| Elemento | Attuale | Nuovo |
| --- | --- | --- |
| Titolo (`h1`) | Ciao, sono Michele 👋 | invariato |
| Riga mono sotto il titolo | 16 anni, creo siti per attività locali | A 16 anni ho già messo online i primi siti per attività locali |
| Paragrafo | Aiuto negozi e attività locali a farsi trovare online, un sito alla volta. Questo è il mio spazio: sul blog racconto progetti, esperimenti e tutto quello che imparo lungo la strada. | Questo è il diario pubblico del mio percorso: ogni sito che consegno, ogni esperimento, ogni cosa che imparo finisce qui. Se hai un'attività e ti serve un sito, sei nel posto giusto. |

## Note

- La nuova riga mono è più lunga dell'attuale: su mobile andrà a capo, è
  previsto e accettabile (resta `text-lg`/`text-xl` con wrap naturale).
- L'affermazione "ho già messo online i primi siti" sarà credibile solo
  quando `content/progetti.ts` conterrà i progetti reali al posto del
  placeholder: aggiornare i progetti è fuori scope qui, ma va fatto prima
  o insieme alla pubblicazione di questa modifica.
- I bottoni CTA ("Guarda i progetti ↓", "Leggi il blog") restano invariati:
  sono coerenti con il nuovo testo.

## Verifica

- `npm run build` come controllo (non ci sono test).
- Controllo visivo su http://localhost:3000 (desktop + viewport mobile).
