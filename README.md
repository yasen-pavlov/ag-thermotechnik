# A&G Thermotechnik

Corporate website for **A&G Thermotechnik GmbH** — HVAC specialists in Düsseldorf with over 20 years of experience in heating, cooling, and ventilation systems.

Built with [Astro 5](https://astro.build/), [AstroWind](https://github.com/onwidget/astrowind) template, and [Tailwind CSS](https://tailwindcss.com/). Deployed on [Netlify](https://www.netlify.com/).

## Features

- **10 product pages** — Heat pumps, gas boilers, biomass, solar, underfloor heating, radiators, fan coils, air conditioning, smart controls, ventilation
- **7 service pages** — Consultation, planning, energy optimization, delivery, installation, repair, maintenance
- **28 project galleries** — Photo galleries with GLightbox lightbox viewer
- **Contact form** — Netlify Forms with honeypot spam protection
- **SEO** — JSON-LD structured data, auto-generated sitemap, 82 redirect rules from old Drupal URLs
- **Static site** — Pre-rendered HTML, optimized images, compressed assets
- **i18n-ready** — German only for now, architecture supports adding more languages

## Getting Started

```bash
npm install
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
```

## Project Structure

```
src/
├── pages/                  # Routes (index, ueber-uns, kontakt, impressum, datenschutz)
│   ├── produkte/           # Product overview + dynamic [slug] pages
│   ├── dienstleistungen/   # Service overview + dynamic [slug] pages
│   └── projekte/           # Project gallery + dynamic [slug] pages
├── data/                   # Content collections (Markdown with YAML frontmatter)
│   ├── products/           # 10 product files
│   ├── services/           # 7 service files
│   └── projects/           # 28 project files
├── components/
│   ├── widgets/            # Page sections (Hero, Features, Steps, Stats, FAQs, etc.)
│   ├── ui/                 # Base UI (Button, Headline, ItemGrid)
│   └── common/             # Shared (Metadata, JsonLd, Image)
├── layouts/                # Layout wrappers
├── content/config.ts       # Content collection schemas
├── navigation.ts           # Navigation structure
├── config.yaml             # Site settings
└── i18n/                   # Translation files
```

Static images are served from `public/images/`. Astro-optimized images use `src/assets/images/`.

## Commands

| Command | Action |
|:--------|:-------|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run check` | Run type checks, ESLint, and Prettier |
| `npm run fix` | Auto-fix lint and formatting |

## Tech Stack

- **Astro 5** — Static site generator
- **Tailwind CSS 3** — Utility-first CSS
- **TypeScript** — Type safety
- **MDX** — Markdown with components
- **Sharp** — Image processing
- **astro-icon** — Tabler icons
- **astro-compress** — HTML/CSS compression
- **GLightbox** — Project photo gallery lightbox

## Deployment

Configured for Netlify via `netlify.toml`. Push to the connected Git branch to trigger a deploy.

## License

Based on the [AstroWind](https://github.com/onwidget/astrowind) template, licensed under MIT.
