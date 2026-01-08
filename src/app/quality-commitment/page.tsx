import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import CertificationsSection from './components/CertificationsSection';
import QualityTimelineSection from './components/QualityTimelineSection';
import IngredientSourcingSection from './components/IngredientSourcingSection';
import TestingLabSection from './components/TestingLabSection';
import NutritionalTransparencySection from './components/NutritionalTransparencySection';
import QualityMetricsSection from './components/QualityMetricsSection';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: 'Quality Commitment - Chhajed Foods Hub',
  description: 'Discover our comprehensive quality assurance processes, certifications, testing protocols, and ingredient sourcing transparency. Quality you can taste, trust you can feel.',
};

export default function QualityCommitmentPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
        <CertificationsSection />
        <QualityTimelineSection />
        <IngredientSourcingSection />
        <TestingLabSection />
        <NutritionalTransparencySection />
        <QualityMetricsSection />
        <CTASection />
      </div>
    </main>
  );
}