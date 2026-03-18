"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

// Vertical (3:4) and two horizontal (4:3) - editorial layout
const galleryLayout = [
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 0 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 1 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 2 },
  { col: "col-span-3", aspect: "aspect-[4/3]", i: 3 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 4 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 5 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 6 },
  { col: "col-span-3", aspect: "aspect-[4/3]", i: 7 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 8 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 9 },
  { col: "col-span-1", aspect: "aspect-[3/4]", i: 10 },
];

export function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="gallery"
      className="relative bg-stone-100 px-2 py-12 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          Kỷ niệm
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 font-sans text-stone-600"
        >
          Kỷ niệm của chúng tôi
        </motion.p>

        {/* Editorial grid */}
        <div className="mt-6 grid grid-cols-3 gap-0.5 sm:mt-12 sm:gap-2 md:gap-4">
          {galleryLayout.map(({ col, aspect, i }, idx) => {
            const src = weddingData.gallery[i % weddingData.gallery.length];
            return (
              <motion.button
                key={`${i}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(i)}
                className={`group relative overflow-hidden rounded-sm ${col} ${aspect}`}
              >
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-300 group-hover:bg-stone-900/20" />
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 pt-14 pb-6"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute right-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white active:bg-white/20"
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-h-[90vh] max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={weddingData.gallery[lightboxIndex % weddingData.gallery.length]}
                alt={`Gallery ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                unoptimized
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
