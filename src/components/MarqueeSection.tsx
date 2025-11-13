const items = [
  "AI Engineering",
  "Automation Design",
  "Intelligent Systems",
  "Product Innovation",
  "Neural Networks",
  "Machine Learning",
];

export const MarqueeSection = () => {
  return (
    <div className="py-20 space-y-8 overflow-hidden">
      {/* Forward Marquee - CSS Animation */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 md:gap-12 whitespace-nowrap animate-slide-left" style={{ willChange: 'transform' }}>
          {[...items, ...items, ...items, ...items].map((item, index) => (
            <div
              key={index}
              className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text opacity-20 hover:opacity-100 smooth-transition"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Marquee - CSS Animation */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-8 md:gap-12 whitespace-nowrap animate-slide-right" style={{ willChange: 'transform' }}>
          {[...items, ...items, ...items, ...items].reverse().map((item, index) => (
            <div
              key={index}
              className="text-3xl sm:text-4xl md:text-6xl font-bold text-white/10 hover:text-white/30 smooth-transition"
            >
              • {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
