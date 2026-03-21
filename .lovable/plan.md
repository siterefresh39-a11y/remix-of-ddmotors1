

## Piano: Rimuovere immagine vecchia, pulizia hero, ingrandire testo

### Modifiche in `src/pages/Index.tsx`

1. **Rimuovere `import heroImg`** (riga 7) e il `poster={heroImg}` dal `<video>` (riga 41)
2. **Rimuovere logica heroPhase**: lo state `heroPhase` (riga 13), il `useEffect` con i timeout (righe 16-21), e le variabili derivate `headlightOpacity`, `beamOpacity`, `textVisible` (righe 23-25)
3. **Testo sempre visibile**: le animazioni framer-motion partono subito al mount (`animate={{ opacity: 1, y: 0 }}` senza condizione `textVisible`)
4. **Ingrandire il testo** mantenendolo nella parte alta:
   - Titolo: da `text-4xl md:text-6xl lg:text-7xl` → `text-5xl md:text-7xl lg:text-8xl`
   - Slogan: da `text-base md:text-xl` → `text-lg md:text-2xl`
   - Posizione resta invariata (`pt-[25vh] md:pt-[20vh]`)

