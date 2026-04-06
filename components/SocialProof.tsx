'use client';

import { useRef, useEffect } from 'react';
import clsx from 'clsx';

/* ─────────────────────────────────────────────
   REVIEWS DATA
   ───────────────────────────────────────────── */

const REVIEWS = [
  {
    name: 'Tomáš V.',
    avatar: 'TV',
    rating: 5,
    date: 'Duben 2025',
    text: 'Nejlepší steak, co jsem v Praze jedl. Ribeye byl přesně medium-rare, kůrka dokonalá. Atmosféra u grilu je naprosto unikátní – cítíte teplo, vidíte plameny. Absolutní 10/10.',
    source: 'google',
  },
  {
    name: 'Karolína M.',
    avatar: 'KM',
    rating: 5,
    date: 'Březen 2025',
    text: 'Crème brûlée pálený u stolu byl doslova show. Personál perfektní, věděli vše o każdém pokrmu. Wagyu bylo transcendentní. Už jsem tam rezervovala znova.',
    source: 'tripadvisor',
  },
  {
    name: 'Petr H.',
    avatar: 'PH',
    rating: 5,
    date: 'Březen 2025',
    text: 'Privátní salonek pro firemní večeři byl hit. Diskrétní, krásně navržený prostor, soukromá obsluha. Všichni hosté nadšeni. Hot Pan se stala naší standardní volbou pro důležité večeře.',
    source: 'google',
  },
  {
    name: 'Lucie D.',
    avatar: 'LD',
    rating: 5,
    date: 'Únor 2025',
    text: 'Vegetariánské houby na litinové pánvi byly naprosto fantastické – netušila jsem, že bezmasé jídlo může být tak výrazné. Víno doporučené sommelierem přesně sedělo.',
    source: 'tripadvisor',
  },
  {
    name: 'Martin K.',
    avatar: 'MK',
    rating: 5,
    date: 'Leden 2025',
    text: 'Narozeninová večeře pro moji ženu. Personál přidal malé překvapení – dezert s nápisem ze smetany a karamelu. Opravdu se starají o detail. Vrátíme se určitě.',
    source: 'google',
  },
  {
    name: 'Anežka B.',
    avatar: 'AB',
    rating: 5,
    date: 'Prosinec 2024',
    text: 'Chef\'s Bar je naprosto geniální nápad. Šéfkuchař nám vysvětloval každý krok přípravy. Nejlepší zážitek z vaření, který jsem kdy měla, a přitom jsem nic nedělala – jen sledovala.',
    source: 'google',
  },
];

/* ─────────────────────────────────────────────
   UGC GRID POSTS (Instagram/TikTok placeholders)
   ───────────────────────────────────────────── */

const UGC_POSTS = [
  { id: 1, likes: '2.4k', bg: 'from-[#3d1500] via-[#2d1000] to-[#1a0800]', type: 'video', user: '@foodie_prague' },
  { id: 2, likes: '1.8k', bg: 'from-[#1a0000] via-[#2d0500] to-[#1a0000]', type: 'photo', user: '@gastro_cz' },
  { id: 3, likes: '3.1k', bg: 'from-[#200800] via-[#1a0500] to-[#0d0200]', type: 'reel',  user: '@pragueeats' },
  { id: 4, likes: '987',  bg: 'from-[#0d0a00] via-[#1a1400] to-[#0d0a00]', type: 'photo', user: '@steaklovers_eu' },
  { id: 5, likes: '4.2k', bg: 'from-[#1a0800] via-[#2d1200] to-[#1a0800]', type: 'reel',  user: '@martincookes' },
  { id: 6, likes: '1.5k', bg: 'from-[#0a0a1a] via-[#1a1a2d] to-[#0a0a1a]', type: 'photo', user: '@wineandfire' },
];

