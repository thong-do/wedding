"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Shirt } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

export function WeddingDetails() {
  return (
    <section
      id="details"
      className="relative bg-stone-200/50 px-4 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-4xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          Wedding Details
        </motion.h2>

        <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-lg border border-stone-300/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6"
          >
            <Calendar className="mb-3 text-amber-800/80" size={24} />
            <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Date
            </h3>
            <p className="mt-1 font-serif text-lg text-stone-800">
              {weddingData.date}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border border-stone-300/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6"
          >
            <Clock className="mb-3 text-amber-800/80" size={24} />
            <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Ceremony
            </h3>
            <p className="mt-1 font-serif text-lg text-stone-800">
              {weddingData.schedule.ceremonyTime}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="rounded-lg border border-stone-300/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6"
          >
            <Clock className="mb-3 text-amber-800/80" size={24} />
            <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
              Reception
            </h3>
            <p className="mt-1 font-serif text-lg text-stone-800">
              {weddingData.schedule.receptionTime}
            </p>
          </motion.div>

          {weddingData.schedule.dressCode && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="rounded-lg border border-stone-300/60 bg-white/80 p-4 shadow-sm backdrop-blur-sm sm:p-6"
            >
              <Shirt className="mb-3 text-amber-800/80" size={24} />
              <h3 className="font-sans text-xs uppercase tracking-wider text-stone-500">
                Dress Code
              </h3>
              <p className="mt-1 font-serif text-lg text-stone-800">
                {weddingData.schedule.dressCode}
              </p>
            </motion.div>
          )}
        </div>

        {weddingData.schedule.notes && (
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center font-sans text-stone-600"
          >
            {weddingData.schedule.notes}
          </motion.p>
        )}
      </div>
    </section>
  );
}
