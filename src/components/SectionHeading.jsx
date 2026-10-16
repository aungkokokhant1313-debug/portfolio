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
            fontSize: '0.85rem',
            color: 'var(--color-accent-primary)',
            letterSpacing: '0.08em',
            marginBottom: '8px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span>{index}</span>
          <span style={{ width: '20px', height: '1px', background: 'var(--color-accent-primary)', opacity: 0.5 }}></span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        style={{
          fontSize: 'clamp(1.8rem, 4vw, 2.6rem)',
          letterSpacing: '-0.03em',
          marginBottom: subtitle ? '12px' : '0',
          color: 'var(--color-text-primary)',
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
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'var(--color-text-secondary)',
            lineHeight: 1.6,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
