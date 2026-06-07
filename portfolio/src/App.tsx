import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ProjectDetail from './pages/ProjectDetail';

// Scroll manager for SPA route hashes and scroll to top on navigation
const ScrollToHashElement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Home page layout
const Home = () => (
  <main>
    <Hero />
    <About />
    <Projects />
    <Contact />
  </main>
);

function App() {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const [showScrollTop, setShowScrollTop] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowScrollTop(latest > 500);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <ScrollToHashElement />
      {/* Scroll progress indicator */}
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'rgba(255,255,255,0.35)',
          transformOrigin: '0%',
          zIndex: 100
        }}
      />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>

      <footer style={{ padding: '3rem 1.5rem', borderTop: '1px solid var(--divider)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', fontWeight: 400 }}>© 2026 Aziz Fekih. Built with precision.</p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <a href="https://github.com/AzizFekih-exe" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>GitHub</a>
            <a href="https://linkedin.com/in/aziz-fekih-98a852312" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', textDecoration: 'none', transition: 'color 0.2s' }} onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')} onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}>LinkedIn</a>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: '2rem',
              right: '2rem',
              zIndex: 99,
              width: '3rem',
              height: '3rem',
              borderRadius: '50%',
              background: 'var(--glass-bg)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              boxShadow: 'var(--card-shadow)',
              transition: 'background-color 0.2s, border-color 0.2s'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-hover-border)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = 'var(--glass-bg)';
              (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
            }}
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
