import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, ArrowLeft } from "lucide-react";
import { PhotoItem, EventItem, loadEvents, loadPhotos } from "@/lib/eventStore";

const Gallery = () => {
  const [events] = useState<EventItem[]>(loadEvents);
  const [photos] = useState<PhotoItem[]>(loadPhotos);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const eventPhotos = selectedEventId ? photos.filter((p) => p.eventId === selectedEventId) : [];

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + eventPhotos.length) % eventPhotos.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % eventPhotos.length : null));

  const handleDownload = useCallback((src: string, alt: string) => {
    const a = document.createElement("a");
    a.href = src;
    a.download = alt || "photo";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }, []);

  return (
    <>
      <section className="pt-24 md:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">
            GALLERIA
          </motion.h1>

          {/* Event covers grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {events.map((event, i) => {
              const count = photos.filter((p) => p.eventId === event.id).length;
              return (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="event-card group aspect-[3/4] relative max-w-lg mx-auto w-full cursor-pointer"
                  onClick={() => setSelectedEventId(event.id)}
                >
                  <img src={event.img} alt={event.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="event-card-overlay group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <span className="font-display text-xs tracking-widest text-foreground/50 mb-2 block">{event.date}</span>
                    <h2 className="font-display text-2xl md:text-4xl tracking-wider text-foreground mb-2">{event.title}</h2>
                    <p className="text-foreground/50 text-sm font-body">{count} foto</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sub-gallery overlay */}
      <AnimatePresence>
        {selectedEvent && lightboxIndex === null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto section-padding py-8">
              <button
                onClick={() => setSelectedEventId(null)}
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground mb-8 font-body text-sm transition-colors"
              >
                <ArrowLeft size={18} /> Torna alla galleria
              </button>

              <h2 className="font-display text-3xl md:text-5xl tracking-wider text-foreground mb-2">{selectedEvent.title}</h2>
              <p className="text-foreground/50 text-sm font-body mb-10">{selectedEvent.date}</p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                {eventPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="cursor-pointer overflow-hidden aspect-square relative group"
                    onClick={() => openLightbox(i)}
                  >
                    <img src={photo.src} alt={photo.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" loading="lazy" />
                    <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 transition-colors" />
                  </motion.div>
                ))}
              </div>

              {eventPhotos.length === 0 && (
                <p className="text-foreground/40 font-body text-center py-20">Nessuna foto disponibile per questo evento.</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && eventPhotos[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            <div className="absolute top-5 right-5 flex items-center gap-3 z-50">
              <button
                onClick={(e) => { e.stopPropagation(); handleDownload(eventPhotos[lightboxIndex].src, eventPhotos[lightboxIndex].alt); }}
                className="text-foreground/70 hover:text-foreground transition-colors"
                title="Scarica foto"
              >
                <Download size={28} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="text-foreground/70 hover:text-foreground transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            <button onClick={(e) => { e.stopPropagation(); prev(); }} className="absolute left-4 md:left-8 text-foreground/50 hover:text-foreground z-50"><ChevronLeft size={40} /></button>
            <button onClick={(e) => { e.stopPropagation(); next(); }} className="absolute right-4 md:right-8 text-foreground/50 hover:text-foreground z-50"><ChevronRight size={40} /></button>
            <img
              src={eventPhotos[lightboxIndex].src}
              alt={eventPhotos[lightboxIndex].alt}
              className="max-w-[90vw] max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
