# Wedding Invitation Website

A cinematic, editorial-style wedding invitation website inspired by Hong Kong street photography. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero** — Fullscreen slideshow with couple names, date, and CTAs
- **Story** — Editorial intro with featured images
- **Photo Gallery** — Editorial grid with lightbox
- **Wedding Details** — Date, times, dress code
- **Timeline** — Day schedule with transit-inspired design
- **Venue** — Address, Google Maps embed, directions
- **RSVP** — Form (frontend-only, ready for Formspree/Sheets)
- **Footer** — Thank you message

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React
- next/image

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization

Edit `data/wedding-data.ts` to update:

- Couple names, tagline, date
- Venue, address, Google Maps URL
- Timeline schedule
- Story text
- Image URLs (hero, gallery, story)

## Images

Replace placeholder Unsplash URLs in `wedding-data.ts` with your own. For local images, place them in `public/` and reference as `/your-image.jpg`.

## Deployment

Deploy to Vercel:

```bash
vercel
```

## RSVP Backend

The RSVP form is frontend-only. To connect:

- **Formspree**: Add `action="https://formspree.io/f/YOUR_ID"` and `method="POST"` to the form
- **Google Sheets**: Use a server action or API route with the Sheets API
- **Supabase**: Create a table and use the Supabase client
