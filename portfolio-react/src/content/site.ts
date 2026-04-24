export const profile = {
  name: 'Akshat Kumar',
  role: 'Software Developer',
  headline: 'Software developer focused on full-stack products, backend systems, and performance-aware web experiences.',
  summary:
    'Final-year B.Tech Computer Science student with internship and leadership experience, plus hands-on work in full-stack development, API systems, and retrieval-augmented AI applications.',
  location: 'Ranchi, Jharkhand, India',
  availability: 'Open to internships and entry-level SDE roles',
  email: 'akshat04kumar@gmail.com',
  phone: '+91-7667280522',
  github: 'https://github.com/iakshatkr',
  leetcode: 'https://leetcode.com/u/iakshatkr/',
  linkedin: 'https://www.linkedin.com/in/akshatkr7/',
  twitter: '',
  resumeUrl: '/Akshat-Kumar-Resume.pdf',
};

export const heroMetrics = [
  { value: '10+', label: 'REST APIs handled in production-style workflows' },
  { value: '50+', label: 'Technical documents indexed in a RAG pipeline' },
  { value: '2026', label: 'B.Tech graduation year' },
];

export const tickerItems = [
  'React',
  'Node.js',
  'Express.js',
  'MongoDB',
  'JWT Authentication',
  'REST APIs',
  'Python',
  'RAG',
  'LLM APIs',
  'FAISS',
  'Mapbox',
  'Rate Limiting Middleware',
  'Docker Basics',
  'Postman',
];

export const quickHighlights = [
  {
    label: 'Internship impact',
    value: 'Reduced NGO platform bounce rate from 70% to 45%',
  },
  {
    label: 'Community leadership',
    value: 'Led visual media strategy for 10+ technical events at GDSC',
  },
  {
    label: 'Current build focus',
    value: 'Backend APIs, access control, and retrieval-augmented applications',
  },
];

export const focusAreas = [
  {
    title: 'Backend and API Engineering',
    description:
      'Designing and implementing Express-based APIs, authentication flows, and middleware that support reliable, role-driven product behavior.',
  },
  {
    title: 'Full-Stack Product Delivery',
    description:
      'Building complete web workflows from frontend interfaces to backend services with booking logic, data models, and operational endpoints.',
  },
  {
    title: 'Applied AI Retrieval Systems',
    description:
      'Developing RAG pipelines with document ingestion, vector indexing, and context-aware retrieval to improve answer relevance.',
  },
];

export const experience = [
  {
    company: 'Vikas Bharti',
    title: 'Software Developer Intern',
    duration: 'May 2024 - Jul 2024',
    location: 'Ranchi, Jharkhand',
    link: 'https://www.vikasbharti.in/',
    bullets: [
      'Implemented responsive web improvements for the NGO platform, optimized for low-bandwidth (3G) environments.',
      'Improved engagement by reducing bounce rate from 70% to 45% through performance and UX updates.',
      'Developed a Node.js + MongoDB backend for beneficiary data across 5-7 programs and integrated RESTful APIs for structured frontend-backend communication.',
      'Applied lazy loading and image compression, reducing page load time by 25-30% and supporting initiatives reaching 5000+ beneficiaries.',
    ],
  },
  {
    company: 'Google Developer Student Club',
    title: 'Visual Media Head',
    duration: 'Sep 2024 - Jun 2025',
    location: 'Ranchi, Jharkhand',
    link: 'https://gdg.community.dev/gdg-on-campus-sarala-birla-university-ranchi-india/',
    bullets: [
      'Led visual media and content strategy for 10+ technical events, driving a 40-50% increase in student engagement.',
      'Collaborated with sponsors and startup teams to promote developer tools and applications through guided sessions and campaigns.',
      'Enabled 100+ students to explore and adopt platforms through structured outreach and technical content promotion.',
      'Used analytics and content tools to optimize campaign performance and align content with developer workflows.',
    ],
  },
];

export const skillGroups = [
  {
    title: 'Languages',
    items: ['C', 'C++', 'JavaScript (ES6+)', 'SQL', 'Python'],
  },
  {
    title: 'Backend and APIs',
    items: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication', 'Middleware', 'API Design'],
  },
  {
    title: 'Databases and AI/ML',
    items: ['MongoDB', 'Mongoose', 'RAG', 'LLM APIs', 'Vector Search (FAISS)', 'Embeddings'],
  },
  {
    title: 'Tools and Workflow',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker (Basics)', 'Chrome DevTools'],
  },
];

export const projects = [
  {
    title: 'Greenvolt Nexus',
    category: 'EV Platform',
    status: 'Jan 2025 - Sep 2025',
    description:
      'Full-stack EV charging platform built for real-time station discovery, booking flows, and role-based operations.',
    highlights: [
      'Designed and developed the platform using React, Node.js, Express, and MongoDB across Admin, Owner, and User roles.',
      'Implemented JWT authentication and role-based access control to secure workflows and endpoint access.',
      'Built booking logic with slot validation and conflict detection to prevent double-bookings.',
      'Integrated Mapbox-based analytics dashboards and managed 10+ REST API endpoints for bookings, payments, and user operations.',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Mapbox'],
    codeUrl: '',
    liveUrl: '',
  },
  {
    title: 'RAG Document Assistant',
    category: 'AI / Retrieval',
    status: 'Aug 2025 - Oct 2025',
    description:
      'Context-aware RAG assistant that queries technical documents using vector retrieval and LLM-powered response generation.',
    highlights: [
      'Built a retrieval pipeline for 50+ documents using LLM APIs.',
      'Implemented ingestion, chunking, and embedding workflows, generating 500+ chunks stored in FAISS.',
      'Designed query flow from question to top-3 retrieval and final response for improved relevance.',
      'Optimized chunking and similarity search settings for stronger answer quality.',
    ],
    stack: ['Python', 'FAISS', 'LangChain', 'LLM APIs'],
    codeUrl: '',
    liveUrl: '',
  },
  {
    title: 'API Throttling Engine',
    category: 'Backend Infrastructure',
    status: 'Dec 2025 - Jan 2026',
    description:
      'Rate-limiting middleware system to control traffic, prevent API abuse, and maintain stable backend performance.',
    highlights: [
      'Developed fixed-window rate limiting in Node.js and Express.',
      'Enforced 100 requests per minute per user with efficient in-memory tracking.',
      'Implemented request flow for validation, limit checks, and allow/block behavior.',
      'Designed for consistent performance under concurrent request loads.',
    ],
    stack: ['Node.js', 'Express.js', 'Middleware', 'In-Memory Caching'],
    codeUrl: '',
    liveUrl: '',
  },
];

export const education = {
  institution: 'Sarala Birla University, Ranchi',
  degree: 'B.Tech in Computer Science and Engineering',
  duration: '2022 - 2026',
  score: 'Relevant Coursework: OOP, OS, Cloud Computing',
  location: 'Ranchi, Jharkhand',
};

export const certifications = [
  {
    title: 'Object-Oriented Programming',
    issuer: 'Relevant Coursework',
    link: 'https://www.sbu.ac.in/',
  },
  {
    title: 'Operating Systems',
    issuer: 'Relevant Coursework',
    link: 'https://www.sbu.ac.in/',
  },
  {
    title: 'Cloud Computing',
    issuer: 'Relevant Coursework',
    link: 'https://www.sbu.ac.in/',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: profile.github },
  { label: 'LinkedIn', href: profile.linkedin },
  { label: 'LeetCode', href: profile.leetcode },
];
