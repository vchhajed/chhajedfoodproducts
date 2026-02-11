import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import PathwaySelector from './components/PathwaySelector';
import TrustSignals from './components/TrustSignals';
// import FeaturedProducts from './components/FeaturedProducts'; // REMOVED: Mock data
// import TestimonialsSection from './components/TestimonialsSection'; // REMOVED: Mock testimonials
// import CTASection from './components/CTASection'; // REMOVED: Mock CTAs
import OurBrands from './components/OurBrands';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - Chhajed Food Products Hub',
  description: 'Chhajed Food Products embodies the perfect fusion of traditional Indian culinary heritage and contemporary snack innovation. Discover premium quality dips, spreads, nuts, snacks, and pasta products trusted by businesses and loved by consumers across India.',
};

export default function Homepage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        <HeroSection />
        <OurBrands />
        <PathwaySelector />
        <TrustSignals />
        {/* REMOVED: Mock sections */}
        {/* <FeaturedProducts /> */}
        {/* <TestimonialsSection /> */}
        {/* <CTASection /> */}
      </main>

      <Footer />
    </div>
  );
}