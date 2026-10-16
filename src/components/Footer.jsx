import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { siteConfig } from '../data/siteConfig';
import '../styles/Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const currentYear = CURRENT_YEAR;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="creative-footer">
      <div className="container creative-footer-content">
        <div className="footer-main-row">
          <div className="footer-signature">
            <div className="footer-akk-badge">
              <span>AKK</span>
            </div>
            <div>
              <div className="footer-name-text">{siteConfig.name}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--accent-1)' }}>
                Creative Developer • UIT Yangon
              </div>
            </div>
          </div>

          <nav className="footer-nav-minimal" aria-label="Footer navigation">
            <a href="#about" onClick={(e) => handleLinkClick(e, '#about')}>
              About
            </a>
            <a href="#projects" onClick={(e) => handleLinkClick(e, '#projects')}>
              Work
            </a>
            <a href="#skills" onClick={(e) => handleLinkClick(e, '#skills')}>
              Skills
            </a>
            <a href="#journey" onClick={(e) => handleLinkClick(e, '#journey')}>
              Journey
            </a>
            <a href="#contact" onClick={(e) => handleLinkClick(e, '#contact')}>
              Contact
            </a>
          </nav>
        </div>

        <div className="footer-sub-row">
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
            © {currentYear} {siteConfig.name}. Breathing art into code.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div className="footer-sub-row-socials">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={16} />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={16} />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-social-btn"
                aria-label="Send direct email"
              >
                <Mail size={16} />
              </a>
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="btn-card-studio"
              style={{ fontSize: '0.75rem', padding: '6px 12px' }}
              aria-label="Scroll back to top"
            >
              <span>TOP</span>
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
