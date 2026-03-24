

## Piano: Migliorare estetica pulsanti WhatsApp

### Cosa cambia

Sostituire i due `<Button>` WhatsApp con lo stesso stile del pulsante "Vedi tutte le foto" della galleria: un link inline con sfondo primary, font display, tracking wider, bordi arrotondati, e transizione hover.

### Modifiche in `src/pages/Community.tsx`

**Riga 174-176** (Fotografi) — da:
```jsx
<Button size="lg" asChild>
  <a href="#">👉 Entra nel canale WhatsApp</a>
</Button>
```
a:
```jsx
<a href="#" target="_blank" rel="noopener noreferrer"
   className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider text-sm md:text-base hover:bg-primary/90 transition-colors rounded">
  👉 Entra nel canale WhatsApp <ExternalLink size={16} />
</a>
```

**Riga 256-258** (Selective Club+) — stessa trasformazione con "Entra nel gruppo WhatsApp".

Aggiungere `ExternalLink` all'import da lucide-react (se non già presente).

