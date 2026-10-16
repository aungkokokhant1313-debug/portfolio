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
          index="// 04. MILESTONES"
          title="Development Journey."
          subtitle="From computer science foundations at UIT Yangon to creative full-stack development."
        />

        <div className="journey-timeline-artistic">
          {/* Luminous Timeline Track */}
          <div className="timeline-glow-line" />

          {journeyMilestones.map((milestone, index) => {
            const isEven = index % 2 === 0;
            const IconComponent = iconList[index % iconList.length];

            return (
              <motion.div
                key={milestone.id}
                className={`timeline-art-item ${isEven ? 'left' : 'right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.08 * index, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Node point */}
                <div className="timeline-art-node">
                  <div className="timeline-art-node-core" />
                </div>

                {/* Milestone Card */}
                <div className="timeline-art-card">
                  <div className="timeline-card-header">
                    <span className="timeline-period-art">{milestone.period}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {milestone.highlight}
                    </span>
                  </div>

                  <h3 className="timeline-title-art">{milestone.title}</h3>

                  <div className="timeline-inst-art">
                    <IconComponent size={14} />
                    <span>{milestone.institution}</span>
                  </div>

                  <p className="timeline-desc-art">{milestone.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
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
