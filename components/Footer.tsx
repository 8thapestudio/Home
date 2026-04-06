import Link from 'next/link';
import { Flame } from 'lucide-react';

const HOURS = [
  { days: 'Pondělí',          hours: 'Zavřeno' },
  { days: 'Úterý – Čtvrtek', hours: '17:00 – 23:00' },
  { days: 'Pátek – Sobota',  hours: '16:00 – 00:00' },
  { days: 'Neděle',          hours: '16:00 – 22:00' },
];

const QUICK_LINKS = [
  { label: 'Příběh',          href: '#experience' },
  { label: 'Menu',            href: '#menu' },
  { label: 'Rezervace',       href: '#reservation' },
  { label: 'Galerie',         href: '#gallery' },
  { label: 'Privátní salonky', href: '#reservation' },
  { label: 'Dárkové poukazy', href: '/gift-vouchers' },
];

const LEGAL_LINKS = [
  { label: 'Ochrana osobních údajů', href: '/privacy' },
  { label: 'Obchodní podmínky',      href: '/terms' },
  { label: 'Cookies',                href: '/cookies' },
  { label: 'Alergeny',               href: '/allergens' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      className="relative bg-hp-black border-t border-white/6 overflow-hidden"
      aria-label="Patička stránky"
    >
      {/* Top fire divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #FF6B35 30%, #E63946 70%, transparent)' }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-hp-orange/4 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      {/* ── MAIN GRID ── */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── COL 1: Brand + contact ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 group mb-5"
              aria-label="Hot Pan – domů"
            >
              <div className="relative flex items-center justify-center w-9 h-9">
                <div className="absolute inset-0 bg-hp-orange/20 rounded-lg blur-sm" aria-hidden="true" />
                <Flame className="relative text-hp-orange w-6 h-6" fill="currentColor" aria-hidden="true" />
              </div>
              <span className="font-display text-xl font-bold">
                <span className="text-hp-cream">Hot</span>
                <span className="text-hp-orange"> Pan</span>
              </span>
            </Link>

            <p className="text-hp-muted text-sm leading-relaxed mb-6 max-w-xs">
              Exkluzivní gril restaurace v srdci Prahy. Symfonii ohně, litiny a poctivých surovin.
            </p>

            {/* Contact details */}
            <address className="not-italic space-y-3 text-sm">
              {/* Address */}
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-hp-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <p className="text-hp-cream">Náměstí Míru 14</p>
                  <p className="text-hp-muted">Praha 2 – Vinohrady, 120 00</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-hp-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a
                  href="tel:+420777468726"
                  className="text-hp-cream hover:text-hp-orange transition-colors duration-200 font-medium"
                  aria-label="Zavolat na +420 777 468 726"
                >
                  +420 777 468 726
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-hp-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a
                  href="mailto:rezervace@hotpan.cz"
                  className="text-hp-cream hover:text-hp-orange transition-colors duration-200"
                >
                  rezervace@hotpan.cz
                </a>
              </div>
            </address>

            {/* Social icons */}
            <div className="flex gap-3 mt-6" aria-label="Sociální sítě">
              {[
                { label: 'Instagram', href: 'https://instagram.com/hotpan.cz', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' },
                { label: 'TikTok',    href: 'https://tiktok.com/@hotpan.cz',   icon: 'M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z' },
                { label: 'Facebook', href: 'https://facebook.com/hotpan.cz',  icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-hp-orange/15 hover:text-hp-orange
                             flex items-center justify-center text-hp-muted transition-all duration-200 border border-white/8"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* ── COL 2: Quick links ── */}
          <nav aria-label="Rychlé odkazy">
            <h3 className="text-hp-cream font-semibold text-sm uppercase tracking-wider mb-5">
              Navigace
            </h3>
            <ul className="space-y-3" role="list">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-hp-muted text-sm hover:text-hp-orange transition-colors duration-200
                               flex items-center gap-2 group"
                  >
                    <span
                      className="w-1 h-1 rounded-full bg-hp-orange/40 group-hover:bg-hp-orange transition-colors duration-200"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── COL 3: Opening hours ── */}
          <div>
            <h3 className="text-hp-cream font-semibold text-sm uppercase tracking-wider mb-5">
              Otevírací doba
            </h3>
            <dl className="space-y-3">
              {HOURS.map((item) => (
                <div key={item.days} className="flex flex-col gap-0.5">
                  <dt className="text-hp-muted text-xs">{item.days}</dt>
                  <dd className={`text-sm font-medium ${item.hours === 'Zavřeno' ? 'text-hp-muted/60' : 'text-hp-cream'}`}>
                    {item.hours}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-5 p-3 rounded-xl border border-hp-orange/15 bg-hp-orange/5">
              <p className="text-xs text-hp-muted leading-relaxed">
                <strong className="text-hp-orange">Tip:</strong> Rezervace na Vánoce a Silvestr se otevírají
                vždy 60 dní předem. Sledujte nás na Instagramu.
              </p>
            </div>
          </div>

          {/* ── COL 4: Map placeholder + CTA ── */}
          <div>
            <h3 className="text-hp-cream font-semibold text-sm uppercase tracking-wider mb-5">
              Kde nás najdete
            </h3>

            {/* Map placeholder */}
            <a
              href="https://maps.google.com/?q=Náměstí+Míru+14,+Praha+2"
              target="_blank"
              rel="noopener noreferrer"
              className="block relative aspect-video rounded-2xl overflow-hidden border border-white/8
                         hover:border-hp-orange/30 transition-all duration-300 group mb-4"
              aria-label="Otevřít mapu v Google Maps"
            >
              {/* Map gradient placeholder */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, #0d1520 0%, #0a1018 50%, #0d1520 100%)' }}
                aria-hidden="true"
              />
              {/* Fake map grid */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
                aria-hidden="true"
              />
              {/* Pin */}
              <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="flex flex-col items-center">
                  <div className="w-8 h-8 rounded-full bg-hp-orange flex items-center justify-center shadow-fire animate-glow-pulse">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                  </div>
                  <div className="mt-1 px-2 py-0.5 bg-hp-black/80 rounded text-hp-cream text-xs backdrop-blur-sm border border-white/10">
                    Hot Pan
                  </div>
                </div>
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-hp-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-3" aria-hidden="true">
                <span className="text-xs text-hp-orange font-medium">Otevřít v Maps →</span>
              </div>
            </a>

            {/* Transport info */}
            <div className="space-y-2 text-xs text-hp-muted">
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-green-600/80 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" aria-label="Metro linka A">A</span>
                <span>Náměstí Míru – 2 min pěšky</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-yellow-500/80 flex items-center justify-center text-white text-[9px] font-bold flex-shrink-0" aria-label="Tramvaj">🚋</span>
                <span>Zastávka Náměstí Míru – před domem</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-hp-orange flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                    d="M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h11a2 2 0 012 2v3m-7 0h8m0 0v1a2 2 0 01-2 2H10m0-3a2 2 0 00-2 2v3m4-3v3m0 0h4"/>
                </svg>
                <span>Parkoviště: Mánesova ulice (50m)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="border-t border-white/6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row
                        items-center justify-between gap-4 text-xs text-hp-muted">
          <p>
            © {currentYear} Hot Pan s.r.o. Všechna práva vyhrazena.
          </p>

          <nav aria-label="Právní informace">
            <ul className="flex flex-wrap gap-x-4 gap-y-2 justify-center sm:justify-end" role="list">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-hp-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
