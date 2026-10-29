# UI kit — Canale YouTube

Grafiche del canale convertite dall'identità lime + Inter alla palette del sito (terracotta, ambra, crema, marrone) e a Geist / Geist Mono.

- `index.html` — tre viste: **miniatura** (1920×1080), **video** (sequenza di sovraimpressioni su fotogramma scuro o chiaro: capitolo, scheda app, etichette, frase chiave, schermata finale), **banner** (2048×1152 con area sicura).
- `stage.jsx` — `Stage` (scala un frame a pixel fissi) e `Fotogramma` (fotogramma finto: foto reale per camera fissa, segnaposto per la ripresa dall'alto).

Questo kit è un progetto nuovo, non una ricostruzione: le grafiche precedenti erano solo esempi (vedi `assets/youtube/*-legacy.*`). Per le miniature vere servono le foto della scrivania dall'alto e le icone reali delle app (PNG).
