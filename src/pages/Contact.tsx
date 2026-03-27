import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Mail, Send, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/hooks/use-toast";
import emailjs from "@emailjs/browser";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [privacyRead, setPrivacyRead] = useState(false);
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [privacyError, setPrivacyError] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!privacyAccepted) {
      setPrivacyError(true);
      return;
    }
    setPrivacyError(false);
    setSending(true);

    try {
      await emailjs.send(
        "service_jbkce5p",
        "template_6fwoxvi",
        {
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "WTqSiaiPQLg4l4hz8"
      );
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setPrivacyAccepted(false);
      setPrivacyRead(false);
      toast({
        title: "✅ Messaggio inviato!",
        description: "Ti risponderemo il prima possibile.",
      });
      setTimeout(() => setSent(false), 3000);
    } catch (error) {
      toast({
        title: "Errore",
        description: "Invio fallito. Riprova più tardi.",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  };

  const handlePrivacyLinkClick = () => {
    setPrivacyOpen(true);
  };

  const handlePrivacyConfirm = () => {
    setPrivacyRead(true);
    setPrivacyOpen(false);
  };

  return (
    <>
      <section className="pt-24 md:pt-32 section-padding">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            CONTATTACI
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="section-subtitle mb-12 md:mb-16"
          >
            Vuoi partecipare ai nostri eventi o collaborare con noi? Scrivici.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block font-display text-sm tracking-widest uppercase text-foreground/60 mb-2">
                Nome
              </label>
              <input
                id="name"
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground font-body text-base focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-display text-sm tracking-widest uppercase text-foreground/60 mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground font-body text-base focus:outline-none focus:border-foreground transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block font-display text-sm tracking-widest uppercase text-foreground/60 mb-2">
                Messaggio
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-transparent border border-border/50 px-5 py-4 text-foreground font-body text-base focus:outline-none focus:border-foreground transition-colors resize-none"
              />
            </div>

            {/* Privacy checkbox */}
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={privacyAccepted}
                  disabled={!privacyRead}
                  onCheckedChange={(checked) => {
                    if (privacyRead) {
                      setPrivacyAccepted(checked === true);
                      setPrivacyError(false);
                    }
                  }}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="font-body text-sm text-foreground/70 cursor-pointer select-none">
                  Ho letto l'
                  <button
                    type="button"
                    onClick={handlePrivacyLinkClick}
                    className="underline text-foreground hover:text-foreground/80 transition-colors"
                  >
                    informativa privacy
                  </button>
                  {" "}e acconsento al trattamento dei miei dati.
                </label>
              </div>
              {privacyError && (
                <p className="text-destructive text-sm font-body">
                  Devi prima leggere l'informativa privacy.{" "}
                  <button
                    type="button"
                    onClick={handlePrivacyLinkClick}
                    className="underline hover:text-destructive/80 transition-colors"
                  >
                    Clicca qui per leggerla
                  </button>.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full md:w-auto font-display text-sm tracking-widest uppercase bg-foreground text-background px-10 py-4 hover:bg-foreground/90 transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
              {sending ? "Invio in corso..." : "Invia messaggio"}
            </button>
            {sent && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-foreground/60 font-body text-sm"
              >
                Messaggio inviato! Ti risponderemo presto.
              </motion.p>
            )}
          </motion.form>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 md:mt-24 flex items-center gap-8"
          >
            <a href="https://www.instagram.com/dd.motors_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/40 hover:text-foreground transition-colors">
              <Instagram size={32} />
            </a>
            <a href="https://www.tiktok.com/@dd.motors_official" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-foreground/40 hover:text-foreground transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
            <a href="mailto:ddmotorsofficial@gmail.com" aria-label="Email" className="text-foreground/40 hover:text-foreground transition-colors">
              <Mail size={32} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Privacy Dialog */}
      <Dialog open={privacyOpen} onOpenChange={setPrivacyOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto bg-background border-border">
          <DialogHeader>
            <DialogTitle className="font-display text-xl tracking-widest uppercase">
              INFORMATIVA PRIVACY
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-6 font-body text-foreground/80 text-sm leading-relaxed mt-4">
            <div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">Titolare del trattamento</h3>
              <p>Davis degli Esposti — ddmotorsofficial@gmail.com</p>
            </div>
            <div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">Dati raccolti</h3>
              <p>Attraverso il modulo di contatto raccogliamo esclusivamente il tuo <strong>nome</strong> e il tuo <strong>indirizzo email</strong>.</p>
            </div>
            <div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">Finalità</h3>
              <p>I dati vengono utilizzati esclusivamente per rispondere alla tua richiesta di contatto.</p>
            </div>
            <div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">Conservazione</h3>
              <p>I dati vengono conservati solo per il tempo strettamente necessario a rispondere alla tua richiesta e vengono successivamente eliminati.</p>
            </div>
            <div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">Diritti dell'interessato</h3>
              <p>Puoi esercitare i tuoi diritti (accesso, rettifica, cancellazione, opposizione) in qualsiasi momento scrivendo a ddmotorsofficial@gmail.com.</p>
            </div>
            <div>
              <h3 className="font-display text-sm tracking-widest uppercase text-foreground mb-2">Base giuridica</h3>
              <p>Il trattamento è basato sul tuo consenso, espresso tramite la spunta nel modulo di contatto (art. 6, par. 1, lett. a del GDPR).</p>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePrivacyConfirm}
            className="w-full mt-6 font-display text-sm tracking-widest uppercase bg-foreground text-background px-8 py-4 hover:bg-foreground/90 transition-colors"
          >
            HO LETTO L'INFORMATIVA
          </button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Contact;
