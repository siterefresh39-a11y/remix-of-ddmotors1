

## Problema

La pagina Calendario crasha con l'errore `render2 is not a function` dentro `MapContainer` di react-leaflet. Questo è un problema noto: react-leaflet carica una propria copia di React, creando un conflitto di istanze duplicate.

## Soluzione

Aggiungere `dedupe: ["react", "react-dom", "react/jsx-runtime"]` nella sezione `resolve` di `vite.config.ts`. Questo forza Vite a usare una singola istanza di React per tutti i pacchetti.

### File da modificare

**`vite.config.ts`** — aggiungere `dedupe` dentro `resolve`:

```ts
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
  },
  dedupe: ["react", "react-dom", "react/jsx-runtime"],
},
```

Nessun altro file da toccare.

