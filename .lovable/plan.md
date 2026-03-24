

## Piano: Immagine hero più grande su desktop

### Problema
Su mobile l'immagine con `object-contain` va bene (auto visibile per intero). Su desktop però la macchina appare troppo piccola perché `object-contain` lascia molto spazio vuoto.

### Soluzione
Usare `object-cover` su desktop e `object-contain` solo su mobile:
- Classe immagine: `object-contain md:object-cover`

Questo fa sì che su desktop l'immagine riempia tutta la hero section mostrando la macchina grande, mentre su mobile resta visibile per intero senza crop.

### Modifica in `src/pages/Index.tsx`

**Riga 26** — cambiare la classe dell'`<img>`:
```
// Da:
className="absolute inset-0 w-full h-full object-contain"

// A:
className="absolute inset-0 w-full h-full object-contain md:object-cover"
```

Una sola riga da modificare.

