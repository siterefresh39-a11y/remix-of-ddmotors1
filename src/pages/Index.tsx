import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import heroImg from "@/assets/hero-headlights.jpg";
import locandinaNight from "@/assets/locandina-ddmotors-night.jpeg";
import carsBikesCover from "@/assets/cars-bikes-meeting-cover.jpg";
import event3 from "@/assets/event-3.jpg";

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

  const events = [
  { id: "ev5", img: locandinaNight, title: "1ST \"DDMOTORS NIGHT\"", desc: "Raduno evento serale e lounge raffinata nel hinterland Milanese.", date: "15 Luglio 2025" },
  { id: "ev4", img: carsBikesCover, title: "1ST \"CARS & BIKE MEETING\"", desc: "Una serata dedicata alle leggende della strada e del motorsport.", date: "22 Agosto 2025" },
  { id: "other", img: event3, title: "Urban Meet", desc: "Il più grande raduno urbano dell'anno, nel cuore della città.", date: "10 Settembre 2025" }];

  return (
    <>
      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden bg-background flex items-center justify-center">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-[2s]"
          style={{ backgroundImage: `url(${heroImg})`, opacity: heroPhase === "dark" ? 0 : 0.3 }} />


        {/* Left headlight */}
        <div
          className="headlight absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] left-[15%] md:left-[25%] top-1/2 -translate-y-1/2 rounded-full transition-all duration-[1.5s]"
          style={{ opacity: headlightOpacity }} />

        {/* Left beam */}
        <div
          className="headlight-beam absolute w-[200px] md:w-[300px] left-[15%] md:left-[25%] top-1/2 transition-all duration-[1s]"
          style={{ opacity: beamOpacity, height: beamOpacity > 0 ? "70vh" : "0" }} />


        {/* Right headlight */}
        <div
          className="headlight absolute w-[200px] h-[200px] md:w-[350px] md:h-[350px] right-[15%] md:right-[25%] top-1/2 -translate-y-1/2 rounded-full transition-all duration-[1.5s]"
          style={{ opacity: headlightOpacity }} />

        {/* Right beam */}
        <div
          className="headlight-beam absolute w-[200px] md:w-[300px] right-[15%] md:right-[25%] top-1/2 transition-all duration-[1s]"
          style={{ opacity: beamOpacity, height: beamOpacity > 0 ? "70vh" : "0" }} />


        {/* Hero text */}
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
              className="inline-block font-display text-sm md:text-base tracking-widest uppercase border border-foreground/50 px-8 py-3 md:px-12 md:py-4 text-foreground hover:bg-foreground hover:text-background transition-all duration-300">SCOPRI GLI EVENTI


            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`event-card group aspect-[3/4] md:aspect-[2/3] ${event.id !== "other" ? "cursor-pointer" : ""}`}
              onClick={() => { if (event.id !== "other") setSelectedEventId(event.id); }}>

                <img
                src={event.img}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy" />

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
              className="inline-block font-display text-sm tracking-widest uppercase border border-foreground/30 px-8 py-3 text-foreground hover:bg-foreground hover:text-background transition-all duration-300">SCOPRI TUTTI GLI EVENTI


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
            loading="lazy" />

        </div>
      </section>

      {/* Event detail dialogs */}
      <Dialog open={!!selectedEventId} onOpenChange={(open) => !open && setSelectedEventId(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-background border-foreground/10 p-0">
          {selectedEventId === "ev4" && (
            <>
              <img src={carsBikesCover} alt="Cars & Bikes Meeting" className="w-full object-cover" />
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
          {selectedEventId === "ev5" && (
            <>
              <img src={locandinaNight} alt="DDMOTORS NIGHT" className="w-full object-cover" />
              <div className="p-6 md:p-8 space-y-4">
                <h2 className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
                  Diamond "shisha&lounge" X DDMOTORS present:
                </h2>
                <h3 className="font-display text-xl md:text-2xl tracking-wider text-foreground">
                  1st edition of "DDMOTORS NIGHT"
                </h3>
                <p className="text-foreground/80 font-body text-sm leading-relaxed whitespace-pre-line">
{`Il 20 Febbraio dalle 21:30 alle 2:30, ti aspettiamo a vivere con noi la prima serata che unisce gli appassionati di motori ad una serata in un ambiente esclusivo a pochi passi da Milano!!!!!

Iscrivi la tua macchina nel link in bio prima che sia troppo tardi!!!(selezione)
Chi sarà selezionato avrà un tavolo prenotato durante tutta la serata..

Per prenotare un tavolo o avere maggiori info del locale contattare al numero 352 0928363
Via Novara, 35 Bareggio (MI).`}
                </p>
                <div className="space-y-2 text-foreground/80 font-body text-sm leading-relaxed">
                  <p className="font-semibold text-foreground">Grazie:</p>
                  <p>@diamondshishamilano per questa collaborazione e per offrici un'ambiente perfetto per passare insieme una serata diversa dalle altre.</p>
                  <p>@alexisrodriguez_dj che ci accompagnerà tutta la serata con la sua musica.</p>
                  <p>@casadei.car.journal per le foto e video</p>
                  <p>@alberto_paiano per le foto e video</p>
                  <p>@street_custom_creew per la partecipazione e prima collaborazione</p>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>);


export default Index;