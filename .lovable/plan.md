

## Audit pre-pubblicazione — Piano di ottimizzazione e sicurezza

### Analisi completata

Ho passato al setaccio ogni file del progetto. Ecco cosa ho trovato, diviso in ottimizzazione e sicurezza.

---

### A. File inutilizzati da eliminare

| File | Motivo |
|------|--------|
| `src/assets/event-2.jpg` | Non importata da nessun componente |
| `src/components/NavLink.tsx` | Componente mai usato (la Navbar usa Link diretto) |

---

### B. Ottimizzazioni codice (zero impatto estetico)

**1. `src/lib/eventStore.ts`** — `loadEvents()` e `loadPhotos()` creano copie (`[...array]`) ad ogni chiamata, ma i dati sono immutabili. Fuori dai componenti (es. `Index.tsx` riga 12, `EventDetailDialog.tsx` riga 20) vengono chiamati a livello di modulo — non serve la copia. Cambiare in `export const loadEvents = (): EventItem[] => defaultEvents;` e idem per `loadPhotos`.

**2. `src/components/EventDetailDialog.tsx`** — Il ramo `else` del `SignUpButton` (righe 55-65) rende un `<a href="#">` per eventi "Prossimo", ma non ci sono più eventi con quel status. Codice morto attualmente, ma utile per il futuro — lo lascerei com'è.

**3. `src/index.css`** — Le classi `.headlight` e `.headlight-beam` (righe 91-98) non sono usate da nessun componente. Rimuoverle.

**4. `src/components/ui/sidebar.tsx`** — Il componente Sidebar completo non è usato da nessuna pagina. Tuttavia è uno shadcn/ui standard e pesa poco nel bundle perché tree-shaking lo esclude se non importato. Lo lascerei.

---

### C. Problemi di sicurezza

**1. CRITICO — Credenziali EmailJS esposte nel codice sorgente**
In `Contact.tsx` (righe 33-41), il service ID, template ID e public key di EmailJS sono hardcoded. Chiunque può ispezionare il codice e usare queste credenziali per inviare email dal tuo account EmailJS. 

**Mitigazione raccomandata**: Configura nella dashboard EmailJS dei rate limit (es. max 5 email/ora per IP) e limita il dominio di origine (whitelist solo `ddmotors.it`). Queste sono chiavi pubbliche by design in EmailJS, ma i limiti evitano abusi.

**2. MEDIO — Nessuna validazione lunghezza input nel form contatti**
Nome, email e messaggio non hanno limiti di lunghezza. Un bot potrebbe inviare messaggi enormi. Aggiungere `maxLength` agli input (es. nome: 100, email: 255, messaggio: 2000).

**3. BASSO — Link WhatsApp esposti**
I link diretti ai gruppi WhatsApp in `Community.tsx` sono pubblici — chiunque visiti il sito può unirsi. Non è un bug ma va considerato se vuoi gruppi controllati.

**4. BASSO — `allPhotosLink` con URL placeholder**
`ev4` ha `allPhotosLink: ""` e `ev5` ha `allPhotosLink: "https://example.com/..."`. Se l'utente clicca "Vedi tutte le foto", il link va a un sito esterno fittizio. Sostituire con link reali o rimuovere.

**5. INFO — Nessun Content Security Policy (CSP)**
Il sito non ha header CSP. Per un sito statico senza backend non è critico, ma aggiungere un meta tag CSP in `index.html` migliorerebbe la protezione.

---

### Piano di implementazione

1. Eliminare `src/assets/event-2.jpg` e `src/components/NavLink.tsx`
2. Ottimizzare `loadEvents`/`loadPhotos` (rimuovere spread inutile)
3. Rimuovere classi CSS `.headlight` e `.headlight-beam` inutilizzate
4. Aggiungere `maxLength` ai campi del form contatti (nome: 100, email: 255, messaggio: 2000)
5. Correggere `allPhotosLink` di ev4 (stringa vuota) e ev5 (URL fittizio) — impostarli entrambi a `undefined` se non hai link reali
6. Documentare le configurazioni di sicurezza EmailJS da fare nella dashboard

Nessuna modifica estetica o funzionale.

