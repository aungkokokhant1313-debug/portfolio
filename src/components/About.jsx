import { motion } from 'framer-motion';
import { GraduationCap, Code2, Compass, CheckCircle2 } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { aboutData } from '../data/aboutData';
import '../styles/About.css';

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <div className="container">
        <SectionHeading
          index="// 01. ABOUT ME"
          title="About Me."
          subtitle="A concise overview of my background, education, and current technical pursuits."
        />

        <div className="about-balanced-grid">
          {/* Left Column: Headline, Intro & Education Card */}
          <motion.div
            className="about-intro-column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Headline */}
            <h3 className="about-main-headline">
              Learning. Building. <span>Innovating.</span>
            </h3>

            {/* Short Introduction */}
            <p className="about-main-intro">
              {aboutData.intro}
            </p>

            {/* Education Card */}
            <div className="about-compact-card education-card">
              <div className="card-header-row">
                <div className="card-icon-box lime">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className="card-title">{aboutData.education.title}</h4>
                  <span className="card-sub-badge">Undergraduate Study</span>
                </div>
              </div>

              <div className="education-details-list">
                <div className="edu-detail-row">
                  <span className="edu-label">University</span>
                  <span className="edu-value">{aboutData.education.university}</span>
                </div>
                <div className="edu-detail-row">
                  <span className="edu-label">Current Status</span>
                  <span className="edu-value highlight">{aboutData.education.status}</span>
                </div>
                <div className="edu-detail-row">
                  <span className="edu-label">Degree</span>
                  <span className="edu-value muted">{aboutData.education.degreeNote}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Focus & Skills Cards */}
          <motion.div
            className="about-cards-column"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {/* Current Focus: What I'm Exploring */}
            <div className="about-compact-card focus-card">
              <div className="card-header-row">
                <div className="card-icon-box purple">
                  <Compass size={20} />
                </div>
                <h4 className="card-title">{aboutData.exploring.title}</h4>
              </div>

              <ul className="exploring-bullets-list">
                {aboutData.exploring.points.map((point) => (
                  <li key={point} className="exploring-bullet-item">
                    <CheckCircle2 size={16} className="bullet-check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills & Learning Card */}
            <div className="about-compact-card skills-card">
              <div className="card-header-row">
                <div className="card-icon-box cyan">
                  <Code2 size={20} />
                </div>
                <h4 className="card-title">Skills & Learning</h4>
              </div>

              <div className="skills-learning-rows">
                {aboutData.skillsLearning.map((group) => (
                  <div key={group.category} className="skills-learning-row">
                    <span className="skills-category-name">{group.category}</span>
                    <div className="skills-chip-wrap">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`skill-compact-chip ${group.tagColor === 'purple' ? 'learning' : 'ready'}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
