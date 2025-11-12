import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LegalItem {
  title: string;
  content: string;
}

interface LegalSectionProps {
  items: LegalItem[];
}

const LegalSection = ({ items }: LegalSectionProps) => {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {items.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <AccordionItem
            value={`item-${index}`}
            className="glass-panel rounded-lg px-6 border-border/50 overflow-hidden group hover:border-cyan-500/30 transition-colors"
          >
            <AccordionTrigger className="text-lg font-semibold py-6 hover:no-underline group-hover:text-cyan-400 transition-colors">
              <span className="flex items-center gap-3">
                <span className="text-cyan-500 text-2xl">{index + 1}.</span>
                {item.title}
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-6 pt-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-muted-foreground leading-relaxed whitespace-pre-line"
              >
                {item.content.split(/(@[\w.]+|https?:\/\/[\w./-]+)/g).map((part, i) => {
                  if (part.startsWith('@') || part.startsWith('http')) {
                    const isEmail = part.includes('@') && !part.startsWith('http');
                    const href = isEmail ? `mailto:${part}` : part;
                    return (
                      <a
                        key={i}
                        href={href}
                        className="text-cyan-400 hover:text-cyan-300 transition-colors underline decoration-cyan-400/30 hover:decoration-cyan-300"
                        target={isEmail ? undefined : "_blank"}
                        rel={isEmail ? undefined : "noopener noreferrer"}
                      >
                        {part}
                      </a>
                    );
                  }
                  return part;
                })}
              </motion.div>
              
              {/* Glow effect on expand */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </AccordionContent>
          </AccordionItem>
        </motion.div>
      ))}
    </Accordion>
  );
};

export default LegalSection;
