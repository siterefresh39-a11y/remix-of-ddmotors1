import { motion } from "framer-motion";
import aboutHero from "@/assets/about-hero-tahoe-lights.jpg";
import event1 from "@/assets/event-1.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-end bg-black">
        <img src={aboutHero} alt="DDMotors auto" width={1920} height={1080} className="absolute inset-0 w-full h-full object-contain md:object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="relative z-10 section-padding pb-12 md:pb-20">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-8xl lg:text-9xl font-bold tracking-widest text-foreground"
          >
            DDMOTORS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-lg md:text-2xl tracking-[0.2em] text-foreground/70 mt-3"
          >
            NON È SOLO UN EVENTO. È TANTO DI PIÙ.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto space-y-20 md:space-y-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">MISSIONE</h2>
            <p className="section-subtitle">
              DDMOTORS è un progetto che ha come obiettivo quello di unire i neofiti ai professionisti, eliminando le difficoltà che si incontrano all'inizio. Non è solo raduni o eventi. È collaborazione, ambizione tra ragazzi e ragazze giovani che hanno voglia di fare.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">ORIGINI</h2>
            <p className="section-subtitle">
              Nasce nel 2025 con l'ambizione di lasciare un segno nel mondo dell'automotive. Ci piacciono i motori, l'odore della benzina ed essere parte di un mondo che stanno cercando di trasformare in effimero e senza emozioni.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={event1}
            alt="Raduno DDMotors"
            width={1200}
            height={800}
            className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm"
            loading="lazy"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">PASSIONE</h2>
            <p className="section-subtitle">
              Ci incuriosisce e apprezziamo ogni sfaccettatura di questa passione. Non contano i soldi e non conta l'esperienza. Conta solo la voglia e la passione.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">COMMUNITY</h2>
            <p className="section-subtitle">
              DDMotors è una community aperta a tutti. Se condividi la nostra passione, sei già dei nostri.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
