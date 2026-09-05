/**
 * Portfolio content — single editable config for the Dominic-style layout.
 * Media lives under /public matching these paths.
 */
export const SITE = {
  name: "Vedant",
  fullName: "Vedant Wankhade",
  role: "Full Stack Developer & UI/UX Designer",
  location: "Amravati, India",
  tagline: "Full Stack Developer & UI/UX Designer based in Amravati",
  availability: "Open to opportunities",
  email: "mailto:vedantwankhade47@gmail.com",
  resume: "/resume/Vedant_Wankhade_Resume.pdf",
  profile: "/images/profile/vedant.webp",
  socials: {
    linkedin: "https://www.linkedin.com/in/vedant-wankhade123",
    github: "https://github.com/vedantwankhade123",
    email: "mailto:vedantwankhade47@gmail.com",
  },
} as const;

export const HERO = {
  intro:
    "I build scalable web projects and AI-powered tools with clean interfaces — from intelligent agents to complete platforms on the MERN stack.",
  cta: "See my work",
  marks: ["React", "TypeScript", "Node.js", "Python", "Tailwind", "MongoDB"],
} as const;

export const ABOUT = {
  heading: "Full Stack Developer",
  summary:
    "Full Stack Developer with a strong foundation in modern web development and a growing interest in AI-powered applications. I enjoy building scalable, real-world solutions — from intelligent agents to complete web platforms — using the MERN stack and modern APIs. Continuously exploring new technologies, I aim to grow into a proficient full-stack developer who builds impactful, production-ready projects.",
  body:
    "Focused on [[Full Stack · AI · UI/UX]]. Based in [[Amravati, Maharashtra]], pursuing [[B.Tech CSE · 2023–2027]] at G.H. Raisoni University (CGPA 8.74), with depth in full-stack development, AI, and databases. Currently training through [[Sheryians Cohort 3.0]].",
  extras: [
    "I ship real client and personal projects — from e-commerce platforms to autonomous hybrid AI agents for desktop and mobile (online + offline with Gemini and Ollama).",
  ],
  cta: "See my work",
} as const;

