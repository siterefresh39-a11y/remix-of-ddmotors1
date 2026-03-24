

## Piano: Copertine personalizzate per i riquadri Community e Progetti

### Cosa cambia

Generare due immagini di copertina tramite AI e usarle nei riquadri della sezione "ESPLORA" nella homepage:

1. **Community** — Logo/illustrazione a tema community automotive (volanti, persone, auto, spirito di gruppo)
2. **Progetti** — Logo/illustrazione a tema progetti generici (ingranaggi, blueprint, lampadine, strumenti creativi — non solo motori)

### Modifiche

1. **Generare le due immagini** con Nano banana pro, stile dark/minimal coerente col sito:
   - `src/assets/community-cover.jpg` — community + motori
   - `src/assets/projects-cover.jpg` — progetti generici/creativi

2. **`src/pages/Index.tsx`**:
   - Aggiungere import delle due nuove immagini
   - Nella sezione ESPLORA, sostituire `img: aboutImg` con le rispettive copertine per Community e Progetti

### Prompt immagini (stile dark, sfondo nero, illustrazione moderna)
- **Community**: "Dark minimal illustration of an automotive community, silhouettes of people around cars, warm accent lights, black background, modern editorial style"
- **Progetti**: "Dark minimal illustration representing creative projects, gears, lightbulb, blueprints, tools, collaborative work, black background, modern editorial style"

