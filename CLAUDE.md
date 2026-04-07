# ZOR Professional Hygiene — Project Context

## What is this?
Company website for **ZOR Professional Hygiene Solutions** — a Croatian B2B company that manufactures and supplies professional paper hygiene products (toilet paper, hand towels, napkins) across 15+ European markets. The company operates through two pillars: **ZOR Converting** (production facility) and **ZOR Professional** (commercial brand).

## Tech Stack
- **Framework:** Next.js 16 (App Router) + React 19 + TypeScript 6
- **Styling:** Tailwind CSS 4 (custom theme tokens in `globals.css`)
- **Animations:** Framer Motion
- **i18n:** Custom client-side provider (EN/HR), no external library
- **Deployment:** Vercel (auto-deploy from `main` branch)
- **Domain:** zorpro.hr (DNS via domene.hr, nameservers pointed to Vercel)
- **Repo:** https://github.com/zorprofessional-bot/zorpro-hr

## Project Structure
```
src/
├── app/                          # Next.js App Router
│   ├── page.tsx                  # Homepage
│   ├── layout.tsx                # Root layout (font, providers, header/footer)
│   ├── globals.css               # Tailwind @theme tokens (colors, fonts, radii)
│   ├── about/page.tsx
│   ├── products/page.tsx
│   ├── private-label/page.tsx
│   ├── contact/page.tsx
│   ├── robots.ts                 # SEO
│   └── sitemap.ts                # SEO
├── components/
│   ├── layout/
│   │   ├── Header.tsx            # Sticky nav with mega-menu (UCT-style dropdowns)
│   │   ├── MegaMenuPanel.tsx     # Full-width dropdown panels (About, Products, Private Label)
│   │   ├── PageHeader.tsx        # Shared inner-page header (breadcrumb + title)
│   │   └── Footer.tsx            # 4-column footer with product links
│   ├── sections/                 # Homepage sections (in display order)
│   │   ├── Hero.tsx              # Split hero: text left + inquiry form right
│   │   ├── Stats.tsx             # 4 stat counters on navy bg
│   │   ├── AboutPreview.tsx      # Asymmetric text/photo layout
│   │   ├── FacilityShowcase.tsx  # Dark navy section, manufacturing credibility
│   │   ├── ProductsPreview.tsx   # 6 product cards with dark image areas
│   │   ├── PrivateLabelPreview.tsx # Accent-navy colored band
│   │   ├── WhyZor.tsx            # 4 value proposition cards
│   │   ├── CtaBanner.tsx         # Asymmetric dark CTA
│   │   └── Approach.tsx          # (unused, kept for reference)
│   ├── ui/
│   │   ├── AnimatedSection.tsx   # Framer Motion scroll-triggered wrappers
│   │   ├── InquiryForm.tsx       # Reusable form (hero compact + contact full variants)
│   │   ├── LanguageSwitcher.tsx  # HR | EN text toggle
│   │   └── SectionTag.tsx        # Bar-prefix section label (light/dark variants)
│   ├── seo/JsonLd.tsx            # Structured data (Organization, LocalBusiness)
│   └── analytics/Analytics.tsx   # Google Analytics + Meta Pixel
├── data/
│   ├── en.ts                     # English translations (all site text)
│   └── hr.ts                     # Croatian translations
├── providers/
│   └── LanguageProvider.tsx      # i18n context (useLanguage hook)
└── lib/                          # Utility functions
public/
└── images/                       # Product photos, hero image, logo
```

## Design System
- **Colors:** Navy primary (`#2D2D7F`) with light/dark/900/950 variants. Accent navy (`#E8EAF6`) for colored bands. Surface grays for alternating sections.
- **Typography:** Inter font, semibold uppercase tracking for nav/tags, bold for headings
- **Buttons:** `rounded-lg` (not pills), primary navy or white
- **Section rhythm:** dark navy → white → accent band → dark, creating visual variety
- **SectionTag:** Horizontal bar prefix + uppercase text (not pill badges)
- **Animations:** `whileInView` fade-up with stagger, 0.12s delay between children

## Design References
The design combines two reference sites:
- **UCT Tissue (uctissue.com):** Mega-menu navigation, dark/light section alternation, industrial layout
- **Delt Papir (deltpapir.com):** Breathing whitespace, premium clean feel, user-friendly simplicity

Reference screenshots are in `/reference/` (gitignored).

## Key Design Decisions
1. **Form-first hero:** Inquiry form is embedded directly in the hero section (lead-gen priority)
2. **Mega-menu:** UCT-style full-width dropdowns on hover with 150ms leave delay
3. **Mobile-first:** All layouts designed mobile-first, hamburger menu with accordion sub-items
4. **No pill buttons:** Industrial/corporate feel with `rounded-lg`
5. **Dark product cards:** Product images on `bg-primary-950` backgrounds (products pop on dark)
6. **Colored bands:** `bg-accent-navy` sections inspired by Delt Papir

## How Translations Work
All text is in `src/data/en.ts` and `src/data/hr.ts`. Access via `const { t } = useLanguage()` and call `t('key.path')`. Both files must have identical key structure. Language is toggled via `LanguageSwitcher` component.

## Commands
```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
```

## Deployment
Push to `main` branch → Vercel auto-deploys. No CI/CD config needed.

## Common Tasks
- **Change text:** Edit `src/data/en.ts` and `src/data/hr.ts`
- **Change colors:** Edit `@theme` block in `src/app/globals.css`
- **Change logo:** Replace `public/images/logo.png`
- **Add a product:** Add to `productData` array in products page + translations in both data files + update MegaMenuPanel links
- **Change homepage section order:** Edit `src/app/page.tsx`
- **Add mega-menu items:** Edit `MegaMenuPanel.tsx` + add translation keys
- **Change contact info:** Edit `contact.info.*` keys in translation files
