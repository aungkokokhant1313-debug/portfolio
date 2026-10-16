import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, FolderCode, Mail, Download } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import '../styles/Hero.css';

export default function Hero() {
  const headlineRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 12, y: -6 });

  const handleMouseMove = (e) => {
    if (!headlineRef.current) return;
    const rect = headlineRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 14;
    const rotY = (x / (rect.width / 2)) * 14;

    setTilt({ x: Math.max(-18, Math.min(18, rotX + 8)), y: Math.max(-18, Math.min(18, rotY - 4)) });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 12, y: -6 });
  };

  return (
    <section id="hero" className="creative-hero">
      <div className="hero-inner-composition">
        {/* Floating Ambient Badges */}
        <div className="scatter-badge scatter-badge-1">
          <span>● UIT Yangon // IT Student</span>
        </div>
        <div className="scatter-badge scatter-badge-2">
          <span>⚡ Agentic Web Development</span>
        </div>
        <div className="scatter-badge scatter-badge-3">
          <span>Cursor • Gemini • React 19 • Python</span>
        </div>

        {/* Identity Label */}
        <motion.div
          className="hero-identity-tag"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="identity-pulsing-dot" />
          <span>{siteConfig.name}</span>
          <span style={{ color: 'var(--border-subtle)' }}>/</span>
          <span style={{ color: 'var(--accent-1)' }}>Agentic Web & AI Developer</span>
        </motion.div>

        {/* 3D Extruded Master Headline */}
        <motion.div
          ref={headlineRef}
          className="hero-3d-headline-box"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1
            className="hero-3d-title extruded"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            breathing art
            <br />
            into code
          </h1>
        </motion.div>

        {/* Smaller Creative Intro */}
        <motion.p
          className="hero-subtitle-creative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          IT student at the University of Information Technology (UIT), Yangon, specializing in{' '}
          <strong>agentic web development</strong>, <strong>practical AI applications</strong>, and{' '}
          <strong>interactive 3D full-stack experiences</strong>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="hero-actions-creative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <a href="#projects" className="btn-creative-primary">
            <FolderCode size={18} />
            <span>Explore Works</span>
          </a>

          <a href="#contact" className="btn-creative-secondary">
            <Mail size={18} />
            <span>Let's Create</span>
          </a>

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-creative-secondary"
            download="Aung_Ko_Ko_Khant_Resume.pdf"
          >
            <Download size={18} />
            <span>Resume</span>
          </a>
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        style={{
          position: 'absolute',
          bottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '6px',
          color: 'var(--text-muted)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.7rem',
          letterSpacing: '0.08em',
          textDecoration: 'none',
        }}
      >
        <span>SCROLL DOWN</span>
        <ArrowDown size={14} color="var(--accent-1)" />
      </motion.a>
    </section>
  );
}