/* ─────────────────────────────────────────────
   STAR RATING
   ───────────────────────────────────────────── */

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Hodnocení ${rating} z 5 hvězd`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={clsx('w-3.5 h-3.5', i < rating ? 'text-hp-gold' : 'text-white/15')}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function SourceBadge({ source }: { source: string }) {
  if (source === 'google') {
    return (
      <span className="text-[10px] text-hp-muted/70 flex items-center gap-1">
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Google
      </span>
    );
  }
  return (
    <span className="text-[10px] text-hp-muted/70">TripAdvisor</span>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
   ───────────────────────────────────────────── */

export default function SocialProof() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(e => e.classList.add('visible'));
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="relative py-24 md:py-32 charcoal-bg overflow-hidden"
      aria-labelledby="social-heading"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hp-orange/15 to-transparent" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── AGGREGATE RATING ── */}
        <div className="reveal text-center mb-16">
          <p className="section-label">Komunita & recenze</p>
          <h2 id="social-heading" className="section-title mb-6">
            Co říkají <span className="text-fire">naši hosté</span>
          </h2>

          <div className="inline-flex items-center gap-4 bg-hp-anthracite border border-white/8 rounded-2xl px-6 py-4">
            <div className="text-center">
              <p className="font-display text-4xl font-bold text-hp-orange">4.9</p>
              <Stars rating={5} />
              <p className="text-hp-muted text-xs mt-1">347 recenzí</p>
            </div>
            <div className="w-px h-12 bg-white/8" aria-hidden="true" />
            <div className="text-left space-y-1">
              {[5,4,3].map((star, i) => {
                const pct = [92, 6, 2][i];
                return (
                  <div key={star} className="flex items-center gap-2 text-xs">
                    <span className="text-hp-muted w-4">{star}★</span>
                    <div className="w-24 h-1.5 bg-white/8 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-hp-gold rounded-full"
                        style={{ width: `${pct}%` }}
                        role="presentation"
                      />
                    </div>
                    <span className="text-hp-muted">{pct}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ── REVIEW CARDS ── */}
        <div
          className="reveal grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-20"
          role="list"
          aria-label="Recenze hostů"
        >
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              role="listitem"
              className="card-iron p-5 md:p-6 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-hp-orange/30 to-hp-red/20
                                  flex items-center justify-center text-hp-orange font-bold text-sm flex-shrink-0"
                       aria-hidden="true">
                    {review.avatar}
                  </div>
                  <div>
                    <p className="text-hp-cream text-sm font-semibold">{review.name}</p>
                    <p className="text-hp-muted text-xs">{review.date}</p>
                  </div>
                </div>
                <SourceBadge source={review.source} />
              </div>

              <Stars rating={review.rating} />

              <p className="text-hp-muted text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>
            </article>
          ))}
        </div>

        {/* ── UGC HASHTAG SECTION ── */}
        <div className="reveal">
          <div className="text-center mb-8">
            <p className="text-hp-muted text-sm mb-2">Sdílejte svůj zážitek</p>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-hp-cream">
              <span className="text-fire">#HotPanSizzle</span>
            </h3>
          </div>

          {/* Instagram/TikTok grid */}
          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 md:gap-3"
            role="list"
            aria-label="Příspěvky hostů na sociálních sítích"
          >
            {UGC_POSTS.map((post) => (
              <div
                key={post.id}
                role="listitem"
                className="ugc-grid-item group"
                aria-label={`Příspěvek od ${post.user}`}
              >
                {/* Placeholder gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${post.bg}`} aria-hidden="true" />

                {/* Heat shimmer */}
                <div className="heat-shimmer-overlay opacity-40" aria-hidden="true" />

                {/* Video indicator */}
                {post.type !== 'photo' && (
                  <div className="absolute top-2 right-2 z-10" aria-hidden="true">
                    <svg className="w-4 h-4 text-white/70" fill="currentColor" viewBox="0 0 24 24">
                      {post.type === 'reel'
                        ? <path d="M15 10l4.553-2.275A1 1 0 0121 8.72v6.56a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                        : <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                      }
                      {post.type === 'reel' && <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>}
                    </svg>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-3">
                  <div className="flex items-center gap-1 text-white text-sm font-semibold mb-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    {post.likes}
                  </div>
                  <p className="text-white/70 text-xs">{post.user}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-hp-muted text-sm mt-4">
            Označte nás <strong className="text-hp-cream">@hotpan.cz</strong> nebo použijte hashtag{' '}
            <strong className="text-hp-orange">#HotPanSizzle</strong> pro zveřejnění ve feedu.
          </p>
        </div>

      </div>
    </section>
  );
}
