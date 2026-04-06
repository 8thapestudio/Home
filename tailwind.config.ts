import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        hp: {
          black:      '#080808',
          dark:       '#0f0f0f',
          anthracite: '#1a1a1a',
          charcoal:   '#252525',
          iron:       '#333333',
          orange:     '#FF6B35',
          ember:      '#FF8C42',
          gold:       '#F4A261',
          red:        '#E63946',
          cream:      '#F5F0E8',
          muted:      '#8A8A82',
          steel:      '#4A4A4A',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans:    ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      backgroundImage: {
        'metal-texture': "url('/textures/metal.svg')",
        'ember-gradient': 'radial-gradient(ellipse at center, #FF6B35 0%, #E63946 40%, transparent 70%)',
        'fire-gradient':  'linear-gradient(to top, #E63946 0%, #FF6B35 40%, #F4A261 70%, transparent 100%)',
        'heat-shimmer':   'linear-gradient(180deg, transparent 0%, rgba(255,107,53,0.05) 50%, transparent 100%)',
      },
      animation: {
        'flame':          'flame 2s ease-in-out infinite alternate',
        'ember-float':    'emberFloat 4s ease-in-out infinite',
        'heat-pulse':     'heatPulse 3s ease-in-out infinite',
        'shimmer':        'shimmer 2.5s linear infinite',
        'fade-up':        'fadeUp 0.7s ease-out forwards',
        'glow-pulse':     'glowPulse 2s ease-in-out infinite',
        'slide-in-left':  'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'sizzle':         'sizzle 0.15s ease-in-out infinite alternate',
      },
      keyframes: {
        flame: {
          '0%':   { transform: 'scaleY(1) scaleX(1) translateY(0)',    opacity: '0.9' },
          '50%':  { transform: 'scaleY(1.08) scaleX(0.96) translateY(-4px)', opacity: '1' },
          '100%': { transform: 'scaleY(0.94) scaleX(1.03) translateY(2px)', opacity: '0.85' },
        },
        emberFloat: {
          '0%':   { transform: 'translateY(0) translateX(0) scale(1)',  opacity: '1' },
          '50%':  { transform: 'translateY(-30px) translateX(10px) scale(0.8)', opacity: '0.7' },
          '100%': { transform: 'translateY(-60px) translateX(-5px) scale(0.4)', opacity: '0' },
        },
        heatPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255,107,53,0.3), 0 0 40px rgba(255,107,53,0.1)' },
          '50%':      { boxShadow: '0 0 30px rgba(255,107,53,0.6), 0 0 60px rgba(255,107,53,0.2)' },
        },
        slideInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%':   { opacity: '0', transform: 'translateX(40px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        sizzle: {
          '0%':   { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1px)' },
        },
      },
      boxShadow: {
        'fire':     '0 0 30px rgba(255,107,53,0.4), 0 0 60px rgba(230,57,70,0.2)',
        'fire-sm':  '0 0 15px rgba(255,107,53,0.3)',
        'fire-lg':  '0 0 60px rgba(255,107,53,0.5), 0 0 120px rgba(230,57,70,0.3)',
        'inner-fire': 'inset 0 0 30px rgba(255,107,53,0.15)',
        'iron':     '0 4px 24px rgba(0,0,0,0.8)',
      },
      transitionTimingFunction: {
        'fire': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};

export default config;
