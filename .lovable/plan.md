

## Fix: Cambiare status SUNSET DRIVE a "Passato"

### Problema
L'evento SUNSET DRIVE (ev7) ha ancora `status: "Prossimo"` ma è già passato (21 Marzo 2026, oggi è 27 Marzo). Questo fa sì che il pulsante di iscrizione renda un link `<a href="#">` invece di mostrare l'AlertDialog.

### Modifica

**File: `src/lib/eventStore.ts`** (riga 59)
- Cambiare `status: "Prossimo"` → `status: "Passato"` per ev7 (SUNSET DRIVE)

Nessun'altra modifica necessaria — il `SignUpButton` già gestisce correttamente gli eventi con status "Passato".

