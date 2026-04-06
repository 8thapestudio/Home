import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
});

const playfair = Playfair_Display({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-playfair',
  display: 'swap',
  preload: true,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#080808',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://hotpan.cz'),
  title: {
    default: 'Hot Pan – The Symphony of Fire and Iron | Prague',
    template: '%s | Hot Pan Restaurant',
  },
  description:
    'Hot Pan – exkluzivní gril restaurace v Praze. Zažijte symfonii ohně a litiny. Online rezervace, degustační menu, privátní salonky. Rezervujte svůj stůl ještě dnes.',
  keywords: [
    'gril restaurace Praha',
    'Hot Pan',
    'steak Praha',
    'litinová pánev',
    'privátní salonek Praha',
    'steakhouse Praha',
    'fire grill Praha',
    'online rezervace restaurace',
  ],
  authors: [{ name: 'Hot Pan Restaurant' }],
  creator: 'Hot Pan Restaurant',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://hotpan.cz',
    siteName: 'Hot Pan Restaurant',
    title: 'Hot Pan – The Symphony of Fire and Iron',
    description:
      'Exkluzivní gril restaurace v Praze. Zažijte symfonii ohně, litiny a dokonalých chutí.',
    images: [
      {
        url: '/images/og-hotpan.jpg',
        width: 1200,
        height: 630,
        alt: 'Hot Pan – Gril Restaurace Praha',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hot Pan – The Symphony of Fire and Iron',
    description: 'Exkluzivní gril restaurace v Praze. Online rezervace.',
    images: ['/images/og-hotpan.jpg'],
  },
  alternates: {
    canonical: 'https://hotpan.cz',
  },
};

// Schema.org LocalBusiness structured data
const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  '@id': 'https://hotpan.cz/#restaurant',
  name: 'Hot Pan',
  description:
    'Exkluzivní gril restaurace zaměřená na techniku litinové pánve, karamelizaci a zachování šťavnatosti. Symfonii ohně a litiny.',
  url: 'https://hotpan.cz',
  telephone: '+420 777 HOT PAN',
  email: 'rezervace@hotpan.cz',
  image: 'https://hotpan.cz/images/og-hotpan.jpg',
  logo: 'https://hotpan.cz/images/logo.svg',
  priceRange: '€€€',
  servesCuisine: ['Grill', 'European', 'Steakhouse'],
  hasMenu: 'https://hotpan.cz/#menu',
  acceptsReservations: true,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Náměstí Míru 14',
    addressLocality: 'Praha 2 – Vinohrady',
    postalCode: '120 00',
    addressCountry: 'CZ',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.0755,
    longitude: 14.4378,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
      opens: '17:00',
      closes: '23:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Friday', 'Saturday'],
      opens: '16:00',
      closes: '00:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Sunday'],
      opens: '16:00',
      closes: '22:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '347',
    bestRating: '5',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="bg-hp-black text-hp-cream antialiased">
        {children}
      </body>
    </html>
  );
}
