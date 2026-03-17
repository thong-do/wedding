"use client";

import { motion } from "framer-motion";
import { weddingData } from "@/data/wedding-data";

export function Timeline() {
  return (
    <section
      id="timeline"
      className="relative bg-stone-50 px-4 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          Day Schedule
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 font-sans text-stone-600"
        >
          Our wedding day itinerary
        </motion.p>

        {/* Timeline - transit line inspired */}
        <div className="mt-16">
          {weddingData.timeline.map((item, i) => (
            <motion.div
              key={item.time}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative flex gap-4 pb-10 last:pb-0 sm:gap-8 sm:pb-12"
            >
              {/* Line */}
              {i < weddingData.timeline.length - 1 && (
                <div className="absolute left-[11px] top-8 h-full w-px bg-stone-300" />
              )}

              {/* Station dot */}
              <div className="relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-amber-800/60 bg-stone-50">
                <div className="h-2 w-2 rounded-full bg-amber-800/80" />
              </div>

              {/* Content */}
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
