# Akshat Kumar Portfolio

Premium React + TypeScript portfolio rebuilt on Vite, with animated section reveals, an ambient Three.js hero, and polished interactive surfaces for projects, skills, and contact sections.

## Stack

- React 19
- TypeScript
- Vite
- GSAP + ScrollTrigger
- Three.js
- Tailwind utility classes with custom CSS art direction

## Scripts

- `npm run dev` starts the local Vite dev server
- `npm run build` runs type-checking and creates the production build
- `npm run preview` serves the production build locally
- `npm run typecheck` runs TypeScript without emitting files
- `npm run report:project` generates the local project report
- `npm run check:project` builds the app and generates the report

## Motion Highlights

- GSAP-driven reveal animations for portfolio sections
- Lazy-loaded Three.js hero background
- Animated marquee, ambient hero glows, and floating panel motion
- Pointer-responsive spotlight and tilt interactions on key cards
- Reduced-motion safeguards for accessibility

## Update Log

- Restored a more visible Three.js hero layer with brighter particles, larger floating geometry, and explicit canvas stacking in the hero section
- Realigned the hero glow/grid backing so the right-side panel depth effect follows the card instead of appearing detached
- Removed the hero backing block entirely to eliminate the visible detached rectangle behind the positioning card

## Project Structure

- `src/App.tsx` wires the page sections and global page behaviors
- `src/components/` contains the portfolio sections and hero scene
- `src/content/site.ts` holds profile, project, and resume content
- `src/hooks/useScrollAnimation.ts` powers the GSAP motion system
- `src/style.css` contains the custom visual system and animation styling

## Notes

- The current GitHub remote points to `https://github.com/iakshatkr/Basic-Portfolio-Idea`
- Resume assets are served from `public/`
- Production builds are emitted to `dist/`
