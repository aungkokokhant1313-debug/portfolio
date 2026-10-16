import { motion } from 'framer-motion';

const palettes = [
  { id: 'cyber-violet', name: 'Cyber Violet', color1: '#C084FC', color2: '#F43F5E' },
  { id: 'electric-blue', name: 'Electric Azure', color1: '#38BDF8', color2: '#06B6D4' },
  { id: 'neon-sunset', name: 'Neon Sunset', color1: '#FB7185', color2: '#F59E0B' },
];

export default function PaletteSwitcher({ currentPalette, onSelectPalette }) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 8px',
        borderRadius: 'var(--radius-full)',
        background: 'rgba(255, 255, 255, 0.05)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
      }}
      title="Studio Color Theme"
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          letterSpacing: '0.05em',
          color: 'var(--text-muted)',
          marginRight: '2px',
          textTransform: 'uppercase',
        }}
      >
        Theme
      </span>
      {palettes.map((p) => {
        const isActive = currentPalette === p.id;
        return (
          <motion.button
            key={p.id}
            type="button"
            onClick={() => onSelectPalette(p.id)}
            whileHover={{ scale: 1.25 }}
            whileTap={{ scale: 0.9 }}
            aria-label={`Switch color palette to ${p.name}`}
            style={{
              width: '14px',
              height: '14px',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${p.color1}, ${p.color2})`,
              border: isActive ? '2px solid #FFFFFF' : '1px solid rgba(255, 255, 255, 0.3)',
              boxShadow: isActive ? `0 0 10px ${p.color1}` : 'none',
              cursor: 'pointer',
              padding: 0,
            }}
          />
        );
      })}
    </div>
  );
}
