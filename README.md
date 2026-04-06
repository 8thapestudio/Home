# Hot Pan – Restaurant Website

> **The Symphony of Fire and Iron** — Modern Next.js 14 restaurant website.

## Tech Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** (custom design system – dark theme, fire/ember animations)
- **Framer Motion** (ready for enhanced scroll animations)
- **Google Fonts** – Playfair Display (display) + Inter (body)
- **Schema.org** LocalBusiness markup (SEO)

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Project Structure

```
app/
  layout.tsx         # Root layout – fonts, Schema.org JSON-LD, metadata
  page.tsx           # Single-page assembly
  globals.css        # Design tokens, fire/ember/smoke animations

components/
  Navbar.tsx         # Sticky nav – mobile drawer, always-visible CTA
  Hero.tsx           # Video hero – flame SVG, ember particles, heat shimmer
  PanExperience.tsx  # Storytelling – technique cards, chef profile
  Menu.tsx           # Filterable HTML menu – 11 dishes, wine pairings
  Reservation.tsx    # Zone picker (4 zones) + multi-step form
  SocialProof.tsx    # Reviews aggregate + UGC hashtag grid
  Footer.tsx         # Address, hours, map, social links, legal

public/
  videos/            # → hero-grill.mp4 / .webm  (add your video here)
  images/            # → hero-poster.jpg, og-hotpan.jpg
  manifest.json      # PWA manifest
```

## What to Replace Before Going Live

1. **Video** – put `hero-grill.mp4` + `hero-grill.webm` in `/public/videos/`
2. **Poster** – `/public/images/hero-poster.jpg`
3. **OG image** – `/public/images/og-hotpan.jpg` (1200×630)
4. **Phone / Address** – search and replace in components
5. **Reservation API** – replace the mock `setTimeout` in `Reservation.tsx` with a real POST endpoint / Anolla webhook
6. **Menu images** – swap gradient placeholders with real `<Image>` tags (WebP/AVIF via next/image)

## Design Tokens

| Token | Value | Usage |
|-------|-------|-------|
| `hp-orange` | `#FF6B35` | Primary CTA, accents |
| `hp-red` | `#E63946` | Fire gradient |
| `hp-gold` | `#F4A261` | Stars, warm highlights |
| `hp-black` | `#080808` | Page background |
| `hp-cream` | `#F5F0E8` | Primary text |
| `hp-muted` | `#8A8A82` | Secondary text |

