

## Piano: Video responsive per mobile + testo originale su desktop

### Problema
Su mobile il video con `object-cover` mostra solo la parte centrale della macchina (crop laterale). Su desktop il video dovrebbe essere più contenuto, non a schermo intero.

### Approccio
- **Mobile**: mantenere il video a tutto schermo ma usare `object-position` per mostrare una porzione migliore, oppure cambiare da `object-cover` a `object-contain` solo su mobile
- **Desktop**: ridurre l'altezza della hero section e contenere il video, ripristinando le dimensioni testo originali

### Modifiche in `src/pages/Index.tsx`

1. **Video responsive**:
   - Mobile: `object-contain` + sfondo nero → il video si vede interamente senza crop
   - Desktop: mantenere `object-cover` per effetto full-bleed
   - Classe: `object-contain md:object-cover`

2. **Testo ripristinato alle dimensioni originali** (pre-ingrandimento):
   - Titolo: da `text-5xl md:text-7xl lg:text-8xl` → `text-4xl md:text-6xl lg:text-7xl`
   - Slogan: da `text-lg md:text-2xl` → `text-base md:text-xl`

3. **Posizione del video su mobile**: il video con `object-contain` si centrerà naturalmente mostrando l'auto intera

