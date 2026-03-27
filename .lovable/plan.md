

## Pop-up "Evento già passato" per i pulsanti di iscrizione

### Cosa cambia
Quando clicchi "Clicca qui per iscrivere la tua auto" su un evento passato, invece di non fare nulla apparirà un pop-up che dice che l'evento è già passato. Per eventi futuri il link funzionerà normalmente.

### Dettagli tecnici

**File: `src/components/EventDetailDialog.tsx`**

- Aggiungere uno stato `showExpiredAlert` (boolean)
- Sostituire tutti i 4 link `<a href="#">...Clicca qui per iscrivere la tua auto...</a>` con un `<button>` che:
  - Per eventi con `status === "Passato"`: al click mostra un `AlertDialog` con messaggio "Questo evento è già passato, non è più possibile iscriversi"
  - Per eventi con `status === "Prossimo"`: mantiene il comportamento link normale (per ora `href="#"`, pronto per un URL futuro)
- Il controllo si basa sul campo `event.status` già presente nel data model
- L'`AlertDialog` avrà un solo pulsante "Ho capito" per chiuderlo

**Nessuna modifica** a eventStore, pagine eventi, homepage o altri componenti.

