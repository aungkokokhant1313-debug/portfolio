import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code2, Compass, Cpu, Target } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data/siteConfig';
import '../styles/About.css';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 01. ABOUT"
          title="Behind the Code."
          subtitle="A look into my academic journey, passion for software engineering, and mindset."
        />

        <div className="about-grid">
          {/* Left Column: Monogram & Developer Profile Card */}
          <motion.div
            className="glass-panel about-visual-card"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="about-avatar-wrapper">
              <div className="avatar-ring-glow" />
              <div className="avatar-monogram-box">
                <span className="avatar-monogram-text">AKK</span>
                <span className="avatar-dev-label">DEV_INIT</span>
              </div>
            </div>

            <h3 className="about-card-name">{siteConfig.name}</h3>
            <p className="about-card-role">{siteConfig.tagline}</p>

            <div className="about-quick-facts">
              <div className="quick-fact-item">
                <div className="quick-fact-icon">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    UIT Yangon
                  </div>
                  <div style={{ fontSize: '0.78rem' }}>{siteConfig.degree}</div>
                </div>
              </div>

              <div className="quick-fact-item">
                <div className="quick-fact-icon">
                  <MapPin size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    Location
                  </div>
                  <div style={{ fontSize: '0.78rem' }}>{siteConfig.location}</div>
                </div>
              </div>

              <div className="quick-fact-item">
                <div className="quick-fact-icon">
                  <Target size={16} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--color-text-primary)' }}>
                    Primary Goal
                  </div>
                  <div style={{ fontSize: '0.78rem' }}>Software Engineering Internship</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Narrative */}
          <motion.div
            className="about-narrative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={cardVariants} className="narrative-p">
              I am an undergraduate student studying Information Technology at the{' '}
              <strong>University of Information Technology (UIT), Yangon</strong>. My path in computer
              science started with a curiosity for how software operates under the hood, beginning with
              foundational systems programming in <strong>C++</strong> and expanding into modern web architectures.
            </motion.p>

            <motion.p variants={cardVariants} className="narrative-p">
              What excites me most about software engineering is the blend of <strong>rigorous logic</strong>{' '}
              and <strong>creative problem-solving</strong>. Building web applications gives me the opportunity
              to transform ideas into tangible tools that people can interact with and benefit from directly.
            </motion.p>

            <motion.div variants={cardVariants} className="about-highlight-box">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Cpu size={16} color="var(--color-accent-primary)" />
                <span style={{ fontWeight: 700 }}>Current Learning Focus:</span>
              </div>
              <p style={{ margin: 0, fontSize: '0.86rem', color: 'var(--color-text-secondary)' }}>
                Learning Python for scripting, backend foundations, and lightweight APIs while advancing component
                architecture and interactive animation patterns in React.
              </p>
            </motion.div>

            {/* Engineering Principles */}
            <motion.div variants={cardVariants} className="philosophy-grid">
              <div className="philosophy-card">
                <div className="philosophy-title">
                  <Code2 size={16} color="var(--color-accent-primary)" />
                  <span>Disciplined Foundations</span>
                </div>
                <p className="philosophy-desc">
                  Starting with C++ taught me to appreciate memory, data structures, and algorithmic efficiency before abstracting away complexity.
                </p>
              </div>

              <div className="philosophy-card">
                <div className="philosophy-title">
                  <Compass size={16} color="var(--color-accent-primary)" />
                  <span>Curiosity & Adaptability</span>
                </div>
                <p className="philosophy-desc">
                  Constantly reading documentation, experimenting with new patterns, and embracing constructive code reviews to level up quickly.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
