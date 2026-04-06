'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Menu, X, Flame } from 'lucide-react';
import clsx from 'clsx';

const navLinks = [
  { label: 'Příběh',    href: '#experience' },
  { label: 'Menu',      href: '#menu' },
  { label: 'Prostory',  href: '#reservation' },
  { label: 'Galerie',   href: '#gallery' },
  { label: 'Kontakt',   href: '#footer' },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [menuOpen,    setMenuOpen]    = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        role="banner"
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-hp-black/95 backdrop-blur-md border-b border-white/5 py-3'
            : 'bg-transparent py-5'
        )}
      >
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
          aria-label="Hlavní navigace"
        >
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Hot Pan – domovská stránka"
          >
            <div className="relative flex items-center justify-center w-9 h-9">
              <div className="absolute inset-0 bg-hp-orange/20 rounded-lg blur-sm group-hover:blur-md transition-all duration-300" />
              <Flame
                className="relative text-hp-orange w-6 h-6 group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                aria-hidden="true"
              />
            </div>
            <span className="font-display text-xl font-bold tracking-wide">
              <span className="text-hp-cream">Hot</span>
              <span className="text-hp-orange"> Pan</span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={clsx(
                    'px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200',
                    activeSection === link.href.slice(1)
                      ? 'text-hp-orange bg-hp-orange/10'
                      : 'text-hp-muted hover:text-hp-cream hover:bg-white/5'
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Phone – desktop only */}
            <a
              href="tel:+420777468726"
              className="hidden md:flex items-center gap-1.5 text-sm text-hp-muted hover:text-hp-cream transition-colors duration-200"
              aria-label="Zavolat nám"
            >
              <svg className="w-4 h-4 text-hp-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M2 6.5C2 14.5 9.5 22 17.5 22l2-4-3.5-1.5-1 2c-2.5-1-5-3.5-6-6l2-1L9.5 8 7.5 7 6 9C4.5 8 2 6.5 2 6.5z" />
              </svg>
              +420 777 468 726
            </a>

            {/* CTA Button – always visible */}
            <button
              onClick={() => scrollTo('#reservation')}
              className="btn-fire text-sm !min-h-[44px] !px-5"
              aria-label="Rezervovat stůl"
            >
              <span>Rezervovat</span>
              <svg className="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex items-center justify-center w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-200 text-hp-cream"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Zavřít menu' : 'Otevřít menu'}
            >
              {menuOpen
                ? <X className="w-5 h-5" aria-hidden="true" />
                : <Menu className="w-5 h-5" aria-hidden="true" />
              }
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobilní navigace"
        className={clsx(
          'fixed inset-0 z-40 lg:hidden transition-all duration-400',
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-hp-black/90 backdrop-blur-xl"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={clsx(
            'absolute top-0 right-0 bottom-0 w-80 max-w-[85vw]',
            'bg-hp-anthracite border-l border-white/5',
            'flex flex-col pt-24 pb-8 px-6',
            'transition-transform duration-400',
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          {/* Decorative fire accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-hp-orange/5 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <nav aria-label="Mobilní navigace">
            <ul className="space-y-1" role="list">
              {navLinks.map((link, i) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="w-full text-left px-4 py-4 rounded-xl text-hp-cream text-lg font-medium
                               hover:bg-white/5 hover:text-hp-orange transition-all duration-200
                               flex items-center justify-between group"
                    style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
                  >
                    {link.label}
                    <svg className="w-4 h-4 text-hp-muted group-hover:text-hp-orange group-hover:translate-x-1 transition-all duration-200"
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto space-y-3">
            <div className="fire-divider" aria-hidden="true" />
            <button
              onClick={() => scrollTo('#reservation')}
              className="btn-fire w-full justify-center text-base"
              aria-label="Rezervovat stůl"
            >
              <span>Rezervovat stůl</span>
            </button>
            <a
              href="tel:+420777468726"
              className="flex items-center justify-center gap-2 py-3 text-hp-muted hover:text-hp-cream transition-colors"
              aria-label="Zavolat nám"
            >
              <svg className="w-4 h-4 text-hp-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
                  d="M2 6.5C2 14.5 9.5 22 17.5 22l2-4-3.5-1.5-1 2c-2.5-1-5-3.5-6-6l2-1L9.5 8 7.5 7 6 9C4.5 8 2 6.5 2 6.5z" />
              </svg>
              +420 777 468 726
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
