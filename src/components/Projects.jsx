import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Terminal, Sparkles, Eye, Shirt, Globe } from 'lucide-react';
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
    hidden: { opacity: 0, y: 28 },
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
          alt={`${project.title} screenshot preview`}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      );
    }

    if (project.previewType === 'terminal') {
      return (
        <div className="css-preview-terminal">
          <div className="css-terminal-cmd">
            <Terminal size={14} />
            <span>{project.terminalPreview?.command || './app'}</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {project.terminalPreview?.output?.slice(1, 5).map((line, idx) => (
              <div key={idx} className="css-terminal-stat">
                <span>{line}</span>
              </div>
            ))}
          </div>
          <div style={{ color: 'var(--color-accent-primary)', fontSize: '0.68rem' }}>
            ● Process finished with exit code 0
          </div>
        </div>
      );
    }

    if (project.previewType === 'app-card') {
      return (
        <div className="css-preview-app">
          <div className="css-app-filter-bar">
            <span className="css-filter-pill">#Minimalist</span>
            <span className="css-filter-pill">#Autumn26</span>
            <span className="css-filter-pill">#Casual</span>
          </div>
          <div className="css-app-mock-cards">
            <div className="css-mock-outfit-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent-primary)', fontSize: '0.75rem' }}>
                <Shirt size={13} />
                <span>Outfit Ensemble A</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
                Monochrome Minimal
              </div>
            </div>
            <div className="css-mock-outfit-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--color-accent-secondary)', fontSize: '0.75rem' }}>
                <Sparkles size={13} />
                <span>Outfit Ensemble B</span>
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--color-text-muted)' }}>
                Smart Tech-Casual
              </div>
            </div>
          </div>
        </div>
      );
    }

    // Default: Code showcase / Portfolio
    return (
      <div className="css-preview-portfolio">
        <Globe size={28} color="var(--color-accent-primary)" />
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
          Aung Ko Ko Khant Portfolio
        </div>
        <div style={{ fontSize: '0.72rem', color: 'var(--color-accent-primary)' }}>
          React + Vite + Framer Motion
        </div>
      </div>
    );
  };

  return (
    <section id="projects" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 03. PROJECTS"
          title="Things I've Built."
          subtitle="A selection of my academic foundations, web software experiments, and personal applications."
        />

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              className="glass-panel project-card"
              variants={cardVariants}
            >
              {/* Visual Preview */}
              <div className="project-preview-box">
                {renderVisualPreview(project)}
              </div>

              {/* Card Body */}
              <div className="project-card-body">
                <div className="project-meta-row">
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-status-badge">{project.status}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>

                <p className="project-summary">{project.summary}</p>

                {/* Tech Badges */}
                <div className="project-tech-list">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="tech-tag">+{project.technologies.length - 4}</span>
                  )}
                </div>

                {/* Actions */}
                <div className="project-actions-row">
                  <button
                    type="button"
                    className="btn-card-action"
                    onClick={() => setSelectedProject(project)}
                  >
                    <Eye size={15} />
                    <span>View Details</span>
                  </button>

                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card-action"
                      aria-label={`View ${project.title} source code`}
                    >
                      <GithubIcon size={15} />
                      <span>Code</span>
                    </a>
                  )}

                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target={project.demoUrl.startsWith('#') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="btn-card-action btn-card-primary"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={15} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Project Inspection Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
