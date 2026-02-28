import { useState } from "react";
import { motion } from "framer-motion";
import { EventItem, EVENT_TAGS, loadEvents } from "@/lib/eventStore";

const Events = () => {
  const [events] = useState<EventItem[]>(loadEvents);
  const [filterTag, setFilterTag] = useState<string>("all");

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
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="section-subtitle mb-12 md:mb-20">
          Ogni evento è un'esperienza. Scopri i raduni che hanno segnato la community e quelli che stanno per arrivare.
        </motion.p>

        {/* Tag filter dropdown */}
        <div className="mb-10">
          <select
            value={filterTag}
            onChange={(e) => setFilterTag(e.target.value)}
            className="bg-background border border-foreground/20 text-foreground px-5 py-3 text-sm font-body focus:outline-none focus:border-foreground/50 min-w-[220px]"
          >
            <option value="all">Tutti gli eventi</option>
            {EVENT_TAGS.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>

        {/* Events list */}
        <div className="space-y-8 md:space-y-12">
          {sorted.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="event-card group h-[50vh] md:h-[60vh] relative"
            >
              <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="event-card-overlay group-hover:opacity-90" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 z-10">
                <div className="flex items-center gap-3 mb-3 flex-wrap">
                  <span className={`font-display text-xs tracking-widest uppercase px-3 py-1 border ${event.status === "Prossimo" ? "border-foreground/50 text-foreground" : "border-foreground/20 text-foreground/50"}`}>{event.status}</span>
                  <span className="font-display text-xs tracking-widest uppercase px-3 py-1 border border-foreground/30 text-foreground/70">{event.tag}</span>
                  <span className="font-display text-xs tracking-widest text-foreground/50">{event.date}</span>
                </div>
                <h2 className="font-display text-3xl md:text-5xl tracking-wider text-foreground mb-3">{event.title}</h2>
                <p className="text-foreground/70 text-sm md:text-base font-body leading-relaxed max-w-xl">{event.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
