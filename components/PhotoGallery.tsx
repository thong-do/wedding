"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { weddingData } from "@/data/wedding-data";
import { useLightbox } from "@/components/LightboxProvider";

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
  const { openLightbox } = useLightbox();
  const { labels } = weddingData;

  return (
    <section
      id="gallery"
      className="relative bg-stone-100 px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          {labels.gallery}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.08 }}
          className="mt-2 font-sans text-stone-600"
        >
          {labels.gallerySubtitle}
        </motion.p>

        <div className="mt-8 grid grid-cols-3 gap-0.5 sm:mt-14 sm:gap-2 md:gap-4">
          {galleryLayout.map(({ col, aspect, i }, idx) => {
            const src = weddingData.gallery[i % weddingData.gallery.length];
            return (
              <motion.button
                key={`${i}-${idx}`}
                type="button"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: idx * 0.04 }}
                onClick={() => openLightbox(src)}
                aria-label={`View photo ${i + 1}`}
                className={`group relative overflow-hidden rounded-sm ${col} ${aspect}`}
              >
                <Image
                  src={src}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 33vw, 33vw"
                />
                <div className="absolute inset-0 bg-stone-900/0 transition-colors duration-500 group-hover:bg-stone-900/10" />
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
