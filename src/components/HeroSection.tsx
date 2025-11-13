import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
export const HeroSection = () => {
  const isMobile = useIsMobile();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />
      </div>

      {/* Floating Orbs - Optimized */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ willChange: 'transform' }} />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float" style={{ willChange: 'transform', animationDelay: '3s' }} />

      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 max-w-5xl mx-auto animate-fade-in-up">
          <div className="inline-flex items-center gap-2 glass-panel px-4 py-2 rounded-full text-sm animate-scale-in">
            <Sparkles className="w-4 h-4 animate-glow-pulse" />
            <span>AI Engineering & Design Agency</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold gradient-text glow-text leading-tight">
            Designing the Future
            <br />
            of Intelligence
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            AI Engineering • Automation • Intelligent Systems
          </p>

          <div className="pt-12">
            <p className="text-sm text-muted-foreground mb-4">Trusted by innovative companies</p>
            <div className={`relative w-full opacity-40 ${isMobile ? 'overflow-hidden' : ''}`}>
              <motion.div 
                className={`flex gap-8 whitespace-nowrap ${!isMobile ? 'justify-center' : ''}`}
                animate={isMobile ? {
                  x: ["0%", "-50%"],
                } : {}}
                transition={isMobile ? {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                } : {}}
                style={{ willChange: 'transform' }}
              >
                {(isMobile 
                  ? [...["TechCorp", "InnovateLabs", "FutureAI", "DataFlow"], ...["TechCorp", "InnovateLabs", "FutureAI", "DataFlow"]]
                  : ["TechCorp", "InnovateLabs", "FutureAI", "DataFlow"]
                ).map((company, i) => (
                  <div key={`${company}-${i}`} className="text-lg font-semibold">
                    {company}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};