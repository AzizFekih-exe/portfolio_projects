import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
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
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="max-w-wide">
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Outer glass card — no overflow:hidden so top content isn't clipped */}
        <div className="bg-glass glass-border-subtle contact-card-padding" style={{ borderRadius: '2.5rem', position: 'relative' }}>
          {/* Decorative glows — inside the card but behind content */}
          <div style={{ position: 'absolute', top: 0, right: 0, width: '400px', height: '400px', background: 'rgba(59,130,246,0.04)', filter: 'blur(100px)', pointerEvents: 'none', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: 0, left: 0, width: '400px', height: '400px', background: 'rgba(139,92,246,0.04)', filter: 'blur(100px)', pointerEvents: 'none', borderRadius: '50%' }} />

          <div className="grid lg-grid-cols-2 gap-16 lg-gap-24 items-start" style={{ position: 'relative' }}>
            {/* Left — CTA Text */}
            <div>
              <h2 className="gradient-text mb-8">Ready to initiate <br />the next <span style={{color: 'var(--accent-primary)'}}>big thing?</span></h2>
              <p style={{ marginBottom: '3rem', maxWidth: '500px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                Whether it's a revolutionary API, a complex data visualization project, or a full-stack application, I'm ready to bring your vision to life.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <a href="mailto:azizfekih1010@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none' }} className="group">
                  <div style={{
                    width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem',
                    background: 'rgba(59,130,246,0.1)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#3b82f6',
                    border: '1px solid rgba(59,130,246,0.2)', flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6rem', color: '#6b7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.2rem' }}>Electronic Mail</p>
                    <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>azizfekih1010@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://linkedin.com/in/aziz-fekih-98a852312" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', textDecoration: 'none' }} className="group">
                  <div style={{
                    width: '3.25rem', height: '3.25rem', borderRadius: '0.875rem',
                    background: 'rgba(139,92,246,0.1)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', color: '#8b5cf6',
                    border: '1px solid rgba(139,92,246,0.2)', flexShrink: 0,
                    transition: 'all 0.3s ease'
                  }}>
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.6rem', color: '#6b7280', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: '0.2rem' }}>Professional Network</p>
                    <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>linkedin.com/in/aziz-fekih</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Right — Form */}
            <div>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div className="grid md-grid-cols-2 gap-6">
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Identity</label>
                    <input 
                      type="text" 
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', padding: '0.875rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Source Address</label>
                    <input 
                      type="email" 
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', padding: '0.875rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Communication Subject</label>
                  <input 
                    type="text" 
                    placeholder="What is this about?"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', padding: '0.875rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', transition: 'border-color 0.2s' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.65rem', fontWeight: 700, color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.5rem' }}>Payload Content</label>
                  <textarea 
                    placeholder="Describe your request..."
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    style={{ width: '100%', background: 'rgba(0,0,0,0.2)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '0.875rem', padding: '0.875rem 1rem', color: 'var(--text-primary)', fontSize: '0.9rem', outline: 'none', resize: 'none', transition: 'border-color 0.2s', fontFamily: 'inherit' }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '1rem', fontSize: '1rem' }}
                >
                  {status === 'loading' ? 'Sending...' : status === 'success' ? 'Message Sent' : 'Send Message'}
                  {status === 'success' ? <CheckCircle size={18} /> : status === 'error' ? <AlertCircle size={18} /> : <Send size={18} />}
                </button>

                {status === 'success' && (
                  <p style={{ color: '#10b981', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>Message sent successfully! I'll get back to you soon.</p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#f43f5e', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>Something went wrong. Please try emailing me directly.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
