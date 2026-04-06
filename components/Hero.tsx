'use client';

import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────────
   Flame SVG – pure CSS animated
   ───────────────────────────────────────────── */
function FlameSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 60 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outer flame */}
      <path
        className="flame-shape"
        d="M30 90 C10 75, 2 55, 8 38 C12 26, 18 20, 22 10 C24 4, 26 0, 30 0 C34 0, 36 4, 38 10 C42 20, 48 26, 52 38 C58 55, 50 75, 30 90Z"
        fill="url(#flameGrad1)"
        opacity="0.9"
      />
      {/* Mid flame */}
      <path
        className="flame-inner"
        d="M30 80 C18 68, 14 52, 18 40 C22 30, 26 26, 28 18 C29 13, 30 8, 30 8 C30 8, 31 13, 32 18 C34 26, 38 30, 42 40 C46 52, 42 68, 30 80Z"
        fill="url(#flameGrad2)"
        opacity="0.9"
      />
      {/* Hot core */}
      <path
        className="flame-inner"
        d="M30 68 C24 60, 22 50, 24 43 C26 37, 28 34, 30 28 C32 34, 34 37, 36 43 C38 50, 36 60, 30 68Z"
        fill="url(#flameGrad3)"
        opacity="1"
      />
      <defs>
        <linearGradient id="flameGrad1" x1="30" y1="90" x2="30" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#E63946" />
          <stop offset="40%"  stopColor="#FF6B35" />
          <stop offset="80%"  stopColor="#F4A261" />
          <stop offset="100%" stopColor="#FFD166" stopOpacity="0.6" />
        </linearGradient>
        <linearGradient id="flameGrad2" x1="30" y1="80" x2="30" y2="8" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#FF6B35" />
          <stop offset="50%"  stopColor="#F4A261" />
          <stop offset="100%" stopColor="#FFE066" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient id="flameGrad3" x1="30" y1="68" x2="30" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#F4A261" />
          <stop offset="60%"  stopColor="#FFD166" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.9" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ─────────────────────────────────────────────
   Ember particle
   ───────────────────────────────────────────── */
function Ember({ style, className }: { style?: React.CSSProperties; className?: string }) {
  return (
    <div
      className={`ember ${className ?? ''}`}
      style={style}
      aria-hidden="true"
    />
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay blocked – video stays as poster image
      });
    }
  }, []);

  const scrollToReservation = () => {
    const el = document.querySelector('#reservation');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToMenu = () => {
    const el = document.querySelector('#menu');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
      aria-label="Úvodní sekce"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <div className="absolute inset-0" aria-hidden="true">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="/images/hero-poster.jpg"
          aria-hidden="true"
        >
          {/* Replace with real CDN video URL */}
          <source src="/videos/hero-grill.mp4" type="video/mp4" />
          <source src="/videos/hero-grill.webm" type="video/webm" />
        </video>

        {/* Gradient overlay */}
        <div className="hero-video-overlay absolute inset-0" />

        {/* Heat shimmer */}
        <div className="heat-shimmer-overlay" />
      </div>

      {/* ── EMBER PARTICLES ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <Ember className="ember-1" style={{ bottom: '25%', left: '20%',  width: 6,  height: 6  }} />
        <Ember className="ember-2" style={{ bottom: '30%', left: '35%',  width: 4,  height: 4  }} />
        <Ember className="ember-3" style={{ bottom: '20%', right: '25%', width: 5,  height: 5  }} />
        <Ember className="ember-4" style={{ bottom: '35%', right: '15%', width: 3,  height: 3  }} />
        <Ember className="ember-5" style={{ bottom: '28%', left: '50%',  width: 4,  height: 4  }} />
        <Ember className="ember-1" style={{ bottom: '22%', left: '60%',  width: 6,  height: 6, animationDelay: '1s'   }} />
        <Ember className="ember-3" style={{ bottom: '32%', left: '75%',  width: 3,  height: 3, animationDelay: '2.5s' }} />
        <Ember className="ember-2" style={{ bottom: '18%', right: '40%', width: 5,  height: 5, animationDelay: '0.5s' }} />
      </div>

      {/* ── BOTTOM SMOKE ── */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <div className="smoke-particle" style={{ left: '30%',  width: 80,  height: 80,  animationDelay: '0s'   }} />
        <div className="smoke-particle" style={{ left: '50%',  width: 100, height: 100, animationDelay: '1.5s' }} />
        <div className="smoke-particle" style={{ left: '70%',  width: 60,  height: 60,  animationDelay: '3s'   }} />
      </div>

      {/* ── SIDE FLAME ACCENTS ── */}
      <div className="absolute bottom-0 left-4 md:left-12 pointer-events-none hidden sm:block" aria-hidden="true">
        <FlameSvg className="w-12 h-20 opacity-40" />
      </div>
      <div className="absolute bottom-0 right-4 md:right-12 pointer-events-none hidden sm:block" aria-hidden="true">
        <FlameSvg className="w-10 h-16 opacity-30" />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">

        {/* Pre-label */}
        <p
          className="section-label animate-fade-up mb-6"
          style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
        >
          Praha · Vinohrady
        </p>

        {/* Headline */}
        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6
                     animate-fade-up"
          style={{ animationDelay: '0.25s', animationFillMode: 'both' }}
        >
          <span className="block text-hp-cream">The Symphony</span>
          <span className="block mt-2">
            <span className="text-fire">of Fire</span>
            <span className="text-hp-cream"> &amp; Iron</span>
          </span>
        </h1>

        {/* Sub-headline */}
        <p
          className="text-hp-muted text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed
                     animate-fade-up"
          style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
        >
          Kde se litina setkává s plamenem a každý steak je mistrovsky karamelizovaný pečat
          chuti, šťavnatosti a řemesla.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center
                     animate-fade-up"
          style={{ animationDelay: '0.55s', animationFillMode: 'both' }}
        >
          {/* Primary CTA */}
          <button
            onClick={scrollToReservation}
            className="btn-fire text-base w-full sm:w-auto"
            aria-label="Rezervovat stůl – Book Your Sizzle"
          >
            <span>Book Your Sizzle</span>
            <svg className="w-5 h-5 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>

          {/* Secondary CTA */}
          <button
            onClick={scrollToMenu}
            className="btn-outline-fire text-base w-full sm:w-auto"
            aria-label="Zobrazit menu"
          >
            Prozkoumat menu
          </button>
        </div>

        {/* Trust signals */}
        <div
          className="flex items-center justify-center gap-6 mt-12 text-sm text-hp-muted
                     animate-fade-up"
          style={{ animationDelay: '0.7s', animationFillMode: 'both' }}
        >
          <div className="flex items-center gap-2" aria-label="Hodnocení 4.9 z 5">
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-hp-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>4.9 (347 hodnocení)</span>
          </div>

          <span className="w-px h-4 bg-white/15" aria-hidden="true" />

          <span>Otevřeno Út–Ne</span>

          <span className="w-px h-4 bg-white/15 hidden sm:block" aria-hidden="true" />

          <span className="hidden sm:block">Rezervace na den dopředu</span>
        </div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2 animate-bounce opacity-50">
          <span className="text-xs text-hp-muted uppercase tracking-[0.25em]">Scroll</span>
          <svg className="w-5 h-5 text-hp-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
