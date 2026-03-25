

## Pulizia codebase — Solo rimozione file inutilizzati (zero impatto visivo)

Nessuna modifica estetica o funzionale. Solo eliminazione di file morti e un import inutilizzato.

### Modifiche

**1. Eliminare 7 immagini non referenziate da nessun file**
- `about-hero.jpg` (sostituita da `about-hero-tahoe.jpg`)
- `hero-headlights.jpg`
- `ddnight-5.jpg`
- `gallery-1.jpg`, `gallery-2.jpg`, `gallery-3.jpg`, `gallery-4.jpg`

Queste immagini non sono importate da nessun componente — rimuoverle non cambia nulla sul sito.

**2. Rimuovere import morto in `src/pages/Contact.tsx`**
- Togliere `X` dalla riga di import di lucide-react (non è più usato dopo la modifica al dialog privacy)

**Cosa NON tocchiamo:**
- Nessun componente UI
- Nessuna pagina
- Nessuno stile CSS
- Nessuna immagine attualmente visibile
- Nessuna conversione di formato (la cover SUNSET DRIVE resta jpeg)

