

## Piano: Checkbox privacy + pagina informativa nel modulo contatti

### Cosa cambia

**1. Nuova pagina `/privacy`** (`src/pages/Privacy.tsx`)
Informativa privacy semplice con:
- Titolare: Devis degli Esposti
- Dati raccolti: nome ed email
- Finalità: rispondere alla richiesta di contatto
- Conservazione: solo il tempo necessario a rispondere, poi eliminati
- Contatti/diritti: ddmotorsofficial@gmail.com

**2. Rotta in `src/App.tsx`**
Aggiunta `<Route path="/privacy" element={<Privacy />} />`.

**3. Modifica `src/pages/Contact.tsx`**
- Stato `privacyRead` (boolean, default false) — diventa true quando l'utente clicca sul link "informativa privacy".
- Stato `privacyAccepted` (boolean, default false) — la checkbox.
- Stato `privacyError` (boolean) — mostra errore rosso.
- Il link "informativa privacy" nel testo della checkbox apre `/privacy` in nuova tab e setta `privacyRead = true`.
- La checkbox è disabilitata finché `privacyRead` è false; se l'utente prova a spuntarla senza aver cliccato, non succede nulla.
- Al submit, se la checkbox non è spuntata mostra messaggio rosso tipo "Devi prima leggere l'informativa privacy. Clicca qui per leggerla." con "clicca qui" come link alla pagina privacy.
- Social links aggiornati: Instagram → link corretto, Facebook → TikTok (come già nel footer), Mail → ddmotorsofficial@gmail.com.

**4. Link privacy nel Footer** (`src/components/Footer.tsx`)
Aggiunta link "Privacy" che porta a `/privacy`.

