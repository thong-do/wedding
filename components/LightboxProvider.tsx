"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { weddingData } from "@/data/wedding-data";
import { buildLightboxImageList } from "@/lib/lightbox-images";

type LightboxContextValue = {
  openLightbox: (src: string) => void;
};

const LightboxContext = createContext<LightboxContextValue | null>(null);

export function useLightbox(): LightboxContextValue {
  const ctx = useContext(LightboxContext);
  if (!ctx) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return ctx;
}

export function LightboxProvider({ children }: { children: React.ReactNode }) {
  const images = useMemo(() => buildLightboxImageList(weddingData), []);
  const [index, setIndex] = useState<number | null>(null);

  const openLightbox = useCallback(
    (src: string) => {
      const i = images.indexOf(src);
      if (i >= 0) setIndex(i);
    },
    [images],
  );

  const close = useCallback(() => setIndex(null), []);

  const go = useCallback(
    (delta: number) => {
      setIndex((cur) => {
        if (cur === null || images.length === 0) return null;
        return (cur + delta + images.length) % images.length;
      });
    },
    [images.length],
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [index]);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, close, go]);

  const value = useMemo(() => ({ openLightbox }), [openLightbox]);
  const currentSrc = index !== null ? images[index] : null;
  const showNav = images.length > 1;

  return (
    <LightboxContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {currentSrc ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 pt-14 pb-6"
            onClick={close}
            role="presentation"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full p-2 text-white/80 transition-colors hover:text-white"
              aria-label="Đóng"
            >
              <X size={28} />
            </button>
            {showNav ? (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(-1);
                  }}
                  className="absolute left-2 top-1/2 z-10 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white/90 transition-colors hover:bg-white/20 sm:left-4"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={32} strokeWidth={1.5} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    go(1);
                  }}
                  className="absolute right-2 top-1/2 z-10 flex min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-full bg-white/10 p-2 text-white/90 transition-colors hover:bg-white/20 sm:right-4"
                  aria-label="Next image"
                >
                  <ChevronRight size={32} strokeWidth={1.5} />
                </button>
              </>
            ) : null}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative max-h-[90vh] max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={currentSrc}
                alt=""
                width={1600}
                height={1200}
                unoptimized
                className="max-h-[90vh] w-auto object-contain"
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </LightboxContext.Provider>
  );
}
