

## Piano: Redesign completo della scheda Selective Club+

### Cosa cambia

Sostituire il placeholder "Coming Soon" con il contenuto completo fornito, aggiungere 2-3 immagini AI generate nello stile delle copertine community (dark, silhouette, accenti caldi), e il pulsante WhatsApp.

### Immagini da generare (3 immagini, stile copertina community)

Usando Nano banana pro, stile dark/minimal con silhouette e accenti warm amber su sfondo nero:

1. `src/assets/selective-1.jpg` — "Dark cinematic illustration of luxury cars lined up on a scenic mountain road at sunset, silhouettes of drivers, warm amber accent lights, black background, exclusive automotive rally atmosphere"
2. `src/assets/selective-2.jpg` — "Dark minimal illustration of a group driving experience, sports cars in formation on a curated route, warm golden light trails, black background, exclusive club vibe"
3. `src/assets/selective-3.jpg` — "Dark cinematic illustration of an exclusive automotive networking event, silhouettes of enthusiasts around supercars, ambient warm lighting, black background, premium club atmosphere"

### Struttura della sezione Selective Club+ in `src/pages/Community.tsx`

Sostituire il contenuto attuale (righe 152-176) con:

1. **Hero** — Logo Crown + titolo "Non partecipare. Vivi." + sottotitolo descrittivo + pulsante "Entra nella community"
2. **Gallery strip** — 3 immagini generate, disposte in griglia responsive (1 col mobile, 3 col desktop) con bordi arrotondati
3. **Cosa offriamo** — Griglia di 5 card (stesse animazioni della sezione Fotografi) con le icone:
   - Flag → Raduni dinamici su percorsi selezionati
   - Car → Esperienze di guida in gruppo
   - MapPin → Location e itinerari curati
   - Target → Eventi organizzati nei dettagli
   - Users → Networking con appassionati selezionati
4. **Accesso limitato** — Testo "L'accesso al club è limitato." + sottotesto sulla selezione
5. **CTA WhatsApp** — Pulsante identico a quello della sezione Fotografi

### Import aggiuntivi
- `Flag, MapPin, Target` da lucide-react
- Le 3 immagini generate

