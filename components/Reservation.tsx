'use client';

import { useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

const ZONES = [
  {
    id: 'grill',
    label: 'U grilu',
    description: 'Přímý výhled na otevřenou kuchyni a plameny. Nejintenzivnější zážitek pro gurmány.',
    capacity: '2 – 4 osoby',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="22" width="28" height="4" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 22 L12 14 Q12 8 20 8 Q28 8 28 14 L28 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 14 Q17 10 20 10 Q23 10 24 14" stroke="#FF6B35" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M13 30 L13 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M27 30 L27 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    highlight: true,
  },
  {
    id: 'terrace',
    label: 'Terasa',
    description: 'Venkovní terasa s výhledem do zahrady. Dostupná od dubna do října.',
    capacity: '2 – 8 osob',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <path d="M4 18 L20 6 L36 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="8" y="18" width="24" height="16" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="16" y="26" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 34 L32 34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    highlight: false,
  },
  {
    id: 'salon',
    label: 'Privátní salonek',
    description: 'Uzavřený prostor pro firemní večeře, oslavy a soukromá setkání. Vlastní obsluha.',
    capacity: '6 – 16 osob',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="4" y="10" width="32" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M4 16 L36 16" stroke="currentColor" strokeWidth="1"/>
        <circle cx="20" cy="25" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M20 21 L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 10 L16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M24 10 L24 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    highlight: false,
  },
  {
    id: 'bar',
    label: 'Chef\'s Bar',
    description: 'Barová místa přímo u přípravného pultu. Interakce se šéfkuchařem a show cooking.',
    capacity: '1 – 2 osoby',
    icon: (
      <svg viewBox="0 0 40 40" fill="none" className="w-8 h-8" aria-hidden="true">
        <rect x="6" y="20" width="28" height="4" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 20 L10 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30 20 L30 32" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M14 20 L14 12 Q14 8 20 8 Q26 8 26 12 L26 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="20" cy="8" r="2" fill="#FF6B35"/>
      </svg>
    ),
    highlight: false,
  },
];

const PARTY_SIZES = ['1', '2', '3', '4', '5', '6', '7', '8+'];

const TIME_SLOTS = [
  '17:00', '17:30', '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30', '22:00',
];

/* ─────────────────────────────────────────────
   HELPERS
   ───────────────────────────────────────────── */

function getTomorrowISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
}

function getMaxDateISO(): string {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d.toISOString().split('T')[0];
}

/* ─────────────────────────────────────────────
   ZONE CARD
   ───────────────────────────────────────────── */

