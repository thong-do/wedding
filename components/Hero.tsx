"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { weddingData } from "@/data/wedding-data";
import { useLightbox } from "@/components/LightboxProvider";

export function Hero() {
  const { openLightbox } = useLightbox();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % weddingData.heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        {/* Render all images so they preload; only current slide is visible */}
        {weddingData.heroImages.map((src, i) => (
          <motion.div
            key={src}
            initial={false}
            animate={{ opacity: i === currentSlide ? 1 : 0 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            role="button"
            tabIndex={i === currentSlide ? 0 : -1}
            aria-label="View hero photo"
            className="absolute inset-0 cursor-pointer"
            style={{ pointerEvents: i === currentSlide ? "auto" : "none" }}
            onClick={() => openLightbox(src)}
            onKeyDown={(e) => {
              if (i === currentSlide && (e.key === "Enter" || e.key === " ")) {
                e.preventDefault();
                openLightbox(src);
              }
            }}
          >
            <Image
              src={src}
              alt="Wedding"
              fill
              unoptimized
              className="object-cover"
              priority
              sizes="100vw"
            />
          </motion.div>
        ))}
      </div>

      <div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70"
        aria-hidden
      />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="mx-auto w-full max-w-4xl text-center"
        >
          <p className="mb-4 font-sans text-base tracking-[0.3em] text-white/80 sm:mb-6 sm:text-lg">
            {weddingData.labels.ceremonialInvite}
          </p>
          <h1 className="flex max-w-full flex-nowrap items-baseline justify-center gap-x-2 font-serif text-2xl font-light tracking-wide text-white drop-shadow-lg sm:gap-x-3 sm:text-4xl md:text-5xl lg:text-6xl">
            <span className="whitespace-nowrap">{weddingData.couple.bride}</span>
            <span className="shrink-0 text-amber-200/90">×</span>
            <span className="whitespace-nowrap">{weddingData.couple.groom}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-5 font-sans text-xl tracking-widest text-white/90 sm:mt-6 sm:text-2xl"
          >
            {weddingData.date}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-3 font-serif text-lg italic text-amber-100/90 sm:mt-4 sm:text-xl"
          >
            {weddingData.hero.tagline}
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 pb-[env(safe-area-inset-bottom)] sm:bottom-8"
      >
        <button
          onClick={() => scrollToSection("intro")}
          className="flex flex-col items-center gap-1 text-white/70 transition-colors hover:text-white"
          aria-label="Cuộn xuống"
        >
          <ChevronDown size={32} className="animate-pulse" />
        </button>
      </motion.div>
    </section>
  );
}
