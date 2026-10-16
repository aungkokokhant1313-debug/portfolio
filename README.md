# Aung Ko Ko Khant — Animated Developer Portfolio

A professional, modern, highly animated developer portfolio built for **Aung Ko Ko Khant**, an IT student at the **University of Information Technology (UIT), Yangon**, and aspiring Full-Stack Developer.

Designed with a futuristic dark developer aesthetic, vibrant emerald green accents, terminal-inspired details, smooth Framer Motion animations, accessible contact handling, and full dark/light theme switching.

---

## ⚡ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Badges
- **Styling**: Modern CSS3 Custom Properties (Design Tokens), Flexbox & Grid, Glassmorphism
- **Typography**: Plus Jakarta Sans & JetBrains Mono

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Ensure you have [Node.js](https://nodejs.org/) installed (v18 or newer), then run:
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173` (or the URL shown in your console).

### 3. Production Build
```bash
npm run build
```
This bundles the optimized application into the `dist/` directory, ready for production deployment.

### 4. Preview Production Build Locally
```bash
npm run preview
```

---

## 🛠️ How to Customize Your Portfolio

All personal information, social links, skills, projects, and milestones are decoupled from UI components and stored in clean, editable files inside `src/data/`:

### 1. Contact Information & Social Links (`src/data/siteConfig.js`)
Open [src/data/siteConfig.js](file:///d:/portfolio/src/data/siteConfig.js) to edit:
- **Email**: Update `email: "your.real.email@gmail.com"`
- **GitHub**: Update `github: "https://github.com/your-username"`
- **LinkedIn**: Update `linkedin: "https://linkedin.com/in/your-profile"`
- **Resume path**: Default is `/resume.pdf` in the `public/` directory
- **Contact Form Endpoint (Optional)**: If you sign up for [Formspree](https://formspree.io/) or [Web3Forms](https://web3forms.com/), paste your endpoint URL into `formEndpoint: "https://formspree.io/f/your_form_id"`. If left empty, the contact form opens the visitor's default email client with a pre-filled message draft.

### 2. Projects & Previews (`src/data/projects.js`)
Open [src/data/projects.js](file:///d:/portfolio/src/data/projects.js) to add or edit projects:
- **Screenshots**: Put images inside `public/images/` and point `image: "/images/your-screenshot.png"`. If `image` is `null`, a custom CSS terminal or device mockup is rendered automatically.
- **Repository & Demo URLs**:
  - `repoUrl`: URL to your GitHub repository (or `null` to hide the button).
  - `demoUrl`: Live demo URL (or `null` to cleanly hide the button).

### 3. Skills & Technologies (`src/data/skills.js`)
Open [src/data/skills.js](file:///d:/portfolio/src/data/skills.js) to add or adjust your tech stack:
- Categorized into **Frontend**, **Backend**, **Programming**, and **Databases & Tools**.
- Each skill features an honest status badge: `"Hands-on"` (applied in projects/coursework) or `"Currently Learning"`.

### 4. Development Journey & Education (`src/data/journey.js`)
Open [src/data/journey.js](file:///d:/portfolio/src/data/journey.js) to add new academic milestones, hackathons, or internship milestones on your vertical timeline.

### 5. Replacing Your Resume PDF
To replace the resume download, copy your PDF file to:
```
public/resume.pdf
```
Both the navigation bar "Resume" button and the hero section "Download Resume" button will immediately link to your new PDF.

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to [GitHub](https://github.com).
2. Visit [Vercel](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New"** > **"Project"** and select your `portfolio` repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. Vercel will build and assign you a free `*.vercel.app` domain with automated SSL.

### Deploy to Netlify
1. Log in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Select this repository.
4. Netlify will configure:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
5. Click **"Deploy Portfolio"**.

---

## 📂 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg          # Custom AKK monogram SVG favicon
│   ├── resume.pdf           # Downloadable CV document
│   ├── robots.txt           # Search engine crawlers guide
│   └── sitemap.xml          # SEO sitemap
├── src/
│   ├── assets/              # Icons and static media
│   ├── components/
│   │   ├── Navbar.jsx        # Sticky navigation with active pill & mobile drawer
│   │   ├── Hero.jsx          # Animated hero with developer code terminal
│   │   ├── About.jsx         # "Behind the Code", UIT Yangon info & monogram
│   │   ├── Skills.jsx        # Tech stack grid with honest status badges
│   │   ├── Projects.jsx      # Project cards with CSS visual previews
│   │   ├── ProjectModal.jsx  # Interactive deep-dive modal
│   │   ├── Journey.jsx       # Vertical timeline with scroll animations
│   │   ├── Contact.jsx       # 2-column contact with validation & mailto fallback
│   │   ├── Footer.jsx        # Minimal footer with dynamic year & back-to-top
│   │   ├── SectionHeading.jsx# Reusable section title with index marker
│   │   ├── SocialIcons.jsx   # Dedicated GitHub and LinkedIn SVG components
│   │   └── ThemeToggle.jsx   # Dark / Light mode toggle
│   ├── data/
│   │   ├── siteConfig.js     # Central configuration (email, socials, bio)
│   │   ├── skills.js         # Categorized tech stack data
│   │   ├── projects.js       # Projects array with features & URLs
│   │   └── journey.js        # Timeline milestone objects
│   ├── hooks/
│   │   ├── useActiveSection.js # Intersection & scroll-based navigation tracker
│   │   └── useTheme.js       # Theme switcher with localStorage persistence
│   ├── styles/
│   │   ├── variables.css     # CSS variables, dark/light color palettes
│   │   ├── animations.css    # Keyframe animations & reduced-motion fallback
│   │   ├── global.css        # Reset, typography, layout & glass panels
│   │   ├── Navbar.css
│   │   ├── Hero.css
│   │   ├── About.css
│   │   ├── Skills.css
│   │   ├── Projects.css
│   │   ├── Journey.css
│   │   ├── Contact.css
│   │   └── Footer.css
│   ├── App.jsx               # Application root
│   ├── main.jsx              # React DOM entry
│   └── index.css             # Entry stylesheet
├── index.html                # HTML entry with Open Graph & SEO metadata
├── package.json              # Scripts and dependencies
└── vite.config.js            # Vite bundler configuration
```

---

## ♿ Accessibility & Quality Features
- Semantic HTML tags (`header`, `main`, `section`, `article`, `footer`, `nav`).
- High-contrast color palette exceeding WCAG AA standards.
- Visible `:focus-visible` keyboard focus indicators.
- Respects system accessibility setting `prefers-reduced-motion: reduce`.
- Zero linter errors and optimized production build output.
