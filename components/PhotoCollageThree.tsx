"use client";

import Image from "next/image";

type Props = {
  images: string[];
  className?: string;
  /** When true, only the two portrait tiles (third image is shown elsewhere). */
  omitLandscape?: boolean;
  /** `sizes` for portrait `<Image>` tiles — wider when collage spans full `max-w-6xl` */
  portraitSizes?: string;
};

/**
 * Two portrait tiles + optional full-width landscape (natural height), matching the intro story collage.
 */
/** Default suits intro (half-width column); timeline passes a wider `portraitSizes`. */
const defaultPortraitSizes = "(max-width: 768px) 50vw, 400px";

export function PhotoCollageThree({
  images,
  className = "",
  omitLandscape = false,
  portraitSizes = defaultPortraitSizes,
}: Props) {
  const filtered = images.filter(Boolean);
  if (filtered.length === 0) return null;

  const first = filtered[0];
  const second = filtered[1] ?? first;
  const third = omitLandscape ? undefined : filtered[2];

  return (
    <div className={`relative grid grid-cols-2 gap-2 sm:gap-4 md:gap-6 ${className}`}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm ring-1 ring-stone-200/50">
        <Image
          src={first}
          alt=""
          fill
          unoptimized
          className="object-cover transition-transform duration-700 motion-safe:hover:scale-105"
          sizes={portraitSizes}
        />
      </div>
      <div className="relative mt-2 aspect-[3/4] overflow-hidden rounded-sm ring-1 ring-stone-200/50 sm:mt-8">
        <Image
          src={second}
          alt=""
          fill
          unoptimized
          className="object-cover transition-transform duration-700 motion-safe:hover:scale-105"
          sizes={portraitSizes}
        />
      </div>
      {third ? (
        <div className="col-span-2 mt-2 overflow-hidden rounded-sm ring-1 ring-stone-200/50 sm:mt-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={third}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-auto w-full align-middle transition-transform duration-700 motion-safe:hover:scale-[1.02]"
          />
        </div>
      ) : null}
    </div>
  );
}
