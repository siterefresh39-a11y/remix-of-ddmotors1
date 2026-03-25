

## Sostituzione immagine hero nella pagina Chi Siamo

### Cosa faremo
Useremo l'AI di generazione immagini (Nano banana) per creare una vista frontale del Chevrolet Tahoe partendo dalla foto caricata, su sfondo nero. L'immagine generata sostituirà l'attuale `about-hero.jpg` nella sezione hero della pagina "Chi siamo".

### Modifiche tecniche

**1. Generare l'immagine frontale**
- Usare l'API Gemini image editing con l'immagine caricata come input
- Prompt: generare una vista frontale drammatica della stessa auto, sfondo nero, stile cinematografico
- Salvare il risultato come `src/assets/about-hero-tahoe.jpg`

**2. Aggiornare `src/pages/About.tsx`**
- Cambiare l'import da `about-hero.jpg` a `about-hero-tahoe.jpg`
- Adattare le classi CSS dell'immagine hero per funzionare bene sia su mobile che desktop:
  - Mobile: `object-contain` per mostrare l'auto intera senza ritagli (stesso approccio della homepage)
  - Desktop: `object-cover` per effetto a tutto schermo
  - Sfondo nero sulla sezione per riempire eventuali margini