export const SERVICES = {
  heading: "Expertise",
  body: [
    "Building scalable AI-powered platforms",
    "and polished, responsive web experiences.",
  ],
  items: [
    {
      title: "AI-Powered Full-Stack Apps",
      role: "Web platforms & intelligent agents",
      quote:
        "I build scalable full-stack projects with React, Node, and MongoDB — including AI features with Gemini, agents, and speech APIs that ship to production.",
      stack: [
        { name: "React", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
        { name: "Node.js", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
        { name: "MongoDB", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
        { name: "Python", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
        { name: "Gemini", src: "https://cdn.simpleicons.org/googlegemini/8E75B2" },
        { name: "PostgreSQL", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
      ],
    },
    {
      title: "Web, Mobile & Desktop",
      role: "Cross-platform project delivery",
      quote:
        "From client e-commerce sites to hybrid AI agents for desktop and mobile, I design and develop responsive apps that work across devices and real user workflows.",
      stack: [
        { name: "Electron", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg" },
        { name: "Firebase", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" },
        { name: "JavaScript", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
        { name: "Vite", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" },
        { name: "Git", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
        { name: "GitHub", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
      ],
    },
    {
      title: "UI / UX Design",
      role: "Interfaces that feel intentional",
      quote:
        "UI and UX are a core strength — I’ve designed and refined many apps, websites, and software experiences with clean layouts, clear hierarchy, and smooth interaction.",
      stack: [
        { name: "Figma", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
        { name: "HTML5", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        { name: "CSS3", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
        { name: "Tailwind", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
      ],
    },
  ],
} as const;

export const STATS = {
  heading: "Work that delivers real results",
  body: "Consistency in academics, shipping projects, and earning verified credentials.",
  items: [
    { value: "8.74", label: "Current CGPA", title: "Academic excellence" },
    { value: "10+", label: "Projects shipped", title: "Projects built" },
    { value: "2", label: "Certificates", title: "Wins" },
    { value: "5+", label: "Participations", title: "Competitions & events" },
  ],
} as const;

export const WORK = {
  eyebrow: "Selected work",
  heading: "Let's create something exceptional",
  body: "A few projects I've designed and engineered — from marketplaces to AI tools.",
  cta: "View all projects",
} as const;

export type Project = {
  title: string;
  desc: string;
  tags: string[];
  icon: string;
  gradient: string;
  video: string;
  thumbnail: string;
  objectFit?: string;
  liveUrl: string;
  githubUrl: string;
};

/** Official logos for project tech stacks */
export const TECH_LOGOS: Record<string, { src: string; invert?: boolean }> = {
  Electron: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/electron/electron-original.svg",
  },
  Ollama: {
    src: "https://cdn.simpleicons.org/ollama/FFFFFF",
  },
  PowerShell: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/powershell/powershell-original.svg",
  },
  SQLite: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
  Whisper: {
    src: "/images/tech/openai.svg",
  },
  React: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  "Node.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  Express: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
    invert: true,
  },
  Tailwind: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  Firebase: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg",
  },
  Vite: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
  TypeScript: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  "Next.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    invert: true,
  },
  "Vue.js": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  Python: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  FastAPI: {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  },
  "Framer Motion": {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg",
    invert: true,
  },
  OpenAI: {
    src: "/images/tech/openai.svg",
  },
  "Gemini AI": {
    src: "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },
  "React Flow": {
    src: "https://cdn.simpleicons.org/reactflow/FF4A00",
  },
  Leaflet: {
    src: "https://cdn.simpleicons.org/leaflet/199900",
  },
  Lucide: {
    src: "https://cdn.simpleicons.org/lucide/F56565",
  },
};

export function techLogo(tag: string) {
  return TECH_LOGOS[tag] ?? null;
}

export const BROWN_AI_PROVIDERS = [
  {
    name: "Ollama",
    role: "Local Offline Inference",
    src: "https://cdn.simpleicons.org/ollama/FFFFFF",
  },
  {
    name: "Hugging Face",
    role: "Open Weights & GGUF Models",
    src: "https://cdn.simpleicons.org/huggingface/FFD21E",
  },
  {
    name: "vLLM",
    role: "High-Throughput Serving",
    src: "https://cdn.simpleicons.org/vllm/FFFFFF",
  },
  {
    name: "LM Studio",
    role: "Local LLM Server",
    src: "https://cdn.simpleicons.org/lmstudio/FFFFFF",
  },
  {
    name: "OpenRouter",
    role: "Unified Multi-Model Gateway",
    src: "https://cdn.simpleicons.org/openrouter/FFFFFF",
  },
  {
    name: "Google Gemini",
    role: "Multimodal Cloud AI",
    src: "https://cdn.simpleicons.org/googlegemini/8E75B2",
  },
  {
    name: "OpenAI",
    role: "GPT-4o & Reasoning Models",
    src: "/images/tech/openai.svg",
  },
  {
    name: "Anthropic Claude",
    role: "Claude 3.5 Sonnet & Haiku",
    src: "https://cdn.simpleicons.org/anthropic/D97757",
  },
  {
    name: "DeepSeek",
    role: "DeepSeek V3 & R1 Models",
    src: "https://cdn.simpleicons.org/deepseek/4D6BFE",
  },
  {
    name: "Mistral AI",
    role: "Mistral & Mixtral APIs",
    src: "https://cdn.simpleicons.org/mistralai/FFFFFF",
  },
] as const;

export const PROJECTS: Project[] = [
  {
    title: "Brown AI – Autonomous Desktop Agent",
    desc: "Autonomous, privacy-first local AI Agent framework for Windows. Features offline Ollama & Gemini integration, on-device Whisper STT & Kokoro TTS voice, MCP tools, and seamless desktop automation in a sleek glassmorphic interface.",
    tags: ["Electron", "Python", "Gemini AI", "Node.js", "TypeScript", "PowerShell", "SQLite"],
    icon: "🤖",
    gradient: "from-[#FF5A1F] to-[#121212]",
    video: "",
    thumbnail: "/images/projects/brownai.webp",
    objectFit: "cover",
    liveUrl: "https://usebrown.online",
    githubUrl: "https://github.com/vedantwankhade123/Brown",
  },
  {
    title: "Ekdanta – E-commerce Website",
    desc: "Client e-commerce site for listing products, checkout, and secure payments with essential storefront features.",
    // From live deploy ekdanta-c4074.web.app (_next + Firebase Hosting)
    tags: ["Next.js", "React", "Firebase", "Tailwind"],
    icon: "🛍️",
    gradient: "from-[#FF6B2C] to-[#111]",
    video: "",
    thumbnail: "/images/projects/ekdanta.webp",
    objectFit: "contain",
    liveUrl: "https://ekdanta-c4074.web.app/",
    githubUrl: "private",
  },
  {
    title: "HealBook – AI Doctor Booking & Chatbot",
    desc: "An AI-powered appointment booking system with a symptom-identification chatbot powered by Gemini AI and text-to-speech.",
    // From github.com/vedantwankhade123/healbook (client + server package.json)
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Firebase", "Node.js", "Gemini AI"],
    icon: "🩺",
    gradient: "from-[#FF5A1F] to-[#1a0a06]",
    video: "",
    thumbnail: "/images/projects/healbook.webp",
    objectFit: "contain",
    liveUrl: "not_live",
    githubUrl: "https://github.com/vedantwankhade123/healbook",
  },
  {
    title: "Engineering Project Hub",
    desc: "Marketplace for engineering projects — browse a catalog or request fully customized solutions end-to-end.",
    // From live deploy engineeringprojecthub.online (Vite React + Firebase + Leaflet)
    tags: ["React", "Vite", "Firebase", "Leaflet", "Tailwind"],
    icon: "✨",
    gradient: "from-[#FF5A1F] to-[#0D0D0D]",
    video:
      "https://www.youtube.com/embed/KNsh4871Ke8?si=dPX2Q_iLSYGgQMTk&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=KNsh4871Ke8",
    thumbnail: "/images/projects/eph.webp",
    liveUrl: "https://engineeringprojecthub.online",
    githubUrl: "private",
  },
  {
    title: "NeuCV – Resume Builder",
    desc: "Modern resume builder with templates and AI-assisted content improvements.",
    // Repo not public — stack from project description / prior portfolio data
    tags: ["Vue.js", "Python", "FastAPI"],
    icon: "🌤️",
    gradient: "from-[#0D0D0D] to-[#FF6B2C]",
    video:
      "https://www.youtube.com/embed/M7qJBLAaquA?si=dG6yznPgrNTtfgsj&mute=1&controls=0&modestbranding=1&rel=0&loop=1&playlist=M7qJBLAaquA",
    thumbnail: "/images/projects/neucv.webp",
    liveUrl: "not_live",
    githubUrl: "unavailable",
  },
];

export const ACHIEVEMENTS = {
  heading: "Awards & Achievements",
  body: "Wins, hackathons, research poster presentations, and state & national competitions.",
  items: [
    {
      year: "2026",
      title: "HackGenX — Consolation Prize",
      desc: "AI-powered leak and anomaly detection for urban water infrastructure.",
      images: [
        "/images/achievements/hgx.webp",
        "/images/achievements/hack.webp",
        "/images/achievements/gen.webp",
      ],
    },
    {
      year: "2025",
      title: "Codorithm 2K25",
      desc: "State-level coding competition — algorithms under pressure.",
      images: ["/images/achievements/coc.webp"],
    },
    {
      year: "2024",
      title: "MACCS Research Poster — 3rd Rank",
      desc: "International conference research poster presentation.",
      images: ["/images/achievements/rpp.webp"],
    },
    {
      year: "2024",
      title: "Circuitron — 2nd Winner",
      desc: "Electronics competition at G H Raisoni University.",
      images: [
        "/images/achievements/circuitron.webp",
        "/images/achievements/cec.webp",
      ],
    },
    {
      year: "2024",
      title: "Rackathon",
      desc: "National innovation & project design thinking competition.",
      images: [
        "/images/achievements/rac.webp",
      ],
    },
  ],
} as const;

export const CERTIFICATIONS = {
  heading: "Certifications",
  body: "Verified credentials that back the stack — JavaScript and Python.",
  items: [
    {
      id: "js",
      issuer: "HackerRank",
      title: "JavaScript (Basic)",
      desc: "Verified JavaScript fundamentals — language basics and problem solving.",
      src: "/images/certificates/js-certificate.webp",
      tone: "cream" as const,
    },
    {
      id: "python",
      issuer: "Udemy · Abdul Bari",
      title: "Python",
      desc: "Python course certificate — algorithms, data structures, and clean problem-solving.",
      src: "/images/certificates/python.webp",
      tone: "orange" as const,
    },
  ],
} as const;

export type AchievementBentoImage = {
  kind: "image";
  src: string;
  title: string;
  year: string;
};

export type AchievementBentoCert = {
  kind: "cert";
  id: string;
  src: string;
  title: string;
  issuer: string;
  desc: string;
  tone: "cream" | "orange";
};

export type AchievementBentoTile = AchievementBentoImage | AchievementBentoCert;

const PRESENTATION_CERT_SRC = "/images/achievements/rpp.webp";

const ACHIEVEMENT_IMAGES_FLAT: AchievementBentoImage[] = ACHIEVEMENTS.items.flatMap((item) =>
  item.images
    .filter((src) => src !== PRESENTATION_CERT_SRC)
    .map((src) => ({
      kind: "image" as const,
      src,
      title: item.title,
      year: item.year,
    })),
);

const PRESENTATION_CERT: AchievementBentoImage = {
  kind: "image",
  src: PRESENTATION_CERT_SRC,
  title: "MACCS Research Poster — 3rd Rank",
  year: "2024",
};

export const ACHIEVEMENT_BENTO: AchievementBentoTile[] = [
  ...ACHIEVEMENT_IMAGES_FLAT,
  PRESENTATION_CERT,
];

export const ACHIEVEMENT_IMAGES = ACHIEVEMENTS.items.map((item) => ({
  title: item.title,
  subtitle: item.year,
  description: item.desc,
  images: [...item.images],
}));

export const EDUCATION = {
  heading: "Academic path",
  body: "A consistent record across school and engineering — building toward full-stack and AI craft.",
  cards: [
    {
      id: "ssc",
      label: "Secondary",
      value: "97%",
      tagline: "10th · SSC · 2020–2021",
      features: [
        "Prabodhan Vidyalaya",
        "Secondary School Certificate",
        "Strong core subject foundation",
        "Board exam excellence",
      ],
      cta: "View resume",
      featured: false,
    },
    {
      id: "btech",
      label: "Bachelor's",
      value: "8.74",
      valueNote: "CGPA",
      tagline: "B.Tech CSE · 2023–2027",
      features: [
        "G.H. Raisoni University",
        "Computer Science & Engineering",
        "Focus: Full Stack, AI, DBMS",
        "Amravati, Maharashtra",
      ],
      cta: "View resume",
      featured: true,
    },
    {
      id: "hsc",
      label: "Higher secondary vocational",
      value: "61%",
      tagline: "12th · HSC Vocational (PCM) · 2022–2023",
      features: [
        "P.R. Pote Patil Jr. College",
        "HSC Vocational · Physics, Chemistry, Maths",
        "Junior College, Amravati",
        "Pathway into B.Tech CSE",
      ],
      cta: "View resume",
      featured: false,
    },
  ],
} as const;

export const EDUCATION_TIMELINE = [
  {
    year: "Present",
    period: "2023–2027",
    title: "B.Tech — CSE",
    subtitle: "Computer Science & Engineering",
    institution: "G.H. Raisoni University, Amravati",
    score: "8.74 CGPA",
    note: "Focus: Full Stack Web Development, AI, and DBMS.",
  },
  {
    year: "12th",
    period: "2022–2023",
    title: "HSC Vocational (PCM)",
    subtitle: "Higher Secondary Vocational Certificate",
    institution: "P.R. Pote Patil Junior College, Amravati",
    score: "61%",
    note: "Completed 12th Vocational with Physics, Chemistry, and Mathematics.",
  },
  {
    year: "10th",
    period: "2020–2021",
    title: "SSC",
    subtitle: "Secondary School Certificate",
    institution: "Prabodhan Vidyalaya, Daryapur",
    score: "97%",
    note: "Completed secondary schooling with strong academic performance.",
  },
];

export const FOOTER = {
  blurb: [
    "Full-stack developer crafting projects,",
    "interfaces, and AI-powered experiences.",
  ],
  cta: "Let's build something impactful together.",
} as const;

export const RESUME_PATH = SITE.resume;
