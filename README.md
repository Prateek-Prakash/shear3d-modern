# Shear3D Modern

A modern rebuild of the [Shear3D Consulting](https://shear3d.com) website — structural engineering software for professionals. Migrated from a legacy XHTML/jQuery/Flash stack to **Next.js 15**, **Tailwind CSS v4**, and **TypeScript**.

## Tech Stack

| | |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org) (App Router) |
| **Language** | TypeScript |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Icons** | [lucide-react](https://lucide.dev) + custom SVG social icons |
| **Carousel** | [Embla Carousel](https://www.embla-carousel.com) |
| **Forms** | [React Hook Form](https://react-hook-form.com) |
| **Gallery** | [yet-another-react-lightbox](https://yet-another-react-lightbox.com) |

## Pages

| Route | Description |
|---|---|
| `/` | Home — hero carousel, package cards, benefits, testimonial |
| `/about` | Company overview, history, mission, team |
| `/products` | Product catalog — 6 structural engineering apps |
| `/products/[slug]` | Individual product pages (icode, dxfmod, anapro, strip, slam, slide) |
| `/solutions` | Service tiers — purchase, lease, on-demand, consulting, CAE/FEA |
| `/download` | Brochures & software package downloads |
| `/gallery` | Project showcase with lightbox |
| `/contact` | Contact form + office details |
| `/privacy` | Privacy policy |
| `/terms` | Terms & disclaimer |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
shear3d-modern/
├── app/                  # Next.js App Router pages & API routes
│   ├── about/
│   ├── api/
│   │   ├── contact/      # Contact form handler
│   │   └── subscribe/    # Newsletter subscribe handler
│   ├── contact/
│   ├── download/
│   ├── gallery/
│   ├── privacy/
│   ├── products/
│   │   └── [slug]/       # Dynamic product detail pages
│   ├── solutions/
│   ├── terms/
│   ├── globals.css
│   ├── layout.tsx        # Root layout (Navbar + Footer)
│   └── page.tsx          # Home page
├── components/
│   ├── Footer.tsx
│   ├── HeroCarousel.tsx
│   ├── Navbar.tsx
│   └── SocialIcons.tsx
└── public/
    ├── images/           # Product & UI images
    └── gallery-images/   # Project showcase images
```

## About Shear3D

Shear3D Consulting has been delivering structural engineering software since 1991. Their suite of products covers the full workflow — from structural modeling (DXFMOD, SLAM) to FEM analysis (ANAPRO) to post-processing (STRIP) to design & detailing (SLIDE, ICODE).

## Deploy

The easiest way to deploy is via [Vercel](https://vercel.com/new):

```bash
npm run build   # verify build passes locally first
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Prateek-Prakash/shear3d-modern)
