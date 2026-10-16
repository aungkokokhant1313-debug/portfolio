import { motion } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Code2,
  Atom,
  Terminal,
  Braces,
  Database,
  FileJson,
  GitBranch,
  Laptop,
  Box,
  Globe,
  Network,
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data/skills';
import '../styles/Skills.css';

const iconMap = {
  FileCode2,
  Palette,
  Code2,
  Atom,
  Terminal,
  Braces,
  Database,
  FileJson,
  GitBranch,
  Github: GithubIcon,
  Laptop,
  Box,
  Globe,
  Network,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 02. TECHNICAL PALETTE"
          title="Skills & Technologies."
          subtitle="An interactive typographic spectrum of tools I utilize across creative development and systems coursework."
        />

        <div className="skills-creative-composition">
          {/* Animated Typographic Stream */}
          <div className="skills-typographic-stream" aria-hidden="true">
            <motion.div
              className="stream-track"
              animate={{ x: [0, -600] }}
              transition={{ repeat: Infinity, duration: 22, ease: 'linear' }}
            >
              <span>REACT 19</span> • <span>THREE.JS</span> • <span>PYTHON</span> • <span>C++</span> •{' '}
              <span>MOTION FOR REACT</span> • <span>CSS3 3D TRANSFORMS</span> • <span>GIT & GITHUB</span> •{' '}
              <span>REACT 19</span> • <span>THREE.JS</span> • <span>PYTHON</span> • <span>C++</span>
            </motion.div>
          </div>

          {/* Categorized Clusters */}
          <motion.div
            className="skills-cluster-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.id}
                className="skills-cluster-card"
                variants={cardVariants}
              >
                <div className="cluster-title-row">
                  <h3 className="cluster-name">{category.title}</h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-1)',
                      background: 'rgba(192, 132, 252, 0.1)',
                      padding: '3px 8px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    {category.skills.length} TOOLS
                  </span>
                </div>

                <p className="cluster-sub">{category.description}</p>

                <div className="cluster-badges-wrap">
                  {category.skills.map((skill) => {
                    const IconComponent = iconMap[skill.icon] || Code2;
                    const isLearning = skill.status === 'Currently Learning';

                    return (
                      <div key={skill.name} className="creative-skill-pill">
                        <IconComponent size={15} color={isLearning ? 'var(--accent-2)' : 'var(--accent-1)'} />
                        <span>{skill.name}</span>
                        <span className={`skill-status-tag ${isLearning ? 'learning' : 'hands-on'}`}>
                          {isLearning ? 'Learning' : 'Hands-on'}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
