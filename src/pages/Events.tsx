import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, Lock, LogOut, X, Upload, Trash2 } from "lucide-react";
import { useAdmin } from "@/contexts/AdminContext";
import { useToast } from "@/hooks/use-toast";
import {
  EventItem, EVENT_TAGS, EventTag,
  loadEvents, saveCustomEvents, uid,
} from "@/lib/eventStore";

const Events = () => {
  const { isAdmin, login, logout } = useAdmin();
  const { toast } = useToast();
  const [code, setCode] = useState("");
  const [events, setEvents] = useState<EventItem[]>(loadEvents);
  const [showForm, setShowForm] = useState(false);
  const [filterTag, setFilterTag] = useState<string>("all");

  // Form state
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [newDate, setNewDate] = useState("");
  const [newStatus, setNewStatus] = useState("Prossimo");
  const [newTag, setNewTag] = useState<EventTag>(EVENT_TAGS[0]);
  const [newLocation, setNewLocation] = useState("");
  const [newImg, setNewImg] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  const filtered = filterTag === "all" ? events : events.filter((e) => e.tag === filterTag);

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
    if (!newTitle.trim() || !newDesc.trim() || !newDate.trim() || !newImg) {
      toast({ title: "Compila tutti i campi e carica un'immagine", variant: "destructive" });
      return;
    }
    const ev: EventItem = {
      id: uid(), img: newImg, title: newTitle.trim(), desc: newDesc.trim(),
      date: newDate.trim(), status: newStatus, tag: newTag, location: newLocation.trim() || undefined,
    };
    const next = [...events, ev];
    saveCustomEvents(next);
    setEvents(next);
    setNewTitle(""); setNewDesc(""); setNewDate(""); setNewImg(""); setNewLocation("");
    setShowForm(false);
    toast({ title: "Evento aggiunto!" });
  };

  const handleDelete = (id: string) => {
    const next = events.filter((e) => e.id !== id);
    saveCustomEvents(next);
    setEvents(next);
    toast({ title: "Evento eliminato" });
  };

  return (
    <>
      <section className="pt-24 md:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">
            EVENTI
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="section-subtitle mb-12 md:mb-20">
            Ogni evento è un'esperienza. Scopri i raduni che hanno segnato la community e quelli che stanno per arrivare.
          </motion.p>

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
                  <Plus size={16} /> Aggiungi evento
                </button>
                <button onClick={() => { logout(); toast({ title: "Disconnesso" }); }} className="flex items-center gap-2 text-foreground/40 hover:text-foreground text-sm transition-colors">
                  <LogOut size={16} /> Esci
                </button>
              </div>
            )}
          </div>

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

          {/* Add form modal */}
          {showForm && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4" onClick={() => setShowForm(false)}>
              <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg border border-foreground/20 bg-background p-6 md:p-8 space-y-5 max-h-[90vh] overflow-y-auto">
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-xl tracking-widest text-foreground">NUOVO EVENTO</h3>
                  <button onClick={() => setShowForm(false)} className="text-foreground/50 hover:text-foreground"><X size={20} /></button>
                </div>
                <input placeholder="Nome evento" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} className="w-full bg-transparent border border-foreground/20 text-foreground px-4 py-3 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50" />
                <textarea placeholder="Descrizione" value={newDesc} onChange={(e) => setNewDesc(e.target.value)} rows={3} className="w-full bg-transparent border border-foreground/20 text-foreground px-4 py-3 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50 resize-none" />
                <input placeholder="Data (es. 15 Luglio 2025)" value={newDate} onChange={(e) => setNewDate(e.target.value)} className="w-full bg-transparent border border-foreground/20 text-foreground px-4 py-3 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50" />
                <input placeholder="Luogo (es. Milano, Piazzale Lotto)" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} className="w-full bg-transparent border border-foreground/20 text-foreground px-4 py-3 text-sm font-body placeholder:text-foreground/30 focus:outline-none focus:border-foreground/50" />
                <select value={newStatus} onChange={(e) => setNewStatus(e.target.value)} className="w-full bg-background border border-foreground/20 text-foreground px-4 py-3 text-sm font-body focus:outline-none focus:border-foreground/50">
                  <option value="Prossimo">Prossimo</option>
                  <option value="Passato">Passato</option>
                </select>
                <select value={newTag} onChange={(e) => setNewTag(e.target.value as EventTag)} className="w-full bg-background border border-foreground/20 text-foreground px-4 py-3 text-sm font-body focus:outline-none focus:border-foreground/50">
                  {EVENT_TAGS.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <div>
                  <input type="file" accept="image/*" ref={fileRef} onChange={handleFileChange} className="hidden" />
                  <button onClick={() => fileRef.current?.click()} className="flex items-center gap-2 border border-foreground/20 text-foreground/60 hover:text-foreground px-4 py-3 text-sm font-body transition-colors w-full">
                    <Upload size={16} /> {newImg ? "Immagine caricata ✓" : "Carica copertina"}
                  </button>
                </div>
                <button onClick={handleAdd} className="w-full font-display text-sm tracking-widest uppercase bg-foreground text-background py-3 hover:bg-foreground/90 transition-all duration-300">Aggiungi</button>
              </div>
            </motion.div>
          )}

          {/* Events list */}
          <div className="space-y-8 md:space-y-12">
            {filtered.map((event, i) => (
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
                {isAdmin && (
                  <button onClick={() => handleDelete(event.id)} className="absolute top-4 right-4 z-20 bg-background/80 hover:bg-red-600 text-foreground p-2 transition-colors" title="Elimina evento">
                    <Trash2 size={18} />
                  </button>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
