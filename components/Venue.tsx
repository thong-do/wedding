"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

function VenueCard({
  venue,
  label,
  delay = 0,
}: {
  venue: {
    label: string;
    name: string;
    address: string;
    googleMapsUrl: string;
    embedUrl: string;
    notes?: string;
  };
  label: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="overflow-hidden rounded-lg border border-stone-300/60 bg-white/80 shadow-sm"
    >
      <div className="p-6">
        <span className="font-sans text-xs uppercase tracking-wider text-amber-800/80">
          {label}
        </span>
        <h3 className="mt-2 font-serif text-xl text-stone-800 sm:text-2xl">
          {venue.name}
        </h3>
        <p className="mt-3 font-sans text-stone-600">{venue.address}</p>
        {venue.notes && (
          <p className="mt-2 font-sans text-sm text-stone-500">{venue.notes}</p>
        )}
        <a
          href={venue.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-amber-800/50 bg-amber-900/10 px-5 py-2.5 font-sans text-sm uppercase tracking-wider text-amber-900 transition-colors hover:bg-amber-900/20 active:bg-amber-900/20"
        >
          <ExternalLink size={16} />
          Google Maps
        </a>
      </div>
      <div className="overflow-hidden rounded-b-lg">
        <iframe
          src={venue.embedUrl}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${venue.name} location`}
          className="min-h-[200px] w-full sm:min-h-[250px]"
        />
      </div>
    </motion.div>
  );
}

export function Venue() {
  const { bride, groom } = weddingData.venue;
  return (
    <section
      id="venue"
      className="relative bg-stone-200/50 px-2 py-12 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          Địa điểm
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 font-sans text-stone-600"
        >
          Nhà gái và nhà trai
        </motion.p>

        <div className="mt-10 grid gap-8 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          <VenueCard venue={bride} label={bride.label} delay={0.1} />
          <VenueCard venue={groom} label={groom.label} delay={0.2} />
        </div>
      </div>
    </section>
  );
}
