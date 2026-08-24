export const profile = {
  name: "Mustafa Khoso",
  firstName: "Mustafa",
  role: "Software Developer & AI Builder",
  tagline: "Software Developer • AI Builder • Product Engineer",
  location: "Pakistan",
  email: "jawadimustafa7@gmail.com",
  github: "https://github.com/mustafa-lil-dev",
  linkedin: "https://www.linkedin.com/in/mustafa-khoso/",
  website: "https://www.mustafakhoso.online",
  heroPhoto: "/images/profile/mustafa-about.jpg",
  aboutPhoto: "/images/profile/mustafa-walkway.jpg",
  logo: "/brand/logo-512.png",
  positioning:
    "Building practical software and AI-powered tools from idea to working product.",
};

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#core", label: "CORE" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const aboutCopy = {
  paragraphs: [
    "I'm a software developer based in Pakistan, working across frontend, systems, and AI-assisted development. My background is in Information Technology, and my strongest skills come from building real, working software rather than studying it in theory.",
    "I work primarily with Rust, TypeScript, React, and Python — building everything from native desktop applications to web tools and AI-integrated developer workflows. I care about performance, clean architecture, and software that actually solves a problem.",
    "Right now I split my time between freelance software and IT work, and building my own products — starting with Myko, an AI-native developer workspace, and CORE, a larger AI developer-tool vision I'm actively designing and building toward.",
  ],
  highlights: [
    { label: "Focus", value: "Systems, frontend & AI-assisted tooling" },
    { label: "Core stack", value: "Rust · TypeScript · React · Python" },
    { label: "Currently building", value: "CORE — AI developer environment" },
  ],
};

export const mykoScreenshots = {
  readme: {
    src: "/images/myko/myko-readme.jpg",
    alt: "Myko project README describing it as a lightweight terminal-first AI-native dev workspace",
    caption: "Open source, ~7–8 MB on disk, no telemetry, no account.",
  },
  code: {
    src: "/images/myko/myko-code.jpg",
    alt: "Myko code editor showing a Rust file with an inline diff view open",
    caption: "Built-in CodeMirror 6 editor with inline diff review.",
  },
  gitHistory: {
    src: "/images/myko/myko-git-history.jpg",
    alt: "Myko source control panel showing a commit graph and file history",
    caption: "Git staging, commits, branches and a visual commit graph.",
  },
  terminal: {
    src: "/images/myko/myko-terminal.jpg",
    alt: "Myko terminal workspace running fastfetch with a live system summary",
    caption: "Native PTY backend with an xterm.js WebGL renderer.",
  },
  aiPanel: {
    src: "/images/myko/myko-ai-panel.jpg",
    alt: "Myko's built-in review panel showing a pending change queued for approval",
    caption: "Approval-gated AI edits — nothing lands without a review.",
  },
};

export type ProjectStatus = "shipped" | "active" | "coming-soon";

export interface ProjectDetail {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  status: ProjectStatus;
  statusLabel: string;
  stack: string[];
  capabilities: string[];
  details: ProjectDetail[];
  links: { label: string; href: string; kind: "github" | "live" }[];
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "myko",
    name: "Myko",
    tagline: "AI-native developer workspace",
    description:
      "An open-source developer workspace that combines a terminal, code editor, file explorer, Git client, web preview, and agentic AI assistance in one lightweight desktop app.",
    problem:
      "Developers juggle a terminal, editor, browser preview, Git client and an AI chat tab as separate tools. Myko puts all of it in one native, fast workspace so context never gets lost switching windows.",
    status: "active",
    statusLabel: "Open Source · Active",
    stack: [
      "Rust",
      "Tauri 2",
      "React 19",
      "TypeScript",
      "xterm.js",
      "CodeMirror 6",
    ],
    capabilities: [
      "Native PTY backend with an xterm.js WebGL-rendered terminal",
      "Agentic AI workflows with BYOK — bring your own key",
      "Local inference support: Ollama, LM Studio, MLX",
      "File read / write / edit tools with project memory",
      "Approval-gated shell execution — nothing runs without consent",
      "CodeMirror 6 editor with AI autocomplete and inline edit diffs",
      "Vim mode for editor navigation",
      "Git staging, commits, branches and a visual commit graph",
    ],
    details: [
      {
        heading: "Overview",
        body: "Myko is a terminal-first, AI-native dev workspace built to stay out of the way. It runs as a native Tauri 2 desktop app with a Rust core, so it starts fast and stays small — around 7–8 MB on disk, with no telemetry and no account required.",
      },
      {
        heading: "Architecture",
        body: "The Rust backend owns process management, a native PTY, and the filesystem layer. The React 19 + TypeScript frontend renders the terminal through xterm.js with WebGL acceleration, and the editor through CodeMirror 6 — both talking to the Rust core over Tauri's IPC bridge.",
      },
      {
        heading: "AI workflows",
        body: "AI assistance is agentic and tool-using: it can read and edit files, propose diffs, and execute shell commands — but every file edit and shell command sits behind an approval gate. You can bring your own API key, or run entirely offline with Ollama, LM Studio, or MLX for local inference.",
      },
      {
        heading: "Editor & Git",
        body: "The built-in editor supports AI autocomplete, inline diff review, and optional Vim keybindings. Git is a first-class citizen — staging, committing, branching and a visual commit history — so most day-to-day work never has to leave the app.",
      },
    ],
    links: [
      {
        label: "Live App",
        href: "https://myko-beta.vercel.app/",
        kind: "live",
      },
      {
        label: "GitHub",
        href: "https://github.com/mustafa-lil-dev/myko-ai",
        kind: "github",
      },
    ],
    featured: true,
  },
  {
    slug: "mk-url-shortener",
    name: "MK URL Shortener",
    tagline: "Native Rust URL-shortening app",
    description:
      "A native desktop URL shortener built entirely in Rust — a self-contained GUI app with its own embedded HTTP redirect server, no external backend required.",
    problem:
      "Most URL shorteners depend on a hosted service. MK URL Shortener runs the redirect server and the GUI in a single native binary, so short links work anywhere the app runs.",
    status: "shipped",
    statusLabel: "Shipped",
    stack: ["Rust", "egui", "eframe", "tiny_http", "serde"],
    capabilities: [
      "Native desktop GUI built with egui / eframe",
      "Embedded HTTP redirect server running inside the app",
      "Persistent URL mappings saved to disk",
      "Custom short codes for branded links",
      "One-click clipboard copying",
      "Simple link management and lookup",
    ],
    details: [
      {
        heading: "Overview",
        body: "MK URL Shortener is a small, native Rust application for creating and managing short links without relying on a third-party shortening service.",
      },
      {
        heading: "Architecture",
        body: "The app pairs an egui / eframe immediate-mode GUI with a tiny_http server running in a background thread, so the same binary serves both the interface and the redirects. Mappings are persisted with serde.",
      },
      {
        heading: "Features",
        body: "Users can generate short codes automatically or set custom ones, copy links to the clipboard in one click, and manage existing mappings from a simple native window.",
      },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/mustafa-lil-dev/mk-url-shorter",
        kind: "github",
      },
    ],
  },
];

