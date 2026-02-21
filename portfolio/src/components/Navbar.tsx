import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Linkedin, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <>
      <nav className="fixed w-full z-50 bg-glass navbar-container">
        <div className="max-w-wide" style={{ padding: '0 1.5rem' }}>
          <div className="flex items-center justify-between" style={{ height: '5rem' }}>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="navbar-logo"
              style={{ fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.05em', color: 'var(--text-primary)' }}
            >
              AZIZ<span className="text-blue-500"> </span>FEKIH
            </motion.div>
            
            <div className="nav-links">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4 lg:gap-6">
              <button 
                onClick={toggleTheme}
                className="theme-toggle"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              
              <div className="hidden-mobile flex items-center gap-4">
                <a href="https://github.com/AzizFekih-exe" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="GitHub">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/aziz-fekih-98a852312" target="_blank" rel="noopener noreferrer" className="nav-social-icon" aria-label="LinkedIn">
                  <Linkedin size={20} />
                </a>
              </div>

              <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="menu-btn"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu — outside <nav> to avoid backdrop-filter containing block issue */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="mobile-menu"
          >
            <div className="flex flex-col gap-8 items-center">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.div
                className="flex gap-8 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32, duration: 0.3 }}
              >
                <a href="https://github.com/AzizFekih-exe" target="_blank" rel="noopener noreferrer" className="nav-social-icon scale-125">
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/aziz-fekih-98a852312" target="_blank" rel="noopener noreferrer" className="nav-social-icon scale-125">
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
