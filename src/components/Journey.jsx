import { motion } from 'framer-motion';
import { School, Terminal, Code, Cpu, Rocket, BookOpen } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { journeyMilestones } from '../data/journey';
import '../styles/Journey.css';

const iconList = [School, Terminal, Code, Cpu, Rocket, BookOpen];

export default function Journey() {
  return (
    <section id="journey" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 04. JOURNEY"
          title="My Journey."
          subtitle="Key academic checkpoints, self-directed milestones, and my path toward full-stack engineering."
        />

        <div className="journey-timeline-wrapper">
          {/* Timeline background gradient line */}
          <div className="timeline-vertical-line" />

          {journeyMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = iconList[index % iconList.length];

            return (
              <motion.div
                key={milestone.id}
                className={`timeline-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Node point */}
                <div className="timeline-node">
                  <div className="timeline-node-inner" />
                </div>

                {/* Milestone Content Card */}
                <div className="glass-panel timeline-content-card">
                  <div className="timeline-meta-row">
                    <span className="timeline-period-badge">{milestone.period}</span>
                    <span className="timeline-highlight-label">
                      {milestone.highlight}
                    </span>
                  </div>

                  <h3 className="timeline-milestone-title">{milestone.title}</h3>

                  <div className="timeline-institution">
                    <IconComponent size={14} />
                    <span>{milestone.institution}</span>
                  </div>

                  <p className="timeline-desc">{milestone.description}</p>

                  <div className="timeline-skill-chips">
                    {milestone.skills.map((skill) => (
                      <span key={skill} className="tech-tag" style={{ fontSize: '0.72rem', padding: '2px 8px' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

