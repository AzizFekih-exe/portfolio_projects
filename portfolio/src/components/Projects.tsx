import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Database, Layers, Home, Shield, School } from 'lucide-react';

const projects = [
  {
    title: 'BoycottAPI',
    description: 'A high-performance API infrastructure built for automated data filtering and organizational compliance. Implemented using Python and C++ for optimal speed.',
    tech: ['Python', 'C++', 'REST', 'Cython'],
    github: 'https://github.com/AzizFekih-exe/BoycottAPI',
    icon: <Database size={24} />
  },
  {
    title: 'Shein Fashion BI',
    description: 'Business Intelligence platform for analyzing global fashion assortments. Features data processing pipelines and visualization of market trends.',
    tech: ['Python', 'Jupyter', 'Pandas', 'Data Science'],
    github: 'https://github.com/AzizFekih-exe/shein-fashion-assortment-bi',
    icon: <Layers size={24} />
  },
  {
    title: 'Modern Portfolio',
    description: 'A high-end, responsive portfolio website showcasing IT projects with professional grade animations and design patterns.',
    tech: ['React', 'TypeScript', 'Framer Motion', 'Vite'],
    github: 'https://github.com/AzizFekih-exe',
    icon: <Code size={24} />
  },
  {
    title: 'Smart Home Controller',
    description: 'A comprehensive Java-based smart home management system featuring room organization, automated device control, and real-time energy monitoring.',
    tech: ['Java', 'OOP', 'Automation', 'Energy Monitoring'],
    github: 'https://github.com/AzizFekih-exe/Smart-Home-Project--patch-1.1-',
    icon: <Home size={24} />
  },
  {
    title: "SOS Children's Village Management",
    description: 'An AI-powered incident reporting and management platform for SOS Villages. Features automated urgency classification using Scikit-learn and real-time notifications.',
    tech: ['Django', 'Python', 'Scikit-learn', 'AI'],
    github: 'https://github.com/Molka5/SOS-village-Hackathon',
    icon: <Shield size={24} />
  },
  {
    title: "TED University Executive Education",
    description: "Developed a professional executive education platform for TED University. Features include multilingual support (i18n), responsive design with Tailwind CSS, and fluid animations for an enhanced learning experience.",
    tech: ['React', 'TypeScript', 'Tailwind', 'i18next'],
    github: 'https://github.com/AzizFekih-exe/Ted-University-Executive-Education',
    icon: <School size={24} />
  }
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-wide text-center lg-text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 rounded-full px-4 py-1 bg-glass mb-8" style={{ width: 'fit-content', fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent-primary)', border: '1px solid rgba(59, 130, 246, 0.2)', textTransform: 'uppercase', letterSpacing: '0.15em', margin: '0 auto lg:0' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-primary)', display: 'inline-block' }}></span>
            Project Repositories
          </div>
        <h2 className="gradient-text">Featured <span style={{color: 'var(--accent-primary)'}}>Systems.</span></h2>
        
        <div className="grid md-grid-cols-2 lg-grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div
                className="bg-glass futuristic-card glass-border-subtle"
                style={{
                  padding: '2rem 1.75rem 1.5rem',
                  borderRadius: '1.5rem',
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  textAlign: 'left'
                }}
              >
                <div>
                  {/* Icon */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '0.875rem',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: '#3b82f6',
                    marginBottom: '1.25rem',
                    border: '1px solid rgba(59, 130, 246, 0.15)'
                  }}>
                    {project.icon}
                  </div>

                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.6rem' }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', lineHeight: 1.7, color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{
                        padding: '0.2rem 0.65rem',
                        borderRadius: '9999px',
                        fontSize: '0.6rem',
                        fontWeight: 800,
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        background: 'rgba(255,255,255,0.04)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--glass-border)'
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1rem' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="nav-social-icon" style={{ fontSize: '0.8rem', gap: '0.4rem', textDecoration: 'none', fontWeight: 700 }}>
                    <Github size={15} /> Source
                  </a>
                  <a href="#" className="nav-social-icon" style={{ fontSize: '0.8rem', gap: '0.4rem', textDecoration: 'none', fontWeight: 700 }}>
                    <ExternalLink size={15} /> Prototype
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
