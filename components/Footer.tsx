"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Optional final image */}
      {weddingData.ending.image && (
        <div className="relative h-[40vh] min-h-[200px] w-full sm:h-[50vh] sm:min-h-[300px]">
          <Image
            src={weddingData.ending.image}
            alt=""
            fill
            unoptimized
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-stone-900/50" />
        </div>
      )}

      {/* Thank you message */}
      <div className="bg-stone-900 px-4 py-16 text-center sm:px-6 sm:py-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-xl font-light text-stone-100 sm:text-2xl md:text-3xl"
        >
          {weddingData.ending.thankYou}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
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
