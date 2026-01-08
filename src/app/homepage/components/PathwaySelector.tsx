'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface Pathway {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
}

const mockPathways: Pathway[] = [
  {
    id: 'distributor',
    title: 'Distributors & Wholesalers',
    description: 'Partner with us for reliable supply chains and competitive bulk pricing',
    icon: 'TruckIcon',
    benefits: [
      'Exclusive bulk pricing tiers',
      'Dedicated account management',
      'Flexible payment terms',
      'Pan-India distribution support'
    ]
  },
  {
    id: 'retailer',
    title: 'Retail Partners',
    description: 'Stock premium quality products that customers trust and love',
    icon: 'BuildingStorefrontIcon',
    benefits: [
      'High-margin product portfolio',
      'Marketing support materials',
      'Fast order fulfillment',
      'Seasonal promotional campaigns'
    ]
  },
  {
    id: 'consumer',
    title: 'Direct Consumers',
    description: 'Experience authentic flavors and premium quality for your family',
    icon: 'UserGroupIcon',
    benefits: [
      'Fresh from manufacturing facility',
      'Recipe inspiration included',
      'Quality guarantee on every pack',
      'Convenient home delivery'
    ]
  }
];

export default function PathwaySelector() {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

  const handlePathwayClick = (pathwayId: string) => {
    setSelectedPathway(pathwayId === selectedPathway ? null : pathwayId);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
            Choose Your Journey
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re a business partner or a food enthusiast, we have the perfect solution for you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {mockPathways.map((pathway) => (
            <div
              key={pathway.id}
              className={`bg-card rounded-lg p-6 cursor-pointer transition-all duration-300 border-2 ${
                selectedPathway === pathway.id
                  ? 'border-primary shadow-warm-lg scale-105'
                  : 'border-border hover:border-primary/50 hover:shadow-warm'
              }`}
              onClick={() => handlePathwayClick(pathway.id)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-lg mb-4">
                <Icon name={pathway.icon as any} size={32} className="text-primary" />
              </div>
              
              <h3 className="font-headline text-2xl font-semibold text-foreground mb-2">
                {pathway.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4">
                {pathway.description}
              </p>

              {selectedPathway === pathway.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <h4 className="font-cta font-semibold text-foreground mb-3">
                    Key Benefits:
                  </h4>
                  <ul className="space-y-2">
                    {pathway.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={20}
                          variant="solid"
                          className="text-success flex-shrink-0 mt-0.5"
                        />
                        <span className="font-body text-sm text-foreground">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full mt-6 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-md shadow-warm-sm transition-all duration-300">
                    Get Started
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}