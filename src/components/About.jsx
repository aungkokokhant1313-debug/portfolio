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
              Engineering with <span>logic</span>, designing with <span>emotion</span>.
            </h3>

            <p className="editorial-body-p">
              I am an undergraduate Information Technology student at the{' '}
              <strong>University of Information Technology (UIT), Yangon</strong>. My coding journey started
              with the foundational rigor of <strong>C++</strong>, which grounded my understanding of algorithms, memory,
              and systems architecture.
            </p>

            <p className="editorial-body-p">
              As I transitioned into web technologies, I realized the browser is more than just static pages—it is an
              <strong> interactive, multidimensional digital canvas</strong>. I am passionate about blending creative coding,
              subtle 3D graphics, and responsive frontend architectures into unforgettable digital experiences.
            </p>

            <p className="editorial-body-p">
              Currently, I am learning <strong>Python</strong> to expand my backend and scripting capabilities while pushing
              the boundaries of modern React and spatial web interfaces.
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
              Focused on software engineering, creative programming, and delivering production-grade web applications.
            </p>

            <div className="creative-pillars">
              <div className="pillar-item">
                <span className="pillar-num">01.</span>
                <div>
                  <div className="pillar-title">Disciplined Fundamentals</div>
                  <div className="pillar-desc">Strong procedural & OOP foundations rooted in C++ coursework.</div>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">02.</span>
                <div>
                  <div className="pillar-title">3D & Interactive Web</div>
                  <div className="pillar-desc">Bringing interfaces to life with Motion for React and Three.js.</div>
                </div>
              </div>

              <div className="pillar-item">
                <span className="pillar-num">03.</span>
                <div>
                  <div className="pillar-title">Continuous Expansion</div>
                  <div className="pillar-desc">Exploring Python for lightweight APIs and data workflows.</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
