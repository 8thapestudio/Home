'use client';

import { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';

/* ─────────────────────────────────────────────
   DATA
   ───────────────────────────────────────────── */

type Tag = 'signature' | 'gluten-free' | 'vegan' | 'vegetarian' | 'spicy' | 'new';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  tags: Tag[];
  pairing: string;
  pairingType: 'wine' | 'beer' | 'cocktail';
  bgColor: string; // placeholder colour for image area
  weight?: string;
  temp?: string;
}

const MENU_ITEMS: MenuItem[] = [
  // ── SIGNATURES ──
  {
    id: 'hp-dry-aged',
    name: 'Hot Pan Dry-Aged Ribeye',
    description: 'Ribeye 45 dní suchého zrání na dubovém řezu, máslo s trufflemi, pečená medulka, chimichurri z čerstvých bylin.',
    price: 1290,
    category: 'Signature steaks',
    tags: ['signature', 'gluten-free'],
    pairing: 'Château Pichon Baron 2018',
    pairingType: 'wine',
    bgColor: 'from-[#3d1500] to-[#1a0800]',
    weight: '350 g',
    temp: '320°C',
  },
  {
    id: 'hp-tomahawk',
    name: 'Tomahawk pro dva',
    description: 'Argentinský Angus Tomahawk, 28 dní zrání, dřevěné uhlí s jabloní, omáčka z červeného vína, sůl Fleur de Sel.',
    price: 2490,
    category: 'Signature steaks',
    tags: ['signature', 'gluten-free', 'new'],
    pairing: 'Barolo Brunate 2019',
    pairingType: 'wine',
    bgColor: 'from-[#2d0e00] to-[#1a0a00]',
    weight: '1.2 kg',
    temp: '340°C',
  },
  {
    id: 'hp-wagyu',
    name: 'Wagyu A5 – Miyazaki',
    description: 'Pravý japonský Wagyu A5, marbling 12, servírováno s wasabi přímo na rozpálené litinové desce. Omezená dostupnost.',
    price: 1890,
    category: 'Signature steaks',
    tags: ['signature', 'gluten-free'],
    pairing: 'Sake Dassai 23',
    pairingType: 'cocktail',
    bgColor: 'from-[#1e1200] to-[#0d0900]',
    weight: '180 g',
    temp: '280°C',
  },
  // ── PŘEDKRMY ──
  {
    id: 'hp-bone-marrow',
    name: 'Zapečená medulka',
    description: 'Telecí medulka pečená v litině, citronový gremolata, krutony ze žitného chleba, petrželová salsa verde.',
    price: 395,
    category: 'Předkrmy',
    tags: ['new'],
    pairing: 'Chablis Premier Cru 2021',
    pairingType: 'wine',
    bgColor: 'from-[#251800] to-[#110c00]',
  },
  {
    id: 'hp-burrata',
    name: 'Burrata & heirloom rajčata',
    description: 'Čerstvá puglijská burrata, pečená rajčata z vlastní zahrady, basil olej, Aged Balsamic 25 let, prosciutto crudo.',
    price: 320,
    category: 'Předkrmy',
    tags: ['vegetarian', 'gluten-free'],
    pairing: 'Pinot Grigio delle Venezie 2022',
    pairingType: 'wine',
    bgColor: 'from-[#1a0f00] to-[#0d0800]',
  },
  {
    id: 'hp-ceviche',
    name: 'Oheň & Moře Ceviche',
    description: 'Tygří krevety a dorado marinované v citrusech a aji amarillo, avokádo, červená cibule, coriander, tiger milk.',
    price: 445,
    category: 'Předkrmy',
    tags: ['gluten-free', 'spicy'],
    pairing: 'Sancerre Blanc 2022',
    pairingType: 'wine',
    bgColor: 'from-[#001a1a] to-[#000d0d]',
  },
  // ── MAIN – DALŠÍ ──
  {
    id: 'hp-duck',
    name: 'Kachní prsa na litině',
    description: 'Magret de canard, omáčka ze švestek a červeného vína, pečené zelí s caraway, konfitované brambory.',
    price: 695,
    category: 'Z pánve',
    tags: ['gluten-free'],
    pairing: 'Pinot Noir Bourgogne 2020',
    pairingType: 'wine',
    bgColor: 'from-[#1a0005] to-[#0d0003]',
    weight: '280 g',
  },
  {
    id: 'hp-mushroom',
    name: 'Pan-roasted houby',
    description: 'Směs lesních hub (lišky, hřiby, shiitake) na černém másle, čerstvý tymián, vejce 63°C, lanýžový olej, toast.',
    price: 395,
    category: 'Z pánve',
    tags: ['vegetarian', 'vegan'],
    pairing: 'Grüner Veltliner Smaragd 2021',
    pairingType: 'wine',
    bgColor: 'from-[#0d1400] to-[#080a00]',
  },
  {
    id: 'hp-salmon',
    name: 'Losos na kůži s karamelizací',
    description: 'Norský losos, kůže orestovaná do chrumkava, omáčka z kapary a citronového másla, fenykl, dill.',
    price: 595,
    category: 'Z pánve',
    tags: ['gluten-free', 'new'],
    pairing: 'Ribolla Gialla 2021',
    pairingType: 'wine',
    bgColor: 'from-[#001020] to-[#000810]',
  },
  // ── DEZERTY ──
  {
    id: 'hp-creme-brulee',
    name: 'Crème brûlée s pálením u stolu',
    description: 'Klasický vanilkový crème brûlée, karamerizovaný plamenem přímo u vašeho stolu. Ceremoniál jako součást zážitku.',
    price: 220,
    category: 'Dezerty',
    tags: ['vegetarian', 'gluten-free'],
    pairing: 'Sauternes Chateau d\'Yquem 2017',
    pairingType: 'wine',
    bgColor: 'from-[#201000] to-[#100800]',
  },
  {
    id: 'hp-choco',
    name: 'Fondant z hořké čokolády',
    description: 'Tekutý středu z 72% Valrhona čokolády, zmrzlina z pálené karamely, fleur de sel, kakaové drobky.',
    price: 245,
    category: 'Dezerty',
    tags: ['vegetarian'],
    pairing: 'Pedro Ximénez El Candado',
    pairingType: 'wine',
    bgColor: 'from-[#1a0d00] to-[#0d0600]',
  },
];

