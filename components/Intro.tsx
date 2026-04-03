"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
            <div className="relative grid grid-cols-2 gap-1.5 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={weddingData.story.images[0]}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
              <div className="relative mt-2 aspect-[3/4] overflow-hidden rounded-sm sm:mt-8">
                <Image
                  src={weddingData.story.images[1] ?? weddingData.story.images[0]}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
              {weddingData.story.images[2] && (
                <div className="relative col-span-2 mt-2 aspect-[21/9] overflow-hidden rounded-sm sm:mt-4">
                  <Image
                    src={weddingData.story.images[2]}
                    alt=""
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
