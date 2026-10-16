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
              I am a <strong>second-year Information Technology student</strong> at the{' '}
              <strong>University of Information Technology (UIT), Yangon</strong>. My academic curriculum is currently
              centered on <strong>Networking Fundamentals</strong>—exploring network architectures, protocols, packet transmission,
              and systems communication alongside core computer science principles.
            </p>

            <p className="editorial-body-p">
              In software and database engineering, I have completed and mastered <strong>Python</strong>, <strong>MySQL</strong> (relational
              schemas and parameterized queries), and <strong>MongoDB</strong> (NoSQL document stores and collections). Currently, I am actively
              learning and leveling up in <strong>React</strong> component architecture and <strong>JSON</strong> data modeling.
            </p>

            <p className="editorial-body-p">
              I combine these foundations with <strong>Agentic Web Development</strong>—leveraging autonomous AI coding agents
              to rapidly architect, prototype, and ship clean, modern full-stack websites and AI-powered applications like{' '}
              <strong>Crop Doctor AI</strong>.
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
            <span className="about-card-badge">UIT YANGON // 2ND YEAR IT STUDENT</span>

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
              Studying Networking Fundamentals at UIT Yangon. Skilled in Python, MongoDB, and MySQL, currently learning React & JSON.
            </p>

            <div className="creative-pillars">
              <div className="pillar-item">
                <span className="pillar-num">01.</span>
                <div>
                  <div className="pillar-title">CS & Networking Fundamentals</div>
                  <div className="pillar-desc">C++ problem solving and Networking Fundamentals coursework at UIT Yangon.</div>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">02.</span>
                <div>
                  <div className="pillar-title">Databases & Python (Finished)</div>
                  <div className="pillar-desc">Proficient in Python programming, MySQL relational schemas, and MongoDB NoSQL stores.</div>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">03.</span>
                <div>
                  <div className="pillar-title">React, JSON & Agentic Web (Learning)</div>
                  <div className="pillar-desc">Actively mastering React & JSON, building websites with autonomous AI coding agents.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
