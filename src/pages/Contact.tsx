import { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Mail, Send } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 3000);
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
            <button
              type="submit"
              className="w-full md:w-auto font-display text-sm tracking-widest uppercase bg-foreground text-background px-10 py-4 hover:bg-foreground/90 transition-colors flex items-center justify-center gap-3"
            >
              <Send size={16} />
              Invia messaggio
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
            <a href="#" aria-label="Instagram" className="text-foreground/40 hover:text-foreground transition-colors">
              <Instagram size={32} />
            </a>
            <a href="#" aria-label="Facebook" className="text-foreground/40 hover:text-foreground transition-colors">
              <Facebook size={32} />
            </a>
            <a href="mailto:info@ddmotors.it" aria-label="Email" className="text-foreground/40 hover:text-foreground transition-colors">
              <Mail size={32} />
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
