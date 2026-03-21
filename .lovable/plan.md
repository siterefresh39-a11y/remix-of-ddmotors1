

## Piano: Pagina Community completa

### Struttura della pagina

Riscrivere `src/pages/Community.tsx` con le seguenti sezioni, usando `framer-motion` per le animazioni (stesso pattern di About/Index):

1. **Hero** — Titolo grande "LA COMMUNITY PER CHI VUOLE RACCONTARE L'AUTOMOTIVE", sottotitolo, pulsante "Entra nella community" (link `#` per ora)

2. **Cos'è DDMotors** — Due paragrafi descrittivi con animazione fade-in al scroll

3. **Cosa ottieni** — Griglia/lista con le 5 voci (📸 📹 🚗 🤝 🚀), ogni voce in una card scura

4. **La Visione** — Testo narrativo con enfasi su "Non è solo una community" e "Questo è solo l'inizio"

5. **CTA finale** — Pulsante "Entra nel canale WhatsApp" (link `#` placeholder), prominente con styling primario

### Dettagli tecnici

- **File**: `src/pages/Community.tsx`
- **Dipendenze**: `framer-motion`, `Button` da `@/components/ui/button`, `lucide-react` per icone
- **Stile**: Dark theme coerente col resto del sito, `section-padding`, `section-title`, `section-subtitle` classes
- **Pulsanti WhatsApp**: `<a href="#">` wrappati in `Button`, non navigano da nessuna parte per ora

