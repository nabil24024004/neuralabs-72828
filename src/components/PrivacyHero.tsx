import { motion } from "framer-motion";

const PrivacyHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-6 overflow-hidden pt-32">
      {/* Animated background glow */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-cyan-500/20 to-violet-500/20 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="gradient-text">Legal & Privacy</span>
          </h1>
          
          <motion.p
            className="text-xl md:text-2xl mb-8 text-muted-foreground font-light tracking-wide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Transparent. Secure. Responsible.
          </motion.p>

          <motion.p
            className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Neura Labs operates with clarity and respect for your data. This page outlines 
            how we collect, use, and protect information — and the terms that guide our services.
          </motion.p>
        </motion.div>

        {/* Animated divider */}
        <motion.div
          className="mt-16 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        />
      </div>
    </section>
  );
};

export default PrivacyHero;
