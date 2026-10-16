import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderCode, Mail, Download, Sparkles, Terminal as TerminalIcon } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import '../styles/Hero.css';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('profile');
  const [typedTitle, setTypedTitle] = useState('');
  const fullTitle = siteConfig.tagline; // "Full-Stack Developer in Progress."

  // Subtle typing effect for the subtitle
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullTitle.length) {
        setTypedTitle(fullTitle.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [fullTitle]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        {/* Floating Decorative Elements */}
        <div
          className="floating-decoration-badge floating-elem-1"
          style={{ top: '14%', right: '8%', display: 'none' }}
        >
          <span>&lt;FullStack /&gt;</span>
        </div>
        <div
          className="floating-decoration-badge floating-elem-2"
          style={{ bottom: '22%', left: '3%' }}
        >
          <span>git: branch: main*</span>
        </div>

        <div className="hero-grid">
          {/* Left Column: Heading & CTAs */}
          <motion.div
            className="hero-content"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability Pill */}
            <motion.div variants={itemVariants} className="hero-badge-wrapper">
              <div className="hero-status-pill">
                <span className="status-pulse-dot" />
                <span>{siteConfig.statusLabel}</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1 variants={itemVariants} className="hero-title">
              Hi, I'm{' '}
              <span className="hero-name-highlight">
                {siteConfig.name}.
              </span>
            </motion.h1>

            {/* Professional Title with Typing Effect */}
            <motion.div variants={itemVariants} className="hero-role-title">
              <Sparkles size={20} color="var(--color-accent-primary)" />
              <span>{typedTitle}</span>
              <span className="typing-cursor" />
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="hero-description">
              {siteConfig.heroDescription}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <FolderCode size={18} />
                <span>Explore My Projects</span>
              </a>

              <a href="#contact" className="btn-secondary">
                <Mail size={18} />
                <span>Contact Me</span>
              </a>

              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                download="Aung_Ko_Ko_Khant_Resume.pdf"
              >
                <Download size={18} />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Code Terminal Panel */}
          <motion.div
            className="hero-terminal-wrapper"
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="terminal-window">
              {/* Terminal Title Bar */}
              <div className="terminal-header">
                <div className="terminal-controls">
                  <span className="terminal-dot close" />
                  <span className="terminal-dot minimize" />
                  <span className="terminal-dot maximize" />
                </div>

                <div className="terminal-title-bar">
                  <TerminalIcon size={14} />
                  <span>akk-dev-terminal</span>
                </div>

                <div className="terminal-tabs">
                  <button
                    type="button"
                    className={`terminal-tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
                    onClick={() => setActiveTab('profile')}
                  >
                    profile.json
                  </button>
                  <button
                    type="button"
                    className={`terminal-tab-btn ${activeTab === 'env' ? 'active' : ''}`}
                    onClick={() => setActiveTab('env')}
                  >
                    status.sh
                  </button>
                </div>
              </div>

              {/* Terminal Code Body */}
              <div className="terminal-body">
                {activeTab === 'profile' ? (
                  <pre>
                    <code>
                      <span className="code-comment">// Developer Specification & Profile</span>
                      <br />
                      <span className="code-const">const</span>{' '}
                      <span className="code-var">developer</span> = &#123;
                      <br />
                      {'  '}<span className="code-prop">name:</span> <span className="code-string">"{siteConfig.name}"</span>,
                      <br />
                      {'  '}<span className="code-prop">education:</span> <span className="code-string">"UIT Yangon"</span>,
                      <br />
                      {'  '}<span className="code-prop">role:</span> <span className="code-string">"Aspiring Full-Stack Developer"</span>,
                      <br />
                      {'  '}<span className="code-prop">coreLanguages:</span> [<span className="code-string">"C++"</span>, <span className="code-string">"JavaScript"</span>],
                      <br />
                      {'  '}<span className="code-prop">frontendStack:</span> [<span className="code-string">"React"</span>, <span className="code-string">"HTML5"</span>, <span className="code-string">"CSS3"</span>],
                      <br />
                      {'  '}<span className="code-prop">currentlyLearning:</span> [<span className="code-string">"Python"</span>, <span className="code-string">"Flask Basics"</span>],
                      <br />
                      {'  '}<span className="code-prop">openForInternships:</span> <span className="code-boolean">true</span>,
                      <br />
                      {'  '}<span className="code-prop">location:</span> <span className="code-string">"Yangon, Myanmar"</span>
                      <br />
                      &#125;;
                      <br />
                      <br />
                      <span className="code-keyword">export</span>{' '}
                      <span className="code-keyword">default</span> developer;
                      <span className="terminal-cursor" />
                    </code>
                  </pre>
                ) : (
                  <pre>
                    <code>
                      <span className="code-comment"># Initializing runtime environment...</span>
                      <br />
                      <span className="code-var">$</span> ./check_availability.sh
                      <br />
                      <span className="code-string">[✓] UIT Yangon Academic Status: ACTIVE</span>
                      <br />
                      <span className="code-string">[✓] Development Stack: REACT + JAVASCRIPT + C++</span>
                      <br />
                      <span className="code-string">[✓] Currently Learning: PYTHON + FLASK</span>
                      <br />
                      <span className="code-string">[✓] Target Role: FULL-STACK INTERNSHIP</span>
                      <br />
                      <span className="code-string">[✓] Ready to collaborate on real-world code</span>
                      <br />
                      <span className="code-var">$</span> echo "Let's connect and build."
                      <br />
                      <span className="code-prop">&gt; Let's connect and build.</span>
                      <span className="terminal-cursor" />
                    </code>
                  </pre>
                )}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <a href="#about" className="hero-scroll-indicator" aria-label="Scroll to About section">
          <div className="scroll-mouse">
            <div className="scroll-wheel" />
          </div>
          <span>SCROLL</span>
          <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
}

