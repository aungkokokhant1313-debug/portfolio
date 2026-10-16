import { useTheme } from './hooks/useTheme';
import { useActiveSection } from './hooks/useActiveSection';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection([
    'hero',
    'about',
    'skills',
    'projects',
    'journey',
    'contact',
  ]);

  return (
    <div className="portfolio-app-root">
      {/* Background Subtle Tech Grid & Ambient Glow */}
      <div className="bg-grid-pattern" aria-hidden="true" />
      <div className="ambient-glow" aria-hidden="true" />

      {/* Navigation */}
      <Navbar
        activeSection={activeSection}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
