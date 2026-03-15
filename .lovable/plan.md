

## Mappa interattiva con Leaflet — Segnalini per ogni evento

### Cosa si ottiene
- Tutti i segnalini degli eventi visibili contemporaneamente sulla mappa
- Click su un evento nella lista → segnalino diventa **bianco**, mappa si centra su di esso con popup (titolo + data)
- Stile mappa scuro (CartoDB Dark Matter) coerente con l'estetica del sito

### Modifiche

**1. Installare dipendenze**
- `leaflet` + `@types/leaflet`

**2. `src/lib/eventStore.ts`** — Aggiungere `coords` all'interfaccia e ai dati:
```ts
coords?: [number, number]; // [lat, lng]
```
- ev6 Mottarone → `[45.8742, 8.4428]`
- ev5 Bareggio → `[45.3992, 8.9931]`
- ev4 Trezzano → `[45.4261, 9.0694]`

**3. `src/components/EventMap.tsx`** (nuovo) — Componente Leaflet:
- Inizializza mappa con tile CartoDB dark_all + filtri CSS (grayscale/invert per coerenza)
- Crea marker per ogni evento con coordinate, usando icone SVG custom
- Marker default: colore rosso/scuro
- Marker selezionato: colore **bianco**, popup aperto, mappa centra + zoom
- Props: `events: EventItem[]`, `selectedEventId: string | null`
- Usa `useEffect` per reagire ai cambi di selezione

**4. `src/pages/CalendarPage.tsx`** — Integrazione:
- Aggiungere stato `selectedEventId`
- Click su card evento → `setSelectedEventId(event.id)` (toggle se già selezionato)
- Sostituire iframe con `<EventMap events={filtered} selectedEventId={selectedEventId} />`
- Stile `cursor-pointer` sulle card + evidenziazione visiva della card selezionata (bordo bianco)

