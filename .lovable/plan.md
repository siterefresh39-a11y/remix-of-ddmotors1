

## Integrazione EmailJS nel modulo contatti

**Cosa faremo**: Quando un utente compila il form nella pagina Contatti e clicca "Invia", il messaggio arriverà direttamente alla tua email tramite EmailJS.

**Credenziali da usare** (pubbliche, sicure da inserire nel codice):
- Service ID: `service_jbkce5p`
- Template ID: `template_6fwoxvi`
- Public Key: `WTqSiaiPQLg4l4hz8`

---

### Modifiche tecniche

**1. Installare il pacchetto `@emailjs/browser`**

**2. Aggiornare `src/pages/Contact.tsx`**
- Importare `emailjs` da `@emailjs/browser`
- Aggiungere stato `sending` per disabilitare il bottone durante l'invio
- Rendere `handleSubmit` asincrono: chiamare `emailjs.send()` con i parametri `name`, `email`, `message`
- Gestire successo (mostra conferma) e errore (mostra messaggio di errore con toast)
- Il bottone mostrerà "Invio in corso..." mentre si invia

**Variabili del template** mappate così:
- `{{name}}` ← campo Nome
- `{{email}}` ← campo Email  
- `{{message}}` ← campo Messaggio

