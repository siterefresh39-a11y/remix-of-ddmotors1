import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { loadEvents, EVENT_TAGS } from "@/lib/eventStore";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const CalendarPage = () => {
  const [events] = useState(loadEvents);
  const [filterTag, setFilterTag] = useState("all");

  const filtered = filterTag === "all" ? events : events.filter((e) => e.tag === filterTag);
  const markersEvents = filtered.filter((e) => e.lat && e.lng);

  return (
    <>
      <section className="pt-24 md:pt-32 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="section-title">
            CALENDARIO & MAPPA
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="section-subtitle mb-12 md:mb-20">
            Tutti gli eventi in programma. Segna le date e unisciti alla community.
          </motion.p>

          {/* Tag filter */}
          <div className="mb-10">
            <select
              value={filterTag}
              onChange={(e) => setFilterTag(e.target.value)}
              className="bg-background border border-foreground/20 text-foreground px-5 py-3 text-sm font-body focus:outline-none focus:border-foreground/50 min-w-[220px]"
            >
              <option value="all">Tutti i tag</option>
              {EVENT_TAGS.map((t) => (
                <option key={t} value={t}>{t}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {/* Event list */}
            <div className="space-y-6">
              {filtered.map((event, i) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border border-border/50 p-6 md:p-8 hover:border-foreground/40 transition-colors duration-300"
                >
                  <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-4">{event.title}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 text-foreground/60 flex-wrap">
                    <span className="flex items-center gap-2 text-sm font-body">
                      <CalendarDays size={16} /> {event.date}
                    </span>
                    {event.location && (
                      <span className="flex items-center gap-2 text-sm font-body">
                        <MapPin size={16} /> {event.location}
                      </span>
                    )}
                    <span className="font-display text-xs tracking-widest uppercase px-2 py-0.5 border border-foreground/20 text-foreground/50">{event.tag}</span>
                  </div>
                </motion.div>
              ))}
              {filtered.length === 0 && (
                <p className="text-foreground/40 font-body text-sm">Nessun evento per questo filtro.</p>
              )}
            </div>

            {/* Interactive Map */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative border border-border/50 min-h-[400px] md:min-h-[500px] overflow-hidden"
            >
              <MapContainer
                center={[45.6, 8.9]}
                zoom={9}
                scrollWheelZoom={false}
                className="w-full h-full absolute inset-0 grayscale invert opacity-80"
                style={{ minHeight: "400px" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {markersEvents.map((event) => (
                  <Marker key={event.id} position={[event.lat!, event.lng!]}>
                    <Popup>
                      <div className="text-center">
                        <strong className="block text-sm">{event.title}</strong>
                        <span className="block text-xs text-gray-600">{event.date}</span>
                        <span className="block text-xs text-gray-500">{event.location}</span>
                      </div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CalendarPage;
