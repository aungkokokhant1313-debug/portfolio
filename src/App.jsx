import { useState, useEffect } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import ThreeCanvas from './components/ThreeCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [palette, setPalette] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('akk_studio_palette') || 'cyber-violet';
    }
    return 'cyber-violet';
  });

  const activeSection = useActiveSection([
    'hero',
    'about',
    'skills',
    'projects',
    'journey',
    'contact',
  ]);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('akk_studio_palette', palette);
  }, [palette]);

  return (
    <div className="portfolio-studio-root">
      {/* Interactive 3D Canvas Background */}
      <ThreeCanvas palette={palette} />

      {/* Cosmic Noise Grain Overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Ambient Color Lighting */}
      <div className="ambient-glow-top" aria-hidden="true" />
      <div className="ambient-glow-bottom" aria-hidden="true" />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        currentPalette={palette}
        onSelectPalette={setPalette}
      />

      {/* Creative Main Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer />
    </div>
  );
}
