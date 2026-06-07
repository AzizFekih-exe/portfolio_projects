import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const skills = [
  { category: 'Languages', items: ['Python', 'C++', 'TypeScript', 'SQL', 'JavaScript', 'Kotlin'] },
  { category: 'Frameworks', items: ['FastAPI', 'Flask', 'React', 'Django', 'Next.js', 'Pandas'] },
  { category: 'Specializations', items: ['API Design', 'BI Platforms', 'Data Engineering', 'AI Systems'] },
  { category: 'Tools', items: ['Docker', 'Git', 'Linux', 'PostgreSQL', 'Vite', 'Scikit-learn'] },
];

const stats = [
  { value: '9+', label: 'Projects Shipped' },
  { value: 'Top 5', label: 'National Hackathon' },
  { value: '5+', label: 'Years Coding' },
  { value: '∞', label: 'Curiosity' },
];

const About = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} id="about" style={{ padding: '7rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--text-secondary)',
          marginBottom: '1.5rem'
        }}
      >
        Identity Profile
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 700,
          letterSpacing: '-0.035em',
          lineHeight: 1.05,
          color: 'var(--text-primary)',
          marginBottom: '5rem'
        }}
      >
        Architecting Digital<br />
        <span style={{ color: 'var(--text-secondary)' }}>Intelligence.</span>
      </motion.h2>

      {/* Two-column layout */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '4rem',
        marginBottom: '5rem'
      }}>
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
            marginBottom: '1.5rem'
          }}>
            I'm a specialized developer focused on bridging sophisticated backend logic with actionable data insights. My approach combines the precision of high-performance engineering with clarity of modern business intelligence.
          </p>
          <p style={{
            fontSize: 'clamp(1rem, 1.5vw, 1.2rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.75,
          }}>
            From writing optimized C++ for API pipelines to building predictive BI dashboards — I ship systems that are both technically rigorous and immediately useful.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            border: '1px solid var(--glass-border)',
            borderRadius: '2rem',
            overflow: 'hidden',
            background: 'var(--glass-border)'
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '2rem 1.5rem',
                background: 'var(--card-bg)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.35rem',
                transition: 'background-color 0.3s'
              }}
            >
              <span style={{
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                fontWeight: 700,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                lineHeight: 1
              }}>
                {stat.value}
              </span>
              <span style={{
                fontSize: '0.65rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-secondary)'
              }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Skills Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: '1rem'
      }}>
        {skills.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
            className="bento-card"
            style={{ padding: '1.75rem' }}
          >
            <div style={{
              fontSize: '0.65rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: 'var(--text-secondary)', marginBottom: '1.25rem'
            }}>
              {group.category}
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {group.items.map(item => (
                <li key={item} style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-primary)',
                  fontWeight: 400,
                  listStyle: 'none'
                }}>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
