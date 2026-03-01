import { useLocation, Link } from "react-router-dom";
import { Home } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BackToHome = () => {
  const { pathname } = useLocation();
  if (pathname === "/") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="fixed bottom-6 right-6 z-50"
      >
        <Link
          to="/"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Torna alla Home"
        >
          <Home size={20} />
          <span className="hidden sm:inline font-display text-sm tracking-wider uppercase">Home</span>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};

export default BackToHome;
