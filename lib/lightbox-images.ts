import type { WeddingData } from "@/data/wedding-data";

function pushUnique(out: string[], seen: Set<string>, src?: string | null) {
  if (!src || seen.has(src)) return;
  seen.add(src);
  out.push(src);
}

function addMany(out: string[], seen: Set<string>, arr?: readonly string[] | null) {
  for (const s of arr ?? []) pushUnique(out, seen, s);
}

/** Timeline section collage sources (same order as `Timeline` / `PhotoCollageThree`). */
function timelineCollageSources(data: WeddingData): string[] {
  const own = data.timelineImages?.filter(Boolean) ?? [];
  if (own.length > 0) return [...own];
  const legacy = data.sectionImages?.timeline;
  if (legacy) {
    const g = data.gallery;
    return [legacy, g[0] ?? legacy, g[1] ?? legacy].filter(Boolean);
  }
  return data.gallery.slice(0, 3).filter(Boolean);
}

/**
 * Single ordered list of on-site photos for the global lightbox (deduped).
 * Order: hero → story → gallery → section keys → calendar extras → timeline collage → venues → ending → emotional highlight.
 */
export function buildLightboxImageList(data: WeddingData): string[] {
  const out: string[] = [];
  const seen = new Set<string>();

  addMany(out, seen, data.heroImages);
  addMany(out, seen, data.story.images);
  addMany(out, seen, data.gallery);

  if (data.sectionImages) {
    pushUnique(out, seen, data.sectionImages.details);
    pushUnique(out, seen, data.sectionImages.timeline);
    pushUnique(out, seen, data.sectionImages.rsvp);
    pushUnique(out, seen, data.sectionImages.calendar);
  }

  addMany(out, seen, data.calendar.detailImages);
  addMany(out, seen, timelineCollageSources(data));

  pushUnique(out, seen, data.venue.bride.image);
  pushUnique(out, seen, data.venue.bride.portraitBelowMap);
  pushUnique(out, seen, data.venue.groom.image);
  pushUnique(out, seen, data.venue.groom.portraitBelowMap);

  pushUnique(out, seen, data.ending.image);
  pushUnique(out, seen, data.emotionalHighlightImage);

  return out;
}
