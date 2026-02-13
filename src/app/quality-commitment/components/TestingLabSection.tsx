'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TestCategory {
  id: number;
  name: string;
  icon: string;
  tests: Test[];
}

interface Test {
  id: number;
  name: string;
  description: string;
  frequency: string;
  standard: string;
}

export default function TestingLabSection() {
  const [activeCategory, setActiveCategory] = useState<number>(1);

  const testCategories: TestCategory[] = [
  {
    id: 1,
    name: "Microbiological Testing",
    icon: "BeakerIcon",
    tests: [
    {
      id: 1,
      name: "Total Plate Count",
      description: "Measures overall bacterial contamination levels",
      frequency: "Every Batch",
      standard: "< 10,000 CFU/g"
    },
    {
      id: 2,
      name: "Yeast & Mold Count",
      description: "Detects fungal contamination in products",
      frequency: "Every Batch",
      standard: "< 100 CFU/g"
    },
    {
      id: 3,
      name: "Pathogen Testing",
      description: "Screens for harmful bacteria like E.coli, Salmonella",
      frequency: "Every Batch",
      standard: "Absent in 25g"
    },
    {
      id: 4,
      name: "Coliform Testing",
      description: "Indicates hygiene and sanitation effectiveness",
      frequency: "Weekly",
      standard: "< 10 MPN/g"
    }]

  },
  {
    id: 2,
    name: "Chemical Analysis",
    icon: "ChartBarIcon",
    tests: [
    {
      id: 1,
      name: "Moisture Content",
      description: "Ensures product stability and shelf life",
      frequency: "Every Batch",
      standard: "< 5% for snacks"
    },
    {
      id: 2,
      name: "Fat Content",
      description: "Verifies nutritional labeling accuracy",
      frequency: "Every Batch",
      standard: "As per specification"
    },
    {
      id: 3,
      name: "Salt Content",
      description: "Maintains flavor consistency and health standards",
      frequency: "Every Batch",
      standard: "1.5-2.5% range"
    },
    {
      id: 4,
      name: "Peroxide Value",
      description: "Measures oil oxidation and rancidity",
      frequency: "Monthly",
      standard: "< 10 meq/kg"
    }]

  },
  {
    id: 3,
    name: "Heavy Metal Testing",
    icon: "ShieldExclamationIcon",
    tests: [
    {
      id: 1,
      name: "Lead Content",
      description: "Ensures safety from toxic metal contamination",
      frequency: "Quarterly",
      standard: "< 0.1 ppm"
    },
    {
      id: 2,
      name: "Arsenic Content",
      description: "Screens for harmful arsenic levels",
      frequency: "Quarterly",
      standard: "< 0.1 ppm"
    },
    {
      id: 3,
      name: "Mercury Content",
      description: "Detects mercury contamination",
      frequency: "Quarterly",
      standard: "< 0.01 ppm"
    },
    {
      id: 4,
      name: "Cadmium Content",
      description: "Monitors cadmium levels for safety",
      frequency: "Quarterly",
      standard: "< 0.05 ppm"
    }]

  },
  {
    id: 4,
    name: "Nutritional Analysis",
    icon: "DocumentChartBarIcon",
    tests: [
    {
      id: 1,
      name: "Protein Content",
      description: "Verifies protein levels for labeling",
      frequency: "Every Product",
      standard: "As per formulation"
    },
    {
      id: 2,
      name: "Carbohydrate Analysis",
      description: "Measures total carbohydrate content",
      frequency: "Every Product",
      standard: "As per formulation"
    },
    {
      id: 3,
      name: "Fiber Content",
      description: "Determines dietary fiber levels",
      frequency: "Every Product",
      standard: "As per formulation"
    },
    {
      id: 4,
      name: "Vitamin & Mineral",
      description: "Analyzes micronutrient content",
      frequency: "Annually",
      standard: "As per claims"
    }]

  }];


  const activeTests = testCategories.find((cat) => cat.id === activeCategory)?.tests || [];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Advanced Laboratory Testing
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Our state-of-the-art laboratory conducts comprehensive testing to ensure every product meets stringent quality and safety standards
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-1">
            <div className="bg-card rounded-xl shadow-warm-md p-6 space-y-3 sticky top-24">
              <h3 className="font-headline text-xl font-bold text-foreground mb-4">
                Testing Categories
              </h3>
              {testCategories.map((category) =>
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-300 ${
                activeCategory === category.id ?
                'bg-primary text-primary-foreground shadow-warm-sm' :
                'bg-background text-foreground hover:bg-muted'}`
                }>

                  <Icon
                  name={category.icon as any}
                  size={24}
                  variant={activeCategory === category.id ? 'solid' : 'outline'} />

                  <span className="font-cta text-sm font-semibold text-left">
                    {category.name}
                  </span>
                </button>
              )}
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl shadow-warm-lg p-8 space-y-6">
              <div className="flex items-center space-x-4 pb-6 border-b border-border">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Icon
                    name={testCategories.find((cat) => cat.id === activeCategory)?.icon as any}
                    size={28}
                    variant="solid"
                    className="text-primary" />

                </div>
                <h3 className="font-headline text-2xl font-bold text-foreground">
                  {testCategories.find((cat) => cat.id === activeCategory)?.name}
                </h3>
              </div>

              <div className="space-y-4">
                {activeTests.map((test) =>
                <div
                  key={test.id}
                  className="bg-background rounded-lg p-6 hover:shadow-warm-sm transition-all duration-300">

                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-cta text-base font-semibold text-foreground">
                        {test.name}
                      </h4>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-body text-xs font-medium">
                        {test.frequency}
                      </span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-4">
                      {test.description}
                    </p>
                    <div className="flex items-center space-x-2">
                      <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success" />
                      <span className="font-body text-sm text-foreground">
                        <span className="font-semibold">Standard:</span> {test.standard}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-card rounded-xl shadow-warm-md overflow-hidden">
            <div className="relative overflow-hidden h-64">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_14978cb92-1766741742666.png"
                alt="Modern food testing laboratory with scientist in white coat using microscope and testing equipment"
                className="w-full h-full object-cover" />

            </div>
            <div className="p-6">
              <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                State-of-the-Art Equipment
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Our laboratory is equipped with the latest analytical instruments including HPLC, GC-MS, and atomic absorption spectrophotometers for precise testing
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="BeakerIcon" size={20} variant="solid" />
                <span className="font-cta text-sm font-semibold">ISO 17025 Accredited Lab</span>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-xl shadow-warm-md overflow-hidden">
            <div className="relative overflow-hidden h-64">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_15687ae8f-1766763487799.png"
                alt="Quality control team in protective gear analyzing food samples with digital testing devices"
                className="w-full h-full object-cover" />

            </div>
            <div className="p-6">
              <h3 className="font-headline text-xl font-bold text-foreground mb-3">
                Expert Quality Team
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                Our team of qualified food scientists and microbiologists brings decades of combined experience in food safety and quality assurance
              </p>
              <div className="flex items-center space-x-2 text-primary">
                <Icon name="AcademicCapIcon" size={20} variant="solid" />
                <span className="font-cta text-sm font-semibold">Certified Food Scientists</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}