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
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
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

  // Validation logic
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
    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
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
        // If backend is unreachable or CORS blocked, gracefully fall back to mailto
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

  const getMailtoUrl = () => {
    const subjectLine = formData.subject.trim() || `Portfolio Inquiry from ${formData.name}`;
    const bodyContent = `Hello Aung Ko Ko Khant,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`;
    return `mailto:${siteConfig.email}?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyContent)}`;
  };

  const handleCopyMessage = () => {
    const textToCopy = `From: ${formData.name} (${formData.email})\nSubject: ${formData.subject || 'Inquiry'}\n\n${formData.message}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 05. CONTACT"
          title="Let's Work Together."
          subtitle="Have a project idea, internship opportunity, or just want to connect? I'd love to hear from you."
        />

        <div className="contact-grid">
          {/* Column 1: Contact Information */}
          <motion.div
            className="contact-info-col"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="glass-panel contact-card-box">
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>
                Get in Touch
              </h3>

              <p className="contact-intro-p">
                I am actively seeking <strong>internship opportunities</strong> and software projects
                to contribute my development skills and learn from experienced teams. Feel free to reach out
                directly through any of the channels below.
              </p>

              <div className="contact-channels-list">
                {/* Email */}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="contact-channel-item"
                  aria-label="Send direct email to Aung Ko Ko Khant"
                >
                  <div className="contact-channel-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="channel-label">Email Address</div>
                    <div className="channel-value">{siteConfig.email}</div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                  aria-label="Aung Ko Ko Khant GitHub Profile"
                >
                  <div className="contact-channel-icon">
                    <GithubIcon size={18} />
                  </div>
                  <div>
                    <div className="channel-label">GitHub</div>
                    <div className="channel-value">github.com/aungkokokhant</div>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                  aria-label="Aung Ko Ko Khant LinkedIn Profile"
                >
                  <div className="contact-channel-icon">
                    <LinkedinIcon size={18} />
                  </div>
                  <div>
                    <div className="channel-label">LinkedIn</div>
                    <div className="channel-value">linkedin.com/in/aungkokokhant</div>
                  </div>
                </a>
              </div>

              <div className="contact-availability-note">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-primary)', fontWeight: 600, marginBottom: '4px' }}>
                  <Clock size={15} />
                  <span>Response Time</span>
                </div>
                <span>I usually reply within 24 to 48 hours for academic or professional inquiries.</span>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Contact Form */}
          <motion.div
            className="glass-panel contact-form-box"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              {/* Name */}
              <div className="form-group">
                <label htmlFor="contact-name" className="form-label">
                  <span>Your Name *</span>
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. Alex Morgan"
                  className={`form-input ${errors.name ? 'has-error' : ''}`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  required
                />
                {errors.name && (
                  <span id="name-error" className="form-error-msg">
                    <AlertCircle size={13} />
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="contact-email" className="form-label">
                  <span>Your Email *</span>
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className={`form-input ${errors.email ? 'has-error' : ''}`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  required
                />
                {errors.email && (
                  <span id="email-error" className="form-error-msg">
                    <AlertCircle size={13} />
                    {errors.email}
                  </span>
                )}
              </div>

              {/* Subject (Optional) */}
              <div className="form-group">
                <label htmlFor="contact-subject" className="form-label">
                  <span>Subject (Optional)</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)' }}>Optional</span>
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Internship opportunity / Project collaboration"
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="contact-message" className="form-label">
                  <span>Your Message *</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your team, project idea, or internship opening..."
                  className={`form-textarea ${errors.message ? 'has-error' : ''}`}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  rows={4}
                  required
                />
                {errors.message && (
                  <span id="message-error" className="form-error-msg">
                    <AlertCircle size={13} />
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submission Status Banners */}
              {submitStatus === 'draft_ready' && (
                <div className="form-status-banner info">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-accent-primary)', fontWeight: 600 }}>
                    <CheckCircle2 size={18} />
                    <span>Message Draft Prepared!</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.86rem' }}>
                    Click below to open your email client with your message filled in, or copy it to your clipboard.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '6px' }}>
                    <a
                      href={getMailtoUrl()}
                      className="btn-primary"
                      style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                    >
                      <ExternalLink size={15} />
                      <span>Open in Mail Client</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyMessage}
                      className="btn-secondary"
                      style={{ fontSize: '0.85rem', padding: '8px 16px' }}
                    >
                      <Copy size={15} />
                      <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
                    </button>
                  </div>
                </div>
              )}

              {submitStatus === 'service_success' && (
                <div className="form-status-banner success">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <CheckCircle2 size={18} />
                    <span>Message Delivered Successfully!</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.86rem' }}>
                    Thank you for reaching out. I have received your message and will get back to you shortly.
                  </p>
                </div>
              )}

              {submitStatus === 'service_error' && (
                <div className="form-status-banner error">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600 }}>
                    <AlertCircle size={18} />
                    <span>Unable to send via form service.</span>
                  </div>
                  <p style={{ margin: 0, fontSize: '0.86rem' }}>
                    Please reach out directly via{' '}
                    <a href={`mailto:${siteConfig.email}`} style={{ textDecoration: 'underline' }}>
                      {siteConfig.email}
                    </a>
                    .
                  </p>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="submit-btn"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="floating-elem-1" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="form-footer-note">
                <span>Frontend-ready with instant mailto draft option. Supports Flask backend via <code>VITE_API_BASE_URL</code>.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
