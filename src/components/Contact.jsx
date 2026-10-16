import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  ExternalLink,
  Loader2,
  Clock,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TelegramIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import { siteConfig } from '../data/siteConfig';
import '../styles/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'draft_ready', 'service_success', 'service_error'
  const [copied, setCopied] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format (e.g., name@domain.com).';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const getMailtoUrl = () => {
    const subjectLine = formData.subject.trim() || `Creative Inquiry from ${formData.name}`;
    const bodyContent = `Hello Aung Ko Ko Khant,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`;
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    // Check for configured Flask backend or form endpoint
    const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || '').trim().replace(/\/+$/, '');
    const endpoint = apiBaseUrl ? `${apiBaseUrl}/api/contact` : (siteConfig.formEndpoint || '').trim();

    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && data.success) {
          setSubmitStatus('service_success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else if (data.fallback_to_mailto) {
          setSubmitStatus('draft_ready');
          window.open(getMailtoUrl(), '_self');
        } else if (data.errors) {
          setErrors(data.errors);
        } else {
          setSubmitStatus('service_error');
        }
      } catch {
        // Fallback to mailto
        setSubmitStatus('draft_ready');
        window.open(getMailtoUrl(), '_self');
      } finally {
        setIsSubmitting(false);
      }
      return;
    }

    // Default frontend-only mode: launch mail client directly with pre-filled draft
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('draft_ready');
      window.open(getMailtoUrl(), '_self');
    }, 300);
  };

  const handleCopyMessage = () => {
    const textToCopy = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject || 'Creative Inquiry'}\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 06. INITIATE TRANSMISSION"
          title="Contact Studio."
          subtitle="Open for internships, agentic web development, and software engineering opportunities."
        />

        <div className="creative-contact-grid">
          {/* Left Column: Creative Statement & Direct Channels */}
          <motion.div
            className="creative-contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-studio-statement">
              Let's create something <span>extraordinary</span> together.
            </h3>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Need a modern, responsive website built with <strong>Agentic AI workflows</strong>, have an internship opening,
              or want to discuss AI application architectures? My inbox and channels are always open.
            </p>

            {/* Agentic Web Development Callout */}
            <div className="agentic-highlight-banner">
              <div className="agentic-badge-pill">
                <Sparkles size={13} color="var(--accent-4, #A3E635)" />
                <span>AGENTIC WEB DEVELOPMENT AVAILABLE</span>
              </div>
              <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                I engineer websites and web applications with autonomous AI coding agents, intelligent multi-agent orchestration, and modern React 19 / Python stacks for ultra-fast, production-grade delivery.
              </div>
            </div>

            <div className="contact-channels-art">
              {/* Direct Email */}
              <a href={`mailto:${siteConfig.email}`} className="art-channel-item" aria-label="Email Aung Ko Ko Khant">
                <div className="art-channel-icon-box">
                  <Mail size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-1)', textTransform: 'uppercase' }}>
                    Direct Email
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>{siteConfig.email}</div>
                </div>
              </a>

              {/* Telegram */}
              {siteConfig.telegram && (
                <a
                  href={siteConfig.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="art-channel-item"
                  aria-label="Telegram Aung Ko Ko Khant"
                >
                  <div className="art-channel-icon-box" style={{ color: 'var(--accent-2)' }}>
                    <TelegramIcon size={18} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-2)', textTransform: 'uppercase' }}>
                      Telegram Direct
                    </div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>{siteConfig.telegramUsername}</div>
                  </div>
                </a>
              )}

              {/* LinkedIn */}
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="art-channel-item"
                aria-label="LinkedIn Profile"
              >
                <div className="art-channel-icon-box" style={{ color: 'var(--accent-3)' }}>
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-3)', textTransform: 'uppercase' }}>
                    Professional Network
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>linkedin.com/in/aungkokokhantdev13</div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="art-channel-item"
                aria-label="GitHub Profile"
              >
                <div className="art-channel-icon-box">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-4)', textTransform: 'uppercase' }}>
                    Code Repositories
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>github.com/aungkokokhant1313-debug</div>
                </div>
              </a>
            </div>

            <div
              style={{
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              <Clock size={16} color="var(--accent-1)" />
              <span>Response time: Typically within 24 to 48 hours for academic or professional inquiries.</span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            className="creative-form-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              <div>
                <label
                  htmlFor="creative-name"
                  style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px', color: '#FFFFFF' }}
                >
                  Your Name *
                </label>
                <input
                  id="creative-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Maya Lin"
                  className="creative-form-input"
                  required
                />
                {errors.name && (
                  <span style={{ fontSize: '0.76rem', color: 'var(--accent-3)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} />
                    {errors.name}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="creative-email"
                  style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px', color: '#FFFFFF' }}
                >
                  Your Email *
                </label>
                <input
                  id="creative-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@organization.com"
                  className="creative-form-input"
                  required
                />
                {errors.email && (
                  <span style={{ fontSize: '0.76rem', color: 'var(--accent-3)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} />
                    {errors.email}
                  </span>
                )}
              </div>

              <div>
                <label
                  htmlFor="creative-subject"
                  style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px', color: '#FFFFFF' }}
                >
                  Subject (Optional)
                </label>
                <input
                  id="creative-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Creative collaboration"
                  className="creative-form-input"
                />
              </div>

              <div>
                <label
                  htmlFor="creative-message"
                  style={{ display: 'block', fontSize: '0.84rem', fontWeight: 600, marginBottom: '6px', color: '#FFFFFF' }}
                >
                  Message *
                </label>
                <textarea
                  id="creative-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, ideas, or opportunity..."
                  className="creative-form-textarea"
                  rows={4}
                  required
                />
                {errors.message && (
                  <span style={{ fontSize: '0.76rem', color: 'var(--accent-3)', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <AlertCircle size={12} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submission State Banners */}
              {submitStatus === 'draft_ready' && (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(192, 132, 252, 0.12)',
                    border: '1px solid var(--border-glow)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-1)', fontWeight: 700 }}>
                    <CheckCircle2 size={18} />
                    <span>Message Draft Prepared!</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Your email client should open automatically. You can also click below to open it directly or copy the formatted text.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <a
                      href={getMailtoUrl()}
                      className="btn-card-studio primary"
                      style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                    >
                      <ExternalLink size={13} />
                      <span>Open in Mail</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="btn-card-studio"
                      style={{ fontSize: '0.82rem', padding: '6px 14px' }}
                    >
                      <Copy size={13} />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'service_success' && (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(163, 230, 53, 0.15)',
                    border: '1px solid var(--accent-4)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                  }}
                >
                  <CheckCircle2 size={20} color="var(--accent-4)" />
                  <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>
                    Thank you! Your message has been safely received by the studio API.
                  </span>
                </div>
              )}

              {submitStatus === 'service_error' && (
                <div
                  style={{
                    padding: '16px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(244, 63, 94, 0.15)',
                    border: '1px solid var(--accent-3)',
                    color: '#FFFFFF',
                    fontSize: '0.86rem',
                  }}
                >
                  Unable to reach backend service. Please email directly at{' '}
                  <a href={`mailto:${siteConfig.email}`} style={{ textDecoration: 'underline', color: 'var(--accent-1)' }}>
                    {siteConfig.email}
                  </a>
                  .
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-send-creative"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="spin-slow" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.74rem', color: 'var(--text-muted)' }}>
                <span>Functional with direct email client draft or Flask backend via <code>VITE_API_BASE_URL</code>.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