export const core = {
  name: "CORE",
  status: "Coming Soon · In Development",
  tagline:
    "An AI-powered developer environment that understands your whole project.",
  intro:
    "CORE is a planned AI-powered developer environment designed around my own product vision and architecture. Instead of reasoning about a single open file, CORE is built around understanding an entire codebase — how files, functions, modules, dependencies, APIs and configuration relate to one another.",
  pillars: [
    {
      title: "Repository-Wide Understanding",
      description:
        "Designed to analyze the broader project structure and understand how different parts of the codebase relate to each other, instead of reasoning about a single open file in isolation.",
    },
    {
      title: "Multi-Agent Architecture",
      description:
        "Rather than one generic AI thread, CORE is planned around specialized agents that work on different tasks — code analysis, debugging, security analysis, architecture analysis, dependency analysis and code review.",
    },
    {
      title: "Full-Context Bug Detection",
      description:
        "Designed to detect and reason about problems that may span multiple files, modules, functions and dependencies — not just the file currently open.",
    },
    {
      title: "Hyper-Precise Error Detection",
      description:
        "The goal is to catch small, easy-to-miss problems — syntax mistakes, missing characters, incorrect function usage, broken references, dependency issues and cross-file inconsistencies — by reasoning about the broader structure of a codebase.",
    },
  ],
  roadmap: [
    {
      phase: "Phase 1",
      title: "Foundation",
      items: [
        "Core desktop application shell",
        "Project indexing engine",
        "Repository-wide understanding",
        "AI task orchestration layer",
        "Local file indexing",
        "Performance optimization",
      ],
    },
    {
      phase: "Phase 2",
      title: "Beta",
      items: [
        "Private developer beta",
        "Multi-language testing",
        "Bug-detection improvements",
        "Structured developer feedback loop",
        "Workflow refinement",
      ],
    },
    {
      phase: "Phase 3",
      title: "Expansion",
      items: [
        "Cloud synchronization",
        "Collaboration features",
        "Expanded AI capabilities",
        "Broader distribution",
        "Commercial product development",
      ],
    },
  ],
};

export const skillCategories = [
  {
    category: "Programming",
    skills: ["Rust", "TypeScript", "JavaScript", "Python", "C++", "SQL"],
  },
  {
    category: "Frontend",
    skills: ["React", "Next.js", "HTML", "Tailwind CSS"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "REST APIs"],
  },
  {
    category: "Desktop",
    skills: ["Tauri", "egui / eframe"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "VS Code", "Linux", "Windows", "macOS"],
  },
];

export const experience = [
  {
    role: "Freelance Software Developer",
    org: "Self-employed",
    period: "Ongoing",
    points: [
      "Developed software and web applications for independent clients, from initial concept through to delivery.",
      "Built user interfaces and integrated backend services and third-party APIs.",
      "Worked with Git, GitHub and Linux across the full development workflow.",
      "Diagnosed and resolved software and hardware issues as part of general IT support work.",
      "Worked independently — scoping problems, choosing an approach, and shipping a working result.",
    ],
  },
];

export const education = [
  {
    degree: "Computer Engineering Student",
    school: "University of Isfahan (UI)",
  },
  {
    degree: "Diploma in Information Technology (DIT)",
    school: "Govt. College of Technology, Hyderabad",
  },
];

export const certifications = [
  {
    title: "Developing Front-End Apps with React",
    issuer: "IBM · Coursera",
  },
  {
    title: "Azure: Create a Virtual Machine and Deploy a Web Server",
    issuer: "Coursera",
  },
];

export const howIBuild = [
  {
    step: "01",
    title: "Idea",
    description:
      "Identify a real problem worth solving, not just an interesting technology.",
  },
  {
    step: "02",
    title: "Architecture",
    description:
      "Design the system and technical approach before writing production code.",
  },
  {
    step: "03",
    title: "Build",
    description:
      "Turn the concept into working software, iterating in small, testable pieces.",
  },
  {
    step: "04",
    title: "Test",
    description:
      "Find bugs, stress-test edge cases, and improve reliability under real use.",
  },
  {
    step: "05",
    title: "Iterate",
    description:
      "Use feedback from real usage to refine the product and sharpen the next version.",
  },
];
