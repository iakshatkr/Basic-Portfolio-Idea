import fs from 'node:fs/promises';
import path from 'node:path';

const rootDir = process.cwd();
const reportPath = path.join(rootDir, 'PROJECT_WORKFLOW_REPORT.md');

async function readText(relativePath) {
  return fs.readFile(path.join(rootDir, relativePath), 'utf8');
}

function extractString(source, pattern, fallback = 'Not found') {
  const match = source.match(pattern);
  return match ? match[1] : fallback;
}

function extractBlock(source, exportName) {
  const startMarker = `export const ${exportName} = [`;
  const startIndex = source.indexOf(startMarker);
  if (startIndex === -1) return '';

  const afterStart = source.slice(startIndex + startMarker.length);
  const endIndex = afterStart.indexOf('\n];');
  if (endIndex === -1) return '';

  return afterStart.slice(0, endIndex);
}

function countObjectsInBlock(block) {
  let depth = 0;
  let objectCount = 0;

  for (const char of block) {
    if (char === '{') {
      if (depth === 0) {
        objectCount += 1;
      }
      depth += 1;
    } else if (char === '}') {
      depth = Math.max(0, depth - 1);
    }
  }

  return objectCount;
}

function listDependencies(packageJson, names) {
  const allDependencies = {
    ...(packageJson.dependencies || {}),
    ...(packageJson.devDependencies || {}),
  };

  return names
    .filter((name) => allDependencies[name])
    .map((name) => `${name} (${allDependencies[name]})`);
}

async function main() {
  const [packageJsonText, appText, heroText, siteText, components] = await Promise.all([
    readText('package.json'),
    readText(path.join('src', 'App.tsx')),
    readText(path.join('src', 'components', 'Hero.tsx')),
    readText(path.join('src', 'content', 'site.ts')),
    fs.readdir(path.join(rootDir, 'src', 'components')),
  ]);

  const packageJson = JSON.parse(packageJsonText);
  const profileName = extractString(siteText, /name:\s+'([^']+)'/);
  const profileRole = extractString(siteText, /role:\s+'([^']+)'/);
  const sectionIds = [...appText.matchAll(/<([A-Z][A-Za-z0-9]*)\s*\/>/g)]
    .map((match) => match[1])
    .filter((name) => !['Header', 'Footer'].includes(name));

  const heroMetricsCount = countObjectsInBlock(extractBlock(siteText, 'heroMetrics'));
  const focusAreasCount = countObjectsInBlock(extractBlock(siteText, 'focusAreas'));
  const experienceCount = countObjectsInBlock(extractBlock(siteText, 'experience'));
  const skillGroupsCount = countObjectsInBlock(extractBlock(siteText, 'skillGroups'));
  const projectsCount = countObjectsInBlock(extractBlock(siteText, 'projects'));
  const certificationsCount = countObjectsInBlock(extractBlock(siteText, 'certifications'));
  const socialLinksCount = countObjectsInBlock(extractBlock(siteText, 'socialLinks'));

  const usesLazyThreeScene = heroText.includes("lazy(() => import('./ThreeScene'))");
  const usesIntersectionObserver = appText.includes('IntersectionObserver');
  const usesGsap = packageJsonText.includes('"gsap"');

  const primaryStack = listDependencies(packageJson, [
    'react',
    'react-dom',
    'three',
    'gsap',
    'vite',
    'typescript',
    'tailwindcss',
    'postcss',
    'autoprefixer',
    '@vitejs/plugin-react',
  ]);

  const report = `# Project Workflow and Tech Stack Report

## Overview
This portfolio project presents ${profileName}'s profile as a modern single-page React application. It is designed around a structured section flow, responsive visual layout, and stronger professional storytelling for roles such as ${profileRole}.

## Workflow Summary
The application starts in \`src/main.tsx\`, which mounts the root \`App\` component. From there, the page is rendered as a top-to-bottom portfolio journey through these main sections: ${sectionIds.join(', ')}. Shared content is centralized in \`src/content/site.ts\`, so most profile, experience, project, certification, and social updates can be made without rewriting UI logic.

The interface workflow is enhanced with scroll-aware behavior. The app uses a scroll progress bar and \`IntersectionObserver\`-based reveal animations to progressively expose content as the user moves through the page. Navigation is handled through a responsive header with smooth-scrolling section links and resume shortcuts. The hero section also lazy-loads a Three.js scene, which keeps heavier 3D rendering separate from the initial text content and improves perceived loading behavior.

## Current Content Snapshot
- Main React sections: ${sectionIds.length}
- Component files in \`src/components\`: ${components.length}
- Hero metrics: ${heroMetricsCount}
- Focus areas: ${focusAreasCount}
- Experience entries: ${experienceCount}
- Skill groups: ${skillGroupsCount}
- Project entries: ${projectsCount}
- Certifications: ${certificationsCount}
- Social links: ${socialLinksCount}

## Tech Stack
- Frontend: ${primaryStack.join(', ')}
- Styling approach: Tailwind utility classes plus custom CSS in \`src/style.css\`
- Animation approach: ${usesGsap ? 'GSAP is installed for advanced animation support' : 'No external animation library detected'}, with current on-screen section reveals driven mainly by ${usesIntersectionObserver ? '\`IntersectionObserver\`' : 'scroll logic'}
- 3D rendering: ${usesLazyThreeScene ? 'Three.js scene is lazy-loaded inside the hero section' : 'Three.js usage not detected in lazy loading'}
- Build and validation commands: \`npm run dev\`, \`npm run typecheck\`, \`npm run build\`

## Maintenance Note
The implementation is Vite-based, but the current \`README.md\` still contains older Create React App instructions. Updating that file would make the developer workflow easier to follow for future contributors.
`;

  await fs.writeFile(reportPath, report, 'utf8');
  console.log(`Project report generated: ${reportPath}`);
}

main().catch((error) => {
  console.error('Failed to generate project report.');
  console.error(error);
  process.exitCode = 1;
});
