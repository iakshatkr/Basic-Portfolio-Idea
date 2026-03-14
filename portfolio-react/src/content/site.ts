export const profile = {
  name: 'Akshat Kumar',
  role: 'Full-Stack Developer',
  headline: 'Engineering high-signal web products with cinematic presentation and reliable systems.',
  summary:
    'Final-year Computer Science student focused on modern frontend craft, backend architecture, and problem solving through data structures and algorithms.',
  location: 'India',
  availability: 'Open to internships and full-time SDE roles',
  email: 'akshat.heic777@gmail.com',
  github: 'https://github.com/iakshatkr',
  leetcode: 'https://leetcode.com/u/iakshatkr/',
  linkedin: '',
  twitter: '',
};

export const heroMetrics = [
  { value: '500+', label: 'DSA problems solved' },
  { value: 'MERN', label: 'Primary engineering stack' },
  { value: '2026', label: 'Graduating and hiring-ready' },
];

export const tickerItems = [
  'React',
  'TypeScript',
  'Node.js',
  'Express',
  'MongoDB',
  'Three.js',
  'GSAP',
  'Responsive UI',
  'DSA',
  'System Design',
];

export const focusAreas = [
  {
    title: 'Frontend Experiences',
    description:
      'Clean interfaces, motion with purpose, and responsive layouts that feel premium instead of template-driven.',
  },
  {
    title: 'Backend Reliability',
    description:
      'APIs, database design, and practical full-stack architecture for products that need to scale without becoming messy.',
  },
  {
    title: 'Problem Solving',
    description:
      'Algorithmic thinking, debugging discipline, and structured reasoning that make delivery faster and code more dependable.',
  },
];

export const skillGroups = [
  {
    title: 'Build',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Ship',
    items: ['Node.js', 'Express', 'MongoDB', 'REST APIs', 'Git', 'Deployment'],
  },
  {
    title: 'Think',
    items: ['DSA', 'Problem Solving', 'System Design', 'Performance', 'Debugging', 'DX'],
  },
];

export const projects = [
  {
    title: 'Task Management App',
    category: 'Productivity',
    status: 'Case study',
    description:
      'A responsive CRUD workflow app focused on clarity, fast interactions, and persistent local storage.',
    highlights: [
      'Structured task states and lightweight productivity flows',
      'Keyboard-friendly UI with responsive layouts',
      'Persistent browser storage for a reliable day-to-day experience',
    ],
    stack: ['React', 'TypeScript', 'Local Storage', 'Responsive UI'],
    codeUrl: '',
    liveUrl: '',
  },
  {
    title: 'Weather Intelligence',
    category: 'Data UI',
    status: 'Featured build',
    description:
      'A weather dashboard that turns live API data into a cleaner, easier-to-scan interface for everyday use.',
    highlights: [
      'City search and real-time weather retrieval',
      'Clear visual hierarchy for conditions and forecasts',
      'Asynchronous state handling for a smoother UX',
    ],
    stack: ['JavaScript', 'REST API', 'Async Data', 'UI Design'],
    codeUrl: '',
    liveUrl: '',
  },
  {
    title: 'Image Gallery',
    category: 'Search Experience',
    status: 'Production candidate',
    description:
      'A gallery interface designed around search, visual rhythm, and fast content discovery.',
    highlights: [
      'Dynamic results from external APIs',
      'Grid-based presentation optimized for different screens',
      'Focused handling of loading, empty, and interactive states',
    ],
    stack: ['React', 'API Integration', 'Grid Layout', 'Frontend UX'],
    codeUrl: '',
    liveUrl: '',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LeetCode', href: profile.leetcode },
  ...(profile.linkedin ? [{ label: 'LinkedIn', href: profile.linkedin }] : []),
  ...(profile.twitter ? [{ label: 'X / Twitter', href: profile.twitter }] : []),
];
