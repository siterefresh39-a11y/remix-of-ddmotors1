

## Aggiunta evento "SUNSET DRIVE" — Piano aggiornato

Includendo mappa, calendario e tag DDMOTORS DRIVE come richiesto.

### Modifiche

**1. Copiare immagini in `src/assets/`**
- `locandina.jpeg` → `sunset-drive-cover.jpeg`
- 4 foto galleria → `sunset-1.jpeg`, `sunset-2.jpeg`, `sunset-3.jpeg`, `sunset-4.jpeg`

**2. `src/lib/eventStore.ts`**
- Import delle 5 nuove immagini
- Aggiungere `ev7` in prima posizione nell'array `defaultEvents`:
  - Titolo: "SUNSET DRIVE"
  - Data: "21 Marzo 2026"
  - Status: "Prossimo"
  - Tag: **"DDMOTORS DRIVE"**
  - Location: "Lungolago Laveno"
  - Coords: **[45.9042, 8.6156]** (Laveno-Mombello) — visibile su mappa e calendario
- Aggiungere 4 foto in `defaultPhotos` con `eventId: "ev7"`

**3. `src/pages/Index.tsx`**
- Mostrare solo i primi 3 eventi nella homepage (ev7, ev6, ev5) — escludendo "Cars & Bikes" (ev4) dalla sezione "PROSSIMI EVENTI"

**4. `src/components/EventDetailDialog.tsx`**
- Aggiungere blocco per `ev7` con locandina, info evento (data, luogo, cena, collab @selectivesocial.club x @dd.motors_official)

**Risultato**: L'evento apparira automaticamente nella mappa interattiva del Calendario con il pin a Laveno, filtrato sotto "DDMOTORS DRIVE", e sincronizzato con la lista eventi.

