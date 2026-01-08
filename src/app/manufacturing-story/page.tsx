import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import FounderStory from './components/FounderStory';
import FacilityTour from './components/FacilityTour';
import QualityProcess from './components/QualityProcess';
import Certifications from './components/Certifications';
import InnovationLab from './components/InnovationLab';
import Sustainability from './components/Sustainability';
import TeamSpotlight from './components/TeamSpotlight';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Manufacturing Story - Chhajed Foods Hub',
  description: 'Discover our state-of-the-art manufacturing facility, quality processes, certifications, and R&D capabilities. From traditional recipes to modern technology, learn how we craft excellence in every batch.',
};

export default function ManufacturingStoryPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <FounderStory />
        <FacilityTour />
        <QualityProcess />
        <Certifications />
        <InnovationLab />
        <Sustainability />
        <TeamSpotlight />
        <CTASection />
        <Footer />
      </div>
    </main>
  );
}