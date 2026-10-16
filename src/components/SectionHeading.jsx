import { motion } from 'framer-motion';

export default function SectionHeading({
  index,
  title,
  subtitle,
  align = 'center',
}) {
  const isCentered = align === 'center';

  return (
    <div
      style={{
        textAlign: isCentered ? 'center' : 'left',
        marginBottom: '48px',
        maxWidth: isCentered ? '720px' : '100%',
        marginLeft: isCentered ? 'auto' : '0',
        marginRight: isCentered ? 'auto' : '0',
      }}
    >
      {index && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.8rem',
            color: 'var(--accent-1)',
            letterSpacing: '0.08em',
            marginBottom: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>{index}</span>
          <span style={{ width: '24px', height: '1px', background: 'var(--accent-1)', opacity: 0.6 }}></span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5vw, 3.4rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          marginBottom: subtitle ? '12px' : '0',
          color: '#FFFFFF',
        }}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(1rem, 1.8vw, 1.18rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.65,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

