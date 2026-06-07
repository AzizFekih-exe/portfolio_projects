import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '/#home' },
    { name: 'About', href: '/#about' },
    { name: 'Projects', href: '/#projects' },
    { name: 'Contact', href: '/#contact' }
  ];

  return (
    <>
      <nav className="fixed w-full z-50 navbar-container">
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div className="flex items-center justify-between" style={{ height: '4rem' }}>
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                fontWeight: 700,
                fontSize: '1rem',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                textDecoration: 'none',
                whiteSpace: 'nowrap'
              }}
            >
              Aziz Fekih
            </motion.a>

            {/* Desktop nav — centered pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="nav-links"
              style={{
                background: 'rgba(28, 28, 30, 0.75)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '9999px',
                padding: '0.4rem 0.75rem',
                gap: '0.25rem'
              }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>

            {/* Right side */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <button
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </button>

              <div className="hidden-mobile flex items-center gap-4">
                <a href="https://github.com/AzizFekih-exe" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a href="https://linkedin.com/in/aziz-fekih-98a852312" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
              </div>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="menu-btn"
                aria-label="Toggle menu"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '9999px',
                  background: isOpen ? 'rgba(255,255,255,0.1)' : 'transparent',
                  border: '1px solid rgba(255,255,255,0.08)',
                  transition: 'all 0.2s'
                }}
              >
                {isOpen
                  ? <X size={18} />
                  : (
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <rect x="2" y="5" width="14" height="1.5" rx="0.75" fill="currentColor" />
                      <rect x="2" y="11.5" width="14" height="1.5" rx="0.75" fill="currentColor" />
                    </svg>
                  )
                }
              </button>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="mobile-menu"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="mobile-nav-link"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                className="flex gap-8 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.3 }}
              >
                <a href="https://github.com/AzizFekih-exe" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/aziz-fekih-98a852312" target="_blank" rel="noopener noreferrer" className="nav-social-icon">
                  <Linkedin size={22} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
