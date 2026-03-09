# Landing Page Implementation Plan

## Overview
Build the full Jima Personal Coach landing page in `src/app/page.tsx` using the established design system. I (orchestrator) will delegate all coding to sub-agents and run code-review on each batch.

## Pre-work: Image Preparation
- Convert `Docs/Jima Persona Coach Hero Image.jpg` to optimized WebP using the `image-to-webp` skill
- Place in `public/images/jima-hero.webp`
- Clean up default Next.js SVGs from `public/`

## Architecture
- **Single file**: `src/app/page.tsx` — all 9 sections in one server component
- **No new components or files** — keep it simple, one scrollable page
- **Design system**: Use existing Tailwind tokens from `globals.css` (`btn` classes, color scales, `dark-section`, `font-display`/`font-body`, `rounded-card`/`rounded-card-lg`/`rounded-pill`, `shadow-card`)
- **Section background rhythm**: white → teal-50 → white → cream-200 → white → teal-50 → cream-200 → cream-100 → teal-700 (following the design system pattern of alternating backgrounds)
- **FAQ**: Client component for accordion toggle (only interactive piece)

## Build Order — 3 Batches

### Batch 1: Hero + Stats Bar + Benefits (Sections 1-3)
**Coder agent** builds:

1. **Hero** (bg-teal-700, dark-section)
   - Reference: Talkspace homepage hero layout — text left, large image right
   - 2-column grid: left has headline ("Real Coaching. Real Change."), subline ("with Jima"), three descriptor pill tags, CTA button
   - Right column: Jima hero image via `next/image`, fills the space naturally
   - Mobile: stacks vertically, image on top or below

2. **Social Proof Stats Bar** (bg-cream-200)
   - Overline: "What the research says about coaching"
   - 4-column grid of stat cards using decorative accent backgrounds (yellow, sage, sky, lavender) — same pattern as design system stat cards
   - Each card: bold stat number + source attribution

3. **Benefits of Coaching** (bg-white)
   - Section headline + 6 benefit cards in a 2×3 or 3×2 grid
   - Each card: bold title + description paragraph
   - Cards on teal-50 background with subtle styling

**Then**: Code review agent reviews Batch 1

### Batch 2: Personas + Quotes + Pricing + Group (Sections 4-7)
**Coder agent** builds:

4. **Who Is Coaching For?** (bg-teal-50)
   - Headline + subheadline
   - 6 persona cards in a 2×3 grid
   - Each card: persona name as title, quoted tagline in italic, description below
   - White cards on the teal-50 background

5. **Featured Quotes** (bg-white)
   - Headline: "Don't take our word for it."
   - 4 quote blocks — large serif italic quote text with attribution
   - Could use a 2-column layout or single-column with alternating alignment

6. **Pricing** (bg-cream-200)
   - Headline + subheadline
   - 3-column pricing grid
   - Free / $20 Single / $60 Monthly — the monthly card gets a "Most Popular" badge and visual emphasis (teal-700 bg or border accent)
   - CTA button on each card
   - Note beneath: "All sessions are conducted via video call..."

7. **Group Coaching** (bg-teal-700, dark-section)
   - CTA band style — centered headline, body copy, waitlist button
   - Similar to the CTA Band pattern in the design system

**Then**: Code review agent reviews Batch 2

### Batch 3: FAQ + Footer (Sections 8-9)
**Coder agent** builds:

8. **FAQ** (bg-cream-100)
   - This section needs a client component for accordion expand/collapse
   - Create `src/app/components/FaqAccordion.tsx` as a "use client" component
   - Headline: "Good questions. Here are honest answers."
   - 7 FAQ items with expand/collapse toggle (+ / − icon)
   - Matches the FAQ pattern from the design system (cream bg, dividers, teal circle toggle)

9. **Footer / Final CTA** (bg-teal-900, dark-section)
   - Centered: headline, subline, CTA button
   - Small footer text below

**Then**: Code review agent reviews Batch 3

## Final Verification
- Full-page screenshot at desktop and mobile viewports
- Check for console errors
- Verify all sections render correctly with proper spacing, colors, typography
