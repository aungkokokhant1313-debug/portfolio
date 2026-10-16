import { motion } from 'framer-motion';
import {
  FileCode2,
  Palette,
  Code2,
  Atom,
  Server,
  Cpu,
  Terminal,
  Braces,
  Database,
  FileJson,
  GitBranch,
  Laptop,
  CheckCircle2,
  Sparkles,
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
  Server,
  Cpu,
  Terminal,
  Braces,
  Database,
  FileJson,
  GitBranch,
  Github: GithubIcon,
  Laptop,
};

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
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
          index="// 02. SKILLS"
          title="My Tech Stack."
          subtitle="Technologies and developer tools I utilize in coursework, personal projects, and continuous learning."
        />

        <motion.div
          className="skills-categories-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.id}
              className="glass-panel skills-category-card"
              variants={cardVariants}
            >
              <div className="category-header">
                <h3 className="category-title">{category.title}</h3>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--color-accent-primary)',
                    background: 'var(--color-bg-badge)',
                    padding: '3px 8px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--color-border-subtle)',
                  }}
                >
                  {category.skills.length} TECHNOLOGIES
                </span>
              </div>

              <p className="category-desc">{category.description}</p>

              <div className="skills-items-grid">
                {category.skills.map((skill) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  const isLearning = skill.status === 'Currently Learning';

                  return (
                    <div key={skill.name} className="skill-pill">
                      <div className="skill-pill-top">
                        <div className="skill-pill-name">
                          <IconComponent size={16} color="var(--color-accent-primary)" />
                          <span>{skill.name}</span>
                        </div>
                        <span
                          className={`status-badge ${isLearning ? 'learning' : 'handson'}`}
                        >
                          {isLearning ? 'Learning' : 'Hands-on'}
                        </span>
                      </div>
                      <p className="skill-pill-desc">{skill.experience}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="skills-legend">
          <div className="legend-item">
            <CheckCircle2 size={15} color="var(--color-accent-primary)" />
            <span>
              <strong style={{ color: 'var(--color-text-primary)' }}>Hands-on:</strong> Applied in
              projects & coursework
            </span>
          </div>
          <div className="legend-item">
            <Sparkles size={15} color="var(--color-accent-secondary)" />
            <span>
              <strong style={{ color: 'var(--color-text-primary)' }}>Learning:</strong> Active study
              & backend progression
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
