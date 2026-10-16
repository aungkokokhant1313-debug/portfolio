import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data/siteConfig';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 01. VISION & IDENTITY"
          title="The Creative Mind."
          subtitle="Merging computer science principles with artistic spatial web design."
        />

        <div className="about-editorial-grid">
          {/* Left Column: Large Editorial Narrative */}
          <motion.div
            className="about-editorial-text"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="editorial-headline-large">
              Engineering with <span>intelligence</span>, designing with <span>dimension</span>.
            </h3>

            <p className="editorial-body-p">
              I am an undergraduate Information Technology student at the{' '}
              <strong>University of Information Technology (UIT), Yangon</strong>. My software engineering journey
              began with the algorithmic discipline of <strong>C++</strong>, grounding my understanding of data structures,
              memory management, and systems thinking.
            </p>

            <p className="editorial-body-p">
              A core focus of my expertise is <strong>Agentic Web Development</strong>. I utilize autonomous AI coding agents,
              multi-agent orchestration, and prompt-driven architecture to rapidly design, scaffold, and deploy complete,
              production-grade websites and intelligent applications with remarkable velocity and architectural cleaness.
            </p>

            <p className="editorial-body-p">
              Driven by artificial intelligence, I engineer solutions like <strong>Crop Doctor AI</strong> (harnessing{' '}
              <strong>Google Gemini 2.5 Flash</strong> vision and OpenRouter tool-calling) while crafting immersive 3D interfaces
              with <strong>React 19</strong>, <strong>Three.js</strong>, and <strong>Python</strong> backend services.
            </p>
          </motion.div>

          {/* Right Column: 3D Studio Artifact Card */}
          <motion.div
            className="about-3d-card"
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="about-card-badge">UIT YANGON // ACADEMIC PROFILE</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--accent-1), var(--accent-2))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#08060E',
                }}
              >
                <GraduationCap size={22} />
              </div>
              <div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#FFFFFF', margin: 0 }}>
                  {siteConfig.name}
                </h4>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-1)' }}>
                  {siteConfig.degree}
                </div>
              </div>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              Specializing in agentic web development, AI vision pipelines, and modern reactive full-stack engineering.
            </p>

            <div className="creative-pillars">
              <div className="pillar-item">
                <span className="pillar-num">01.</span>
                <div>
                  <div className="pillar-title">Computer Science Discipline</div>
                  <div className="pillar-desc">Strong procedural & OOP foundations rooted in C++ coursework at UIT Yangon.</div>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">02.</span>
                <div>
                  <div className="pillar-title">Agentic Web & AI Systems</div>
                  <div className="pillar-desc">Rapid website creation using autonomous coding agents, Gemini 2.5 Flash, and OpenRouter.</div>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">03.</span>
                <div>
                  <div className="pillar-title">Spatial 3D & Full-Stack</div>
                  <div className="pillar-desc">Interactive Three.js interfaces with React 19, backed by Python API architectures.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
