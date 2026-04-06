'use client';

import { useEffect, useRef } from 'react';

const techniques = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <circle cx="24" cy="24" r="20" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" />
        <path d="M14 34 Q24 10 34 34" stroke="url(#techGrad1)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="22" r="4" fill="#FF6B35" opacity="0.8" />
        <defs>
          <linearGradient id="techGrad1" x1="14" y1="34" x2="34" y2="34" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E63946" /><stop offset="1" stopColor="#FF6B35" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Maillardova reakce',
    subtitle: '180 – 220 °C',
    description:
      'Při správné teplotě litinové pánve dochází k Maillardově reakci – stovky chemických sloučenin vytvoří zlatohnědou kůrku plnou komplexní chuti. Základ každého dokonalého steaku.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M8 40 L8 20 Q8 8 24 8 Q40 8 40 20 L40 40" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <path d="M16 40 L16 24 Q16 16 24 16 Q32 16 32 24 L32 40" stroke="url(#techGrad2)" strokeWidth="2" strokeLinecap="round" />
        <defs>
          <linearGradient id="techGrad2" x1="16" y1="40" x2="32" y2="16" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E63946" /><stop offset="1" stopColor="#F4A261" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Distribuce tepla',
    subtitle: 'Litina drží teplotu 4× déle',
    description:
      'Litina akumuluje teplo jako žádný jiný materiál. Rovnoměrné sálání ze dna i stěn pánve zajistí dokonalou propečenost bez studených míst. Maso nepřilne, karamelizace je perfektní.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M12 36 C12 36 16 28 24 28 C32 28 36 36 36 36" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <path d="M18 36 C18 36 20 30 24 30 C28 30 30 36 30 36" stroke="url(#techGrad3)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <circle cx="24" cy="18" r="6" stroke="url(#techGrad3)" strokeWidth="1.5" fill="none" />
        <path d="M22 14 Q24 10 26 14" stroke="url(#techGrad3)" strokeWidth="1.5" strokeLinecap="round" />
        <defs>
          <linearGradient id="techGrad3" x1="18" y1="36" x2="30" y2="10" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FF6B35" /><stop offset="1" stopColor="#FFD166" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Zachování šťavnatosti',
    subtitle: 'Zpečetění povrchu',
    description:
      'Rychlé zpečetění při vysoké teplotě vytvoří přirozenou bariéru, která drží šťávy uvnitř vlákna masa. Výsledek: každé sousto šťavnaté, voňavé, s křupavou vnější vrstvou.',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M24 40 L24 20" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <path d="M24 20 L14 12" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <path d="M24 20 L34 12" stroke="#FF6B35" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
        <circle cx="24" cy="38" r="4" fill="url(#techGrad4)" opacity="0.9" />
        <path d="M12 10 Q24 18 36 10" stroke="url(#techGrad4)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <defs>
          <linearGradient id="techGrad4" x1="12" y1="10" x2="36" y2="38" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E63946" /><stop offset="1" stopColor="#FF8C42" />
          </linearGradient>
        </defs>
      </svg>
    ),
    title: 'Aromatický kouř',
    subtitle: 'Třešňové & dubové dřevo',
    description:
      'Selektovaný kouř z třešňového a dubového dřeva prostupuje masem během posledních minut přípravy. Jemná dřevitá vůně doplňuje přirozené chutě a přidává komplexní aroma.',
  },
];

const stats = [
  { value: '320°C', label: 'teplota pánve při servisu' },
  { value: '8 let',  label: 'stárnutí kované litiny' },
  { value: '42 s',   label: 'průměrný čas obrátky steaku' },
  { value: '100%',   label: 'lokální dodavatelé masa' },
];

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}

