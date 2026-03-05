

## Piano di ottimizzazione completo

### 1. Eliminare duplicazione dialog eventi
Creare un componente condiviso `src/components/EventDetailDialog.tsx` che contiene tutto il contenuto dei dialog per ev4 e ev5. Sia `Index.tsx` che `Events.tsx` lo importeranno e useranno, eliminando ~100 righe duplicate.

### 2. Sincronizzare dati Home con eventStore
In `Index.tsx`, l'array `events` (righe 26-29) ha date e descrizioni diverse da `eventStore.ts`. Sostituire con `loadEvents()` dal store e aggiungere l'evento "Urban Meet" (event3) come terzo elemento nel store, oppure tenerlo come dato locale ma derivando ev4/ev5 dallo store.

### 3. Aggiungere `loading="lazy"` dove manca
- Hero background in `Index.tsx` (riga 38): e un `background-image` CSS, non un `<img>`, quindi non si applica `loading="lazy"`. Va bene cosi -- l'utente vuole che le immagini della home si carichino subito.
- Immagine "Chi siamo" (riga 192): gia ha `loading="lazy"` -- ok.
- Le card eventi nella home (riga 134): hanno gia `loading="lazy"` -- **ma l'utente vuole che si carichino subito**. Quindi rimuovere `loading="lazy"` dalle immagini della home, e assicurarsi che rimanga su Gallery e Events.

### 4. Aggiungere `width`/`height` alle immagini
Aggiungere attributi `width` e `height` espliciti alle `<img>` per evitare layout shift (CLS). Non cambia nulla visivamente grazie a `object-cover`/`object-contain`.

### 5. Aggiungere Error Boundary base
Creare `src/components/ErrorBoundary.tsx` come class component React, wrappare l'app in `App.tsx` per catturare errori di rendering e mostrare un fallback.

---

### Dettagli tecnici

**File da creare:**
- `src/components/EventDetailDialog.tsx` -- riceve `eventId: string | null` e `onClose`, renderizza il dialog con il contenuto di ev4/ev5
- `src/components/ErrorBoundary.tsx` -- class component con `componentDidCatch`

**File da modificare:**
- `src/pages/Index.tsx` -- importare `EventDetailDialog`, rimuovere dialog inline, usare dati da eventStore per ev4/ev5, rimuovere `loading="lazy"` dalle card eventi (l'utente le vuole caricate subito)
- `src/pages/Events.tsx` -- importare `EventDetailDialog`, rimuovere dialog inline
- `src/App.tsx` -- wrappare con `ErrorBoundary`
- `src/lib/eventStore.ts` -- nessuna modifica necessaria

**Immagini home (requisito utente):** Le immagini nella home NON avranno `loading="lazy"`, in modo che si carichino immediatamente come gia avviene ora. Le immagini nelle altre pagine manterranno `loading="lazy"`.

