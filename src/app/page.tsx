import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Showcase from '@/components/Showcase';
import Tokenomics from '@/components/Tokenomics';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-void text-cloud">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <Showcase />
      <Tokenomics />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
