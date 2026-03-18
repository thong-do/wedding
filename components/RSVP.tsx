"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

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
  const { labels } = weddingData;

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.name.trim()) newErrors.name = "Bạn điền tên giúp mình nhé";
    if (!formData.phone.trim()) newErrors.phone = "Và số điện thoại nữa nhé";
    if (!formData.attendance) newErrors.attendance = "Cho mình biết bạn có đến không nhé";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    console.log("RSVP submitted:", formData);
    setSubmitted(true);
    setFormData(initialFormData);
  };

  if (submitted) {
    return (
      <section className="relative bg-stone-50 px-2 py-16 sm:px-6 sm:py-28 md:py-36">
        <div className="mx-auto max-w-xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 inline-block rounded-full bg-amber-100/80 p-6"
          >
            <Check className="text-amber-800" size={48} />
          </motion.div>
          <h2 className="font-serif text-2xl text-stone-800">
            {labels.rsvpSuccess}
          </h2>
          <p className="mt-4 font-sans text-stone-600">
            {labels.rsvpSuccessSubtitle}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="rsvp"
      className="relative bg-stone-50 px-2 py-16 sm:px-6 sm:py-28 md:py-36"
    >
      <div className="mx-auto max-w-xl">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif text-3xl font-light text-stone-800 md:text-4xl"
        >
          {labels.rsvp}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.08 }}
          className="mt-2 font-sans text-stone-600"
        >
          {labels.rsvpSubtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.15 }}
          className="mt-10 font-serif text-lg italic text-stone-600 sm:mt-12"
        >
          {labels.rsvpPrompt}
        </motion.p>

        {weddingData.sectionImages?.rsvp && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative mx-auto mt-6 aspect-[3/2] max-w-md overflow-hidden rounded-sm sm:mt-8"
          >
            <Image
              src={weddingData.sectionImages.rsvp}
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 448px"
            />
          </motion.div>
        )}

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="mt-8 space-y-6 sm:mt-10"
        >
          <div>
            <label htmlFor="name" className="block font-sans text-sm font-medium text-stone-700">
              Tên bạn
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-5 py-3 font-sans text-stone-800 placeholder-stone-400 focus:border-amber-800/40 focus:outline-none focus:ring-1 focus:ring-amber-800/20"
              placeholder="Tên của bạn"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-amber-800/80">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-sans text-sm font-medium text-stone-700">
              Số điện thoại
            </label>
            <input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-5 py-3 font-sans text-stone-800 placeholder-stone-400 focus:border-amber-800/40 focus:outline-none focus:ring-1 focus:ring-amber-800/20"
              placeholder="Số điện thoại"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-amber-800/80">{errors.phone}</p>
            )}
          </div>

          <div>
            <label className="block font-sans text-sm font-medium text-stone-700">
              Bạn có đến không?
            </label>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/60 px-4 py-3 has-[:checked]:border-amber-800/40 has-[:checked]:bg-amber-50/40 sm:border-0 sm:bg-transparent sm:py-0">
                <input
                  type="radio"
                  name="attendance"
                  checked={formData.attendance === "yes"}
                  onChange={() => setFormData({ ...formData, attendance: "yes" })}
                  className="h-5 w-5 shrink-0 text-amber-800 focus:ring-amber-800"
                />
                <span className="font-sans text-stone-700">Có, mình sẽ đến</span>
              </label>
              <label className="flex min-h-[44px] cursor-pointer items-center gap-3 rounded-2xl border border-stone-200/80 bg-white/60 px-4 py-3 has-[:checked]:border-amber-800/40 has-[:checked]:bg-amber-50/40 sm:border-0 sm:bg-transparent sm:py-0">
                <input
                  type="radio"
                  name="attendance"
                  checked={formData.attendance === "no"}
                  onChange={() => setFormData({ ...formData, attendance: "no" })}
                  className="h-5 w-5 shrink-0 text-amber-800 focus:ring-amber-800"
                />
                <span className="font-sans text-stone-700">Tiếc quá, mình không đi được</span>
              </label>
            </div>
            {errors.attendance && (
              <p className="mt-1 text-sm text-amber-800/80">{errors.attendance}</p>
            )}
          </div>

          <div>
            <label htmlFor="guests" className="block font-sans text-sm font-medium text-stone-700">
              Số người đi cùng (nếu có)
            </label>
            <select
              id="guests"
              value={formData.guests}
              onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-5 py-3 font-sans text-stone-800 focus:border-amber-800/40 focus:outline-none focus:ring-1 focus:ring-amber-800/20"
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
              Lời chúc
            </label>
            <textarea
              id="notes"
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="mt-2 w-full rounded-2xl border border-stone-200 bg-white/80 px-5 py-3 font-sans text-stone-800 placeholder-stone-400 focus:border-amber-800/40 focus:outline-none focus:ring-1 focus:ring-amber-800/20"
              placeholder="Gửi lời chúc đặc biệt cho chúng mình"
            />
          </div>

          <button
            type="submit"
              className="flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-amber-900/90 px-6 py-4 font-sans text-sm text-white transition-all duration-300 hover:bg-amber-800 active:bg-amber-800"
          >
            <Send size={18} />
            Gửi cho chúng mình
          </button>
        </motion.form>
      </div>
    </section>
  );
}
