"use client";

import { motion } from "framer-motion";
import { PhotoCollageThree } from "@/components/PhotoCollageThree";
import { weddingData } from "@/data/wedding-data";

export function Intro() {
  return (
    <section
      id="intro"
      className="relative bg-stone-50 px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2 }}
          className="mb-16 text-center font-serif text-lg italic text-stone-600 sm:mb-20 sm:text-xl md:text-2xl"
        >
          {weddingData.labels.openingLine}
        </motion.p>

        <div className="mb-12 h-px w-24 bg-stone-300/60 mx-auto sm:mb-16" aria-hidden />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2 }}
            className="order-1"
          >
            <h2 className="font-serif text-3xl font-light text-stone-800 md:text-4xl">
              {weddingData.labels.story}
            </h2>
            <p className="mt-2 font-sans text-sm text-stone-500">
              {weddingData.labels.storySubtitle}
            </p>
            <p className="mt-6 font-sans text-lg leading-relaxed text-stone-600">
              {weddingData.story.intro}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="order-2"
          >
            <PhotoCollageThree images={weddingData.story.images} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
