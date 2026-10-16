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
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-top-row">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-badge">
              <span>AKK</span>
            </div>
            <div className="footer-brand-text">
              <span className="footer-brand-name">{siteConfig.name}</span>
              <span className="footer-tagline">
                Full-Stack Developer in Progress • UIT Yangon
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="footer-nav" aria-label="Footer navigation">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="footer-nav-link"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="footer-bottom-row">
          <div className="footer-copyright">
            © {currentYear} {siteConfig.name}. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {/* Social Links */}
            <div className="footer-social-links">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="GitHub profile"
              >
                <GithubIcon size={17} />
              </a>

              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon"
                aria-label="LinkedIn profile"
              >
                <LinkedinIcon size={17} />
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="footer-social-icon"
                aria-label="Send email"
              >
                <Mail size={17} />
              </a>
            </div>

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              className="back-to-top-btn"
              aria-label="Scroll back to top of the page"
            >
              <span>TOP</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
