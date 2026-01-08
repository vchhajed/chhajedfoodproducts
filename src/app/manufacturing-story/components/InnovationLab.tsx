'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Innovation {
  id: number;
  title: string;
  category: string;
  description: string;
  status: 'In Development' | 'Testing Phase' | 'Coming Soon';
  image: string;
  alt: string;
  expectedLaunch: string;
}

interface InnovationLabProps {
  className?: string;
}

const InnovationLab = ({ className = '' }: InnovationLabProps) => {
  const innovations: Innovation[] = [
  {
    id: 1,
    title: "Protein-Enriched Snack Range",
    category: "Health & Wellness",
    description: "Next-generation snacks fortified with plant-based proteins, targeting health-conscious consumers seeking nutritious alternatives without compromising on taste.",
    status: "Testing Phase",
    image: "https://images.unsplash.com/photo-1596293228093-e452bff6572f",
    alt: "Healthy protein-rich snacks arranged on wooden board with nuts and seeds in modern kitchen setting",
    expectedLaunch: "Q2 2026"
  },
  {
    id: 2,
    title: "Regional Flavor Fusion Series",
    category: "Product Innovation",
    description: "Authentic regional Indian flavors reimagined for modern snacking. Combining traditional spice blends with contemporary preparation techniques for unique taste experiences.",
    status: "In Development",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c72bd954-1765260337610.png",
    alt: "Colorful array of Indian spices and ingredients displayed in small bowls on rustic wooden surface",
    expectedLaunch: "Q3 2026"
  },
  {
    id: 3,
    title: "Sustainable Packaging Initiative",
    category: "Sustainability",
    description: "Biodegradable and compostable packaging solutions that maintain product freshness while reducing environmental impact. Part of our commitment to sustainable manufacturing.",
    status: "Testing Phase",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_189e0e6fe-1766770903394.png",
    alt: "Eco-friendly biodegradable food packaging materials with green plant leaves on natural background",
    expectedLaunch: "Q1 2026"
  },
  {
    id: 4,
    title: "Custom B2B Formulations",
    category: "Private Label",
    description: "Tailored product development for B2B partners seeking unique formulations. Our R&D team collaborates to create custom snack solutions matching specific requirements.",
    status: "Coming Soon",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_178e32a02-1766486154263.png",
    alt: "Food scientists in white lab coats working with samples and equipment in modern research laboratory",
    expectedLaunch: "Ongoing Service"
  }];


  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const categories = ['All', 'Health & Wellness', 'Product Innovation', 'Sustainability', 'Private Label'];

  const filteredInnovations = selectedCategory === 'All' ?
  innovations :
  innovations.filter((inn) => inn.category === selectedCategory);

  const getStatusColor = (status: Innovation['status']) => {
    switch (status) {
      case 'In Development':
        return 'bg-warning/20 text-warning-foreground';
      case 'Testing Phase':
        return 'bg-accent/20 text-accent-foreground';
      case 'Coming Soon':
        return 'bg-success/20 text-success-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-4">
            <p className="font-cta text-sm font-semibold text-accent-foreground">Innovation Pipeline</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            The Future of Snacking
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our R&D laboratory is constantly pushing boundaries, developing innovative products that blend tradition with cutting-edge food technology.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-cta font-medium transition-all duration-300 ${
            selectedCategory === category ?
            'bg-primary text-primary-foreground shadow-warm-sm' :
            'bg-card text-foreground hover:bg-muted'}`
            }>

              {category}
            </button>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {filteredInnovations.map((innovation) =>
          <div key={innovation.id} className="bg-card rounded-2xl overflow-hidden shadow-warm-md hover:shadow-warm-lg transition-all duration-300">
              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={innovation.image}
                alt={innovation.alt}
                className="w-full h-full object-cover" />

                <div className="absolute top-4 right-4">
                  <span className={`inline-block px-4 py-2 rounded-full font-cta text-sm font-semibold ${getStatusColor(innovation.status)}`}>
                    {innovation.status}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center space-x-2 mb-3">
                  <Icon name="BeakerIcon" size={20} className="text-primary" />
                  <span className="font-body text-sm text-muted-foreground">{innovation.category}</span>
                </div>
                
                <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                  {innovation.title}
                </h3>
                
                <p className="font-body text-foreground/80 leading-relaxed mb-4">
                  {innovation.description}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2">
                    <Icon name="CalendarDaysIcon" size={18} className="text-accent" />
                    <span className="font-body text-sm text-muted-foreground">
                      Expected: {innovation.expectedLaunch}
                    </span>
                  </div>
                  <button className="inline-flex items-center space-x-1 text-primary hover:text-primary/80 font-cta font-semibold text-sm transition-colors">
                    <span>Learn More</span>
                    <Icon name="ArrowRightIcon" size={16} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="font-headline text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Partner with Our Innovation Team
            </h3>
            <p className="font-body text-lg text-primary-foreground/90 mb-8">
              Looking for custom formulations or private label solutions? Our R&D team collaborates with B2B partners to develop unique products tailored to your market needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground text-primary font-cta font-semibold rounded-lg shadow-warm-md hover:shadow-warm-lg transition-all duration-300">
                <Icon name="ChatBubbleLeftRightIcon" size={20} />
                <span>Discuss Custom Solutions</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-cta font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300">
                <Icon name="DocumentTextIcon" size={20} />
                <span>Download R&D Capabilities</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default InnovationLab;