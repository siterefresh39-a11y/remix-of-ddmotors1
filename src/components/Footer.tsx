import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <Link to="/" className="font-display text-2xl font-bold tracking-widest text-foreground">
            DDMOTORS
          </Link>
          <p className="text-muted-foreground text-sm mt-2">Passione. Motori. Eventi.</p>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" aria-label="Instagram" className="text-foreground/50 hover:text-foreground transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" aria-label="Facebook" className="text-foreground/50 hover:text-foreground transition-colors">
            <Facebook size={24} />
          </a>
          <a href="mailto:info@ddmotors.it" aria-label="Email" className="text-foreground/50 hover:text-foreground transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <p className="text-muted-foreground text-xs">© 2025 DDMotors. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
};

export default Footer;
