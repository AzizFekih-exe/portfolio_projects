import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';
import { CheckCircle2, Cpu, Globe, Database, Code2 } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Counter = ({ value, prefix = "", suffix = "", color }: { value: number; prefix?: string; suffix?: string; color: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      animate(count, value, { duration: 2, ease: "easeOut" });
    }
  }, [isInView, count, value]);

  return (
    <motion.h3 
      ref={ref} 
      style={{ fontSize: '3rem', color: color, lineHeight: 1, marginBottom: '0.75rem' }}
    >
      {prefix}<motion.span>{rounded}</motion.span>{suffix}
    </motion.h3>
  );
};

const skills = [
  { 
    category: 'Languages', 
    icon: <Globe size={20} />, 
    items: ['Python (Expert)', 'C++', 'TypeScript', 'SQL', 'JavaScript'],
    color: 'var(--accent-primary)'
  },
  { 
    category: 'Frameworks', 
    icon: <Code2 size={20} />, 
    items: ['FastAPI', 'Flask', 'React', 'Pandas', 'Next.js'],
    color: 'var(--accent-secondary)'
  },
  { 
    category: 'Specializations', 
    icon: <Database size={20} />, 
    items: ['API Design', 'BI Platforms', 'Data Engineering', 'Cloud Arch'],
    color: '#10b981'
  },
  { 
    category: 'Tools', 
    icon: <Cpu size={20} />, 
    items: ['Docker', 'Git', 'Linux', 'Vite', 'PostgreSQL'],
    color: '#f59e0b'
  }
];

const About = () => {
  return (
    <section id="about" className="max-w-wide">
      <div className="grid lg-grid-cols-2 gap-20 lg-gap-32 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 rounded-full px-4 py-1 bg-glass mb-8" style={{ width: 'fit-content', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-primary)', border: '1px solid rgba(59, 130, 246, 0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'inline-block' }}></span>
            Identity Profile
          </div>
          <h2 className="gradient-text mb-6">Architecting Digital <br /><span style={{color: 'var(--accent-primary)'}}>Intelligence.</span></h2>
          <p className="mb-12" style={{ fontSize: '1.25rem', color: 'var(--text-secondary)' }}>
            I am a specialized developer focused on bridging the gap between sophisticated backend logic and actionable data insights. My approach combines the precision of high-performance engineering with the clarity of modern business intelligence.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mt-12">
            <motion.div whileHover={{ y: -5 }} style={{ borderRadius: '2rem' }}>
              <div className="bg-glass futuristic-card glass-border-subtle responsive-card-padding" style={{ borderRadius: '2rem', height: '100%' }}>
                <Counter value={6} suffix="+" color="var(--accent-primary)" />
                <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6b7280' }}>Advanced Systems Built</p>
              </div>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} style={{ borderRadius: '2rem' }}>
              <div className="bg-glass futuristic-card glass-border-subtle responsive-card-padding" style={{ borderRadius: '2rem', height: '100%' }}>
                <Counter value={5} prefix="Top " color="var(--accent-secondary)" />
                <p style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: '#6b7280' }}>National Hackathon Rank</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
        <div className="grid grid-cols-1 md-grid-cols-2 gap-6">
          {skills.map((skillGroup, i) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <div
                className="bg-glass futuristic-card glass-border-subtle responsive-card-padding"
                style={{
                  borderRadius: '1.5rem',
                  borderLeft: `2px solid ${skillGroup.color}`,
                  height: '100%'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                  <div style={{
                    padding: '0.5rem',
                    borderRadius: '0.625rem',
                    background: 'rgba(255,255,255,0.05)',
                    color: skillGroup.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {skillGroup.icon}
                  </div>
                  <h4 style={{ color: 'white', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
                    {skillGroup.category}
                  </h4>
                </div>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {skillGroup.items.map((skill) => (
                    <li key={skill} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', fontSize: '0.875rem', color: '#9ca3af', fontWeight: 500 }}>
                      <CheckCircle2 size={14} style={{ color: skillGroup.color, opacity: 0.7, flexShrink: 0 }} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
