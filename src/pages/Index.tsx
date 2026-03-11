import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import EventDetailDialog from "@/components/EventDetailDialog";
import { loadEvents } from "@/lib/eventStore";
import heroImg from "@/assets/hero-headlights.jpg";

const storeEvents = loadEvents();

const Index = () => {
  const [heroPhase, setHeroPhase] = useState<"dark" | "glow" | "flash" | "steady">("dark");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setHeroPhase("glow"), 500);
    const t2 = setTimeout(() => setHeroPhase("flash"), 2000);
    const t3 = setTimeout(() => setHeroPhase("steady"), 2800);
    return () => {clearTimeout(t1);clearTimeout(t2);clearTimeout(t3);};
  }, []);

  const headlightOpacity = heroPhase === "dark" ? 0 : heroPhase === "glow" ? 0.6 : heroPhase === "flash" ? 1 : 0.8;
  const beamOpacity = heroPhase === "flash" ? 0.5 : heroPhase === "steady" ? 0.15 : 0;
  const textVisible = heroPhase === "flash" || heroPhase === "steady";

  // Build homepage events from store
  const events = storeEvents.map((e) => ({ id: e.id, img: e.img, title: e.title, desc: e.desc, date: e.date }));

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2s]"
          style={{ backgroundImage: `url(${heroImg})`, opacity: heroPhase === "dark" ? 0 : 0.3 }} />

        <div className="headlight absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] left-[15%] md:left-[25%] top-1/2 -translate-y-1/2 rounded-full transition-all duration-[1.5s]" style={{ opacity: headlightOpacity }} />
        <div className="headlight-beam absolute w-[200px] md:w-[300px] left-[15%] md:left-[25%] top-1/2 transition-all duration-[1s]" style={{ opacity: beamOpacity, height: beamOpacity > 0 ? "70vh" : "0" }} />
        <div className="headlight absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] right-[15%] md:right-[25%] top-1/2 -translate-y-1/2 rounded-full transition-all duration-[1.5s]" style={{ opacity: headlightOpacity }} />
        <div className="headlight-beam absolute w-[200px] md:w-[300px] right-[15%] md:right-[25%] top-1/2 transition-all duration-[1s]" style={{ opacity: beamOpacity, height: beamOpacity > 0 ? "70vh" : "0" }} />

        <div className="relative z-10 text-center px-5">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={textVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl md:text-9xl lg:text-[10rem] font-bold tracking-widest glow-text text-foreground">
            DDMOTORS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={textVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-display text-xl md:text-3xl tracking-[0.3em] text-foreground/80 mt-4 md:mt-6">
            PASSIONE. MOTORI. EVENTI.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={textVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-8 md:mt-12">
            <Link
              to="/raduni"
              className="inline-block font-display text-sm md:text-base tracking-widest uppercase border border-foreground/50 px-8 py-3 md:px-12 md:py-4 text-foreground hover:bg-foreground hover:text-background transition-all duration-300">
              SCOPRI GLI EVENTI
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={textVisible ? { opacity: 1 } : {}}
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
            EVENTI RECENTI
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
            className="section-subtitle mb-10 md:mb-16">
            DDMotors è una community che organizza raduni, serate ed eventi dedicati al mondo dei motori.
            Non solo auto, ma persone, passione e atmosfera.
          </motion.p>
          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            src={event3}
            alt="Raduno DDMotors"
            className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm"
            width={1200}
            height={800}
            loading="lazy" />
        </div>
      </section>

      <EventDetailDialog eventId={selectedEventId} onClose={() => setSelectedEventId(null)} />
    </>
  );
};

export default Index;
