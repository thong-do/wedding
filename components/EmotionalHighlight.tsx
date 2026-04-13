"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";
import { useLightbox } from "@/components/LightboxProvider";

const img =
  weddingData.emotionalHighlightImage ?? weddingData.heroImages[0] ?? weddingData.gallery[0];

export function EmotionalHighlight() {
  const { openLightbox } = useLightbox();
  return (
    <section className="relative h-[85vh] min-h-[500px] w-full overflow-hidden sm:h-[90vh]">
      <motion.button
        type="button"
        initial={{ opacity: 0, scale: 1.05 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 2.2, ease: [0.22, 0.61, 0.36, 1] }}
        onClick={() => openLightbox(img)}
        aria-label="View photo"
        className="absolute inset-0 cursor-pointer"
      >
        <Image
          src={img}
          alt=""
          fill
          unoptimized
          className="object-cover"
          sizes="100vw"
          priority={false}
        />
      </motion.button>
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent"
        aria-hidden
      />
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.8, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
        className="pointer-events-none absolute inset-x-0 bottom-0 px-6 pb-20 text-center sm:pb-28 md:pb-36"
      >
        <p className="font-serif text-3xl font-light tracking-wide text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-6xl">
          {weddingData.labels.emotionalHighlight}
        </p>
      </motion.div>
    </section>
  );
}
