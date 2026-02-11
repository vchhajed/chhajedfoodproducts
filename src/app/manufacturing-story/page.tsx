import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FacilityTour from './components/FacilityTour';
import QualityProcess from './components/QualityProcess';
import Certifications from './components/Certifications';
import InnovationLab from './components/InnovationLab';
import Sustainability from './components/Sustainability';
// import TeamSpotlight from './components/TeamSpotlight'; // REMOVED: Mock team data with placeholder images
// import CTASection from './components/CTASection'; // REMOVED: Mock CTA
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Manufacturing Story - Chhajed Food Products Hub',
  description: 'Discover our state-of-the-art manufacturing facility, quality processes, certifications, and R&D capabilities. From traditional recipes to modern technology, learn how we craft excellence in every batch.',
};

export default function ManufacturingStoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <FacilityTour />
        <QualityProcess />
        <Certifications />
        <InnovationLab />
        <Sustainability />
        {/* <TeamSpotlight /> */}
        {/* <CTASection /> */}
        <Footer />
      </div>
    </main>
  );
}