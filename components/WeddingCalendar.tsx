"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Heart, UtensilsCrossed } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

const WEEKDAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"] as const;

function parseIsoDate(iso: string): { year: number; monthIndex: number; day: number } {
  const [y, m, d] = iso.split("-").map((p) => Number.parseInt(p, 10));
  if (!y || !m || !d) {
    throw new Error(`Invalid weddingDateIso: ${iso}`);
  }
  return { year: y, monthIndex: m - 1, day: d };
}

/** Monday-first month grid: `null` = blank cell */
function buildMonthGrid(year: number, monthIndex: number): (number | null)[] {
  const first = new Date(year, monthIndex, 1);
  const leading = (first.getDay() + 6) % 7;
  const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
  const cells: (number | null)[] = [];
  for (let i = 0; i < leading; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);
  return cells;
}

function chunkWeeks(cells: (number | null)[]): (number | null)[][] {
  const rows: (number | null)[][] = [];
  for (let i = 0; i < cells.length; i += 7) {
    rows.push(cells.slice(i, i + 7));
  }
  return rows;
}

export function WeddingCalendar() {
  const { calendar: cal, labels, schedule, sectionImages, emotionalHighlightImage, heroImages } =
    weddingData;

  const { year, monthIndex, day: weddingDay } = parseIsoDate(cal.weddingDateIso);
  const cells = buildMonthGrid(year, monthIndex);
  const weeks = chunkWeeks(cells);

  const bgSrc =
    sectionImages?.calendar ??
    emotionalHighlightImage ??
    heroImages[0] ??
    "";

  const monthNum = monthIndex + 1;
  const monthYearCaption = `${labels.calendarMonthTitle} ${year}`;

  return (
    <section
      id="details"
      aria-labelledby="details-heading"
      className="relative w-full px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          id="details-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          {labels.details}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.06, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-2 font-sans text-stone-600"
        >
          {labels.detailsSubtitle}
        </motion.p>

        <div className="relative mt-10 min-h-[min(88vh,52rem)] overflow-hidden rounded-sm sm:mt-12">
          <motion.div
            initial={{ opacity: 0, scale: 1.04 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2, ease: [0.22, 0.61, 0.36, 1] }}
            className="absolute inset-0"
            aria-hidden
          >
            {bgSrc ? (
              <Image
                src={bgSrc}
                alt=""
                fill
                unoptimized
                className="object-cover object-center"
                sizes="(max-width: 896px) calc(100vw - 1rem), 896px"
                priority={false}
              />
            ) : (
              <div className="h-full w-full bg-stone-800" />
            )}
          </motion.div>

          <div
            className="absolute inset-0 bg-gradient-to-b from-stone-900/55 via-stone-900/42 to-stone-950/72"
            aria-hidden
          />

          <div className="relative z-10 flex w-full flex-col items-center px-4 py-16 sm:px-8 sm:py-24 md:py-28">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.06, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-4 text-center font-sans text-xs uppercase tracking-[0.35em] text-white/70 sm:mb-5 sm:text-sm"
        >
          {labels.calendar}
        </motion.p>

        <motion.h3
          id="calendar-month-title"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, delay: 0.06, ease: [0.22, 0.61, 0.36, 1] }}
          className="font-serif text-5xl font-light italic tracking-wide text-white drop-shadow-lg sm:text-6xl md:text-7xl"
        >
          {labels.calendarMonthTitle}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.12 }}
          className="mt-2 font-sans text-sm tracking-[0.25em] text-amber-100/85 sm:text-base"
        >
          {year}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.15, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
          className="mt-10 w-full sm:mt-12"
        >
          <table
            className="w-full border-separate border-spacing-x-0 border-spacing-y-2 sm:border-spacing-y-2.5 md:border-spacing-y-3"
            aria-label={monthYearCaption}
          >
            <caption className="sr-only">
              Lịch tháng {monthNum} năm {year}. {labels.calendarCaption}: ngày {weddingDay}.
            </caption>
            <thead>
              <tr>
                {WEEKDAYS.map((d) => (
                  <th
                    key={d}
                    scope="col"
                    className="pb-3 text-center font-sans text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white/90 sm:pb-3.5 sm:text-xs md:text-sm md:tracking-[0.24em]"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {weeks.map((week, wi) => (
                <tr key={wi}>
                  {week.map((cell, di) => {
                    const isWedding = cell === weddingDay;
                    const isEmpty = cell === null;

                    return (
                      <td
                        key={`${wi}-${di}`}
                        className="p-0 align-middle text-center"
                        aria-current={isWedding ? "date" : undefined}
                        aria-label={
                          isEmpty
                            ? undefined
                            : isWedding
                              ? `${labels.calendarCaption}, ngày ${cell} tháng ${monthNum} năm ${year}`
                              : `Ngày ${cell} tháng ${monthNum} năm ${year}`
                        }
                      >
                        {isEmpty ? (
                          <span className="block min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[4.5rem]" aria-hidden />
                        ) : (
                          <div
                            className={[
                              "relative mx-auto flex min-h-[3.5rem] flex-col items-center justify-center py-2 sm:min-h-[4rem] sm:py-2.5 md:min-h-[4.5rem]",
                              isWedding
                                ? "w-[min(100%,5rem)] rounded-full bg-amber-950/45 px-2 ring-2 ring-amber-100/75 shadow-[0_0_28px_rgba(253,230,138,0.22)] sm:w-[min(100%,5.75rem)] md:w-[min(100%,6.25rem)]"
                                : "w-full max-w-[4.25rem] sm:max-w-[5rem] md:max-w-[5.5rem]",
                            ].join(" ")}
                          >
                            <span
                              className={[
                                "font-serif tabular-nums leading-none tracking-tight drop-shadow-sm",
                                isWedding
                                  ? "text-[1.5rem] font-semibold text-amber-50 sm:text-[1.875rem] md:text-[2.375rem]"
                                  : "text-xl font-medium text-white/92 sm:text-2xl md:text-3xl",
                              ].join(" ")}
                              aria-hidden
                            >
                              {cell}
                            </span>
                            {isWedding && (
                              <Heart
                                aria-hidden
                                className="mt-1 text-amber-100/95"
                                size={14}
                                strokeWidth={1.75}
                                fill="currentColor"
                                fillOpacity={0.4}
                              />
                            )}
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

          </div>
        </div>

        {/* Schedule cards on page background (same style as WeddingDetails) */}
        <div className="mt-10 w-full sm:mt-12" aria-label="Giờ lễ và tiệc">
          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.06 }}
              className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
            >
              <Calendar className="mb-3 text-amber-800/70" size={24} aria-hidden />
              <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">Ngày</h3>
              <p className="mt-1 font-serif text-lg text-stone-800">{weddingData.date}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1 }}
              className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
            >
              <Clock className="mb-3 text-amber-800/70" size={24} aria-hidden />
              <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
                Lễ tại nhà gái
              </h3>
              <p className="mt-1 font-serif text-lg text-stone-800">{schedule.ceremonyTime}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.14 }}
              className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
            >
              <Clock className="mb-3 text-amber-800/70" size={24} aria-hidden />
              <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
                Lễ tại nhà trai
              </h3>
              <p className="mt-1 font-serif text-lg text-stone-800">{schedule.receptionTime}</p>
            </motion.div>

            {schedule.dressCode && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85, delay: 0.18 }}
                className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
              >
                <UtensilsCrossed className="mb-3 text-amber-800/70" size={24} aria-hidden />
                <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
                  Ăn tiệc
                </h3>
                <p className="mt-1 font-serif text-lg text-stone-800">{schedule.dressCode}</p>
              </motion.div>
            )}
          </div>

          {schedule.notes && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.12 }}
              className="mt-8 text-center font-sans text-stone-600"
            >
              {schedule.notes}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
