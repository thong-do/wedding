"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PhotoCollageThree } from "@/components/PhotoCollageThree";
import { weddingData } from "@/data/wedding-data";

function timelineCollageImages(): string[] {
  const own = weddingData.timelineImages?.filter(Boolean) ?? [];
  if (own.length > 0) return own;
  const legacy = weddingData.sectionImages?.timeline;
  if (legacy) {
    const g = weddingData.gallery;
    return [legacy, g[0] ?? legacy, g[1] ?? legacy].filter(Boolean);
  }
  return weddingData.gallery.slice(0, 3);
}

export function Timeline() {
  const { timeline, labels } = weddingData;
  const collageImages = useMemo(timelineCollageImages, []);
  const landscapeSrc = collageImages[2];

  return (
    <section
      id="timeline"
      className="relative bg-stone-50 px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
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

        {landscapeSrc ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.06, ease: [0.22, 0.61, 0.36, 1] }}
            className="mx-auto mt-8 w-[70%] max-w-full overflow-hidden rounded-sm ring-1 ring-stone-200/50 sm:mt-10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={landscapeSrc}
              alt=""
              loading="lazy"
              decoding="async"
              className="h-auto w-full align-middle transition-transform duration-700 motion-safe:hover:scale-[1.01]"
            />
          </motion.div>
        ) : null}

        <div className="mt-12 grid gap-12 sm:mt-14 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
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
                  <p className="font-mono text-sm font-medium text-amber-900/90">{item.time}</p>
                  <h3 className="mt-1 font-serif text-xl text-stone-800">{item.title}</h3>
                  {item.description && (
                    <p className="mt-1 font-sans text-stone-600">{item.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.12 }}
            className="lg:sticky lg:top-24"
          >
            <PhotoCollageThree images={collageImages} omitLandscape />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
