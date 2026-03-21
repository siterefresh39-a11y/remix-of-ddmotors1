import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Video, Car, Users, Rocket } from "lucide-react";

const benefits = [
  { icon: Camera, title: "Condivisione lavori e feedback reali" },
  { icon: Video, title: "Collaborazioni su progetti automotive" },
  { icon: Car, title: "Accesso a raduni ed eventi" },
  { icon: Users, title: "Networking con altri creator" },
  { icon: Rocket, title: "Opportunità per crescere nel settore" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const Community = () => (
  <div>
    {/* Hero */}
    <section className="section-padding min-h-[70vh] flex items-center justify-center text-center">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="section-title text-4xl md:text-6xl lg:text-7xl mb-6"
          {...fadeUp}
        >
          LA COMMUNITY PER CHI VUOLE RACCONTARE L'AUTOMOTIVE
        </motion.h1>
        <motion.p
          className="section-subtitle text-base md:text-xl max-w-2xl mx-auto mb-10"
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Un network di fotografi e creator che collaborano, crescono e trasformano la passione in qualcosa di concreto.
        </motion.p>
        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          <Button size="lg" asChild>
            <a href="#">Entra nella community</a>
          </Button>
        </motion.div>
      </div>
    </section>

    {/* Cos'è DDMotors */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto space-y-6 text-center">
        <motion.p className="text-lg md:text-xl text-muted-foreground" {...fadeUp}>
          DDmotors nasce per mettere in contatto chi sogna di entrare nel mondo del motorsport con chi lo vive già ogni giorno.
        </motion.p>
        <motion.p className="text-lg md:text-xl text-muted-foreground" {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          Un ambiente dove fotografi e videomaker si aiutano, collaborano e crescono insieme.
        </motion.p>
      </div>
    </section>

    {/* Cosa ottieni */}
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <motion.h2 className="section-title text-3xl md:text-5xl text-center mb-12" {...fadeUp}>
          COSA OTTIENI
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              className="rounded-lg border border-border bg-card p-6 flex items-start gap-4"
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <b.icon className="text-primary shrink-0 mt-1" size={28} />
              <span className="text-foreground text-base md:text-lg font-medium">{b.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* La Visione */}
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2 className="section-title text-3xl md:text-5xl mb-8" {...fadeUp}>
          LA VISIONE
        </motion.h2>
        <motion.p className="text-lg md:text-xl text-muted-foreground" {...fadeUp}>
          DDMotors nasce per abbattere le barriere tra chi sogna di entrare nel mondo del motorsport e chi ne fa già parte.
        </motion.p>
        <motion.p className="text-lg md:text-xl text-muted-foreground" {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
          Qui si cresce insieme, condividendo esperienze, errori e opportunità.
        </motion.p>
        <motion.p className="text-2xl md:text-3xl font-bold text-foreground" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
          Non è solo una community.
        </motion.p>
        <motion.p className="text-xl md:text-2xl text-primary font-semibold" {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
          Questo è solo l'inizio.
        </motion.p>
        <motion.p className="text-lg md:text-xl text-muted-foreground" {...fadeUp} transition={{ duration: 0.6, delay: 0.4 }}>
          È l'inizio di qualcosa di più grande nel mondo automotive.
        </motion.p>
      </div>
    </section>

    {/* CTA finale */}
    <section className="section-padding">
      <motion.div className="max-w-2xl mx-auto text-center space-y-6" {...fadeUp}>
        <p className="text-lg md:text-xl text-muted-foreground">
          Se vuoi trasformare la tua passione in qualcosa di concreto:
        </p>
        <Button size="lg" asChild>
          <a href="#">👉 Entra nel canale WhatsApp</a>
        </Button>
      </motion.div>
    </section>
  </div>
);

export default Community;
