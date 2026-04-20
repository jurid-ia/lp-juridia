"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { PhotoSlot, type PhotoSlotProps } from "@/components/ui/PhotoSlot";
import { cn } from "@/lib/cn";

type Slide = {
  src?: string;
  alt: string;
  tone?: PhotoSlotProps["tone"];
  caption?: string;
};

// 4 slides iniciais com imagens da home. Troque `src` quando receber as oficiais.
const SLIDES: Slide[] = [
  { src: "/images/showcase/23.png", alt: "" },
  { src: "/images/showcase/28.png", alt: "" },
  { src: "/images/showcase/31.png", alt: "" },
  { src: "/images/showcase/32.png", alt: "" },
];

export function ParabensSlider() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(0);

  // Observa qual slide está centralizado (funciona com swipe + scroll-snap)
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let ticking = false;
    function onScroll() {
      if (ticking || !scroller) return;
      ticking = true;
      requestAnimationFrame(() => {
        const { scrollLeft, clientWidth } = scroller;
        const idx = Math.round(scrollLeft / clientWidth);
        setActive((prev) => (prev === idx ? prev : idx));
        ticking = false;
      });
    }

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToIndex(idx: number) {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    const clamped = Math.max(0, Math.min(idx, SLIDES.length - 1));
    scroller.scrollTo({ left: scroller.clientWidth * clamped, behavior: "smooth" });
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55 }}
      aria-label="Galeria"
      className="mx-auto mt-16 w-full max-w-5xl"
    >
      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          tabIndex={0}
          role="region"
          aria-roledescription="carrossel"
          aria-label="Galeria de imagens"
        >
          {SLIDES.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-full shrink-0 snap-center"
              aria-roledescription="slide"
              aria-label={`${idx + 1} de ${SLIDES.length}`}
            >
              <PhotoSlot src={slide.src} alt={slide.alt} tone={slide.tone} aspect="16/9" />
              {slide.caption && (
                <p className="mt-3 text-center text-sm text-text-muted">{slide.caption}</p>
              )}
            </div>
          ))}
        </div>

        {/* Botões prev/next — ocultos no mobile (swipe basta) */}
        <button
          type="button"
          aria-label="Anterior"
          onClick={() => scrollToIndex(active - 1)}
          disabled={active === 0}
          className="absolute left-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg/80 text-text backdrop-blur-md transition-all duration-200 hover:-translate-y-[calc(50%+2px)] hover:border-gold/60 disabled:opacity-30 disabled:pointer-events-none md:flex"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Próximo"
          onClick={() => scrollToIndex(active + 1)}
          disabled={active === SLIDES.length - 1}
          className="absolute right-3 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-bg/80 text-text backdrop-blur-md transition-all duration-200 hover:-translate-y-[calc(50%+2px)] hover:border-gold/60 disabled:opacity-30 disabled:pointer-events-none md:flex"
        >
          <ChevronRight size={20} aria-hidden />
        </button>
      </div>

      {/* Dots */}
      <div className="mt-5 flex items-center justify-center gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Ir para slide ${idx + 1}`}
            aria-current={active === idx}
            onClick={() => scrollToIndex(idx)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-200",
              active === idx ? "w-8 bg-gold" : "w-1.5 bg-line-strong hover:bg-gold/60",
            )}
          />
        ))}
      </div>
    </motion.section>
  );
}
