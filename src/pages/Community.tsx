import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Camera, Video, Car, Users, Rocket, Crown, Flag, MapPin, Target, ExternalLink } from "lucide-react";
import selective1 from "@/assets/selective-1.jpg";
import selective2 from "@/assets/selective-2.jpg";
import selective3 from "@/assets/selective-3.jpg";
import fotografi1 from "@/assets/fotografi-1.jpg";
import fotografi2 from "@/assets/fotografi-2.jpg";
import fotografi3 from "@/assets/fotografi-3.jpg";

const benefits = [
  { icon: Camera, title: "Condivisione lavori e feedback reali" },
  { icon: Video, title: "Collaborazioni su progetti automotive" },
  { icon: Car, title: "Accesso a raduni ed eventi" },
  { icon: Users, title: "Networking con altri creator" },
  { icon: Rocket, title: "Opportunità per crescere nel settore" },
];

const selectiveBenefits = [
  { icon: Flag, title: "Raduni dinamici su percorsi selezionati", emoji: "🏁" },
  { icon: Car, title: "Esperienze di guida in gruppo", emoji: "🚗" },
  { icon: MapPin, title: "Location e itinerari curati", emoji: "📍" },
  { icon: Target, title: "Eventi organizzati nei dettagli", emoji: "🎯" },
  { icon: Users, title: "Networking con appassionati selezionati", emoji: "🤝" },
];

const selectiveImages = [selective1, selective2, selective3];
const fotografiImages = [fotografi1, fotografi2, fotografi3];

const ImageBreak = ({ src, alt }: { src: string; alt: string }) => (
  <section className="section-padding py-8">
    <motion.div className="max-w-4xl mx-auto" {...fadeUp}>
      <img src={src} alt={alt} className="w-full rounded-lg object-cover h-56 md:h-72" loading="lazy" width={1024} height={576} />
    </motion.div>
  </section>
);

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

type Tab = "fotografi" | "selective";

const tabs: { key: Tab; label: string }[] = [
  { key: "fotografi", label: "Fotografi" },
  { key: "selective", label: "Selective Club+" },
];

const Community = () => {
  const [activeTab, setActiveTab] = useState<Tab>("fotografi");

  return (
    <div>
      {/* Tab bar */}
      <div className="section-padding pb-0">
        <div className="max-w-md mx-auto flex rounded-lg border border-border bg-card p-1 gap-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-semibold transition-colors ${
                activeTab === tab.key
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === "fotografi" ? (
          <motion.div
            key="fotografi"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero */}
            <section className="section-padding min-h-[70vh] flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto">
                <motion.h1 className="section-title text-4xl md:text-6xl lg:text-7xl mb-6" {...fadeUp}>
                  LA COMMUNITY PER CHI VUOLE RACCONTARE L'AUTOMOTIVE
                </motion.h1>
                <motion.p className="section-subtitle text-base md:text-xl max-w-2xl mx-auto mb-10" {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }}>
                  Un network di fotografi e creator che collaborano, crescono e trasformano la passione in qualcosa di concreto.
                </motion.p>
                <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
                  <Button size="lg" asChild>
                    <a href="https://chat.whatsapp.com/H1Qxkmmksnz2Xc0c49Jzjn?mode=gi_t" target="_blank" rel="noopener noreferrer">Entra nella community</a>
                  </Button>
                </motion.div>
              </div>
            </section>

            <ImageBreak src={fotografiImages[0]} alt="Fotografo automotive in pista" />
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {benefits.map((b, i) => (
                    <motion.div
                      key={b.title}
                      className="group rounded-lg border border-border bg-card p-5 sm:p-6 flex items-center sm:items-start gap-4 cursor-default transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <b.icon className="text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" size={24} />
                      <span className="text-foreground text-sm sm:text-base md:text-lg font-medium">{b.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <ImageBreak src={fotografiImages[1]} alt="Videomaker al car event" />

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

            <ImageBreak src={fotografiImages[2]} alt="Fotografi al car meet" />

            {/* CTA finale */}
            <section className="section-padding">
              <motion.div className="max-w-2xl mx-auto text-center space-y-6" {...fadeUp}>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Se vuoi trasformare la tua passione in qualcosa di concreto:
                </p>
                <a href="https://chat.whatsapp.com/H1Qxkmmksnz2Xc0c49Jzjn?mode=gi_t" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider text-sm md:text-base hover:bg-primary/90 transition-colors rounded">
                  👉 Entra nel canale WhatsApp <ExternalLink size={16} />
                </a>
              </motion.div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="selective"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Hero */}
            <section className="section-padding min-h-[70vh] flex items-center justify-center text-center">
              <div className="max-w-4xl mx-auto space-y-6">
                <motion.div {...fadeUp}>
                  <Crown className="mx-auto text-primary" size={64} />
                </motion.div>
                <motion.h1 className="section-title text-4xl md:text-6xl lg:text-7xl" {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
                  Non partecipare. Vivi.
                </motion.h1>
                <motion.p className="section-subtitle text-base md:text-xl max-w-2xl mx-auto" {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
                  DDMotors Selective Club è la divisione dedicata ai raduni dinamici e alle esperienze automotive esclusive.
                </motion.p>
                <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.3 }}>
                  <Button size="lg" asChild>
                    <a href="https://chat.whatsapp.com/DrGUr1QTIDb4luZIepP8aO?mode=gi_t" target="_blank" rel="noopener noreferrer">Entra nella community</a>
                  </Button>
                </motion.div>
              </div>
            </section>

            <ImageBreak src={selectiveImages[0]} alt="Raduno esclusivo Selective Club" />

            {/* Cosa offriamo */}
            <section className="section-padding">
              <div className="max-w-5xl mx-auto">
                <motion.h2 className="section-title text-3xl md:text-5xl text-center mb-12" {...fadeUp}>
                  COSA OFFRIAMO
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {selectiveBenefits.map((b, i) => (
                    <motion.div
                      key={b.title}
                      className="group rounded-lg border border-border bg-card p-5 sm:p-6 flex items-center sm:items-start gap-4 cursor-default transition-all duration-300 hover:scale-105 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                      <b.icon className="text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" size={24} />
                      <span className="text-foreground text-sm sm:text-base md:text-lg font-medium">{b.title}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            <ImageBreak src={selectiveImages[1]} alt="Esperienza di guida Selective Club" />

            {/* Accesso limitato */}
            <section className="section-padding">
              <div className="max-w-3xl mx-auto text-center space-y-4">
                <motion.p className="text-2xl md:text-3xl font-bold text-foreground" {...fadeUp}>
                  L'accesso al club è limitato.
                </motion.p>
                <motion.p className="text-lg md:text-xl text-muted-foreground" {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
                  Selezioniamo i partecipanti per garantire qualità, sicurezza e un'esperienza reale.
                </motion.p>
              </div>
            </section>

            <ImageBreak src={selectiveImages[2]} alt="Networking esclusivo Selective Club" />

            {/* CTA WhatsApp */}
            <section className="section-padding">
              <motion.div className="max-w-2xl mx-auto text-center space-y-6" {...fadeUp}>
                <p className="text-lg md:text-xl text-muted-foreground">
                  Vuoi far parte del Selective Club?
                </p>
                <a href="https://chat.whatsapp.com/DrGUr1QTIDb4luZIepP8aO?mode=gi_t" target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-display tracking-wider text-sm md:text-base hover:bg-primary/90 transition-colors rounded">
                  👉 Entra nel gruppo WhatsApp <ExternalLink size={16} />
                </a>
              </motion.div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Community;
