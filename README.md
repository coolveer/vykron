# Vykron Technologies

Marketing website for Vykron Technologies, a product engineering company. Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, Lenis.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If port 3000 is taken, Next.js will pick the next free port and print it in the terminal.

## Environment variables

Copy `.env.example` to `.env.local` and fill in what you have. Everything is optional in development.

| Variable | Purpose |
| --- | --- |
| `GMAIL_SENDER_EMAIL` | The Gmail account used to send `/contact` submissions (SMTP via [nodemailer](https://nodemailer.com)). Without the Gmail vars, the form still validates and submits, but falls back to opening the visitor's email client with a pre-filled `mailto:` link instead. |
| `GMAIL_APP_PASSWORD` | A Google [App Password](https://myaccount.google.com/apppasswords) for the sender account (requires 2-Step Verification — this is **not** the normal account password). The spaces Google displays are cosmetic and are stripped automatically. |
| `RECIPIENT_EMAIL` | Where briefs are delivered. Comma-separated for multiple recipients, e.g. `a@x.com,b@y.com`. |

The form posts to `app/api/contact/route.ts`, which reads these at request time. No client-side env vars are needed.

## Editing content

Site-wide settings (company name, email, address, response-time promise, booking status, nav links, tech stack marquee, home page stats) live in one file:

```
lib/site.config.ts
```

Services and case studies are typed data, not hardcoded into components, so copy edits never touch JSX:

```
content/services.ts       # the six /services/[slug] pages, each with hero copy, process, tech stack, proof point, FAQ
content/case-studies.ts   # the three /work/[slug] pages: challenge, approach, outcome, tags, stack
```

Adding a new service automatically adds it to the footer, the home services grid, the `/services` index, and the sitemap, since all of those read from `content/services.ts`. Same for case studies and `content/case-studies.ts`.

## Swapping fonts

The brief specifies Fontshare faces (Clash Display / Cabinet Grotesk for display, General Sans as an alternative). Those require a license and locally hosted font files, so this build substitutes Google-hosted equivalents that self-host automatically through `next/font` with zero runtime request to Google:

- Display: **Bricolage Grotesque** (has a variable optical-size axis, so it gains real personality at large display sizes rather than reading as a neutral system grotesque)
- Body: **Inter**
- Mono: **JetBrains Mono**

All three are wired in `lib/fonts.ts`. To switch to real Fontshare files once licensed:

1. Download the `.woff2` files and place them under `app/fonts/`.
2. In `lib/fonts.ts`, replace the `next/font/google` imports with `next/font/local`, e.g.:
   ```ts
   import localFont from "next/font/local";
   export const bricolage = localFont({
     src: "../app/fonts/ClashDisplay-Variable.woff2",
     variable: "--font-display-src",
   });
   ```
3. Keep the `variable` name (`--font-display-src`, `--font-body-src`, `--font-mono-src`) unchanged, since `app/globals.css` reads those exact custom properties into the `--font-display` / `--font-body` / `--font-mono` theme tokens Tailwind generates utilities from.

## Design tokens

Colors, the fluid type scale, radii, easing, and section spacing are all defined once in `app/globals.css` under `@theme`, and consumed everywhere through generated Tailwind utilities (`bg-ink`, `text-signal`, `font-display`, `text-hero`, `rounded-md`, `ease-quint`, `py-section`, etc.). There should be no arbitrary hex codes or magic pixel values scattered through components; if a color or size is needed in more than one place, it belongs in `@theme`.

## Logo and brand mark

`public/brand/vykron-mark.png` is the extracted, transparent icon mark, generated from the source artwork in `/logo` (which was flattened onto solid black/white backgrounds, not usable directly). It is used by `components/layout/logo-mark.tsx`, the favicon (`app/icon.tsx`), the Apple touch icon (`app/apple-icon.tsx`), and the OG image template (`app/api/og/route.tsx`) via `lib/brand-mark.ts`. If you get a proper vector logo later, replace that one PNG and it propagates everywhere.

## SEO

- Per-page metadata goes through `lib/seo.ts` (`buildMetadata`), which sets title, description, canonical, OpenGraph, and Twitter card fields consistently.
- OG images are generated at `/api/og` (`app/api/og/route.tsx`) from a single template parameterized by `title` and `eyebrow` query params, rather than one static image per page.
- JSON-LD builders live in `lib/schema.ts`: Organization (site-wide, in `app/layout.tsx`), Service and FAQPage (each service detail page), BreadcrumbList (service and case study detail pages).
- `app/sitemap.ts` and `app/robots.ts` are generated from the same `content/` data, so new services or case studies are picked up automatically.

## Deploying

Zero-config on [Vercel](https://vercel.com/new): connect the repo, add the environment variables above in the project settings, deploy. For any other Node host, `npm run build && npm run start`.

## Project structure

```
app/                    routes (App Router), one folder per URL segment
components/ui/          primitives: Button, Container, Section, Eyebrow, Stat, Tag, Faq, ...
components/motion/      Reveal, Counter, BlueprintGrid, CircuitPath, PageTransition, SmoothScrollProvider
components/sections/    page sections (Hero, ServicesGrid, CaseStudyCard, CtaSection, ...)
components/layout/      Nav, Footer, LogoMark
content/                services.ts, case-studies.ts (typed content data)
lib/                    site.config.ts, fonts.ts, schema.ts, seo.ts, contact-schema.ts, utils.ts
```
