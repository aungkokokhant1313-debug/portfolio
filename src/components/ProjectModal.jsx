import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Check, Terminal, Layers, Info, Sparkles, Cpu } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="project-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
          <motion.div
            className="project-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Modal Header */}
            <div className="project-modal-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span className="project-category-tag">{project.category}</span>
                  <span className="project-status-badge">{project.status}</span>
                </div>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: '#FFFFFF' }}>
                  {project.title}
                </h3>
              </div>

              <button
                type="button"
                className="project-modal-close-btn"
                onClick={onClose}
                aria-label="Close project modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Content */}
            <div className="project-modal-content">
              {/* AI Model Architecture Badge (if applicable) */}
              {project.aiModel && (
                <div className="modal-ai-box">
                  <div className="modal-ai-header">
                    <Sparkles size={16} color="var(--accent-1)" />
                    <span className="modal-ai-title">AI Model & Integration</span>
                  </div>
                  <div className="modal-ai-val">
                    <Cpu size={14} style={{ color: 'var(--accent-2)', flexShrink: 0 }} />
                    <span>{project.aiModel}</span>
                  </div>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Info size={16} color="var(--accent-1)" />
                  <span>Overview & Architecture</span>
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.description}
                </p>
              </div>

              {/* Key Features */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Layers size={16} color="var(--accent-1)" />
                    <span>Key Highlights</span>
                  </h4>
                  <ul className="modal-feature-list">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="modal-feature-item">
                        <Check size={16} color="var(--accent-1)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Terminal size={16} color="var(--accent-1)" />
                  <span>Technologies & Stack</span>
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer with Actions */}
            <div className="project-modal-footer">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-action"
                >
                  <GithubIcon size={16} />
                  <span>Source Code</span>
                </a>
              )}

              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  target={project.demoUrl.startsWith('#') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className="btn-card-action btn-card-primary"
                  onClick={() => {
                    if (project.demoUrl.startsWith('#')) {
                      onClose();
                    }
                  }}
                >
                  <ExternalLink size={16} />
                  <span>Live Demo</span>
                </a>
              ) : (
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)' }}>
                  [Demo not hosted for this project]
                </span>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
