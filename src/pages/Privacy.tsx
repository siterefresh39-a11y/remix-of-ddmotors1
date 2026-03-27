import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <section className="pt-24 md:pt-32 section-padding pb-16 md:pb-24">
      <div className="max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="section-title"
        >
          INFORMATIVA PRIVACY
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 font-body text-foreground/80 text-base leading-relaxed"
        >
          <div>
            <h2 className="font-display text-lg tracking-widest uppercase text-foreground mb-3">Titolare del trattamento</h2>
            <p>Davis degli Esposti — <a href="mailto:ddmotorsofficial@gmail.com" className="underline hover:text-foreground transition-colors">ddmotorsofficial@gmail.com</a></p>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-widest uppercase text-foreground mb-3">Dati raccolti</h2>
            <p>Attraverso il modulo di contatto raccogliamo esclusivamente il tuo <strong>nome</strong> e il tuo <strong>indirizzo email</strong>.</p>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-widest uppercase text-foreground mb-3">Finalità</h2>
            <p>I dati vengono utilizzati esclusivamente per rispondere alla tua richiesta di contatto.</p>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-widest uppercase text-foreground mb-3">Conservazione</h2>
            <p>I dati vengono conservati solo per il tempo strettamente necessario a rispondere alla tua richiesta e vengono successivamente eliminati.</p>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-widest uppercase text-foreground mb-3">Diritti dell'interessato</h2>
            <p>
              Puoi esercitare i tuoi diritti (accesso, rettifica, cancellazione, opposizione) in qualsiasi momento scrivendo a{" "}
              <a href="mailto:ddmotorsofficial@gmail.com" className="underline hover:text-foreground transition-colors">ddmotorsofficial@gmail.com</a>.
            </p>
          </div>

          <div>
            <h2 className="font-display text-lg tracking-widest uppercase text-foreground mb-3">Base giuridica</h2>
            <p>Il trattamento è basato sul tuo consenso, espresso tramite la spunta nel modulo di contatto (art. 6, par. 1, lett. a del GDPR).</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Privacy;
