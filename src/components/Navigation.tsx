import { motion } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navigation = () => {

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-6 inset-x-0 z-50 px-4"
    >
      <div className="glass-panel mx-auto w-[95%] max-w-6xl rounded-2xl px-4 sm:px-6 py-4 flex items-center justify-between shadow-elegant overflow-hidden">
        <motion.div
          className="text-2xl font-bold gradient-text tracking-tight"
          style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 700, letterSpacing: '-0.02em' }}
          whileHover={{ scale: 1.05 }}
        >
          Neura Labs
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          {["home", "services", "works"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground smooth-transition relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-foreground group-hover:w-full smooth-transition" />
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="ghost"
              size="sm"
              className="gap-2 relative overflow-hidden group border border-border/40 hover:border-foreground/60 smooth-transition"
              onClick={() => scrollToSection("connect")}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
              <motion.div
                whileHover={{ rotate: 15 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-4 h-4" />
              </motion.div>
              <span className="hidden sm:inline relative z-10">Book a Call</span>
            </Button>
          </motion.div>
          <Button
            size="sm"
            className="gap-2 bg-white text-background hover:bg-white/90 animate-glow-pulse"
            onClick={() => scrollToSection("connect")}
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">Let's Connect</span>
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};
