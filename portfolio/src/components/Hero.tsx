import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92]);
  const y = useTransform(scrollYProgress, [0, 0.5], ['0%', '10%']);

  const taglineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.3 }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } }
  };

  const words = ['Engineering.', 'Mastered.'];

  return (
    <section
      ref={ref}
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        padding: '0 1.25rem',
        overflow: 'hidden'
      }}
    >
      {/* Ambient background glow */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.04) 0%, transparent 70%)'
      }} />

      <motion.div
        style={{ opacity, scale, y, position: 'relative', zIndex: 1, maxWidth: '900px', width: '100%', paddingBottom: '5rem' }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--text-secondary)',
            border: '1px solid var(--glass-border)', borderRadius: '9999px',
            padding: '0.5rem 1rem', marginBottom: '2.5rem',
            background: 'var(--card-bg)', transition: 'background-color 0.4s ease'
          }}
        >
          <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#30d158', display: 'inline-block', boxShadow: '0 0 6px #30d158' }} />
          Available for new opportunities
        </motion.div>

        {/* Main headline */}
        <motion.div
          variants={taglineVariants}
          initial="hidden"
          animate="visible"
          style={{ overflow: 'hidden', marginBottom: '1rem' }}
        >
          <div style={{ display: 'flex', gap: '0.4em', justifyContent: 'center', flexWrap: 'wrap' }}>
            {words.map((word, i) => (
              <motion.span
                key={i}
                variants={wordVariants}
                style={{
                  display: 'inline-block',
                  fontSize: 'clamp(3.5rem, 12vw, 9rem)',
                  fontWeight: 800,
                  lineHeight: 1.02,
                  letterSpacing: '-0.04em',
                  color: i === 0 ? 'var(--text-primary)' : 'var(--text-secondary)'
                }}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: 'easeOut' }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.3rem)',
            color: 'var(--text-secondary)',
            maxWidth: '560px',
            margin: '0 auto 3rem',
            lineHeight: 1.6,
            fontWeight: 400
          }}
        >
          Full-stack developer & BI analyst with a focus on cybersecurity and AI. Building secure systems that think, scale, and illuminate data.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6, ease: 'easeOut' }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <a href="#projects" className="btn-primary" style={{
            background: 'var(--btn-primary-bg)',
            color: 'var(--btn-primary-text)',
            padding: '0.9rem 2rem',
            borderRadius: '9999px',
            fontWeight: 600,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            View Projects <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-secondary" style={{
            background: 'transparent',
            color: 'var(--text-primary)',
            padding: '0.9rem 2rem',
            borderRadius: '9999px',
            fontWeight: 500,
            fontSize: '0.95rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            border: '1px solid var(--glass-border)',
            transition: 'all 0.3s ease'
          }}>
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.35rem',
          color: 'var(--text-secondary)',
          fontSize: '0.65rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          fontWeight: 600
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={16} />
        </motion.div>
        Scroll
      </motion.div>
    </section>
  );
};

export default Hero;
