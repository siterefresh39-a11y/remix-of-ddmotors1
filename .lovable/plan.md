

## Piano: Tab Community — Fotografi + Selective Club+

### Struttura

La pagina Community avrà due tab in alto:
- **Fotografi** — il contenuto attuale (hero, cos'è, cosa ottieni, visione, CTA WhatsApp)
- **Selective Club+** — sezione "Coming Soon" con titolo, breve teaser e badge coming soon

### Modifiche in `src/pages/Community.tsx`

1. **Aggiungere state per tab attivo** (`useState`) — default "fotografi"
2. **Barra tab** in cima alla pagina con due pulsanti stilizzati (Fotografi / Selective Club+), evidenziando quello attivo
3. **Contenuto condizionale**:
   - Se tab = "fotografi" → mostra tutto il contenuto attuale invariato
   - Se tab = "selective" → mostra una sezione centrata con titolo "Selective Club+", un'icona/badge "Coming Soon" e un breve testo placeholder tipo "Qualcosa di esclusivo sta arrivando. Stay tuned."
4. Animazione `framer-motion` anche sul cambio tab (fade in)

Nessun nuovo file o route necessario — tutto gestito dentro la stessa pagina con state React.

