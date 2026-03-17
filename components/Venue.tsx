"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

export function Venue() {
  return (
    <section
      id="venue"
      className="relative bg-stone-200/50 px-4 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl font-light text-stone-800 md:text-4xl">
              Venue
            </h2>
            <h3 className="mt-6 font-serif text-2xl text-stone-700">
              {weddingData.venue.name}
            </h3>
            <p className="mt-4 font-sans text-stone-600">
              {weddingData.venue.address}
            </p>
            {weddingData.venue.notes && (
              <p className="mt-2 font-sans text-sm text-stone-500">
                {weddingData.venue.notes}
              </p>
            )}
            <a
              href={weddingData.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-amber-800/50 bg-amber-900/10 px-6 py-3 font-sans text-sm uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-900/20 active:bg-amber-900/20"
            >
              <ExternalLink size={18} />
              Open in Google Maps
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="overflow-hidden rounded-lg border border-stone-300/60 shadow-lg"
          >
            <iframe
              src={weddingData.venue.embedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding venue location"
              className="min-h-[250px] w-full sm:min-h-[300px] md:min-h-[400px]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
