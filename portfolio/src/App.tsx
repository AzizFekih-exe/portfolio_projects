import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="app-container">
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'var(--accent-primary)',
          transformOrigin: '0%',
          zIndex: 100
        }}
      />
      
      <Navbar />
      
      <main style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer style={{ padding: '4rem 2rem', borderTop: '1px solid var(--glass-border)', marginTop: '4rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'between', alignItems: 'center' }} className="flex justify-between items-center">
          <p className="text-gray-400 text-sm">© 2026 Aziz Fekih. Built with passion and precision.</p>
          <div className="flex gap-6">
            <a href="https://github.com/AzizFekih-exe" className="text-gray-400 hover:text-white transition-colors text-sm">GitHub</a>
            <a href="https://linkedin.com/in/aziz-fekih-98a852312" className="text-gray-400 hover:text-white transition-colors text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
