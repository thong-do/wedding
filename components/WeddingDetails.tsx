"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, Clock, Shirt } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

export function WeddingDetails() {
  const { schedule, labels } = weddingData;

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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.12 }}
            className="relative mx-auto mt-8 aspect-[3/4] max-w-md overflow-hidden rounded-sm sm:mt-10"
          >
            <Image
              src={weddingData.sectionImages.details}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </motion.div>
        )}

        <div className="mt-10 grid gap-5 sm:mt-14 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.08 }}
            className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
          >
            <Calendar className="mb-3 text-amber-800/70" size={24} />
            <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Ngày
            </h3>
            <p className="mt-1 font-serif text-lg text-stone-800">
              {weddingData.date}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.12 }}
            className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
          >
            <Clock className="mb-3 text-amber-800/70" size={24} />
            <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Lễ tại nhà gái
            </h3>
            <p className="mt-1 font-serif text-lg text-stone-800">
              {schedule.ceremonyTime}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.16 }}
            className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
          >
            <Clock className="mb-3 text-amber-800/70" size={24} />
            <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Lễ tại nhà trai
            </h3>
            <p className="mt-1 font-serif text-lg text-stone-800">
              {schedule.receptionTime}
            </p>
          </motion.div>

          {schedule.dressCode && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="rounded-2xl bg-white/70 p-5 backdrop-blur-sm sm:p-6"
            >
              <Shirt className="mb-3 text-amber-800/70" size={24} />
              <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
                Trang phục
              </h3>
              <p className="mt-1 font-serif text-lg text-stone-800">
                {schedule.dressCode}
              </p>
            </motion.div>
          )}
        </div>

        {schedule.notes && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center font-sans text-stone-600"
          >
            {schedule.notes}
          </motion.p>
        )}
      </div>
    </section>
  );
}
