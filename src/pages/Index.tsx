import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import EventDetailDialog from "@/components/EventDetailDialog";
import { loadEvents } from "@/lib/eventStore";
import aboutImg from "@/assets/event-3.jpg";
import heroVideo from "@/assets/hero.mp4";

const storeEvents = loadEvents();

const Index = () => {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  // Build homepage events from store
  const events = storeEvents.map((e) => ({ id: e.id, img: e.img, title: e.title, desc: e.desc, date: e.date }));

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-background flex items-start justify-center pt-[25vh] md:pt-[20vh]">
        {/* Video background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-background/50" />

        <div className="relative z-10 text-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-widest glow-text text-foreground">
            DDMOTORS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-lg md:text-2xl tracking-[0.3em] text-foreground/80 mt-3 md:mt-4">
            PASSIONE. MOTORI. EVENTI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-6 md:mt-10">
            <Link
              to="/raduni"
              className="inline-block font-display text-sm md:text-base tracking-widest uppercase border border-foreground/50 px-8 py-3 md:px-12 md:py-4 text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              SCOPRI GLI EVENTI
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="text-foreground/40 animate-bounce" size={28} />
        </motion.div>
      </section>

      {/* EVENTI RECENTI */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title">
            PROSSIMI EVENTI
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {events.map((event, i) =>
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="event-card group aspect-[3/4] md:aspect-[2/3] cursor-pointer"
              onClick={() => setSelectedEventId(event.id)}>
                <img
                src={event.img}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                width={400}
                height={600} />
                <div className="event-card-overlay group-hover:opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <p className="font-display text-xs tracking-widest text-foreground/60 mb-2">{event.date}</p>
                  <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-2">{event.title}</h3>
                  <p className="text-foreground/70 text-sm font-body leading-relaxed">{event.desc}</p>
                </div>
              </motion.div>
            )}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 md:mt-14 text-center">
            <Link
              to="/raduni"
              className="inline-block font-display text-sm tracking-widest uppercase border border-foreground/30 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              SCOPRI TUTTI GLI EVENTI
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ESPLORA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title">
            ESPLORA
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {[
              { to: "/community", title: "COMMUNITY", desc: "Entra nella nostra community e condividi la tua passione.", img: aboutImg },
              { to: "/progetti", title: "PROGETTI", desc: "Scopri i progetti a cui stiamo lavorando.", img: aboutImg },
            ].map((card, i) => (
              <motion.div
                key={card.to}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}>
                <Link to={card.to} className="event-card group aspect-[3/2] block">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy" />
                  <div className="event-card-overlay group-hover:opacity-90" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                    <h3 className="font-display text-2xl md:text-3xl tracking-wider text-foreground mb-2">{card.title}</h3>
                    <p className="text-foreground/70 text-sm font-body leading-relaxed">{card.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CHI SIAMO */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title">
            CHI SIAMO
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mb-10 md:mb-16">DDMOTORS è un progetto che ha come obiettivo quello di unire i neofiti con i professionisti, accomunati tra di loro da una passione. Non sono solo raduni o eventi. È tanto di più. È collaborazione tra ragazzi giovani, idee e tanta voglia di fare.


          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={aboutImg}
            alt="Raduno DDMotors"
            className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm"
            width={1200}
            height={800}
            loading="lazy" />
        </div>
      </section>

      <EventDetailDialog eventId={selectedEventId} onClose={() => setSelectedEventId(null)} />
    </>);

};

export default Index;