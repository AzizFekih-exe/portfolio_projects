import { motion } from 'framer-motion';
import { ArrowRight, Code2, Database, Terminal, MousePointer2 } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="max-w-wide" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="grid lg-grid-cols-2 gap-12 lg-gap-24 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-left"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex items-center gap-3 rounded-full px-5 py-2 bg-glass mb-8"
            style={{ width: 'fit-content', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-primary)', border: '1px solid rgba(59, 130, 246, 0.2)', textTransform: 'uppercase', letterSpacing: '0.15em' }}
          >
            <span className="animate-pulse" style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'inline-block' }}></span>
            System Protocol Active
          </motion.div>
          
          <h1 className="gradient-text">
            Engineering the <span className="hidden-mobile"></span>
            <span style={{ color: 'var(--accent-primary)' }}>Future of Data.</span>
          </h1>
          
          <p className="mb-12" style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', maxWidth: '600px' }}>
            Aziz Fekih — Specialized in high-performance API architecture and predictive Business Intelligence systems. Bridging logic and data with precision.
          </p>
          
          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="btn-primary">
              Initialize Project View <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn-secondary">
              Establish Connection
            </a>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-16 flex items-center gap-4 text-gray-500 text-xs font-bold uppercase tracking-widest"
          >
            <MousePointer2 size={14} className="animate-bounce" />
            Scroll to Explore Repository
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="relative hidden lg:block"
        >
          <div className="flex flex-col gap-6 items-center">
            {[
              {
                title: 'Core Systems & API',
                desc: 'Python • C++ • Java • REST',
                icon: <Terminal size={32} />,
                color: 'var(--accent-primary)',
                bgColor: 'rgba(59, 130, 246, 0.1)',
                borderColor: 'rgba(59, 130, 246, 0.2)',
                delay: 0
              },
              {
                title: 'Intelligence Layer',
                desc: 'BI • Data Science • Scikit-learn',
                icon: <Database size={32} />,
                color: '#a855f7',
                bgColor: 'rgba(168, 85, 247, 0.1)',
                borderColor: 'rgba(168, 85, 247, 0.2)',
                delay: 1.5
              },
              {
                title: 'Modern Interface',
                desc: 'React • TypeScript • Framer Motion',
                icon: <Code2 size={32} />,
                color: '#10b981',
                bgColor: 'rgba(16, 185, 129, 0.1)',
                borderColor: 'rgba(16, 185, 129, 0.2)',
                delay: 3
              }
            ].map((skill, i) => (
              <motion.div 
                key={i}
                animate={{ 
                  y: [0, -15, 0],
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: skill.delay 
                }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-glass futuristic-card glass-border-subtle"
                style={{ 
                  padding: '1.5rem 3rem',
                  borderRadius: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  maxWidth: '400px',
                  textAlign: 'center'
                }}
              >
                <div 
                  className="rounded-2xl p-4" 
                  style={{ 
                    backgroundColor: skill.bgColor, 
                    color: skill.color,
                    border: `1px solid ${skill.borderColor}`,
                    boxShadow: `0 0 20px ${skill.bgColor}`
                  }}
                >
                  {skill.icon}
                </div>
                <div>
                  <h3 className="mb-1 text-lg font-bold" style={{ color: 'var(--text-primary)' }}>{skill.title}</h3>
                  <p className="font-medium text-sm opacity-60" style={{ letterSpacing: '0.05em' }}>{skill.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-500/5 blur-[120px] -z-10 rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
