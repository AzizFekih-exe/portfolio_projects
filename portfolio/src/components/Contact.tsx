import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin, ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';

const Contact = () => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--input-bg)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.875rem',
    padding: '0.875rem 1.1rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'border-color 0.2s, background-color 0.2s',
    fontFamily: 'inherit',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.65rem',
    fontWeight: 700,
    color: 'var(--text-secondary)',
    textTransform: 'uppercase',
    letterSpacing: '0.12em',
    marginBottom: '0.5rem',
  };

  return (
    <section ref={ref} id="contact" style={{ padding: '7rem 1.5rem', maxWidth: '1200px', margin: '0 auto' }}>
      {/* Section label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em',
          textTransform: 'uppercase', color: 'var(--text-secondary)',
          marginBottom: '1.5rem'
        }}
      >
        Get In Touch
      </motion.div>

      {/* Headline */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 700,
          letterSpacing: '-0.035em',
          lineHeight: 1.05,
          color: 'var(--text-primary)',
          marginBottom: '5rem'
        }}
      >
        Ready to build<br />
        <span style={{ color: 'var(--text-secondary)' }}>something great?</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
        {/* Left: contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '400px' }}>
            Whether it's a revolutionary API, a data intelligence system, or a full-stack app — I'm ready to bring your vision to life.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Email */}
            <a
              href="mailto:azizfekih1010@gmail.com"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1.25rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              } as React.CSSProperties}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-hover-border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--card-bg)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem',
                  background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', border: '1px solid var(--glass-border)'
                }}>
                  <Mail size={16} color="var(--text-secondary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem' }}>Email</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>azizfekih1010@gmail.com</p>
                </div>
              </div>
              <ArrowUpRight size={16} color="var(--text-secondary)" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/aziz-fekih-98a852312"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '1.25rem 1.5rem',
                background: 'var(--card-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1.25rem',
                textDecoration: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-hover-border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--bg-tertiary)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
                (e.currentTarget as HTMLElement).style.background = 'var(--card-bg)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '2.5rem', height: '2.5rem', borderRadius: '0.625rem',
                  background: 'var(--bg-tertiary)', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', border: '1px solid var(--glass-border)'
                }}>
                  <Linkedin size={16} color="var(--text-secondary)" />
                </div>
                <div>
                  <p style={{ fontSize: '0.6rem', color: 'var(--text-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.15rem' }}>LinkedIn</p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 500 }}>linkedin.com/in/aziz-fekih</p>
                </div>
              </div>
              <ArrowUpRight size={16} color="var(--text-secondary)" />
            </a>
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
            <div>
              <label style={labelStyle}>Name</label>
              <input
                type="text" placeholder="Your Name" required
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                style={inputStyle}
              />
            </div>
            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email" placeholder="your@email.com" required
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                style={inputStyle}
              />
            </div>
          </div>

          <div>
            <label style={labelStyle}>Subject</label>
            <input
              type="text" placeholder="What is this about?" required
              value={formData.subject}
              onChange={e => setFormData({ ...formData, subject: e.target.value })}
              style={inputStyle}
            />
          </div>

          <div>
            <label style={labelStyle}>Message</label>
            <textarea
              placeholder="Describe your project or request..."
              required rows={5}
              value={formData.message}
              onChange={e => setFormData({ ...formData, message: e.target.value })}
              style={{ ...inputStyle, resize: 'none' }}
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            style={{
              background: 'var(--btn-primary-bg)',
              color: 'var(--btn-primary-text)',
              padding: '0.9rem 2rem',
              borderRadius: '9999px',
              fontWeight: 600,
              fontSize: '0.95rem',
              border: 'none',
              cursor: status === 'loading' ? 'not-allowed' : 'pointer',
              opacity: status === 'loading' ? 0.7 : 1,
              transition: 'all 0.3s ease',
              fontFamily: 'inherit',
              alignSelf: 'flex-start'
            }}
            onMouseEnter={e => status !== 'loading' && ((e.currentTarget as HTMLElement).style.background = 'var(--btn-primary-hover)')}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = 'var(--btn-primary-bg)')}
          >
            {status === 'loading' ? 'Sending…' : status === 'success' ? 'Message Sent ✓' : 'Send Message'}
          </button>

          {status === 'error' && (
            <p style={{ color: '#ff453a', fontSize: '0.85rem', fontWeight: 500 }}>
              Something went wrong. Please email me directly.
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
