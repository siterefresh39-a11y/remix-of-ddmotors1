

## Fix preview Lovable + GitHub Pages funzionante

Sì, ogni modifica che fai da Lovable viene pushata automaticamente su GitHub, e il workflow GitHub Actions ricostruisce e pubblica il sito. Quindi vedrai le modifiche anche sul link GitHub Pages dopo qualche minuto.

**Problema attuale**: il base path `/remix-of-ddmotors1/` è hardcoded, il che rompe la preview di Lovable. Serve renderlo condizionale.

### Modifiche

1. **`vite.config.ts`** (riga 8) — Base path solo in produzione:
   ```ts
   base: mode === "production" ? "/remix-of-ddmotors1/" : "/",
   ```

2. **`src/App.tsx`** (riga 26) — Basename condizionale:
   ```tsx
   <BrowserRouter basename={import.meta.env.PROD ? "/remix-of-ddmotors1" : "/"}>
   ```

Così:
- **Preview Lovable** → funziona (usa `/`)
- **GitHub Pages** → funziona (usa `/remix-of-ddmotors1/`)
- **Ogni modifica da Lovable** → push automatico → deploy automatico → visibile sul link GitHub Pages in ~2 minuti

