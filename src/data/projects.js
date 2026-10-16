export const projectCategories = [
  "All",
  "AI Applications",
  "Web Development",
  "Programming Projects",
];

export const projects = [
  {
    id: "crop-doctor-ai",
    title: "Crop Doctor AI",
    category: "AI Applications",
    status: "Featured AI Project",
    featured: true,
    summary:
      "An AI-powered plant disease detector for farmers providing instant diagnosis and practical, low-cost treatment recommendations from crop photos.",
    description:
      "Crop Doctor AI is an agricultural vision system built to assist farmers in identifying crop diseases quickly. Users capture or upload a photo of a sick plant; the app performs vision analysis using the Gemini 2.5 Flash model through OpenRouter, cross-references findings with live agricultural web search, and returns a structured diagnosis with symptoms, low-cost treatments, prevention advice, and cited agricultural sources.",
    aiModel: "Google Gemini 2.5 Flash (via OpenRouter API)",
    technologies: [
      "JavaScript",
      "Gemini 2.5 Flash",
      "OpenRouter API",
      "Express.js",
      "Multer",
      "Sharp",
      "CSS3",
    ],
    features: [
      "Camera capture or photo upload with Sharp image preprocessing",
      "AI vision diagnosis using google/gemini-2.5-flash via OpenRouter",
      "Live agricultural research via OpenRouter web search integration",
      "Structured treatment advice with practical, low-cost remedies",
      "Clear safety precautions and citations from agricultural organizations",
    ],
    previewType: "ai-crop-doctor",
    repoUrl: "https://github.com/aungkokokhant1313-debug/Crop-Doctor",
    demoUrl: null, // Open source repo; demo not hosted
  },
  {
    id: "ai-inventory-intelligence",
    title: "AI Inventory Intelligence",
    category: "AI Applications",
    status: "Hackathon MVP",
    featured: false,
    summary:
      "An intelligent inventory decision-support system for grocery stores combining live market news feeds and AI trend analysis.",
    description:
      "Developed as a hackathon MVP to help small grocery retailers optimize stock levels. The system ingests live market and community news data, runs analysis through OpenRouter language models, and calculates actionable reorder priorities and demand signals.",
    aiModel: "OpenRouter LLM + NewsAPI / GNews Integration",
    technologies: [
      "JavaScript",
      "OpenRouter API",
      "NewsAPI",
      "Node.js",
      "Scoring Algorithms",
      "JSON",
    ],
    features: [
      "Live news feed integration (NewsAPI, GNews, NewsData)",
      "AI market trend analysis & demand pattern detection",
      "Algorithmic reorder prioritization and action summaries",
      "Resilient architecture with offline fallback scoring logic",
    ],
    previewType: "ai-inventory",
    repoUrl: "https://github.com/aungkokokhant1313-debug/Oblivion-Icon",
    demoUrl: null,
  },
  {
    id: "experimental-portfolio",
    title: "Experimental 3D Portfolio",
    category: "Web Development",
    status: "Live Site",
    featured: false,
    summary:
      "An avant-garde creative studio developer portfolio showcasing AI applications and full-stack projects using Three.js and React.",
    description:
      "A creative coding portfolio engineered with Three.js, React 19, and Motion for React. Features extruded 3D typography with cursor-responsive perspective tilt, a floating starfield with multi-colored geometric objects, and theme customization.",
    aiModel: null,
    technologies: [
      "React 19",
      "Three.js",
      "Framer Motion",
      "Vite",
      "CSS3 3D Transforms",
    ],
    features: [
      "Interactive Three.js 3D canvas with floating geometry",
      "Extruded 3D typography with dynamic mouse perspective tilt",
      "Real-time studio palette switcher (Cyber Violet, Azure, Sunset)",
      "Zero-backend standalone fallback with prefilled mail drafts",
    ],
    previewType: "code-showcase",
    repoUrl: "https://github.com/aungkokokhant1313-debug/portfolio",
    demoUrl: "#hero",
  },
  {
    id: "small-database-python",
    title: "Small-Database (MySQL Manager)",
    category: "Programming Projects",
    status: "Hands-on Project",
    featured: false,
    summary:
      "A Python database management tool for connecting to MySQL, initializing tables, and executing parameterized data operations.",
    description:
      "A practical Python programming project designed to master relational database connectivity with MySQL. Implements schema generation, dynamic console user prompts, and safe parameterized SQL insertion.",
    aiModel: null,
    technologies: ["Python", "MySQL", "mysql-connector-python", "SQL"],
    features: [
      "Automated MySQL database and table structure initialization",
      "Dynamic interactive CLI prompts for structured user entry",
      "Safe parameterized SQL queries preventing syntax injection",
      "Buffered cursor query retrieval and clean connection lifecycle",
    ],
    previewType: "python-db",
    repoUrl: "https://github.com/aungkokokhant1313-debug/Small-Database",
    demoUrl: null,
  },
  {
    id: "finance-tracker-cpp",
    title: "Smart Personal Finance Tracker",
    category: "Programming Projects",
    status: "Academic Foundation",
    featured: false,
    summary:
      "A console-based personal finance management application written in C++ for tracking budgets, expenses, and savings goals.",
    description:
      "An academic computer science project developed during IT coursework at UIT Yangon. Focuses on object-oriented programming principles, custom data models, file I/O persistence, and structured budget reporting.",
    aiModel: null,
    technologies: ["C++", "OOP", "File I/O", "Data Structures", "Terminal UI"],
    features: [
      "Categorized expense and income logging with custom structs",
      "Dynamic budget allocation and savings milestone calculators",
      "Persistent data storage via text file I/O",
      "Formatted console summary reports with status codes",
    ],
    previewType: "terminal",
    terminalPreview: {
      command: "./finance_tracker --report",
      output: [
        "[+] Initializing Wallet Database...",
        "Total Income:     $1,250.00",
        "Total Expenses:   $  640.00",
        "Net Savings:      $  610.00 [TARGET MET]",
      ],
    },
    repoUrl: "https://github.com/aungkokokhant1313-debug",
    demoUrl: null,
  },
];
