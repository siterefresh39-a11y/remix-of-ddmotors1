

## Piano: Video di sfondo nella Hero Section

### Cosa faremo
1. **Copiare il video** nella cartella `public/videos/` (meglio in public per evitare che Vite lo inlini nel bundle)
2. **Modificare la hero in `Index.tsx`**:
   - Aggiungere un tag `<video autoPlay muted loop playsInline>` come sfondo assoluto della hero
   - Overlay scuro semi-trasparente sopra il video per leggibilità del testo
   - Spostare titolo e slogan leggermente più in alto e ridurne la dimensione
   - Rimuovere o ridimensionare l'effetto headlight per non competere col video
3. **Nessun audio**: il tag `muted` garantisce silenzio totale

### Dettagli tecnici
- Video in `public/videos/hero.mp4`, referenziato come `/videos/hero.mp4`
- `object-fit: cover` + `position: absolute` + `inset-0` per coprire tutta la hero
- Overlay: `bg-black/50` sopra il video
- Titolo: riduco da `text-5xl md:text-7xl` a circa `text-3xl md:text-5xl`, con `top` spostato verso l'alto
- Fallback: se il video non carica, lo sfondo nero esistente resta visibile

