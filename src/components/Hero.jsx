import { motion } from 'framer-motion';
import {
  FolderCode,
  Mail,
  ArrowRight,
  Sparkles,
  Code2,
  Cpu,
  Terminal,
  GraduationCap,
} from 'lucide-react';
import '../styles/Hero.css';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="illustrated-hero">
      <div className="hero-two-col-grid">
        {/* Left Column: Information & Actions */}
        <motion.div
          className="hero-content-col"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Small Introductory Label */}
          <motion.div className="hero-badge-pill" variants={itemVariants}>
            <span className="pulse-dot" />
            <span>UIT Yangon · IT Student</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 className="hero-name-heading" variants={itemVariants}>
            Hi, I'm <span className="highlight-name">Aung Ko Ko Khant.</span> 👋
          </motion.h1>

          {/* Professional Title */}
          <motion.div className="hero-title-role" variants={itemVariants}>
            <Sparkles size={22} color="var(--accent-1)" />
            <span className="role-gradient">AI & Creative Developer</span>
          </motion.div>

          {/* Short Introduction */}
          <motion.p className="hero-bio-text" variants={itemVariants}>
            Second-year IT student at UIT Yangon studying <strong>Networking Fundamentals</strong>.
            Proficient in <strong>Python</strong>, <strong>MongoDB</strong>, and <strong>MySQL</strong>,
            currently mastering <strong>React</strong> and <strong>JSON</strong> to engineer modern,
            interactive websites and useful AI applications with agentic workflows.
          </motion.p>

          {/* Action Buttons */}
          <motion.div className="hero-cta-group" variants={itemVariants}>
            <a href="#projects" className="btn-hero-primary">
              <FolderCode size={18} />
              <span>Explore My Projects</span>
              <ArrowRight size={16} />
            </a>

            <a href="#contact" className="btn-hero-secondary">
              <Mail size={18} />
              <span>Contact Me</span>
            </a>
          </motion.div>

          {/* Technology Label Row */}
          <motion.div className="hero-tech-row" variants={itemVariants}>
            <span className="tech-row-label">Verified Tech Stack:</span>
            <div className="tech-chips-group">
              <span className="hero-tech-chip lime">Python (Finished)</span>
              <span className="hero-tech-chip lime">MongoDB (Finished)</span>
              <span className="hero-tech-chip lime">MySQL (Finished)</span>
              <span className="hero-tech-chip lime">C++</span>
              <span className="hero-tech-chip purple">React (Learning)</span>
              <span className="hero-tech-chip blue">JSON (Learning)</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Personal Photo Composition */}
        <motion.div
          className="hero-visual-col"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-photo-composition">
            {/* Ambient Background Glow Halo */}
            <div className="photo-ambient-halo" />

            {/* Decorative Geometric Backdrops */}
            <div className="photo-backdrop-shape shape-purple" />
            <div className="photo-backdrop-shape shape-cyan" />

            {/* Playful Floating Sparkle Stars */}
            <span className="sparkle-star star-1">✦</span>
            <span className="sparkle-star star-2">✦</span>
            <span className="sparkle-star star-3">✧</span>

            {/* Floating Badge Card 1: Top-Left */}
            <div className="floating-card card-top-left">
              <div className="floating-card-icon" style={{ color: 'var(--accent-2)' }}>
                <Code2 size={16} />
              </div>
              <div>
                <div className="floating-card-title">Agentic Web Dev</div>
                <div className="floating-card-sub">Autonomous Workflows</div>
              </div>
            </div>

            {/* Floating Badge Card 2: Top-Right */}
            <div className="floating-card card-top-right">
              <div className="floating-card-icon" style={{ color: 'var(--accent-3)' }}>
                <Cpu size={16} />
              </div>
              <div>
                <div className="floating-card-title">Gemini 2.5 Flash</div>
                <div className="floating-card-sub">AI Vision Engine</div>
              </div>
            </div>

            {/* Main Creative Personal Photo Frame */}
            <motion.div
              className="photo-frame-wrapper"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <div className="photo-frame-inner">
                {/* Photo Element */}
                <img
                  src="/images/profile.jpg"
                  alt="Aung Ko Ko Khant — AI & Creative Developer"
                  className="hero-profile-img"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Gradient Vignette at bottom edge */}
                <div className="photo-frame-vignette" />

                {/* Status Pill on the Frame */}
                <div className="photo-status-badge">
                  <span className="status-live-dot" />
                  <span>UIT Yangon // 2nd Year IT Student</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge Card 3: Bottom-Left */}
            <div className="floating-card card-bottom-left">
              <div className="floating-card-icon" style={{ color: '#F59E0B' }}>
                <GraduationCap size={16} />
              </div>
              <div>
                <div className="floating-card-title">UIT Yangon</div>
                <div className="floating-card-sub">Networking Fundamentals</div>
              </div>
            </div>

            {/* Floating Badge Card 4: Bottom-Right */}
            <div className="floating-card card-bottom-right">
              <div className="floating-card-icon" style={{ color: 'var(--accent-1)' }}>
                <Terminal size={16} />
              </div>
              <div>
                <div className="floating-card-title">Python • Mongo • SQL</div>
                <div className="floating-card-sub">Finished & Mastered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
