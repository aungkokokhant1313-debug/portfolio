import { useState, useEffect } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [palette, setPalette] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('akk_studio_palette') || 'neon-sunset';
    }
    return 'neon-sunset';
  });

  const activeSection = useActiveSection([
    'hero',
    'about',
    'skills',
    'projects',
    'certificates',
    'journey',
    'contact',
  ]);

  useEffect(() => {
    document.documentElement.setAttribute('data-palette', palette);
    localStorage.setItem('akk_studio_palette', palette);
  }, [palette]);

  // Strip #hero hash on initial mount while keeping homepage at root
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#hero') {
      window.history.replaceState(
        null,
        '',
        window.location.pathname + window.location.search
      );
    }
  }, []);

  return (
    <div className="portfolio-studio-root">
      {/* Subtle Illustrated Background Pattern */}
      <div className="bg-grid-pattern" aria-hidden="true" />

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
        <Certificates />
        <Journey />
        <Contact />
      </main>

      {/* Minimalist Studio Footer */}
      <Footer />
    </div>
  );
}
