export default function BrandLogo({ size = 42, className = '', alt = 'Aung Ko Ko Khant Brand Logo' }) {
  return (
    <div
      className={`brand-logo-container ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        flexShrink: 0,
      }}
    >
      <img
        src="/logo.svg"
        alt={alt}
        width={size}
        height={size}
        loading="eager"
        decoding="async"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 12px rgba(57, 229, 140, 0.28)) drop-shadow(0 4px 10px rgba(0, 0, 0, 0.5))',
          transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), filter 0.3s ease',
        }}
      />
    </div>
  );
}
