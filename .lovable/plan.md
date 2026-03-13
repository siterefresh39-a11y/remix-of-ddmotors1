

## Analisi: errori e problemi di performance trovati

### Problemi trovati

**1. Import inutilizzato** — `ddnight5` in `eventStore.ts` è importato ma mai usato. Viene incluso nel bundle aumentando inutilmente il peso (è un'immagine JPG).

**2. Warning React: ref su function component** — La console mostra l'errore "Function components cannot be given refs" su `EventDetailDialog`. Radix Dialog tenta di passare un ref al componente. Si risolve wrappando con `React.forwardRef`.

**3. Calcolo ripetuto nel render della Gallery** — Nella griglia (riga 77), `photos.filter(...)` viene ricalcolato per ogni evento ad ogni render. Si può pre-calcolare con `useMemo`.

**4. Attributi `width`/`height` mancanti** — Le immagini nella Gallery grid (riga 88) e nell'hero di About (riga 10) non hanno `width`/`height`, causando layout shift (CLS).

**5. Form contatti finto** — Il form in `Contact.tsx` non invia nulla. Non è un problema di performance, ma il feedback "Messaggio inviato" è fuorviante. (Non lo modifico perché richiede un backend — lo segnalo solo.)

---

### Piano modifiche

**File: `src/lib/eventStore.ts`**
- Rimuovere l'import di `ddnight5` (non usato).

**File: `src/components/EventDetailDialog.tsx`**
- Wrappare il componente con `React.forwardRef` per eliminare il warning.

**File: `src/pages/Gallery.tsx`**
- Pre-calcolare un `Map<eventId, count>` con `useMemo` invece di filtrare dentro il loop.
- Aggiungere `width`/`height` all'immagine nella griglia.

**File: `src/pages/About.tsx`**
- Aggiungere `width`/`height` all'immagine hero e a quella lazy.

Nessuna modifica estetica o funzionale.

