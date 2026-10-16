import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import PaletteSwitcher from './PaletteSwitcher';
import BrandLogo from './BrandLogo';
import { siteConfig } from '../data/siteConfig';
import '../styles/Navbar.css';

const navItems = [
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Work', href: '#projects', id: 'projects' },
  { name: 'Certificates', href: '#certificates', id: 'certificates' },
  { name: 'Journey', href: '#journey', id: 'journey' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar({ activeSection, currentPalette, onSelectPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`studio-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container-minimal">
        {/* Top-Left: Distinctive AK Developer Brand Logo */}
        <a
          href="#hero"
          className="studio-logo"
          onClick={(e) => handleLinkClick(e, '#hero')}
          aria-label="Aung Ko Ko Khant Creative Developer Portfolio"
        >
          <BrandLogo size={42} />
          <div className="studio-logo-text">
            <span className="studio-name">{siteConfig.name}</span>
            <span className="studio-sub">AI & CREATIVE DEVELOPER // UIT</span>
          </div>
        </a>

        {/* Top-Right: Color Theme Controls + Minimalist Links */}
        <div className="nav-right-group">
          <PaletteSwitcher
            currentPalette={currentPalette}
            onSelectPalette={onSelectPalette}
          />

          <nav className="nav-links-minimal" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`nav-link-item ${isActive ? 'active' : ''}`}
                >
                  <span>{item.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="navUnderline"
                      className="nav-link-line"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cv-btn"
            download="Aung_Ko_Ko_Khant_Resume.pdf"
          >
            <span>CV</span>
            <ArrowUpRight size={13} />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className="mobile-nav-toggle"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Full-Screen Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-overlay-menu"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {navItems.map((item, idx) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  className={`mobile-link-large ${activeSection === item.id ? 'active' : ''}`}
                >
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1rem', color: 'var(--accent-1)', marginRight: '16px' }}>
                    0{idx + 1}.
                  </span>
                  {item.name}
                </a>
              ))}
            </div>

            <div style={{ marginTop: '20px', display: 'flex', gap: '14px', alignItems: 'center' }}>
              <a
                href={siteConfig.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                download="Aung_Ko_Ko_Khant_Resume.pdf"
              >
                <span>Download CV (PDF)</span>
                <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
