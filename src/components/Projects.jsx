import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Sparkles, Eye, Shirt, Box } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';
import '../styles/Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

    if (project.previewType === 'app-card') {
      return (
        <div className="project-preview-lookbook">
          <div className="lookbook-chips">
            <span className="lookbook-chip">#AvantGarde</span>
            <span className="lookbook-chip">#Monochrome</span>
            <span className="lookbook-chip">#ReactUI</span>
          </div>
          <div className="lookbook-cards-row">
            <div className="lookbook-card-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-3)', fontSize: '0.74rem' }}>
                <Shirt size={13} />
                <span>Ensemble Alpha</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                Minimalist Tailored
              </div>
            </div>
            <div className="lookbook-card-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--accent-1)', fontSize: '0.74rem' }}>
                <Sparkles size={13} />
                <span>Ensemble Beta</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
                Cyber-Streetwear
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Creative Studio / 3D
    return (
      <div className="project-preview-studio">
        <Box size={32} color="var(--accent-1)" />
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 800, color: '#FFFFFF' }}>
          Creative 3D Portfolio
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--accent-2)' }}>
          React 19 + Three.js + Framer Motion
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
          subtitle="A showcase of systems engineering, interactive web applications, and creative coding experiments."
        />

        <motion.div
          className="creative-projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="creative-project-card"
              variants={cardVariants}
            >
              {/* Visual Preview Stage */}
              <div className="project-visual-stage">
                {renderVisualPreview(project)}
              </div>

              {/* Card Body */}
              <div className="creative-project-body">
                <div className="project-meta-pill-row">
                  <span className="project-tag-accent">{project.category}</span>
                  <span className="project-status-pill">{project.status}</span>
                </div>

                <h3 className="project-heading-title">{project.title}</h3>

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
