# Deploy su Vercel via GitHub

**Data:** 2026-07-15
**Stato:** completato (2026-07-18) — online su https://sito-personale-five.vercel.app (repo: https://github.com/hamikeck/sito-personale)

## Obiettivo

Portare il sito online: repository pubblico `sito-personal` su GitHub
(account hamikeck) collegato a Vercel, così ogni `git push` su `main`
pubblica automaticamente. Nessuna modifica al codice prevista.

## Passi

1. **Chiave SSH** (Claude): genera `~/.ssh/id_ed25519` (ed25519, senza
   passphrase) e configura `git` per usarla con GitHub.
2. **Chiave su GitHub** (Michele): incolla la chiave pubblica su
   https://github.com/settings/keys → "New SSH key".
3. **Repo su GitHub** (Michele): crea `sito-personal`, pubblico, VUOTO
   (senza README/.gitignore/licenza, il repo locale ha già tutto) su
   https://github.com/new
4. **Push** (Claude): `git remote add origin
   git@github.com:hamikeck/sito-personal.git` e push di `main`.
5. **Vercel** (Michele, nel browser): su https://vercel.com accedi con
   "Continue with GitHub", autorizza, "Add New → Project", importa
   `sito-personal`, lascia i default (Next.js viene riconosciuto da solo)
   e premi Deploy.
6. **Verifica** (insieme): il sito risponde sull'URL `*.vercel.app`
   generato; controllo di homepage, blog e immagini.

## Note

- Gli accessi (chiave su GitHub, login/autorizzazioni Vercel) li fa
  Michele nel browser: sono i suoi account.
- `lib/site.ts` ha `siteUrl = "https://michelecacciapuoti.it"` (dominio
  ancora da confermare): sitemap e metadata puntano lì anche se per ora
  l'URL reale sarà `*.vercel.app`. Non blocca il deploy; si sistema
  quando il dominio sarà deciso e collegato a Vercel.
- Costi: zero (piano Hobby di Vercel, repo GitHub gratuito).
