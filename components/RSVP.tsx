"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

interface FormData {
  name: string;
  phone: string;
  attendance: "yes" | "no" | "";
  guests: string;
  notes: string;
}

const initialFormData: FormData = {
  name: "",
  phone: "",
  attendance: "",
  guests: "1",
  notes: "",
};

export function RSVP() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Please enter your name";
    if (!formData.phone.trim()) newErrors.phone = "Please enter your phone number";
    if (!formData.attendance) newErrors.attendance = "Please confirm attendance";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    // Frontend-only: show success state
    // To connect to Formspree: add action="https://formspree.io/f/YOUR_ID" and method="POST"
    // To connect to Google Sheets: use a server action or API route
    console.log("RSVP submitted:", formData);
    setSubmitted(true);
    setFormData(initialFormData);
  };

  if (submitted) {
    return (
      <section className="relative bg-stone-50 px-4 py-16 sm:px-6 sm:py-24 md:py-32">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="rounded-full bg-amber-100/80 p-6 inline-block mb-6"
          >
            <Check className="text-amber-800" size={48} />
          </motion.div>
          <h2 className="font-serif text-2xl text-stone-800">
            Thank you for your response!
          </h2>
          <p className="mt-4 font-sans text-stone-600">
            We&apos;re so excited to celebrate with you.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="relative bg-stone-50 px-4 py-16 sm:px-6 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          RSVP
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-2 font-sans text-stone-600"
        >
          Please let us know if you can join us
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-12 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block font-sans text-sm font-medium text-stone-700">
              Full Name *
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2 w-full rounded-full border border-stone-300 bg-white px-5 py-3 font-sans text-stone-800 placeholder-stone-400 focus:border-amber-800/50 focus:outline-none focus:ring-1 focus:ring-amber-800/30"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-sans text-sm font-medium text-stone-700">
              Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-2 w-full rounded-full border border-stone-300 bg-white px-5 py-3 font-sans text-stone-800 placeholder-stone-400 focus:border-amber-800/50 focus:outline-none focus:ring-1 focus:ring-amber-800/30"
              placeholder="Your phone number"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-sans text-sm font-medium text-stone-700">
              Will you attend? *
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 has-[:checked]:border-amber-800/50 has-[:checked]:bg-amber-50/50 sm:border-0 sm:bg-transparent sm:py-0">
                <input
                  type="radio"
                  name="attendance"
                  checked={formData.attendance === "yes"}
                  onChange={() => setFormData({ ...formData, attendance: "yes" })}
                  className="h-5 w-5 shrink-0 text-amber-800 focus:ring-amber-800"
                />
                <span className="font-sans text-stone-700">Yes, I&apos;ll be there</span>
              </label>
              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-lg border border-stone-200 bg-white px-4 py-3 has-[:checked]:border-amber-800/50 has-[:checked]:bg-amber-50/50 sm:border-0 sm:bg-transparent sm:py-0">
                <input
                  type="radio"
                  name="attendance"
                  checked={formData.attendance === "no"}
                  onChange={() => setFormData({ ...formData, attendance: "no" })}
                  className="h-5 w-5 shrink-0 text-amber-800 focus:ring-amber-800"
                />
                <span className="font-sans text-stone-700">Sorry, I can&apos;t make it</span>
              </label>
            </div>
            {errors.attendance && (
              <p className="mt-1 text-sm text-red-600">{errors.attendance}</p>
            )}
          </div>

          <div>
            <label htmlFor="guests" className="block font-sans text-sm font-medium text-stone-700">
              Number of Guests
            </label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="mt-2 w-full rounded-full border border-stone-300 bg-white px-5 py-3 font-sans text-stone-800 focus:border-amber-800/50 focus:outline-none focus:ring-1 focus:ring-amber-800/30"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <option key={n} value={n}>
                  {n === 10 ? "10+" : n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="notes" className="block font-sans text-sm font-medium text-stone-700">
              Notes
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-stone-300 bg-white px-5 py-3 font-sans text-stone-800 placeholder-stone-400 focus:border-amber-800/50 focus:outline-none focus:ring-1 focus:ring-amber-800/30"
              placeholder="Dietary requirements, special requests..."
            />
          </div>

          <button
            type="submit"
            className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-amber-900 px-6 py-4 font-sans text-sm uppercase tracking-wider text-white transition-colors hover:bg-amber-800 active:bg-amber-800"
          >
            <Send size={18} />
            Send RSVP
          </button>
        </motion.form>
      </div>
    </section>
  );
}
