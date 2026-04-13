"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";
import { useLightbox } from "@/components/LightboxProvider";

export function WeddingDetails() {
  const { openLightbox } = useLightbox();
  const { labels } = weddingData;

  return (
    <section
      id="details"
      className="relative bg-stone-200/50 px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          {labels.details}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.08 }}
          className="mt-2 font-sans text-stone-600"
        >
          {labels.detailsSubtitle}
        </motion.p>

        {weddingData.sectionImages?.details && (
          <motion.button
            type="button"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.12 }}
            onClick={() => openLightbox(weddingData.sectionImages!.details!)}
            aria-label="View photo"
            className="relative mx-auto mt-8 block aspect-[3/4] max-w-md overflow-hidden rounded-sm sm:mt-10"
          >
            <Image
              src={weddingData.sectionImages.details}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </motion.button>
        )}
      </div>
    </section>
  );
}
