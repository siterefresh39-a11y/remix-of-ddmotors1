import { motion } from "framer-motion";
import aboutHero from "@/assets/about-hero.jpg";
import event1 from "@/assets/event-1.jpg";

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden flex items-end">
        <img src={aboutHero} alt="DDMotors auto" className="absolute inset-0 w-full h-full object-cover" />
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
            NON È SOLO UN EVENTO. È UNA COMMUNITY.
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
            <h2 className="section-title text-3xl md:text-6xl">PASSIONE</h2>
            <p className="section-subtitle">
              DDMotors nasce dalla passione pura per i motori. Non ci interessa il brand o il prezzo: ci interessa il rombo, l'adrenalina, il fumo degli pneumatici. Ogni evento è pensato per chi sente l'asfalto sotto i piedi.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">MOTORI</h2>
            <p className="section-subtitle">
              Dalle sportive alle classiche, dai muscle car ai tuning estremi. DDMotors è il punto d'incontro di chi vive l'auto come stile di vita, non come mezzo di trasporto.
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src={event1}
            alt="Raduno DDMotors"
            className="w-full h-[50vh] md:h-[70vh] object-cover rounded-sm"
            loading="lazy"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">PERSONE</h2>
            <p className="section-subtitle">
              La community è il cuore di DDMotors. Ogni raduno è un'occasione per conoscere nuove persone, condividere storie e creare legami che vanno oltre il parcheggio.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-title text-3xl md:text-6xl">ATMOSFERA</h2>
            <p className="section-subtitle">
              Luci, suoni, notti infinite. I nostri eventi non sono semplici raduni: sono esperienze immersive, pensate per farti vivere qualcosa di indimenticabile.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
