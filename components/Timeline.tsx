"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";

export function Timeline() {
  const { timeline, labels } = weddingData;

  return (
    <section
      id="timeline"
      className="relative bg-stone-50 px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          {labels.timeline}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.08 }}
          className="mt-2 font-sans text-stone-600"
        >
          {labels.timelineSubtitle}
        </motion.p>

        {weddingData.sectionImages?.timeline && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.12 }}
            className="relative mx-auto mt-8 aspect-[3/2] max-w-md overflow-hidden rounded-sm sm:mt-10"
          >
            <Image
              src={weddingData.sectionImages.timeline}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </motion.div>
        )}

        <div className="mt-16">
          {timeline.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.08 }}
              className="relative flex gap-4 pb-10 last:pb-0 sm:gap-8 sm:pb-12"
            >
              {i < timeline.length - 1 && (
                <div className="absolute left-[11px] top-8 h-full w-px bg-stone-300" />
              )}

              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-800/50 bg-stone-50">
                <div className="h-2 w-2 rounded-full bg-amber-800/80" />
              </div>

              <div className="flex-1 pt-0">
                <p className="font-mono text-sm font-medium text-amber-900/90">
                  {item.time}
                </p>
                <h3 className="mt-1 font-serif text-xl text-stone-800">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="mt-1 font-sans text-stone-600">
                    {item.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
