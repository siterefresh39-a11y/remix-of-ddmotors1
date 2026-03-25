

## Piano di correzione - 3 problemi

### 1. Link privacy nella pagina Contatti non funziona
Il link "informativa privacy" in `handlePrivacyLinkClick` apre `/privacy` senza il `basename` del router (`/remix-of-ddmotors1` in produzione). Va corretto usando il basename corretto.

**File**: `src/pages/Contact.tsx`
- Cambiare `window.open("/privacy", "_blank")` per includere il basename in produzione: `window.open(\`${import.meta.env.PROD ? '/remix-of-ddmotors1' : ''}/privacy\`, "_blank")`

### 2. Conferma invio messaggio più visibile
Attualmente il messaggio "Messaggio inviato!" appare come testo piccolo sotto il bottone. Lo renderemo più evidente con un toast di successo.

**File**: `src/pages/Contact.tsx`
- Aggiungere un `toast` di successo dopo l'invio (es. "Messaggio inviato! Ti risponderemo presto.")
- Mantenere anche il feedback visivo inline

### 3. Pulsanti WhatsApp nella pagina Community
Attualmente il pulsante "Entra nella community" in cima a entrambe le sezioni ha `href="#"` (non funziona). Sia per Fotografi che per Selective Club, il primo e l'ultimo pulsante devono portare al link WhatsApp.

**File**: `src/pages/Community.tsx`
- **Fotografi**: Cambiare il bottone hero (riga 98) da `href="#"` al link WhatsApp `https://chat.whatsapp.com/H1Qxkmmksnz2Xc0c49Jzjn?mode=gi_t` (stesso dell'ultimo)
- **Selective Club**: Cambiare il bottone hero (riga 202-204) da `href="#"` al link WhatsApp. Anche il bottone finale (riga 257) ha `href="#"` — va aggiunto un link WhatsApp (serve un link specifico per Selective, oppure uso lo stesso dei Fotografi)

