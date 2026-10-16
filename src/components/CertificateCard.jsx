import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, Calendar, Award, CheckCircle2, Maximize2, FileText, Check } from 'lucide-react';

export default function CertificateCard({ certificate, onSelect, variants }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const rotX = -(y / (rect.height / 2)) * 6;
    const rotY = (x / (rect.width / 2)) * 6;

    setTilt({
      x: Math.max(-8, Math.min(8, rotX)),
      y: Math.max(-8, Math.min(8, rotY)),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const isPdf = certificate.image?.toLowerCase().endsWith('.pdf');

  return (
    <motion.div
      className="certificate-card-wrapper"
      variants={variants}
      layout
    >
      <article
        ref={cardRef}
        className={`certificate-card ${certificate.featured ? 'is-featured' : ''}`}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        }}
      >
        {/* Visual Stage Banner */}
        <div
          className="certificate-image-stage"
          onClick={() => onSelect(certificate)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onSelect(certificate);
            }
          }}
          aria-label={`View full certificate for ${certificate.title}`}
        >
          {/* Top Badges */}
          <div className="certificate-top-badges">
            <span className="cert-category-badge">{certificate.category}</span>
            <span className="cert-verified-pill">
              <CheckCircle2 size={12} />
              <span>Verified Credential</span>
            </span>
          </div>

          {/* Image or PDF Representation */}
          {isPdf ? (
            <div className="certificate-pdf-fallback">
              <FileText size={44} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                PDF Certificate
              </span>
            </div>
          ) : (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="certificate-img"
              loading="lazy"
            />
          )}

          {/* Hover Overlay */}
          <div className="certificate-hover-overlay">
            <button
              type="button"
              className="btn-inspect-overlay"
              tabIndex={-1}
              aria-hidden="true"
            >
              <Maximize2 size={15} />
              <span>Inspect Credential</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="certificate-card-body">
          <div className="cert-meta-row">
            <span className="cert-issuer-badge">
              <Award size={14} />
              <span>{certificate.issuer}</span>
            </span>
            <span className="cert-date-text">
              <Calendar size={13} />
              <span>{certificate.date}</span>
            </span>
          </div>

          <h3 className="certificate-card-title">{certificate.title}</h3>

          {certificate.team && (
            <div className="certificate-card-team">
              <span>● {certificate.team}</span>
            </div>
          )}

          <p className="certificate-card-desc">{certificate.description}</p>

          {/* Skills / Competency Chips */}
          {certificate.skills && certificate.skills.length > 0 && (
            <div className="certificate-skills-row">
              {certificate.skills.map((skill) => (
                <span key={skill} className="cert-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          )}

          {/* Action Row */}
          <div className="certificate-actions-bar">
            <button
              type="button"
              className="btn-cert-action"
              onClick={() => onSelect(certificate)}
            >
              <Eye size={14} />
              <span>View Details</span>
            </button>

            <a
              href={certificate.image}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cert-action primary"
              aria-label={`Open original certificate file for ${certificate.title}`}
            >
              <ExternalLink size={14} />
              <span>Open Certificate</span>
            </a>

            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cert-action"
                aria-label={`Verify credential on official page`}
              >
                <Check size={14} />
                <span>Verify</span>
              </a>
            )}
          </div>
        </div>
      </article>
    </motion.div>
  );
}

