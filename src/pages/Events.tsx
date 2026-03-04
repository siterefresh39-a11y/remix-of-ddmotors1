import { useState } from "react";
import { motion } from "framer-motion";
import { EventItem, EVENT_TAGS, loadEvents } from "@/lib/eventStore";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Events = () => {
  const [events] = useState<EventItem[]>(loadEvents);
  const [filterTag, setFilterTag] = useState<string>("all");
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const filtered = filterTag === "all" ? events : events.filter((e) => e.tag === filterTag);

  // Sort: "Prossimo" first, then "Passato"
  const sorted = [...filtered].sort((a, b) => {
    if (a.status === "Prossimo" && b.status !== "Prossimo") return -1;
    if (a.status !== "Prossimo" && b.status === "Prossimo") return 1;
    return 0;
  });

  return (
    <section className="pt-24 md:pt-32 section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">
          EVENTI
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="section-subtitle mb-12 md:mb-20">Ogni evento è un'esperienza. Scopri gli eventi che hanno segnato la community e quelli che stanno per arrivare.

        </motion.p>

        {/* Tag filter dropdown */}
        <div className="mb-10">
          <select
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="bg-background border border-foreground/20 text-foreground px-5 py-3 text-sm font-body focus:outline-none focus:border-foreground/50 min-w-[220px]">

            <option value="all">Tutti gli eventi</option>
            {EVENT_TAGS.map((t) =>
            <option key={t} value={t}>{t}</option>
            )}
          </select>
        </div>

        {/* Events list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {sorted.map((event, i) =>
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="event-card group aspect-[3/4] relative max-w-lg mx-auto w-full cursor-pointer"
            onClick={() => setSelectedEvent(event)}>

              <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="event-card-overlay group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={`font-display text-xs tracking-widest uppercase px-3 py-1 border ${event.status === "Prossimo" ? "border-foreground/50 text-foreground" : "border-foreground/20 text-foreground/50"}`}>{event.status}</span>
                  <span className="font-display text-xs tracking-widest uppercase px-3 py-1 border border-foreground/30 text-foreground/70">{event.tag}</span>
                  <span className="font-display text-xs tracking-widest text-foreground/50">{event.date}</span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl tracking-wider text-foreground mb-3">{event.title}</h2>
                <p className="text-foreground/70 text-sm font-body leading-relaxed">{event.desc}</p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Detail dialog for CARS & BIKES MEETING */}
        <Dialog open={!!selectedEvent} onOpenChange={(open) => !open && setSelectedEvent(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-foreground/10 p-0">
            {selectedEvent && (
              <>
                <img src={selectedEvent.img} alt={selectedEvent.title} className="w-full object-cover" />
                <div className="p-6 md:p-8 space-y-4">
                  <h2 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
                    1ST "CARS & BIKES MEETING"
                  </h2>
                  <p className="text-foreground/80 font-body text-sm leading-relaxed whitespace-pre-line">
{`@auto500milano SPONSOR UFFICIALE

INGRESSO GRATUITO !!!!

180 POSTI AUTO E MOTO
Iscriviti per non mancare al nostro primo evento: link nelle storie e in bio

📅 Venerdì 12 Dicembre
📍Parcheggio Sergio Ramelli, Trezzano Sul Naviglio (MI)
🕘 dalle 21:00 alle 00:00

VI ASPETTIAMO NUMEROSI!!!!!!

🔥NO BANG
🎶NO MUSICA
💨NO SGOMMATE
💥NO SPARI NEL PARCHEGGIO
👮‍♂️NO COMPORTAMENTI CHE POSSANO DISTURBARE O CREARE PERICOLO

📲 Condividi ed entra anche tu nella famiglia di DD.MOTORS

GRAZIE A "UN PONTE NELLA VITA"
Un associazione di genitori che hanno figli con disabilità.
Per saperne di più consultare il sito, la pagina Instagram, Facebook, mail e numero di telefono`}
                  </p>
                  <div className="space-y-1 text-foreground/70 font-body text-sm">
                    <p>🌐 <a href="https://www.unpontenellavita.it" target="_blank" rel="noopener noreferrer" className="underline hover:text-foreground transition-colors">unpontenellavita.it</a></p>
                    <p>📸 @unpontenellavita2023</p>
                    <p>✉️ unpontenellavita@libero.it</p>
                    <p>📞 339 6971339</p>
                  </div>
                  <p className="text-foreground/80 font-body text-sm leading-relaxed whitespace-pre-line">
{`GRAZIE A @radunostatico e a @exclusivemotorframe per la partecipazione
GRAZIE A @ruotequadrenerviano per la partecipazione

GRAZIE AL @comune_trezzanosulnaviglio per aver accolto e patrocinato il nostro primo evento.`}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>);

};

export default Events;