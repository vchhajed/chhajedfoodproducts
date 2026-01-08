'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FacilityArea {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
}

interface FacilityTourProps {
  className?: string;
}

const FacilityTour = ({ className = '' }: FacilityTourProps) => {
  const facilityAreas: FacilityArea[] = [
  {
    id: 1,
    title: "Raw Material Processing",
    description: "Our journey begins with carefully selected ingredients. Our raw material processing area features advanced cleaning, sorting, and quality inspection systems that ensure only the finest ingredients enter our production line.",
    image: "https://images.unsplash.com/photo-1612193768680-4939bbca2aa3",
    alt: "Industrial food processing area with stainless steel sorting machines and quality control stations for raw ingredients",
    features: [
    "Automated sorting systems",
    "Multi-stage cleaning process",
    "Quality inspection checkpoints",
    "Temperature-controlled storage"]

  },
  {
    id: 2,
    title: "Production Lines",
    description: "State-of-the-art production lines where tradition meets technology. Our automated systems maintain consistency while preserving the authentic taste that defines Chhajed products.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10704522a-1766273106053.png",
    alt: "Modern automated food production line with conveyor belts and packaging machinery in clean manufacturing environment",
    features: [
    "Fully automated processing",
    "Real-time quality monitoring",
    "Hygiene-controlled environment",
    "Batch traceability systems"]

  },
  {
    id: 3,
    title: "Quality Control Laboratory",
    description: "Our in-house laboratory conducts rigorous testing at every stage. From raw materials to finished products, nothing leaves our facility without meeting our stringent quality standards.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_178e32a02-1766486154263.png",
    alt: "Food quality control laboratory with scientists in white coats testing samples using modern analytical equipment",
    features: [
    "Microbiological testing",
    "Nutritional analysis",
    "Sensory evaluation",
    "Shelf-life studies"]

  },
  {
    id: 4,
    title: "Packaging & Storage",
    description: "Advanced packaging technology preserves freshness and extends shelf life. Our climate-controlled storage facilities ensure products maintain peak quality until they reach your table.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1d8f07042-1765030593047.png",
    alt: "Automated packaging facility with robotic arms sealing food products in modern warehouse with organized storage racks",
    features: [
    "Automated packaging lines",
    "Modified atmosphere packaging",
    "Climate-controlled warehousing",
    "Inventory management systems"]

  }];


  const [activeArea, setActiveArea] = useState<number>(1);
  const currentArea = facilityAreas.find((area) => area.id === activeArea) || facilityAreas[0];

  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
            <p className="font-cta text-sm font-semibold text-primary">Virtual Tour</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Inside Our Manufacturing Excellence
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a virtual journey through our state-of-the-art facility and discover how we maintain the highest standards of quality and hygiene.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-3">
            {facilityAreas.map((area) =>
            <button
              key={area.id}
              onClick={() => setActiveArea(area.id)}
              className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
              activeArea === area.id ?
              'bg-primary text-primary-foreground shadow-warm-md' :
              'bg-background hover:bg-muted text-foreground'}`
              }>

                <div className="flex items-center justify-between">
                  <h3 className="font-cta font-semibold text-lg">{area.title}</h3>
                  <Icon
                  name="ChevronRightIcon"
                  size={20}
                  variant={activeArea === area.id ? 'solid' : 'outline'} />

                </div>
              </button>
            )}
          </div>

          <div className="lg:col-span-2">
            <div className="bg-background rounded-2xl overflow-hidden shadow-warm-lg">
              <div className="relative h-[400px] overflow-hidden">
                <AppImage
                  src={currentArea.image}
                  alt={currentArea.alt}
                  className="w-full h-full object-cover" />

                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-full">
                  <p className="font-cta text-sm font-semibold text-primary-foreground">
                    Area {currentArea.id} of {facilityAreas.length}
                  </p>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="font-headline text-3xl font-bold text-foreground mb-4">
                  {currentArea.title}
                </h3>
                <p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed">
                  {currentArea.description}
                </p>
                
                <div className="grid sm:grid-cols-2 gap-3">
                  {currentArea.features.map((feature, index) =>
                  <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center mt-0.5">
                        <Icon name="CheckIcon" size={16} className="text-success" />
                      </div>
                      <p className="font-body text-foreground">{feature}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FacilityTour;