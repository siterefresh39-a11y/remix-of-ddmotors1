import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Plus, Lock, LogOut, Upload, Trash2 } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { useToast } from "@/hooks/use-toast";
import {
  PhotoItem, EventItem,
  loadEvents, loadPhotos, saveCustomPhotos, uid,
} from "@/lib/eventStore";

const Gallery = () => {
  const { isAdmin, login, logout } = useAdmin();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [events] = useState<EventItem[]>(loadEvents);
  const [photos, setPhotos] = useState<PhotoItem[]>(loadPhotos);
  const [filterEvent, setFilterEvent] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showForm, setShowForm] = useState(false);

  // Form
  const [newAlt, setNewAlt] = useState("");
  const [newEventId, setNewEventId] = useState(events[0]?.id || "");
  const [newDate, setNewDate] = useState("");
  const [newImg, setNewImg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = filterEvent === "all" ? photos : photos.filter((p) => p.eventId === filterEvent);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  const handleLogin = () => {
    if (login(code)) { toast({ title: "Accesso admin attivato" }); setCode(""); }
    else toast({ title: "Codice errato", variant: "destructive" });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setNewImg(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleAdd = () => {
    if (!newAlt.trim() || !newImg || !newEventId || !newDate.trim()) {
      toast({ title: "Compila tutti i campi e carica un'immagine", variant: "destructive" });
      return;
    }
    const photo: PhotoItem = { id: uid(), src: newImg, alt: newAlt.trim(), eventId: newEventId, date: newDate.trim() };
    const next = [...photos, photo];
    saveCustomPhotos(next);
    setPhotos(next);
    setNewAlt(""); setNewImg(""); setNewDate("");
    setShowForm(false);
    toast({ title: "Foto aggiunta!" });
  };

  const handleDelete = (id: string) => {
    const next = photos.filter((p) => p.id !== id);
    saveCustomPhotos(next);
    setPhotos(next);
    if (lightboxIndex !== null) closeLightbox();
    toast({ title: "Foto eliminata" });
  };

  // Build dropdown options: event name + date
  const eventOptions = events.map((e) => ({ id: e.id, label: `${e.title} — ${e.date}` }));

  return (
    <>
      <section className="pt-24 md:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">GALLERIA</motion.h1>

          {/* Admin access */}
          <div className="mb-8">
            {!isAdmin ? (
              <div className="flex items-center gap-3 max-w-md">
                <Lock size={18} className="text-foreground/40 shrink-0" />
                <input type="password" placeholder="Codice admin..." value={code} onChange={(e) => setCode(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} className="flex-1 bg-transparent border border-foreground/20 text-foreground px-4 py-2 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50" />
                <button onClick={handleLogin} className="font-display text-xs tracking-widest uppercase border border-foreground/30 px-4 py-2 text-foreground hover:bg-foreground hover:text-background transition-all duration-300">Accedi</button>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <button onClick={() => setShowForm(true)} className="flex items-center gap-2 font-display text-xs tracking-widest uppercase bg-foreground text-background px-5 py-3 hover:bg-foreground/90 transition-all duration-300">
                  <Plus size={16} /> Aggiungi foto
                </button>
                <button onClick={() => { logout(); toast({ title: "Disconnesso" }); }} className="flex items-center gap-2 text-foreground/40 hover:text-foreground text-sm transition-colors">
                  <LogOut size={16} /> Esci
                </button>
              </div>
            )}
          </div>

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

          {/* Add photo modal */}
          {showForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
              <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg border border-foreground/20 bg-background p-6 md:p-8 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl tracking-widest text-foreground">NUOVA FOTO</h3>
                  <button onClick={() => setShowForm(false)} className="text-foreground/50 hover:text-foreground"><X size={20} /></button>
                </div>
                <input placeholder="Descrizione foto" value={newAlt} onChange={(e) => setNewAlt(e.target.value)} className="w-full bg-transparent border border-foreground/20 text-foreground px-4 py-3 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50" />
                <input placeholder="Data (es. 15 Luglio 2025)" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="w-full bg-transparent border border-foreground/20 text-foreground px-4 py-3 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50" />
                <select value={newEventId} onChange={(e) => setNewEventId(e.target.value)} className="w-full bg-background border border-foreground/20 text-foreground px-4 py-3 text-sm font-body focus:outline-none focus:border-foreground/50">
                  {eventOptions.map((o) => <option key={o.id} value={o.id}>{o.label}</option>)}
                </select>
                <div>
                  <input type="file" accept="image/*" ref={fileRef} onChange={handleFileChange} className="hidden" />
                  <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 border border-foreground/20 text-foreground/60 hover:text-foreground px-4 py-3 text-sm font-body transition-colors w-full">
                    <Upload size={16} /> {newImg ? "Immagine caricata ✓" : "Carica foto"}
                  </button>
                </div>
                <button onClick={handleAdd} className="w-full font-display text-sm tracking-widest uppercase bg-foreground text-background py-3 hover:bg-foreground/90 transition-all duration-300">Aggiungi</button>
              </div>
            </motion.div>
          )}

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
                  {isAdmin && (
                    <button
                      onClick={(e) => { e.stopPropagation(); handleDelete(photo.id); }}
                      className="absolute top-2 right-2 z-20 bg-background/80 hover:bg-red-600 text-foreground p-1.5 opacity-0 group-hover:opacity-100 transition-all"
                      title="Elimina foto"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
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