export default function PanExperience() {
  const headingRef  = useReveal(0.2);
  const statsRef    = useReveal(0.1);
  const cardsRef    = useReveal(0.1);

  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="experience-heading"
    >
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]
                   bg-hp-orange/4 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <div ref={headingRef} className="reveal text-center mb-16 md:mb-20">
          <p className="section-label">Náš přístup</p>
          <h2 id="experience-heading" className="section-title mb-6">
            The Pan{' '}
            <span className="text-fire">Experience</span>
          </h2>
          <p className="text-hp-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Kuchyně Hot Pan není o rychlosti. Je to o pochopení materiálu, tepla a času.
            Každý pokrm je výsledkem přísně kontrolovaného procesu, kde stará řemeslná technika
            splývá s moderní precizností.
          </p>
        </div>

        {/* ── STATS ROW ── */}
        <div
          ref={statsRef}
          className="reveal grid grid-cols-2 md:grid-cols-4 gap-px mb-20 md:mb-28
                     bg-white/5 rounded-2xl overflow-hidden border border-white/5"
          role="list"
          aria-label="Klíčová čísla"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              role="listitem"
              className="bg-hp-dark/80 px-6 py-8 text-center group hover:bg-hp-anthracite transition-colors duration-300"
            >
              <div
                className="font-display text-3xl md:text-4xl font-bold text-fire mb-2
                           group-hover:scale-105 transition-transform duration-300 inline-block"
              >
                {stat.value}
              </div>
              <p className="text-hp-muted text-sm leading-snug">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── TECHNIQUE CARDS ── */}
        <div
          ref={cardsRef}
          className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
        >
          {techniques.map((tech, i) => (
            <article
              key={i}
              className="card-iron group p-6 md:p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className="mb-5 flex items-center justify-center w-14 h-14 rounded-xl
                              bg-hp-orange/10 border border-hp-orange/20
                              group-hover:bg-hp-orange/15 transition-colors duration-300">
                {tech.icon}
              </div>

              {/* Badge */}
              <span className="inline-block text-hp-orange text-xs font-mono tracking-widest mb-3 opacity-80">
                {tech.subtitle}
              </span>

              <h3 className="font-display text-xl font-semibold text-hp-cream mb-3 leading-tight">
                {tech.title}
              </h3>

              <p className="text-hp-muted text-sm leading-relaxed">
                {tech.description}
              </p>
            </article>
          ))}
        </div>

        {/* ── VISUAL STORY ROW ── */}
        <div className="mt-20 md:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: image block */}
          <div className="reveal-left reveal relative aspect-[4/3] rounded-3xl overflow-hidden">
            {/* Placeholder gradient – replace with <Image> from next/image */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(135deg, #1a0e00 0%, #2d1500 30%, #1a0800 60%, #0a0500 100%)',
              }}
              aria-hidden="true"
            />

            {/* Fake cast iron texture overlay */}
            <div
              className="absolute inset-0 metal-bg opacity-30"
              aria-hidden="true"
            />

            {/* Glow center */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              aria-hidden="true"
            >
              <div className="w-48 h-48 rounded-full bg-hp-orange/20 blur-3xl animate-heat-pulse" />
            </div>

            {/* Label overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-hp-black via-hp-black/60 to-transparent">
              <p className="text-hp-cream font-display text-xl font-semibold">
                Litinová pánev Hot Pan №12
              </p>
              <p className="text-hp-muted text-sm mt-1">Ručně kovaná, sezónovaná 8 let</p>
            </div>

            {/* Decorative fire glow frame */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{ boxShadow: 'inset 0 -60px 80px rgba(255,107,53,0.08)' }}
              aria-hidden="true"
            />
          </div>

          {/* Right: text */}
          <div className="reveal-right reveal space-y-6">
            <p className="section-label">Za každým sousto</p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-hp-cream leading-tight">
              Osmdesát let
              <br />
              <span className="text-fire">tradice v litině</span>
            </h2>

            <p className="text-hp-muted text-base leading-relaxed">
              Naše pánve nejsou výrobní produkty. Každá nesie historii – ručně kovaná a po
              desetiletí sezónovaná vrstvami tuku a tepla, které vytváří přirozenou antilepivou
              patinu bez chemie.
            </p>

            <p className="text-hp-muted text-base leading-relaxed">
              Šéfkuchař Martin Dvořák strávil 3 roky v lyonských bouchon restauracích, kde se
              naučil respektovat tento materiál. Dnes kombinuje francouzskou preciznost s
              českou poctivostí surovin.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-hp-orange/20 flex items-center justify-center border border-hp-orange/30">
                <svg className="w-6 h-6 text-hp-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-hp-cream font-semibold text-sm">Martin Dvořák</p>
                <p className="text-hp-muted text-xs">Šéfkuchař & spoluzakladatel · 18 let zkušeností</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