const CATEGORIES = ['Vše', 'Signature steaks', 'Předkrmy', 'Z pánve', 'Dezerty'];

const FILTER_TAGS: { key: Tag | 'all'; label: string; icon: string }[] = [
  { key: 'all',         label: 'Vše',         icon: '🍽' },
  { key: 'signature',   label: 'Signature',   icon: '🔥' },
  { key: 'gluten-free', label: 'Bezlepkové',  icon: '🌾' },
  { key: 'vegan',       label: 'Vegan',       icon: '🌱' },
  { key: 'vegetarian',  label: 'Vegetariáni', icon: '🥗' },
  { key: 'spicy',       label: 'Pálivé',      icon: '🌶' },
  { key: 'new',         label: 'Novinka',     icon: '✨' },
];

const TAG_LABELS: Record<Tag, string> = {
  signature:    'Signature',
  'gluten-free': 'GF',
  vegan:        'Vegan',
  vegetarian:   'Vege',
  spicy:        'Spicy',
  new:          'Novinka',
};

const TAG_COLORS: Record<Tag, string> = {
  signature:    'border-hp-orange/50 text-hp-orange bg-hp-orange/10',
  'gluten-free': 'border-white/15 text-hp-muted bg-white/5',
  vegan:        'border-green-500/40 text-green-400 bg-green-500/10',
  vegetarian:   'border-green-400/30 text-green-300 bg-green-400/8',
  spicy:        'border-red-500/40 text-red-400 bg-red-500/10',
  new:          'border-hp-gold/40 text-hp-gold bg-hp-gold/10',
};

const PAIRING_ICONS = {
  wine:     '🍷',
  beer:     '🍺',
  cocktail: '🍶',
};

