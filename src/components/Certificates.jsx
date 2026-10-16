import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, FolderPlus, Info } from 'lucide-react';
import SectionHeading from './SectionHeading';
import CertificateCard from './CertificateCard';
import CertificateModal from './CertificateModal';
import { certificates, certificateCategories } from '../data/certificates';
import '../styles/Certificates.css';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCertificates = activeCategory === 'All'
    ? certificates
    : certificates.filter((c) => c.category === activeCategory);

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

  return (
    <section id="certificates" className="section-wrapper">
      <div className="container">
        {/* Section Heading with Decorative Label */}
        <div style={{ textAlign: 'center', marginBottom: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--accent-4, #A3E635)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              background: 'rgba(163, 230, 53, 0.1)',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(163, 230, 53, 0.3)',
              display: 'inline-block',
              marginBottom: '10px',
            }}
          >
            MY LEARNING JOURNEY
          </span>
        </div>

        <SectionHeading
          index="// 04. CREDENTIALS & ACHIEVEMENTS"
          title="Credentials & Achievements"
          subtitle="Every certificate represents a step forward in my journey through technology, AI, and software development."
        />

        {/* Category Filters (Only displaying categories relevant to actual certificates) */}
        {certificateCategories.length > 1 && (
          <div className="certificates-filter-row">
            {certificateCategories.map((category) => (
              <button
                key={category}
                type="button"
                className={`certificate-tab-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Certificates Gallery */}
        <motion.div
          key={activeCategory}
          className="certificates-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="popLayout">
            {filteredCertificates.length > 0 ? (
              filteredCertificates.map((cert) => (
                <CertificateCard
                  key={cert.id}
                  certificate={cert}
                  onSelect={setSelectedCert}
                  variants={cardVariants}
                />
              ))
            ) : (
              <motion.div
                className="certificates-empty-state"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
              >
                <div className="empty-state-icon">
                  <Award size={26} />
                </div>
                <h4 style={{ color: '#FFFFFF', marginBottom: '8px', fontSize: '1.15rem' }}>
                  No Credentials in this Category Yet
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  Place new certificate files in <code className="guide-code-chip">public/certificates/</code> and add an entry in <code className="guide-code-chip">src/data/certificates.js</code>.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subtitle helper note for adding new certificates */}
        <div className="certificate-guide-banner">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(192, 132, 252, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-1)', flexShrink: 0 }}>
              <FolderPlus size={18} />
            </div>
            <div className="guide-banner-text">
              <strong>Extensible Credentials System:</strong> Supports JPG, PNG, WebP images, or PDF documents placed in <code className="guide-code-chip">public/certificates/</code> with automatic Netlify build integration.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--accent-2)', fontFamily: 'var(--font-mono)', fontSize: '0.74rem' }}>
            <Info size={14} />
            <span>Verified Credentials</span>
          </div>
        </div>

        {/* Modal for full inspection */}
        <CertificateModal
          certificate={selectedCert}
          isOpen={!!selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      </div>
    </section>
  );
}
