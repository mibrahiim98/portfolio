# Mohamed Ibrahem — Portfolio

Personal portfolio and online resume of **Mohamed Ibrahem Saied**, Frontend Developer based in Riyadh, Saudi Arabia.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**. Fully static — no backend, no external requests at runtime (fonts are self-hosted).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script          | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Create a production build        |
| `npm run start` | Serve the production build       |
| `npm run lint`  | Lint the project with ESLint     |

## Project structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, skip link
│   ├── page.tsx            # Composes the page from sections
│   ├── globals.css         # Design tokens (@theme), utilities, grain & reveal effects
│   └── icon.svg            # Favicon
├── components/
│   ├── layout/             # Header (sticky nav + mobile menu), Footer
│   ├── sections/           # Hero, Experience, Highlights, Skills, Leadership, Education, Contact
│   └── ui/                 # Reusable primitives: Container, SectionHeading, Reveal, Marquee, Tag
├── data/
│   └── profile.ts          # ← All site content lives here
└── types/
    └── profile.ts          # Content types
public/
├── images/mohamed.jpg      # Profile photo
└── Mohamed_Ibrahem_Saied_CV.pdf
```

## Editing content

All text — experience, highlights, skills, education, links — lives in [`src/data/profile.ts`](src/data/profile.ts). Components only render that data, so updating the site is a one-file change. To update the downloadable CV, replace the PDF in `public/` (keep the file name, or update `cvPath`).

## Design notes

- Dark theme with a film-grain overlay, deep-blue accent (`--color-accent`) and an expanded display typeface (Archivo, width 125%) paired with JetBrains Mono for labels.
- Colors and fonts are defined once as Tailwind v4 theme tokens in `globals.css`.
- Scroll-reveal animations use a single `IntersectionObserver` per element; all motion respects `prefers-reduced-motion`.
- Accessible by default: semantic landmarks, skip link, visible focus states, labelled navigation.

## Deployment

The site is fully static and can be hosted on Vercel, Firebase Hosting, Netlify or GitHub Pages. When publishing, set `NEXT_PUBLIC_SITE_URL` to the live URL so Open Graph metadata resolves correctly.
