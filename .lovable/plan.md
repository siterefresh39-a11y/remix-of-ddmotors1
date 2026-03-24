

## Piano: Sostituire video hero con immagine

### Cosa cambia

Sostituire il video di sfondo nella hero section con l'immagine caricata (Chevrolet Tahoe su sfondo nero). L'immagine deve essere full-screen senza crop, specialmente su mobile.

### Modifiche

1. **Copiare l'immagine** in `src/assets/hero.jpg`

2. **Eliminare `src/assets/hero.mp4`** per liberare spazio

3. **`src/pages/Index.tsx`**:
   - Sostituire `import heroVideo from "@/assets/hero.mp4"` con `import heroImage from "@/assets/hero.jpg"`
   - Sostituire il tag `<video>` con un `<img>` con classi `absolute inset-0 w-full h-full object-contain` (su tutte le dimensioni, per non tagliare mai l'immagine). Lo sfondo nero della sezione (`bg-black`) colmerà le bande laterali/superiori
   - Cambiare `bg-background` della section in `bg-black` per coerenza con lo sfondo nero dell'immagine
   - Ridurre l'overlay da `bg-background/50` a `bg-black/30` per mantenere visibilità

4. **`src/vite-env.d.ts`**: rimuovere la dichiarazione `*.mp4` (non più necessaria)

### Risultato
- Desktop: immagine centrata a schermo intero, bande nere sopra/sotto se necessario
- Mobile: immagine visibile per intero senza crop, formato verticale dell'immagine si adatta bene

