import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { PhotoItem, EventItem, loadEvents, loadPhotos } from "@/lib/eventStore";

const Gallery = () => {
  const [events] = useState<EventItem[]>(loadEvents);
  const [photos] = useState<PhotoItem[]>(loadPhotos);
  const [filterEvent, setFilterEvent] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = filterEvent === "all" ? photos : photos.filter((p) => p.eventId === filterEvent);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  const eventOptions = events.map((e) => ({ id: e.id, label: `${e.title} — ${e.date}` }));

  return (
    <>
      <section className="pt-24 md:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">GALLERIA</motion.h1>

          {/* Event filter dropdown */}
          <div className="mb-10">
            <select
              value={filterEvent}
              onChange={(e) => setFilterEvent(e.target.value)}
              className="bg-background border border-foreground/20 text-foreground px-5 py-3 text-sm font-body focus:outline-none focus:border-foreground/50 min-w-[280px]"
            >
              <option value="all">Tutte le foto</option>
              {eventOptions.map((o) => (
                <option key={o.id} value={o.id}>{o.label}</option>
              ))}
            </select>
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <AnimatePresence mode="popLayout">
              {filtered.map((photo, i) => (
                <motion.div
                  key={photo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="cursor-pointer overflow-hidden aspect-square md:aspect-video relative group"
                  onClick={() => openLightbox(i)}
                >
                  <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/80 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-foreground text-xs font-body">{photo.alt}</p>
                    <p className="text-foreground/50 text-xs font-body">{photo.date}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center" onClick={closeLightbox}>
            <button onClick={(e) => { e.stopPropagation(); closeLightbox(); }} className="absolute top-5 right-5 text-foreground/70 hover:text-foreground z-50"><X size={32} /></button>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-foreground/50 hover:text-foreground z-50"><ChevronLeft size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-foreground/50 hover:text-foreground z-50"><ChevronRight size={40} /></button>
            <img src={filtered[lightboxIndex].src} alt={filtered[lightboxIndex].alt} className="max-w-[90vw] max-h-[85vh] object-contain" onClick={(e) => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
