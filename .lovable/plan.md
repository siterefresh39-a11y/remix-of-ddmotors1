

## Piano: Immagini distribuite nel testo per entrambe le sezioni

### Cosa cambia

Invece di raggruppare le immagini in un unico blocco gallery, distribuirle strategicamente tra le sezioni di testo sia in **Fotografi** che in **Selective Club+**.

### Immagini da generare (6 totali)

**Fotografi** (3 immagini, stile dark/silhouette/warm amber):
1. `src/assets/fotografi-1.jpg` — "Dark cinematic illustration of a photographer shooting a sports car at a racetrack, silhouette with camera, warm amber accent lights, black background"
2. `src/assets/fotografi-2.jpg` — "Dark minimal illustration of a videographer filming a car event, silhouette with camera gear, warm golden light trails, black background"
3. `src/assets/fotografi-3.jpg` — "Dark cinematic illustration of photographers collaborating at a car meet, silhouettes with cameras around supercars, ambient warm lighting, black background"

**Selective Club+**: usa le 3 immagini già generate (selective-1/2/3.jpg)

### Distribuzione immagini — Fotografi

Rimuovere qualsiasi gallery block. Inserire singole immagini full-width (rounded, fadeUp) tra le sezioni:
- **Immagine 1** → tra Hero e "Cos'è DDMotors"
- **Immagine 2** → tra "Cosa ottieni" e "La Visione"
- **Immagine 3** → tra "La Visione" e CTA WhatsApp

### Distribuzione immagini — Selective Club+

Rimuovere il blocco gallery (righe 192-208). Inserire singole immagini:
- **selective-1** → tra Hero e "Cosa offriamo"
- **selective-2** → tra "Cosa offriamo" e "Accesso limitato"
- **selective-3** → tra "Accesso limitato" e CTA WhatsApp

### Stile immagine singola (uguale per tutte)
```jsx
<section className="section-padding py-8">
  <motion.div className="max-w-4xl mx-auto" {...fadeUp}>
    <img src={image} alt="..." className="w-full rounded-lg object-cover h-56 md:h-72" loading="lazy" />
  </motion.div>
</section>
```

### Modifiche in `src/pages/Community.tsx`
1. Importare le 3 nuove immagini fotografi
2. Rimuovere il blocco gallery dal Selective Club+
3. Inserire 6 sezioni immagine singola distribuite come descritto sopra

