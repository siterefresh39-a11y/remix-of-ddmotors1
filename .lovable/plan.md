

## Favicon "DDMOTORS" — Piano

### Cosa faremo
Genereremo un'immagine favicon (PNG 64x64 e 180x180 per apple-touch-icon) con la scritta **DDMOTORS** in bianco su sfondo nero, usando il font **Oswald** (lo stesso `font-display` usato nel sito) con tracking largo.

### Passaggi

1. **Generare le favicon** tramite script Python (Pillow) che crea:
   - `public/favicon.png` (64x64) — scritta "DD" compatta bianca su nero
   - `public/favicon-192.png` (192x192) — scritta "DDMOTORS" completa
   - `public/apple-touch-icon.png` (180x180)

2. **Aggiornare `index.html`** — sostituire il riferimento favicon attuale con:
   ```html
   <link rel="icon" href="/favicon.png" type="image/png">
   <link rel="apple-touch-icon" href="/apple-touch-icon.png">
   ```

3. **Aggiornare `manifest.json`** — aggiornare gli icon paths

4. **Eliminare** `public/favicon.ico` se presente

### Dettaglio tecnico
- Font: Oswald Bold (Google Font, scaricato per rendering)
- A 64x64 la scritta completa "DDMOTORS" sarebbe illeggibile, quindi useremo "DD" per la favicon piccola e "DDMOTORS" per le icone più grandi
- Sfondo `#000000`, testo `#FFFFFF`, tracking largo

