"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { weddingData } from "@/data/wedding-data";

/**
 * Autoplay is often blocked until the user interacts. First pointerdown on the
 * page attempts play; the single control toggles play/pause.
 */
export function BackgroundMusic() {
  const config = weddingData.backgroundMusic;
  const label = config?.title?.trim() || "Nhạc nền";
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [mediaError, setMediaError] = useState(false);

  const tryPlay = useCallback(async () => {
    const el = audioRef.current;
    if (!el || !config?.src) return;
    try {
      await el.play();
      setPlaying(true);
    } catch {
      /* still paused until user uses the control */
    }
  }, [config?.src]);

  useEffect(() => {
    if (!config?.src) return;
    const el = audioRef.current;
    if (!el) return;
    el.volume = Math.min(1, Math.max(0, config.volume ?? 0.45));
    el.loop = true;
    void tryPlay();
  }, [config?.src, config?.volume, tryPlay]);

  useEffect(() => {
    if (!config?.src) return;
    const onFirstInteract = () => {
      void tryPlay();
    };
    window.addEventListener("pointerdown", onFirstInteract, { passive: true });
    return () => window.removeEventListener("pointerdown", onFirstInteract);
  }, [config?.src, tryPlay]);

  useEffect(() => {
    const onVis = () => {
      const el = audioRef.current;
      if (!el || !config?.src) return;
      if (document.visibilityState === "hidden") el.pause();
      else if (playing) void el.play().catch(() => {});
    };
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, [config?.src, playing]);

  const togglePlay = () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
    } else {
      void el
        .play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  if (!config?.src) return null;

  return (
    <>
      <audio
        ref={audioRef}
        src={config.src}
        preload="auto"
        playsInline
        className="hidden"
        aria-hidden
        onError={() => setMediaError(true)}
        onLoadedData={() => setMediaError(false)}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />

      <div
        className="fixed bottom-5 right-5 z-[100] flex max-w-[min(100vw-2.5rem,20rem)] flex-col items-end gap-2 pb-[env(safe-area-inset-bottom)] sm:bottom-8 sm:right-8"
        role="region"
        aria-label={label}
      >
        {mediaError && (
          <p className="rounded-2xl border border-amber-800/30 bg-amber-50/95 px-3 py-2 text-right font-sans text-xs text-amber-950 shadow-md">
            Không tải được nhạc. Thêm file MP3 vào{" "}
            <code className="rounded bg-white/80 px-1">
              public{config.src.startsWith("/") ? config.src : `/${config.src}`}
            </code>{" "}
            (hoặc đổi <code className="rounded bg-white/80 px-1">backgroundMusic.src</code>).
          </p>
        )}

        <button
          type="button"
          onClick={togglePlay}
          disabled={mediaError}
          className="flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-full border border-white/45 bg-stone-900/90 px-4 py-2.5 font-sans text-sm text-white shadow-lg backdrop-blur-md transition-colors hover:bg-stone-800 disabled:opacity-40"
          aria-label={playing ? `Tạm dừng: ${label}` : `Phát: ${label}`}
        >
          {playing ? <Pause size={20} strokeWidth={1.75} aria-hidden /> : <Music size={20} strokeWidth={1.75} aria-hidden />}
        </button>
      </div>
    </>
  );
}
