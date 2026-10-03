# Mohamed Ibrahem — Portfolio

Personal portfolio and online resume of **Mohamed Ibrahem Saied**, Frontend Developer based in Riyadh, Saudi Arabia.

Built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**. Fully static — no backend, no external requests at runtime (fonts are self-hosted).

**Live:** https://moibrahem98.web.app (mirror: https://mibrahiim98.github.io/portfolio/)

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

| Script          | What it does                     |
| --------------- | -------------------------------- |
| `npm run dev`   | Start the development server     |
| `npm run build` | Export the static site to `out/` |
| `npm run preview` | Serve `out/` locally           |
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
├── lib/
│   └── asset.ts            # Prefixes public/ paths with the deploy base path
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

The site is exported as static HTML (`output: "export"`) into `out/` and deployed automatically on every push to `main`.

### Firebase Hosting (primary) — `moibrahem98.web.app`

- Workflow: [`.github/workflows/firebase-deploy.yml`](.github/workflows/firebase-deploy.yml) builds and deploys to the live channel of the `moibrahem98` Firebase project.
- Hosting config lives in [`firebase.json`](firebase.json) (serves `out/`, clean URLs, long-term caching for hashed assets).
- Requires a repository secret named `FIREBASE_SERVICE_ACCOUNT` containing a Firebase service account JSON key (Firebase console → Project settings → Service accounts → Generate new private key).
- Manual deploy: `npm run build && npx firebase-tools deploy --only hosting`.

### GitHub Pages (mirror) — `mibrahiim98.github.io/portfolio`

- Workflow: [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml). The build runs with `GITHUB_PAGES=true`, which sets the `/portfolio` base path (see `next.config.ts`).
- Links to files in `public/` go through `asset()` in `src/lib/asset.ts` so they get the base path too.
- To retire the mirror, delete that workflow and turn off Pages in the repo settings.
