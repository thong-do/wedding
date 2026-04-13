"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";
import { useLightbox } from "@/components/LightboxProvider";

export function Footer() {
  const { openLightbox } = useLightbox();
  return (
    <footer className="relative overflow-hidden">
      {weddingData.ending.image && (
        <button
          type="button"
          onClick={() => openLightbox(weddingData.ending.image!)}
          aria-label="View photo"
          className="relative block h-[55vh] min-h-[280px] w-full sm:h-[50vh] sm:min-h-[300px]"
        >
          <Image
            src={weddingData.ending.image}
            alt=""
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-stone-900/50" />
        </button>
      )}

      <div className="bg-stone-900 px-4 py-16 text-center sm:px-6 sm:py-24">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif text-xl font-light text-stone-100 sm:text-2xl md:text-3xl"
        >
          {weddingData.ending.thankYou}
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-4 font-sans text-stone-300"
        >
          {weddingData.ending.finalLine}
        </motion.p>
        <p className="mt-12 font-sans text-sm text-stone-500">
          {weddingData.couple.bride} × {weddingData.couple.groom}
        </p>
      </div>
    </footer>
  );
}
