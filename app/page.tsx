import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PanExperience from '@/components/PanExperience';
import Menu from '@/components/Menu';
import Reservation from '@/components/Reservation';
import SocialProof from '@/components/SocialProof';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      {/* Skip to main content – accessibility */}
      <a
        href="#menu"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100]
                   focus:px-4 focus:py-2 focus:bg-hp-orange focus:text-hp-black focus:rounded-lg
                   focus:font-semibold focus:text-sm"
      >
        Přeskočit na obsah
      </a>

      {/* Sticky navbar */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        {/* 1. Hero – video bg, flame CTA */}
        <Hero />

        {/* 2. The Pan Experience – storytelling */}
        <PanExperience />

        {/* 3. Digital Menu – filterable HTML */}
        <Menu />

        {/* 4. Reservation – zone picker + form */}
        <Reservation />

        {/* 5. Social Proof – reviews + UGC */}
        <SocialProof />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