/* ─────────────────────────────────────────────
   COMPONENTS
   ───────────────────────────────────────────── */

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <article
      className="card-iron group flex flex-col"
      aria-label={item.name}
    >
      {/* Image area (placeholder gradient) */}
      <div className="relative h-48 overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${item.bgColor} transition-transform duration-500 group-hover:scale-105`}
          aria-hidden="true"
        />

        {/* Fake heat shimmer */}
        <div className="heat-shimmer-overlay opacity-60" aria-hidden="true" />

        {/* Glow center */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="w-24 h-24 rounded-full bg-hp-orange/10 blur-2xl animate-heat-pulse" />
        </div>

        {/* Tag badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full border ${TAG_COLORS[tag]}`}
            >
              {TAG_LABELS[tag]}
            </span>
          ))}
        </div>

        {/* Weight / temp */}
        {(item.weight || item.temp) && (
          <div className="absolute bottom-3 right-3 flex gap-2">
            {item.weight && (
              <span className="text-xs text-hp-muted bg-hp-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-white/10">
                {item.weight}
              </span>
            )}
            {item.temp && (
              <span className="text-xs text-hp-orange bg-hp-black/60 backdrop-blur-sm px-2 py-1 rounded-lg border border-hp-orange/20">
                {item.temp}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-hp-cream leading-snug">
            {item.name}
          </h3>
          <span className="flex-shrink-0 font-mono text-hp-orange font-bold text-base">
            {item.price.toLocaleString('cs-CZ')} Kč
          </span>
        </div>

        <p className="text-hp-muted text-sm leading-relaxed mb-4 flex-1">
          {item.description}
        </p>

        {/* Pairing */}
        <div className="flex items-center gap-2 pt-3 border-t border-white/6">
          <span className="text-base" aria-hidden="true">{PAIRING_ICONS[item.pairingType]}</span>
          <div>
            <span className="text-[10px] text-hp-muted uppercase tracking-wider mr-1">Párování:</span>
            <span className="text-xs text-hp-cream/80 italic">{item.pairing}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

/* ─────────────────────────────────────────────
   MAIN SECTION
   ───────────────────────────────────────────── */

export default function Menu() {
  const [activeTag,      setActiveTag]      = useState<Tag | 'all'>('all');
  const [activeCategory, setActiveCategory] = useState('Vše');
  const sectionRef = useRef<HTMLElement>(null);

  // Reveal on scroll
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('section-visible'); },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const filtered = MENU_ITEMS.filter((item) => {
    const matchTag      = activeTag === 'all' || item.tags.includes(activeTag);
    const matchCategory = activeCategory === 'Vše' || item.category === activeCategory;
    return matchTag && matchCategory;
  });

  return (
    <section
      id="menu"
      ref={sectionRef}
      className="relative py-24 md:py-32 charcoal-bg overflow-hidden"
      aria-labelledby="menu-heading"
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hp-orange/20 to-transparent" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hp-orange/20 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── HEADING ── */}
        <div className="text-center mb-12">
          <p className="section-label">Žádná PDF</p>
          <h2 id="menu-heading" className="section-title mb-4">
            Naše <span className="text-fire">Menu</span>
          </h2>
          <p className="text-hp-muted text-base max-w-xl mx-auto">
            Plně digitální, filtrovatelné a aktualizované každý den.
            Všechny alergeny, gramáže a doporučení v jednom místě.
          </p>
        </div>

        {/* ── CATEGORY TABS ── */}
        <div
          className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide"
          role="tablist"
          aria-label="Kategorie menu"
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 min-h-[44px] border',
                activeCategory === cat
                  ? 'bg-hp-orange text-hp-black border-hp-orange'
                  : 'bg-transparent text-hp-muted border-white/10 hover:border-white/20 hover:text-hp-cream'
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── FILTER PILLS ── */}
        <div
          className="flex gap-2 flex-wrap mb-10"
          role="group"
          aria-label="Filtrovat podle diety"
        >
          {FILTER_TAGS.map((f) => (
            <button
              key={f.key}
              onClick={() => setActiveTag(f.key)}
              className={clsx(
                'filter-pill',
                activeTag === f.key && 'active'
              )}
              aria-pressed={activeTag === f.key}
            >
              <span aria-hidden="true">{f.icon}</span>
              {f.label}
            </button>
          ))}
        </div>

        {/* ── GRID ── */}
        {filtered.length > 0 ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
            role="list"
            aria-label={`${filtered.length} pokrmů`}
            aria-live="polite"
          >
            {filtered.map((item) => (
              <div key={item.id} role="listitem">
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-20 text-hp-muted"
            role="status"
            aria-live="polite"
          >
            <p className="text-4xl mb-4" aria-hidden="true">🔥</p>
            <p className="text-lg">Žádné pokrmy pro tento filtr.</p>
            <button
              onClick={() => { setActiveTag('all'); setActiveCategory('Vše'); }}
              className="mt-4 text-hp-orange hover:underline text-sm"
            >
              Zobrazit vše
            </button>
          </div>
        )}

        {/* ── ALLERGEN NOTE ── */}
        <div className="mt-10 p-4 rounded-xl border border-white/8 bg-white/3 flex gap-3 items-start">
          <svg className="w-5 h-5 text-hp-orange flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-hp-muted text-sm leading-relaxed">
            <strong className="text-hp-cream/80">Alergeny:</strong> Informace o alergenech a přesné složení pokrmů vám na požádání sdělí náš personál.
            Menu se může měnit v závislosti na sezónní dostupnosti surovin. Ceny jsou uvedeny včetně DPH.
          </p>
        </div>

      </div>
    </section>
  );
}
