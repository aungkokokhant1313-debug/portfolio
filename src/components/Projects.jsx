import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Terminal, Sparkles, Eye, Box, Activity, Cpu, Database } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { projects, projectCategories } from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const renderVisualPreview = (project) => {
    if (project.image) {
      return (
        <img
          src={project.image}
          alt={`${project.title} preview`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }

    if (project.previewType === 'ai-crop-doctor') {
      return (
        <div className="preview-crop-doctor">
          <div className="crop-hud-top">
            <span className="hud-badge-pulse">
              <span className="hud-dot" />
              <span>AI VISION ACTIVE</span>
            </span>
            <span className="hud-model-pill">GEMINI 2.5 FLASH</span>
          </div>
          <div className="crop-scan-target">
            <div className="crop-reticle top-left" />
            <div className="crop-reticle top-right" />
            <div className="crop-reticle bottom-left" />
            <div className="crop-reticle bottom-right" />
            <div className="crop-scan-beam" />
            <svg viewBox="0 0 100 100" className="crop-leaf-svg" fill="none">
              <path
                d="M50 14 C28 24 18 48 26 78 C38 84 50 84 50 84 C50 84 62 84 74 78 C82 48 72 24 50 14 Z"
                stroke="var(--accent-4, #8AF5B5)"
                strokeWidth="2.2"
                fill="rgba(57, 229, 140, 0.08)"
              />
              <path
                d="M50 18 L50 84 M50 34 L36 46 M50 48 L64 40 M50 60 L34 68 M50 70 L64 66"
                stroke="var(--accent-4, #8AF5B5)"
                strokeWidth="1.6"
                strokeOpacity="0.8"
              />
            </svg>
          </div>
          <div className="crop-hud-bottom">
            <span className="crop-pill">● DIAGNOSIS READY</span>
            <span className="crop-pill secondary">LOW-COST REMEDIES</span>
          </div>
        </div>
      );
    }

    if (project.previewType === 'ai-inventory') {
      return (
        <div className="preview-inventory-hud">
          <div className="inventory-hud-header">
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Activity size={13} color="var(--accent-1)" />
              <span>MARKET INTELLIGENCE</span>
            </span>
            <span className="inventory-badge">OPENROUTER</span>
          </div>
          <div className="inventory-metric-content">
            <div className="inventory-signal-row">
              <span>Demand Signal</span>
              <span className="signal-up">SURGING (+24%)</span>
            </div>
            <div className="inventory-bar-track">
              <div className="inventory-bar-fill" />
            </div>
            <div className="inventory-signal-row">
              <span>Reorder Trigger</span>
              <span className="signal-action">HIGH PRIORITY</span>
            </div>
          </div>
          <div className="inventory-footer-note">
            Live NewsAPI & GNews Ingestion
          </div>
        </div>
      );
    }

    if (project.previewType === 'python-db') {
      return (
        <div className="project-preview-console">
          <div className="console-top-bar">
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Database size={13} color="var(--accent-1)" />
              <span>python3 small_database.py</span>
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--accent-4)' }}>[MySQL OK]</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-4)' }}>
              [✓] Connected to MySQL: localhost
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
              [+] Schema & tables initialized
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--accent-2)' }}>
              [?] Parameterized query: INSERT INTO...
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
              [✓] 1 row safely written (Safe SQL)
            </div>
          </div>
          <div style={{ color: 'var(--accent-1)', fontSize: '0.65rem', paddingTop: '4px', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
            ● Connection pool closed gracefully
          </div>
        </div>
      );
    }

    if (project.previewType === 'terminal') {
      return (
        <div className="project-preview-console">
          <div className="console-top-bar">
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Terminal size={13} />
              <span>{project.terminalPreview?.command || './app'}</span>
            </span>
            <span style={{ fontSize: '0.65rem', color: 'var(--accent-4)' }}>[C++ OK]</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {project.terminalPreview?.output?.slice(1, 5).map((line, idx) => (
              <div key={idx} style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                {line}
              </div>
            ))}
          </div>
          <div style={{ color: 'var(--accent-1)', fontSize: '0.65rem', paddingTop: '4px', borderTop: '1px dashed rgba(255,255,255,0.1)' }}>
            ● Process terminated with status code 0
          </div>
        </div>
      );
    }

    // Default: Illustrated Portfolio / Creative Web
    return (
      <div className="project-preview-studio">
        <Box size={32} color="var(--accent-1)" />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>
          Illustrated Developer Portfolio
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-2)' }}>
          React 19 + Motion for React + CSS3
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 03. SELECTED WORKS"
          title="Things I've Built."
          subtitle="A showcase of AI applications, backend systems, and modern web development."
        />

        {/* Category Filter Tabs */}
        <div className="project-category-tabs">
          {projectCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              className={`category-tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          className="creative-projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                className={`creative-project-card ${project.featured ? 'is-featured' : ''}`}
                variants={cardVariants}
                layout
              >
                {/* Visual Preview Stage */}
                <div className="project-visual-stage">
                  <div className="preview-window-topbar">
                    <div className="preview-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <span className="preview-url-title">{project.id}.app</span>
                  </div>
                  <div className="preview-inner-canvas">
                    {renderVisualPreview(project)}
                  </div>
                </div>

                {/* Card Body */}
                <div className="creative-project-body">
                  {project.featured && (
                    <div className="project-featured-ribbon">
                      <Sparkles size={13} />
                      <span>FEATURED AI PROJECT</span>
                    </div>
                  )}

                  <div className="project-meta-pill-row">
                    <span className="project-tag-accent">{project.category}</span>
                    <span className="project-status-pill">{project.status}</span>
                  </div>

                  <h3 className="project-heading-title">{project.title}</h3>

                  {project.aiModel && (
                    <div className="project-card-ai-badge">
                      <Cpu size={12} />
                      <span>{project.aiModel}</span>
                    </div>
                  )}

                  <p className="project-brief-summary">{project.summary}</p>

                  {/* Tech Tags */}
                  <div className="project-tags-cloud">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="tech-tag">+{project.technologies.length - 4}</span>
                    )}
                  </div>

                  {/* Action Bar */}
                  <div className="creative-action-bar">
                    <button
                      type="button"
                      className="btn-card-studio"
                      onClick={() => setSelectedProject(project)}
                    >
                      <Eye size={14} />
                      <span>Details</span>
                    </button>

                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-card-studio"
                        aria-label={`View ${project.title} source code on GitHub`}
                      >
                        <GithubIcon size={14} />
                        <span>Code</span>
                      </a>
                    )}

                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target={project.demoUrl.startsWith('#') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        className="btn-card-studio primary"
                        aria-label={`View ${project.title} live preview`}
                      >
                        <ExternalLink size={14} />
                        <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Inspection */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
