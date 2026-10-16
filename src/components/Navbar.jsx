import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Terminal } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

export default function Navbar({ activeSection, theme, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Monogram Logo */}
        <a
          href="#hero"
          className="navbar-logo"
          onClick={(e) => handleLinkClick(e, '#hero')}
          aria-label="Aung Ko Ko Khant Portfolio Home"
        >
          <div className="logo-badge">
            <span>AKK</span>
          </div>
          <div className="logo-text">
            <span className="logo-name">{siteConfig.name}</span>
            <span className="logo-subtitle">UIT // FULL-STACK</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          {siteConfig.navLinks.map((link) => {
            const sectionId = link.href.replace('#', '');
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`nav-item ${isActive ? 'active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    className="active-indicator"
                    layoutId="activeNavIndicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Theme Toggle & Resume */}
        <div className="navbar-actions">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-resume-btn"
            download="Aung_Ko_Ko_Khant_Resume.pdf"
          >
            <span>Resume</span>
            <ArrowUpRight size={15} />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-nav-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              className="mobile-nav-drawer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '0 12px 8px', color: 'var(--color-accent-primary)', fontFamily: 'var(--font-mono)', fontSize: '0.8rem' }}>
                <Terminal size={14} />
                <span>NAVIGATION CONSOLE</span>
              </div>

              {siteConfig.navLinks.map((link) => {
                const sectionId = link.href.replace('#', '');
                const isActive = activeSection === sectionId;

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                  >
                    <span>{link.name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                      0{siteConfig.navLinks.indexOf(link) + 1}
                    </span>
                  </a>
                );
              })}

              <div style={{ paddingTop: '12px', borderTop: '1px solid var(--color-border)', display: 'flex', gap: '10px' }}>
                <a
                  href={siteConfig.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', fontSize: '0.9rem', padding: '10px 16px' }}
                  download="Aung_Ko_Ko_Khant_Resume.pdf"
                >
                  <span>Download Resume (PDF)</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}

