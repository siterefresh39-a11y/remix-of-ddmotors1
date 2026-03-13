

## Sostituzione locandine con versioni WebP

Le 3 immagini caricate sono le nuove copertine degli eventi in formato WebP:

1. `WhatsApp_Image_2026-03-02_at_22.39.08.webp` → copertina **Cars & Bikes Meeting** (ev4) — sostituisce `cars-bikes-meeting-cover.jpg`
2. `FRONTE_PROVA_1.webp` → copertina **DDMOTORS NIGHT** (ev5) — sostituisce `locandina-ddmotors-night.jpeg`
3. `WhatsApp_Image_2026-03-10_at_21.33.58.webp` → copertina **MOTTA DRIVE** (ev6) — sostituisce `motta-drive-cover.jpg`

### Modifiche

1. Copiare i 3 file WebP in `src/assets/` con nomi puliti:
   - `cars-bikes-meeting-cover.webp`
   - `locandina-ddmotors-night.webp`
   - `motta-drive-cover.webp`

2. **`src/lib/eventStore.ts`**: aggiornare le 3 righe di import per puntare ai nuovi file `.webp` invece dei vecchi `.jpg`/`.jpeg`.

Nessuna altra modifica necessaria — tutti i componenti usano già le variabili importate.

