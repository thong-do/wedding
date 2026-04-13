"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { PhotoCollageThree } from "@/components/PhotoCollageThree";
import { weddingData } from "@/data/wedding-data";
import type { TimelineTag } from "@/data/wedding-data";

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

function TimelineText({
  tag,
  align,
}: {
  tag?: TimelineTag;
  align: "right" | "left";
}) {
  if (!tag) {
    return <div className="min-h-[2.5rem] w-full max-w-[22rem]" aria-hidden />;
  }
  const side = align === "right" ? "items-end text-right" : "items-start text-left";
  return (
    <div
      className={`flex max-w-[min(100%,22rem)] flex-col gap-1.5 ${side} sm:max-w-[min(100%,26rem)]`}
    >
      <p className="font-serif text-base font-light leading-snug tracking-[0.01em] text-stone-800 sm:text-[1.0625rem] md:text-lg">
        {tag.title}
      </p>
      {tag.description ? (
        <p className="max-w-prose font-serif text-[0.875rem] font-light leading-relaxed text-stone-600 sm:text-[0.9375rem]">
          {tag.description}
        </p>
      ) : null}
    </div>
  );
}

const rowMinH = "min-h-[6.25rem] sm:min-h-[6.75rem]";

const spineCol = "w-[6.75rem] shrink-0 sm:w-36";

function timePlacement(row: { bride?: unknown; groom?: unknown }): "left" | "right" {
  const hasBride = Boolean(row.bride);
  const hasGroom = Boolean(row.groom);
  if (hasGroom && !hasBride) return "left";
  return "right";
}

const timeClassName =
  "font-serif text-[0.8125rem] font-light tabular-nums tracking-[0.05em] text-stone-600 sm:text-sm";

export function Timeline() {
  const { timeline, labels, venue } = weddingData;
  const collageImages = useMemo(timelineCollageImages, []);
  const landscapeSrc = collageImages[2];
  const brideLabel = venue.bride.label;
  const groomLabel = venue.groom.label;

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

        <div className="mt-12 w-full sm:mt-14">
          <div className="mb-6 flex items-end gap-2 border-b border-stone-200/90 pb-4 sm:gap-6">
            <div className="min-w-0 flex-1 text-right font-serif text-[0.9375rem] font-light text-stone-700 sm:text-base">
              {brideLabel}
            </div>
            <div className={spineCol} aria-hidden />
            <div className="min-w-0 flex-1 text-left font-serif text-[0.9375rem] font-light text-stone-700 sm:text-base">
              {groomLabel}
            </div>
          </div>

          <div className="flex gap-2 sm:gap-6">
            <div className="flex min-w-0 flex-1 flex-col">
              {timeline.map((row, i) => (
                <motion.div
                  key={`bride-${row.time}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-28px" }}
                  transition={{
                    duration: 0.9,
                    delay: Math.min(i * 0.06, 0.42),
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  className={`flex items-center justify-end py-4 sm:py-5 ${rowMinH}`}
                >
                  <TimelineText tag={row.bride} align="right" />
                </motion.div>
              ))}
            </div>

            <div className={`relative ${spineCol}`}>
              <div
                className="pointer-events-none absolute left-1/2 top-3 bottom-3 w-0 -translate-x-1/2"
                aria-hidden
              >
                <motion.div
                  className="h-full w-[1.5px] rounded-full bg-gradient-to-b from-stone-300/85 via-stone-400/90 to-stone-300/85"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 1.2,
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  style={{ transformOrigin: "top center" }}
                />
              </div>
              <div className="relative flex flex-col">
                {timeline.map((row, i) => {
                  const side = timePlacement(row);
                  return (
                    <div
                      key={`spine-${row.time}-${i}`}
                      className={`grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-1.5 py-4 sm:gap-x-2 sm:py-5 ${rowMinH}`}
                    >
                      <div className="flex min-w-0 justify-end pr-0.5 sm:pr-1">
                        {side === "left" ? (
                          <time dateTime={row.time} className={`${timeClassName} text-right`}>
                            {row.time}
                          </time>
                        ) : null}
                      </div>
                      <div className="relative z-10 flex w-3 shrink-0 justify-center sm:w-3.5">
                        <span
                          className="block h-1.5 w-1.5 shrink-0 rounded-full bg-stone-700 ring-[4px] ring-stone-50 sm:h-2 sm:w-2 sm:ring-[5px]"
                          aria-hidden
                        />
                      </div>
                      <div className="flex min-w-0 justify-start pl-0.5 sm:pl-1">
                        {side === "right" ? (
                          <time dateTime={row.time} className={`${timeClassName} text-left`}>
                            {row.time}
                          </time>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="flex min-w-0 flex-1 flex-col">
              {timeline.map((row, i) => (
                <motion.div
                  key={`groom-${row.time}-${i}`}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-28px" }}
                  transition={{
                    duration: 0.9,
                    delay: Math.min(i * 0.06, 0.42),
                    ease: [0.22, 0.61, 0.36, 1],
                  }}
                  className={`flex items-center justify-start py-4 sm:py-5 ${rowMinH}`}
                >
                  <TimelineText tag={row.groom} align="left" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, delay: 0.06, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-12 w-full sm:mt-14"
        >
          <PhotoCollageThree
            images={collageImages}
            omitLandscape
            portraitSizes="(max-width: 768px) 50vw, 36rem"
          />
        </motion.div>
      </div>
    </section>
  );
}
