# Project Workflow and Tech Stack Report

## Overview
This portfolio project presents Akshat Kumar's profile as a modern single-page React application. It is designed around a structured section flow, responsive visual layout, and stronger professional storytelling for roles such as Full-Stack Developer.

## Workflow Summary
The application starts in `src/main.tsx`, which mounts the root `App` component. From there, the page is rendered as a top-to-bottom portfolio journey through these main sections: Hero, About, Experience, Skills, Projects, Education, Contact. Shared content is centralized in `src/content/site.ts`, so most profile, experience, project, certification, and social updates can be made without rewriting UI logic.

The interface workflow is enhanced with scroll-aware behavior. The app uses a scroll progress bar and `IntersectionObserver`-based reveal animations to progressively expose content as the user moves through the page. Navigation is handled through a responsive header with smooth-scrolling section links and resume shortcuts. The hero section also lazy-loads a Three.js scene, which keeps heavier 3D rendering separate from the initial text content and improves perceived loading behavior.

## Current Content Snapshot
- Main React sections: 7
- Component files in `src/components`: 12
- Hero metrics: 3
- Focus areas: 3
- Experience entries: 2
- Skill groups: 4
- Project entries: 3
- Certifications: 4
- Social links: 4

## Tech Stack
- Frontend: react (^19.2.4), react-dom (^19.2.4), three (^0.183.2), gsap (^3.14.2), vite (^6.2.2), typescript (^5.8.2), tailwindcss (^3.4.17), postcss (^8.5.6), autoprefixer (^10.4.21), @vitejs/plugin-react (^4.4.1)
- Styling approach: Tailwind utility classes plus custom CSS in `src/style.css`
- Animation approach: GSAP is installed for advanced animation support, with current on-screen section reveals driven mainly by `IntersectionObserver`
- 3D rendering: Three.js scene is lazy-loaded inside the hero section
- Build and validation commands: `npm run dev`, `npm run typecheck`, `npm run build`

## Maintenance Note
The implementation is Vite-based, but the current `README.md` still contains older Create React App instructions. Updating that file would make the developer workflow easier to follow for future contributors.
