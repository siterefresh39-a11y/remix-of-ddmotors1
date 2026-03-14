

## Ottimizzazione SEO e branding DD Motors

### Stato attuale

- **`index.html`**: i meta tag sono già corretti con "DDMotors" come brand
- **Riferimenti a Lovable**: presenti solo in `lovable-tagger` (dev dependency) e lock files — NON finiscono nel codice pubblicato, quindi nessun problema
- **Mancanze SEO importanti**: manca il `sitemap.xml`, mancano i dati strutturati (JSON-LD Schema.org), e mancano `og:image`, `og:url` e `twitter:image` nei meta tag

### Modifiche previste

1. **`index.html`** — Aggiungere:
   - Meta tag `og:url`, `og:image`, `twitter:image`, `twitter:title`, `twitter:description`
   - Tag `<link rel="canonical">`  
   - Dati strutturati JSON-LD (Schema.org `Organization`) con nome "DD Motors"
   - Meta `theme-color`

2. **`public/robots.txt`** — Aggiungere riferimento al `Sitemap`

3. **`public/sitemap.xml`** — Creare sitemap con le pagine principali (`/`, `/chi-siamo`, `/raduni`, `/galleria`, `/calendario`, `/contatti`)

4. **`public/manifest.json`** — Creare web app manifest con nome "DD Motors" (utile per PWA e Google)

Queste modifiche garantiscono che Google e i social network riconoscano il sito come "DD Motors" in modo chiaro e strutturato. I riferimenti a Lovable nel codice sorgente sono solo strumenti di sviluppo e non vengono mai inclusi nel sito pubblicato.

