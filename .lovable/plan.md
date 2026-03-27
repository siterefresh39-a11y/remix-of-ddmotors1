

## Modifica immagine hero "Chi Siamo" — Fari accesi

### Cosa faremo
Useremo l'AI image editing per prendere l'immagine attuale (`about-hero-tahoe.jpg`) e generare una versione con i fari accesi, mantenendo tutto il resto identico.

### Passaggi

1. Copiare lo script AI gateway in `/tmp/`
2. Usare il modello di editing immagini (`google/gemini-2.5-flash-image`) con il prompt "Turn on the car headlights, make them glow realistically with light beams" sull'immagine esistente `src/assets/about-hero-tahoe.jpg`
3. Salvare il risultato come nuovo asset `src/assets/about-hero-tahoe-lights.jpg`
4. Aggiornare l'import in `src/pages/About.tsx` per usare la nuova immagine
5. QA visiva del risultato

Nessuna modifica a layout, stili o funzionalità.

