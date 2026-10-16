export const projects = [
  {
    id: "finance-tracker",
    title: "Smart Personal Finance Tracker",
    category: "Academic & Systems",
    status: "Core C++ Project",
    summary:
      "A console-based personal finance management system designed for recording income, expenses, budgets, savings goals, and financial summaries.",
    description:
      "Developed as a foundational computer science project at the University of Information Technology (UIT). The system implements object-oriented design principles, custom data models, file I/O persistence, and interactive terminal menus for structured budget tracking and monthly financial calculations.",
    technologies: ["C++", "OOP", "File I/O", "Data Structures", "Terminal UI"],
    features: [
      "Categorized expense and income logging with timestamps",
      "Dynamic budget allocation and real-time savings calculator",
      "Persistent data storage via text/binary file handling",
      "Formatted console summary reports with visual indicators",
    ],
    previewType: "terminal",
    terminalPreview: {
      command: "./finance_tracker --report --monthly",
      output: [
        "[+] Initializing Wallet Database...",
        "== MONTHLY SUMMARY: OCTOBER ==",
        "Total Income:     $1,250.00",
        "Total Expenses:   $  640.00",
        "Net Savings:      $  610.00 [TARGET MET: 48.8%]",
        "[i] Financial Health: OPTIMAL",
      ],
    },
    image: null, // Set to an image URL or import when available
    repoUrl: "https://github.com/aungkokokhant", // Editable repository URL; set to null if unavailable
    demoUrl: null, // No live web demo for console C++ application (button will be cleanly hidden)
  },
  {
    id: "fashion-assistant",
    title: "Fashion Assistant",
    category: "Web Application",
    status: "In Development",
    summary:
      "A modern web platform assisting users in exploring curated outfit combinations, aesthetic style recommendations, and seasonal inspiration.",
    description:
      "A user-centric web interface focused on seamless style discovery. Built to experiment with state-driven UI filtering, modular component structures, and responsive gallery viewports for cataloging aesthetic garments and outfit ideas.",
    technologies: ["React", "JavaScript", "CSS3", "Component Architecture"],
    features: [
      "Interactive style filter by season, occasion, and color tone",
      "Curated outfit boards with recommendation cards",
      "Responsive card grid with smooth transitions",
      "Persistent user preference bookmarks using browser storage",
    ],
    previewType: "app-card",
    accentColor: "#39E58C",
    image: null, // Set to an image URL or import when available
    repoUrl: "https://github.com/aungkokokhant", // Editable repository URL
    demoUrl: null, // In active development; hidden until deployed
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Frontend & Animation",
    status: "Live Project",
    summary:
      "A modern, highly animated developer portfolio built with React and Framer Motion showcasing my technical skills, academic journey, and projects.",
    description:
      "Designed with a futuristic dark developer aesthetic, featuring glowing emerald accents, fine terminal grids, interactive project modals, responsive navigation, theme switching (dark/light), and smooth scroll-triggered viewport animations.",
    technologies: ["React", "CSS3", "JavaScript", "Framer Motion", "Lucide React", "Vite"],
    features: [
      "Interactive code-terminal hero with live preview details",
      "Dual theme engine (Dark / Light) with localStorage sync",
      "Accessible modal inspection for project architecture",
      "Timeline visualization of academic & coding progress",
      "Performance-tuned animations respecting prefers-reduced-motion",
    ],
    previewType: "code-showcase",
    accentColor: "#39E58C",
    image: null, // Uses consistent CSS-based visual preview
    repoUrl: "https://github.com/aungkokokhant", // Editable repository URL
    demoUrl: "#hero", // Current live portfolio site
  },
];
