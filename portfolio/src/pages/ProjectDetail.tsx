import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import ScrollGallery from '../components/ScrollGallery';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1.5rem' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#f5f5f7' }}>Project not found</h1>
        <Link to="/" style={{ color: '#86868b', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </div>
    );
  }

  // Other projects for the scroll gallery at the bottom
  const otherProjects = projects.filter(p => p.id !== project.id);

  return (
    <div style={{ background: 'var(--bg-primary)', minHeight: '100vh', paddingTop: '5rem', transition: 'background-color 0.4s ease' }}>
      {/* Back nav */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '2.5rem 1.5rem 0' }}>
        <Link
          to="/#projects"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--text-secondary)', textDecoration: 'none', fontSize: '0.9rem',
            fontWeight: 500, transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
        >
          <ArrowLeft size={16} /> All Projects
        </Link>
      </div>

      {/* Hero */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '3rem 1.5rem 5rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Label */}
          <div style={{
            fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
            textTransform: 'uppercase', color: 'var(--text-secondary)', marginBottom: '1.5rem'
          }}>
            Case Study
          </div>

          {/* Title */}
          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.02,
            color: 'var(--text-primary)',
            marginBottom: '2rem'
          }}>
            {project.title}
          </h1>

          {/* Description */}
          <p style={{
            fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
            color: 'var(--text-secondary)',
            maxWidth: '640px',
            lineHeight: 1.65,
            marginBottom: '3rem'
          }}>
            {project.description}
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--btn-primary-bg)', color: 'var(--btn-primary-text)',
                padding: '0.85rem 1.75rem', borderRadius: '9999px',
                fontWeight: 600, fontSize: '0.9rem', textDecoration: 'none',
                transition: 'background 0.2s'
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--btn-primary-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--btn-primary-bg)')}
            >
              <Github size={16} /> View Source
            </a>
            <a
              href="#"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                background: 'var(--btn-secondary-bg)', color: 'var(--btn-secondary-text)',
                padding: '0.85rem 1.75rem', borderRadius: '9999px',
                fontWeight: 500, fontSize: '0.9rem', textDecoration: 'none',
                border: '1px solid var(--btn-secondary-border)',
                transition: 'border-color 0.2s, background 0.2s'
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--btn-secondary-hover)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'var(--btn-secondary-bg)'; }}
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </div>

          {/* Hero image — full width cinematic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: '100%',
              aspectRatio: '16/9',
              borderRadius: '1.75rem',
              overflow: 'hidden',
              border: '1px solid var(--glass-border)',
              position: 'relative',
              background: 'var(--card-bg)',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* Color tint overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${project.accent}12 0%, transparent 60%)`,
              pointerEvents: 'none'
            }} />
          </motion.div>
        </motion.div>
      </section>

      {/* Content: highlights + long description */}
      <section style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem 7rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '3rem',
          alignItems: 'start'
        }}>
          {/* Stats / Highlights */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Highlights grid */}
            <div style={{
              display: 'grid', gridTemplateColumns: '1fr 1fr',
              gap: '1px', border: '1px solid var(--glass-border)',
              borderRadius: '1.5rem', overflow: 'hidden',
              background: 'var(--glass-border)',
              marginBottom: '2rem'
            }}>
              {project.highlights.map((h, i) => (
                <div key={i} style={{ padding: '1.5rem', background: 'var(--card-bg)', display: 'flex', flexDirection: 'column', gap: '0.3rem', transition: 'background-color 0.3s' }}>
                  <span style={{ fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)' }}>
                    {h.label}
                  </span>
                  <span style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                    {h.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech stack */}
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                Tech Stack
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {project.tech.map(t => (
                  <span key={t} style={{
                    padding: '0.35rem 0.9rem',
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    background: 'var(--tag-bg)',
                    color: 'var(--text-primary)',
                    border: '1px solid var(--tag-border)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Long description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.12em', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Overview
            </p>
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
            }}>
              {project.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accent divider */}
      <div style={{ width: '100%', height: '1px', background: 'var(--divider)', margin: '0' }} />

      {/* More Projects horizontal gallery */}
      <section style={{ padding: '6rem 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 1.5rem', marginBottom: '2.5rem' }}>
          <p style={{ fontSize: '0.7rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
            More Projects
          </p>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, letterSpacing: '-0.035em', color: 'var(--text-primary)' }}>
            Keep exploring.
          </h2>
        </div>
        <ScrollGallery projects={otherProjects} />
      </section>
    </div>
  );
};

export default ProjectDetail;
