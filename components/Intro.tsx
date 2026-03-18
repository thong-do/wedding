"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";

export function Intro() {
  return (
    <section
      id="intro"
      className="relative bg-stone-50 px-2 py-12 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <h2 className="font-serif text-3xl font-light text-stone-800 md:text-4xl">
              Câu chuyện của chúng tôi
            </h2>
            <p className="mt-6 font-sans text-lg leading-relaxed text-stone-600">
              {weddingData.story.intro}
            </p>
          </motion.div>

          {/* Images - editorial layout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative grid grid-cols-2 gap-1.5 sm:gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                <Image
                  src={weddingData.story.images[0]}
                  alt="Câu chuyện của chúng tôi"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
              <div className="relative mt-2 aspect-[3/4] overflow-hidden rounded-sm sm:mt-8">
                <Image
                  src={weddingData.story.images[1] || weddingData.story.images[0]}
                  alt="Câu chuyện của chúng tôi"
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 400px"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
