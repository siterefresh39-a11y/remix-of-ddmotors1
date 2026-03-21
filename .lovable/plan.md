

## Piano: Fix percorso video hero

### Problema
Il video è referenziato con percorso assoluto `/videos/hero.mp4`, ma:
- Su **GitHub Pages** il base path è `/remix-of-ddmotors1/`, quindi il browser cerca `/videos/hero.mp4` invece di `/remix-of-ddmotors1/videos/hero.mp4` → 404
- Su **Lovable preview** potrebbe avere lo stesso problema o il file non viene servito

### Soluzione
Spostare il video in `src/assets/` e importarlo come modulo, così Vite risolve il percorso corretto automaticamente in ogni ambiente.

### Modifiche

1. **Spostare il file** `public/videos/hero.mp4` → `src/assets/hero.mp4`
2. **In `src/pages/Index.tsx`**:
   - Aggiungere `import heroVideo from "@/assets/hero.mp4";`
   - Cambiare `<source src="/videos/hero.mp4"` → `<source src={heroVideo}`
   - Aggiungere dichiarazione tipo per `.mp4` in `src/vite-env.d.ts` se non presente

Questo fa sì che Vite gestisca il percorso corretto sia in dev che in produzione, indipendentemente dal base path.

