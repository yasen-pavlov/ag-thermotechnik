# AG Thermotechnik

Corporate website for A&G Thermotechnik GmbH — an HVAC company in Düsseldorf. Built with Astro 5, AstroWind template, and Tailwind CSS v3. Deployed on Netlify.

## Commands

- `npm run dev` — Start dev server
- `npm run build` — Production build (outputs to `dist/`)
- `npm run preview` — Preview production build
- `npm run check` — Run all checks (astro types, eslint, prettier)
- `npm run fix` — Auto-fix lint and formatting issues

## Architecture

- **Framework:** Astro 5 (static output)
- **Template:** AstroWind (onwidget/astrowind)
- **CSS:** Tailwind CSS v3 with custom brand colors (`--aw-color-primary: rgb(7 121 191)`)
- **Language:** German only (i18n-ready via `src/i18n/`)
- **Deployment:** Netlify (config in `netlify.toml`)
- **Node:** 20

## Project Structure

```
src/
├── pages/                    # File-based routing (kebab-case)
│   ├── index.astro           # Homepage
│   ├── ueber-uns.astro       # About
│   ├── kontakt.astro         # Contact (Netlify Forms)
│   ├── produkte/             # Products overview + [slug].astro
│   ├── dienstleistungen/     # Services overview + [slug].astro
│   ├── projekte/             # Projects gallery + [slug].astro (GLightbox)
│   ├── impressum.astro       # Legal notice
│   └── datenschutz.astro     # Privacy policy
├── data/                     # Content collections (Markdown)
│   ├── products/             # 10 product .md files
│   ├── services/             # 7 service .md files
│   └── projects/             # 28 project .md files
├── components/
│   ├── widgets/              # Full page sections (Hero, Features, Steps, etc.)
│   ├── ui/                   # Base UI (Button, Headline, ItemGrid)
│   └── common/               # Shared (Metadata, JsonLd, Image)
├── layouts/                  # Layout wrappers (Layout.astro, PageLayout.astro)
├── content/config.ts         # Content collection schemas (Zod)
├── navigation.ts             # Header/footer nav data
├── config.yaml               # Site settings (metadata, theme, i18n)
└── i18n/                     # Translation files (de.json) + utils
```

Static images live in `public/images/` (products, services, projects). Astro-optimized images use `src/assets/images/` with the `<Image>` component or `~/assets/images/` import paths.

## Content Collections

Defined in `src/content/config.ts` using Astro's `glob` loader:

- **product** — title, description, slug, icon, image, features[], order
- **service** — title, description, slug, icon, image, order
- **project** — title, slug, products[], images[], category, order

In Astro 5, `render` is a standalone import: `import { getCollection, render } from 'astro:content'` — not a method on entries.

## Conventions

- **Pages:** kebab-case filenames, dynamic routes via `[slug].astro`
- **Components:** PascalCase filenames
- **Content:** kebab-case .md files with YAML frontmatter
- **Formatting:** Prettier (120 char width, single quotes, trailing commas es5)
- **Linting:** ESLint with Astro + TypeScript plugins
- **Theme:** Light mode only (`ui.theme: 'light:only'` in config.yaml)
- **Blog:** Disabled in config but blog components still exist in codebase
- **Icons:** Tabler icons via `astro-icon` (e.g., `tabler:temperature`)

## SEO

- JSON-LD structured data via `src/components/common/JsonLd.astro` (LocalBusiness, Product, Service)
- Auto-generated sitemap via `@astrojs/sitemap`
- Old Drupal URL redirects in `public/_redirects` (82 rules)
- Per-page meta titles and descriptions

## Key Config Files

- `astro.config.ts` — Site URL, integrations, image domains
- `src/config.yaml` — Site name, metadata, theme, i18n
- `tailwind.config.js` — Brand colors, fonts, custom variants
- `netlify.toml` — Build settings, cache headers
- `src/navigation.ts` — All nav links, footer columns, social links
