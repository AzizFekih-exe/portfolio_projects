import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ScrollGallery from './ScrollGallery';

const Projects = () => {
  // We show a featured bento grid of 5 and a scroll gallery for the rest
  const featured = projects.slice(0, 5);
  const rest = projects.slice(5);

  return (
    <section id="projects" style={{ padding: '7rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
      >
        {/* Section label */}
        <div style={{
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--text-secondary)',
          marginBottom: '1.5rem'
        }}>
          Project Repositories
        </div>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 700,
          letterSpacing: '-0.035em', lineHeight: 1.05,
          color: 'var(--text-primary)', marginBottom: '3rem'
        }}>
          Featured Systems.
        </h2>

        {/* --- BENTO GRID (featured 5) --- */}
        {/*
          Layout (2-col grid, rows auto):
          Row 1: [BoycottAPI WIDE - spans 2]
          Row 2: [Shein BI] [GreenRoute-AI]
          Row 3: [MeetWise] [Ransomware WIDE spans 2 → becomes row 3 col 1-2]
          We manually assign grid positions for perfect fit.
        */}
        <div className="bento-grid">
          {featured.map((project, index) => {
            const isWide = project.span === 'wide';
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: index * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
                whileHover={{ scale: 1.015 }}
                className={`bento-grid-item ${isWide ? 'wide' : ''}`}
                style={{
                  borderRadius: '2rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--glass-border)',
                  overflow: 'hidden',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s, background-color 0.3s',
                }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--card-hover-border)')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)')}
              >
                {/* Clickable overlay for routing */}
                <Link
                  to={`/project/${project.id}`}
                  style={{ position: 'absolute', inset: 0, zIndex: 2 }}
                  aria-label={`View ${project.title}`}
                />

                {/* Image */}
                {project.image && (
                  <div
                    className="card-image"
                    style={{
                      backgroundImage: `url(${project.image})`,
                    }}
                  />
                )}

                {/* Bottom gradient */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'var(--card-gradient)',
                  pointerEvents: 'none'
                }} />

                {/* Accent glow */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `radial-gradient(ellipse 70% 50% at 50% 100%, ${project.accent}18 0%, transparent 70%)`,
                  pointerEvents: 'none'
                }} />

                {/* Content */}
                <div style={{ position: 'relative', padding: '2rem', zIndex: 1 }}>
                  <div style={{
                    width: '22px', height: '2px', borderRadius: '2px',
                    backgroundColor: project.accent, marginBottom: '0.75rem'
                  }} />
                  <h3 style={{
                    fontSize: 'clamp(1rem, 2vw, 1.3rem)', fontWeight: 600,
                    color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '0.4rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '0.875rem', color: 'rgba(255,255,255,0.72)',
                    lineHeight: 1.5, marginBottom: '1.25rem',
                    maxWidth: isWide ? '540px' : '320px'
                  }}>
                    {project.description}
                  </p>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {/* Tech tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {project.tech.map(t => (
                        <span key={t} style={{
                          padding: '0.2rem 0.6rem', borderRadius: '9999px',
                          fontSize: '0.6rem', fontWeight: 600,
                          textTransform: 'uppercase', letterSpacing: '0.06em',
                          background: 'rgba(255,255,255,0.12)',
                          color: 'rgba(255,255,255,0.85)',
                          border: '1px solid rgba(255,255,255,0.18)'
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links — stop propagation so they don't clash with the Link overlay */}
                    <div style={{ display: 'flex', gap: '1rem', zIndex: 3, position: 'relative' }}>
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                      >
                        <Github size={13} /> Source
                      </a>
                      <Link to={`/project/${project.id}`}
                        onClick={e => e.stopPropagation()}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={e => (e.currentTarget.style.color = '#ffffff')}
                        onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                      >
                        <ExternalLink size={13} /> Details
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* --- HORIZONTAL SCROLL GALLERY (remaining projects) --- */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '2rem', flexWrap: 'wrap', gap: '0.5rem' }}>
            <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--text-primary)' }}>
              More Projects
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Scroll gallery — outside the motion div so it fills edge-to-edge */}
      <div style={{ marginLeft: '-1.5rem', marginRight: '-1.5rem' }}>
        <ScrollGallery projects={rest} />
      </div>
    </section>
  );
};

export default Projects;
