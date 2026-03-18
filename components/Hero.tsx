"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, MapPin, Calendar, Send } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

export function Hero() {
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
            className="absolute inset-0"
            style={{ pointerEvents: i === currentSlide ? "auto" : "none" }}
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
          className="max-w-4xl"
        >
          <p className="mb-4 font-sans text-sm tracking-[0.3em] text-white/80 sm:mb-6 sm:text-base">
            {weddingData.labels.ceremonialInvite}
          </p>
          <h1 className="font-serif text-3xl font-light tracking-wide text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block sm:inline">{weddingData.couple.bride}</span>
            <span className="mx-2 sm:mx-3 text-amber-200/90">×</span>
            <span className="block sm:inline">{weddingData.couple.groom}</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-4 font-sans text-lg tracking-widest text-white/90 sm:text-xl"
          >
            {weddingData.date}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-2 font-serif text-base italic text-amber-100/90 sm:text-lg"
          >
            {weddingData.hero.tagline}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 flex flex-col items-center gap-3 px-2 sm:mt-14 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4"
        >
          <button
            onClick={() => scrollToSection("details")}
            className="flex min-h-[44px] w-full min-w-[140px] max-w-[280px] items-center justify-center gap-2 rounded-full border border-white/50 bg-white/5 px-6 py-3 font-sans text-sm tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/60 sm:w-auto sm:max-w-none active:bg-white/20"
          >
            <Calendar size={18} />
            {weddingData.hero.cta.details}
          </button>
          <button
            onClick={() => scrollToSection("venue")}
            className="flex min-h-[44px] w-full min-w-[140px] max-w-[280px] items-center justify-center gap-2 rounded-full border border-white/50 bg-white/5 px-6 py-3 font-sans text-sm tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/15 hover:border-white/60 sm:w-auto sm:max-w-none active:bg-white/20"
          >
            <MapPin size={18} />
            {weddingData.hero.cta.location}
          </button>
          <button
            onClick={() => scrollToSection("rsvp")}
            className="flex min-h-[44px] w-full min-w-[140px] max-w-[280px] items-center justify-center gap-2 rounded-full bg-amber-900/70 px-6 py-3 font-sans text-sm tracking-wide text-white backdrop-blur-sm transition-all duration-300 hover:bg-amber-800/80 sm:w-auto sm:max-w-none active:bg-amber-800/90"
          >
            <Send size={18} />
            {weddingData.hero.cta.rsvp}
          </button>
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