function ZoneCard({
  zone,
  selected,
  onSelect,
}: {
  zone: typeof ZONES[0];
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      className={clsx(
        'zone-card w-full text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-hp-orange',
        selected && 'selected'
      )}
    >
      {zone.highlight && (
        <span className="absolute top-3 right-3 text-[10px] font-bold uppercase tracking-wider
                         text-hp-black bg-hp-orange px-2 py-0.5 rounded-full">
          Populární
        </span>
      )}

      <div className={clsx(
        'mb-4 w-14 h-14 rounded-xl flex items-center justify-center transition-colors duration-300',
        selected
          ? 'bg-hp-orange/20 text-hp-orange border border-hp-orange/40'
          : 'bg-white/5 text-hp-muted border border-white/8'
      )}>
        {zone.icon}
      </div>

      <h3 className={clsx(
        'font-display text-lg font-semibold mb-1 transition-colors duration-200',
        selected ? 'text-hp-orange' : 'text-hp-cream'
      )}>
        {zone.label}
      </h3>

      <p className="text-hp-muted text-xs leading-relaxed mb-3">{zone.description}</p>

      <div className="flex items-center gap-1.5 text-xs text-hp-muted">
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        {zone.capacity}
      </div>
    </button>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function Reservation() {
  const [selectedZone,  setSelectedZone]  = useState('grill');
  const [partySize,     setPartySize]     = useState('2');
  const [date,          setDate]          = useState('');
  const [time,          setTime]          = useState('');
  const [name,          setName]          = useState('');
  const [email,         setEmail]         = useState('');
  const [phone,         setPhone]         = useState('');
  const [notes,         setNotes]         = useState('');
  const [formState,     setFormState]     = useState<FormState>('idle');

  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.querySelectorAll('.reveal').forEach(e => e.classList.add('visible')); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    // Simulate API call – replace with real reservation endpoint / Anolla integration
    await new Promise((r) => setTimeout(r, 1400));

    // In production: POST to /api/reservations or Anolla webhook
    setFormState('success');
  };

  const resetForm = () => {
    setName(''); setEmail(''); setPhone(''); setNotes('');
    setDate(''); setTime(''); setPartySize('2');
    setFormState('idle');
  };

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="relative py-24 md:py-32 overflow-hidden"
      aria-labelledby="reservation-heading"
    >
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-hp-red/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-hp-orange/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <div className="reveal text-center mb-14">
          <p className="section-label">Okamžitá rezervace</p>
          <h2 id="reservation-heading" className="section-title mb-4">
            Book Your <span className="text-fire">Sizzle</span>
          </h2>
          <p className="text-hp-muted text-base max-w-xl mx-auto">
            Vyberte si zónu, datum a čas. Potvrzení obdržíte e-mailem do 5 minut.
            Stůl je rezervován po zaplacení zálohy 200 Kč / osoba.
          </p>
        </div>

        {/* ── ZONE PICKER ── */}
        <fieldset className="reveal mb-10">
          <legend className="text-hp-cream font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-hp-orange/20 flex items-center justify-center text-hp-orange text-xs font-bold" aria-hidden="true">1</span>
            Vyberte zónu
          </legend>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {ZONES.map((zone) => (
              <ZoneCard
                key={zone.id}
                zone={zone}
                selected={selectedZone === zone.id}
                onSelect={() => setSelectedZone(zone.id)}
              />
            ))}
          </div>
        </fieldset>

        {/* ── FORM ── */}
        {formState === 'success' ? (
          <div
            className="reveal iron-plate rounded-3xl p-10 md:p-16 text-center"
            role="status"
            aria-live="polite"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-hp-orange/15 border border-hp-orange/30 mb-6 animate-glow-pulse">
              <svg className="w-10 h-10 text-hp-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="font-display text-3xl font-bold text-hp-cream mb-3">Rezervace přijata!</h3>
            <p className="text-hp-muted text-base max-w-md mx-auto mb-8">
              Potvrzení jsme odeslali na <strong className="text-hp-cream">{email}</strong>.
              Těšíme se na vás v Hot Pan.
            </p>
            <button onClick={resetForm} className="btn-outline-fire">
              Nová rezervace
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="reveal iron-plate rounded-3xl p-6 md:p-10"
            noValidate
            aria-label="Formulář rezervace"
          >
            {/* Step 2: Date / time / party */}
            <div className="mb-8">
              <p className="text-hp-cream font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-hp-orange/20 flex items-center justify-center text-hp-orange text-xs font-bold" aria-hidden="true">2</span>
                Datum, čas & počet hostů
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Datum
                  </label>
                  <input
                    id="res-date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    min={getTomorrowISO()}
                    max={getMaxDateISO()}
                    required
                    className="input-iron [color-scheme:dark]"
                    aria-describedby="date-hint"
                  />
                  <p id="date-hint" className="text-hp-muted text-xs mt-1">Nejdříve zítra</p>
                </div>

                {/* Time */}
                <div>
                  <label htmlFor="res-time" className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Čas
                  </label>
                  <select
                    id="res-time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    required
                    className="input-iron appearance-none cursor-pointer"
                  >
                    <option value="" disabled>Vyberte čas</option>
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                </div>

                {/* Party size */}
                <div>
                  <p className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Počet hostů
                  </p>
                  <div className="flex gap-2 flex-wrap" role="group" aria-label="Počet hostů">
                    {PARTY_SIZES.map((size) => (
                      <button
                        key={size}
                        type="button"
                        onClick={() => setPartySize(size)}
                        aria-pressed={partySize === size}
                        className={clsx(
                          'w-11 h-11 rounded-xl text-sm font-semibold border transition-all duration-200',
                          partySize === size
                            ? 'bg-hp-orange border-hp-orange text-hp-black'
                            : 'bg-transparent border-white/10 text-hp-muted hover:border-white/25 hover:text-hp-cream'
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Contact info */}
            <div className="mb-8">
              <p className="text-hp-cream font-semibold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-hp-orange/20 flex items-center justify-center text-hp-orange text-xs font-bold" aria-hidden="true">3</span>
                Kontaktní údaje
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="res-name" className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Jméno a příjmení *
                  </label>
                  <input
                    id="res-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    autoComplete="name"
                    placeholder="Jan Novák"
                    className="input-iron"
                  />
                </div>
                <div>
                  <label htmlFor="res-phone" className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                    Telefon *
                  </label>
                  <input
                    id="res-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    autoComplete="tel"
                    placeholder="+420 777 123 456"
                    className="input-iron"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label htmlFor="res-email" className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                  E-mail *
                </label>
                <input
                  id="res-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  placeholder="jan@example.cz"
                  className="input-iron"
                />
              </div>

              <div>
                <label htmlFor="res-notes" className="block text-hp-muted text-xs font-medium mb-1.5 uppercase tracking-wider">
                  Speciální přání / alergie
                </label>
                <textarea
                  id="res-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  placeholder="Narozeninová oslava, vysoká židle pro dítě, bezlepková dieta..."
                  className="input-iron resize-none !h-auto py-3"
                />
              </div>
            </div>

            {/* Summary & submit */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-2 border-t border-white/8">
              {/* Mini summary */}
              <div className="text-sm text-hp-muted space-y-0.5">
                <p>
                  <span className="text-hp-cream/60">Zóna: </span>
                  <span className="text-hp-cream">{ZONES.find(z => z.id === selectedZone)?.label}</span>
                </p>
                {date && time && (
                  <p>
                    <span className="text-hp-cream/60">Termín: </span>
                    <span className="text-hp-cream">
                      {new Date(date).toLocaleDateString('cs-CZ', { day: 'numeric', month: 'long' })} v {time}
                    </span>
                  </p>
                )}
                <p>
                  <span className="text-hp-cream/60">Záloha: </span>
                  <span className="text-hp-orange font-semibold">
                    {parseInt(partySize) * 200 || 200} Kč
                  </span>
                  <span className="text-hp-muted text-xs ml-1">(200 Kč/osoba)</span>
                </p>
              </div>

              <button
                type="submit"
                disabled={formState === 'submitting' || !date || !time || !name || !email || !phone}
                className={clsx(
                  'btn-fire w-full sm:w-auto min-w-[200px] justify-center',
                  (formState === 'submitting') && 'opacity-80 cursor-wait'
                )}
                aria-busy={formState === 'submitting'}
              >
                {formState === 'submitting' ? (
                  <>
                    <svg className="w-4 h-4 animate-spin relative z-10" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    <span>Odesílám…</span>
                  </>
                ) : (
                  <span>Potvrdit rezervaci</span>
                )}
              </button>
            </div>

            {/* Privacy note */}
            <p className="text-hp-muted text-xs mt-4 text-center">
              Odesláním souhlasíte se{' '}
              <a href="/privacy" className="text-hp-orange/70 hover:text-hp-orange underline underline-offset-2">
                zpracováním osobních údajů
              </a>{' '}
              za účelem vyřízení rezervace.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
