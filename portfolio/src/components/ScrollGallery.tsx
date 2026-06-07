import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import type { Project } from '../data/projects';

interface Props {
  projects: Project[];
}

const CARD_WIDTH = 340;
const CARD_GAP = 16;

const ScrollGallery = ({ projects }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const isMouseDown = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);
  const dragMoved = useRef(false);

  // Repeat the projects 3 times to allow infinite loop scrolling
  const repeatedProjects = [...projects, ...projects, ...projects];

  // Scroll to a specific project in the middle set
  const scrollTo = (index: number) => {
    if (!trackRef.current || projects.length === 0) return;
    const oneSetWidth = projects.length * (CARD_WIDTH + CARD_GAP);
    const offset = oneSetWidth + index * (CARD_WIDTH + CARD_GAP);
    trackRef.current.scrollTo({ left: offset, behavior: 'smooth' });
  };

  // Initialize scroll position to the start of the middle set
  useEffect(() => {
    const el = trackRef.current;
    if (!el || projects.length === 0) return;
    const oneSetWidth = projects.length * (CARD_WIDTH + CARD_GAP);
    el.scrollLeft = oneSetWidth;
  }, [projects.length]);

  const handleScroll = () => {
    const el = trackRef.current;
    if (!el || projects.length === 0) return;

    const oneSetWidth = projects.length * (CARD_WIDTH + CARD_GAP);
    const currentScroll = el.scrollLeft;

    // Wrap scroll position infinitely
    if (currentScroll >= oneSetWidth * 2) {
      // Scrolled into the 3rd set -> jump back to corresponding spot in the middle set
      el.scrollLeft = currentScroll - oneSetWidth;
    } else if (currentScroll <= oneSetWidth - (CARD_WIDTH + CARD_GAP) * 2) {
      // Scrolled too far left into 1st set -> jump forward to middle set
      el.scrollLeft = currentScroll + oneSetWidth;
    }

    // Calculate active index relative to the middle set
    const normalizedScroll = el.scrollLeft - oneSetWidth + (CARD_WIDTH + CARD_GAP) / 2;
    const idx = Math.floor(normalizedScroll / (CARD_WIDTH + CARD_GAP));
    const wrappedIdx = ((idx % projects.length) + projects.length) % projects.length;
    setActiveIndex(wrappedIdx);
  };

  // Drag handlers for grab-to-swipe
  const onMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isMouseDown.current = true;
    setIsDragging(true);
    startX.current = e.pageX - trackRef.current.offsetLeft;
    scrollLeftStart.current = trackRef.current.scrollLeft;
    dragMoved.current = false;
    trackRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !trackRef.current) return;
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5; // Drag speed multiplier
    if (Math.abs(walk) > 5) {
      dragMoved.current = true;
    }
    trackRef.current.scrollLeft = scrollLeftStart.current - walk;
  };

  const onMouseUp = () => {
    isMouseDown.current = false;
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const onMouseLeave = () => {
    isMouseDown.current = false;
    setIsDragging(false);
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
    }
  };

  const handleLinkClick = (e: React.MouseEvent) => {
    if (dragMoved.current) {
      // Prevent detail page navigation if the user dragged/swiped the track
      e.preventDefault();
    }
  };

  if (projects.length === 0) return null;

  return (
    <div style={{ position: 'relative' }}>
      {/* Scroll track */}
      <div
        ref={trackRef}
        onScroll={handleScroll}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
        style={{
          display: 'flex',
          gap: `${CARD_GAP}px`,
          overflowX: 'auto',
          paddingLeft: 'max(1.5rem, calc((100vw - 1100px) / 2))',
          paddingRight: 'max(1.5rem, calc((100vw - 1100px) / 2))',
          scrollSnapType: isDragging ? 'none' : 'x mandatory',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
          paddingBottom: '2rem',
          cursor: 'grab',
          userSelect: 'none',
        }}
      >
        {repeatedProjects.map((project, i) => (
          <motion.div
            key={`${project.id}-${i}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5 }}
            style={{ flexShrink: 0, scrollSnapAlign: 'start', width: `${CARD_WIDTH}px` }}
          >
            <Link
              to={`/project/${project.id}`}
              onClick={handleLinkClick}
              style={{ textDecoration: 'none', display: 'block' }}
            >
              <div
                style={{
                  borderRadius: '1.5rem',
                  background: 'var(--card-bg)',
                  border: '1px solid var(--glass-border)',
                  overflow: 'hidden',
                  transition: 'transform 0.35s cubic-bezier(0.2,0.8,0.2,1), border-color 0.3s, background-color 0.3s',
                  height: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  position: 'relative',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1.02)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--card-hover-border)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
                  (e.currentTarget as HTMLElement).style.borderColor = 'var(--glass-border)';
                }}
              >
                {/* Image */}
                <div
                  className="card-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                />

                {/* Gradient overlay */}
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
                <div style={{ position: 'relative', padding: '1.75rem' }}>
                  <div style={{
                    width: '20px', height: '2px', borderRadius: '2px',
                    backgroundColor: project.accent, marginBottom: '0.65rem', opacity: 0.9
                  }} />
                  <h3 style={{
                    fontSize: '1.15rem', fontWeight: 600,
                    color: '#ffffff', letterSpacing: '-0.02em',
                    marginBottom: '0.4rem'
                  }}>
                    {project.title}
                  </h3>
                  <p style={{
                    fontSize: '0.825rem', color: 'rgba(255,255,255,0.68)',
                    lineHeight: 1.5, marginBottom: '1.25rem'
                  }}>
                    {project.description}
                  </p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                    fontSize: '0.8rem', color: 'rgba(255,255,255,0.55)',
                    fontWeight: 500,
                    transition: 'color 0.2s'
                  }}>
                    View Case Study <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Dot indicators — Apple style */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '6px',
        marginTop: '0.5rem'
      }}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            style={{
              width: activeIndex === i ? '20px' : '6px',
              height: '6px',
              borderRadius: '9999px',
              background: activeIndex === i ? 'var(--text-primary)' : 'var(--tag-text)',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s cubic-bezier(0.2,0.8,0.2,1), background-color 0.3s',
            }}
            aria-label={`Go to project ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollGallery;
