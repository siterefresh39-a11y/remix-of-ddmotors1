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
          <a href="https://www.instagram.com/dd.motors_official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-foreground/50 hover:text-foreground transition-colors">
            <Instagram size={24} />
          </a>
          <a href="https://www.tiktok.com/@dd.motors_official" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-foreground/50 hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
          </a>
          <a href="mailto:ddmotorsofficial@gmail.com" aria-label="Email" className="text-foreground/50 hover:text-foreground transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <Link to="/privacy" className="text-muted-foreground text-xs hover:text-foreground transition-colors underline">
            Informativa Privacy
          </Link>
          <p className="text-muted-foreground text-xs">© 2025 DDMotors. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
