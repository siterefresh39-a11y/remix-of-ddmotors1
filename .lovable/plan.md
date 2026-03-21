

## Piano: Homepage — titolo eventi + riquadri Community e Progetti

### 1. Rinominare sezione eventi
In `src/pages/Index.tsx`, cambio il titolo da "EVENTI RECENTI" a "PROSSIMI EVENTI". Gli eventi mostrati restano gli stessi.

### 2. Aggiungere sezione riquadri Community e Progetti
Sotto la sezione eventi (e sopra "Chi Siamo"), aggiungo due card grandi affiancate (griglia 1 colonna mobile, 2 colonne desktop) con lo stesso stile delle event card:
- Immagine di sfondo (riutilizzo asset esistenti come placeholder)
- Overlay scuro con effetto hover
- Titolo + breve descrizione
- Click → naviga a `/community` e `/progetti`

### 3. Creare le pagine placeholder
- `src/pages/Community.tsx` — pagina segnaposto con titolo "COMMUNITY" e testo "Coming soon"
- `src/pages/Projects.tsx` — pagina segnaposto con titolo "PROGETTI" e testo "Coming soon"

### 4. Aggiungere le rotte
In `src/App.tsx`, aggiungo `<Route path="/community">` e `<Route path="/progetti">`.

### Dettagli tecnici
- Le card usano le classi CSS esistenti `event-card` e `event-card-overlay` per coerenza visiva
- Animazioni framer-motion identiche alle event card (fade-in + slide-up)
- Aspect ratio `3/2` per le card orizzontali (più larghe delle event card verticali)
- Le pagine placeholder incluiscono il `BackToHome` FAB già presente nelle altre pagine

