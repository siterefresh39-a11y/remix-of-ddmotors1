import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Download, ArrowLeft, ExternalLink } from "lucide-react";
import { PhotoItem, EventItem, loadEvents, loadPhotos } from "@/lib/eventStore";

const Gallery = () => {
  const [events] = useState<EventItem[]>(loadEvents);
  const [photos] = useState<PhotoItem[]>(loadPhotos);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [viewerIndex, setViewerIndex] = useState<number>(0);

  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;
  const eventPhotos = selectedEventId ? photos.filter((p) => p.eventId === selectedEventId) : [];
  // Total slides = photos + 1 final CTA slide
  const totalSlides = eventPhotos.length + 1;
  const isLastSlide = viewerIndex === eventPhotos.length;

  const openViewer = (eventId: string) => {
    setSelectedEventId(eventId);
    setViewerIndex(0);
  };

  const closeViewer = () => {
    setSelectedEventId(null);
    setViewerIndex(0);
  };

  const prev = () => setViewerIndex((i) => Math.max(0, i - 1));
  const next = () => setViewerIndex((i) => Math.min(totalSlides - 1, i + 1));

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
                  onClick={() => openViewer(event.id)}
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

      {/* Fullscreen swipeable photo viewer */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background flex flex-col"
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-4 md:px-8 py-4 shrink-0">
              <button
                onClick={closeViewer}
                className="flex items-center gap-2 text-foreground/60 hover:text-foreground font-body text-sm transition-colors"
              >
                <ArrowLeft size={18} /> Torna alla galleria
              </button>
              <div className="flex items-center gap-3">
                {!isLastSlide && eventPhotos[viewerIndex] && (
                  <button
                    onClick={() => handleDownload(eventPhotos[viewerIndex].src, eventPhotos[viewerIndex].alt)}
                    className="text-foreground/70 hover:text-foreground transition-colors"
                    title="Scarica foto"
                  >
                    <Download size={24} />
                  </button>
                )}
                <button
                  onClick={closeViewer}
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  <X size={28} />
                </button>
              </div>
            </div>

            {/* Counter */}
            <div className="text-center text-foreground/40 text-xs font-body tracking-widest mb-2">
              {viewerIndex + 1} / {totalSlides}
            </div>

            {/* Photo / CTA area */}
            <div className="flex-1 relative flex items-center justify-center overflow-hidden px-4">
              {/* Navigation arrows */}
              {viewerIndex > 0 && (
                <button
                  onClick={prev}
                  className="absolute left-2 md:left-8 text-foreground/50 hover:text-foreground z-50 transition-colors"
                >
                  <ChevronLeft size={40} />
                </button>
              )}
              {viewerIndex < totalSlides - 1 && (
                <button
                  onClick={next}
                  className="absolute right-2 md:right-8 text-foreground/50 hover:text-foreground z-50 transition-colors"
                >
                  <ChevronRight size={40} />
                </button>
              )}

              <AnimatePresence mode="wait">
                {!isLastSlide && eventPhotos[viewerIndex] ? (
                  <motion.img
                    key={eventPhotos[viewerIndex].id}
                    src={eventPhotos[viewerIndex].src}
                    alt={eventPhotos[viewerIndex].alt}
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-[85vw] max-h-[75vh] object-contain"
                  />
                ) : (
                  <motion.div
                    key="cta-slide"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center justify-center text-center px-6 max-w-md"
                  >
                    <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-4">
                      Vuoi vedere tutte le foto?
                    </h3>
                    <p className="text-foreground/60 font-body text-sm md:text-base mb-8">
                      Per vedere tutte le foto scattate a <span className="text-foreground font-semibold">{selectedEvent.title}</span>, clicca sul link qui sotto.
                    </p>
                    {selectedEvent.allPhotosLink ? (
                      <a
                        href={selectedEvent.allPhotosLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-display tracking-wider text-sm hover:bg-primary/90 transition-colors rounded"
                      >
                        Vedi tutte le foto <ExternalLink size={16} />
                      </a>
                    ) : (
                      <p className="text-foreground/40 font-body text-sm italic">Link in arrivo...</p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Photo description */}
            {!isLastSlide && eventPhotos[viewerIndex] && (
              <div className="text-center py-4 px-4">
                <p className="text-foreground/50 font-body text-sm">{eventPhotos[viewerIndex].alt}</p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;
