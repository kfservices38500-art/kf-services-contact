import { useRef, useEffect, useCallback } from "react";

const words = ["Transparence", "Accompagnement", "Sérénité"];

const MarqueeBanner = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const updatePopcorn = useCallback(() => {
    if (!containerRef.current) return;
    const spans = containerRef.current.querySelectorAll<HTMLSpanElement>("[data-word]");
    const center = window.innerWidth / 2;

    spans.forEach((span) => {
      const rect = span.getBoundingClientRect();
      const spanCenter = rect.left + rect.width / 2;
      const dist = Math.abs(spanCenter - center);
      const maxDist = 300;
      const t = Math.max(0, 1 - dist / maxDist);
      const scale = 1 + t * 0.3;
      const opacity = 0.6 + t * 0.4;
      span.style.transform = `scale(${scale})`;
      span.style.opacity = `${opacity}`;
    });

    requestAnimationFrame(updatePopcorn);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(updatePopcorn);
    return () => cancelAnimationFrame(id);
  }, [updatePopcorn]);

  return (
    <div
      className="w-full overflow-hidden py-6 md:py-8"
      style={{
        background: "linear-gradient(135deg, hsl(220 10% 20%), hsl(220 10% 8%))",
      }}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 8s linear infinite" }}
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center shrink-0">
            {words.map((word) => (
              <span key={`${i}-${word}`} className="contents">
                <span
                  data-word
                  className="text-white font-bold text-2xl md:text-4xl uppercase tracking-[0.15em] mx-8 md:mx-14 inline-block transition-none"
                  style={{ willChange: "transform, opacity" }}
                >
                  {word}
                </span>
                <span className="text-white/50 text-3xl md:text-5xl mx-2">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeBanner;
