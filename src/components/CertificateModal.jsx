import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Calendar, Award, Users, CheckCircle2, FileText, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function CertificateModal({ certificate, isOpen, onClose }) {
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

  if (!certificate) return null;

  const isPdf = certificate.image?.toLowerCase().endsWith('.pdf');

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          className="cert-modal-overlay"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
        >
          <motion.div
            className="cert-modal-container"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="cert-modal-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span className="cert-category-badge">{certificate.category}</span>
                <span className="cert-verified-pill">
                  <CheckCircle2 size={12} />
                  <span>Verified Credential</span>
                </span>
              </div>

              <button
                type="button"
                className="cert-modal-close-btn"
                onClick={onClose}
                aria-label="Close certificate modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="cert-modal-body">
              {/* Image Preview Box */}
              <div className="cert-modal-preview-box">
                {isPdf ? (
                  <div style={{ padding: '48px 24px', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    <FileText size={48} color="var(--accent-1)" style={{ margin: '0 auto 12px' }} />
                    <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem' }}>
                      PDF Certificate Document
                    </p>
                    <a
                      href={certificate.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-cert-action primary"
                      style={{ marginTop: '16px' }}
                    >
                      <ExternalLink size={14} />
                      <span>Open PDF Document</span>
                    </a>
                  </div>
                ) : (
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="cert-modal-preview-img"
                  />
                )}
              </div>

              {/* Title & Issuer */}
              <div>
                <h3
                  id="cert-modal-title"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '8px',
                    lineHeight: 1.3,
                  }}
                >
                  {certificate.title}
                </h3>

                <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap', color: 'var(--text-secondary)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: '0.84rem' }}>
                    <Award size={15} />
                    <span>{certificate.issuer}</span>
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                    <Calendar size={14} />
                    <span>{certificate.date}</span>
                  </span>
                </div>
              </div>

              {/* Key Details Grid */}
              <div className="cert-modal-details-grid">
                <div className="cert-detail-item">
                  <span className="cert-detail-label">Recipient</span>
                  <span className="cert-detail-value">Aung Ko Ko Khant</span>
                </div>

                {certificate.team && (
                  <div className="cert-detail-item">
                    <span className="cert-detail-label">Team / Delegation</span>
                    <span className="cert-detail-value" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Users size={14} color="var(--accent-3)" />
                      <span>{certificate.team}</span>
                    </span>
                  </div>
                )}

                {certificate.signatory && (
                  <div className="cert-detail-item" style={{ gridColumn: 'span 2' }}>
                    <span className="cert-detail-label">Authorized Signatory</span>
                    <span className="cert-detail-value">{certificate.signatory}</span>
                  </div>
                )}

                {certificate.credentialId && (
                  <div className="cert-detail-item">
                    <span className="cert-detail-label">Credential ID</span>
                    <span className="cert-detail-value" style={{ fontFamily: 'var(--font-mono)', fontSize: '0.82rem' }}>
                      {certificate.credentialId}
                    </span>
                  </div>
                )}
              </div>

              {/* Description */}
              <div>
                <h4 style={{ fontSize: '0.9rem', color: '#FFFFFF', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} color="var(--accent-1)" />
                  <span>Achievement Overview</span>
                </h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {certificate.description}
                </p>
              </div>

              {/* Demonstrated Skills */}
              {certificate.skills && certificate.skills.length > 0 && (
                <div>
                  <h4 style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                    Demonstrated Competencies
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {certificate.skills.map((skill) => (
                      <span key={skill} className="cert-skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Actions */}
            <div className="cert-modal-footer">
              {certificate.team === 'Team · Oblivion Icon' && (
                <a
                  href="https://github.com/aungkokokhant1313-debug/Oblivion-Icon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert-action"
                >
                  <GithubIcon size={14} />
                  <span>Related Repository</span>
                </a>
              )}

              {certificate.verificationUrl && (
                <a
                  href={certificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cert-action"
                >
                  <ExternalLink size={14} />
                  <span>Verify Credential</span>
                </a>
              )}

              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cert-action primary"
              >
                <ExternalLink size={14} />
                <span>Open Original File</span>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
