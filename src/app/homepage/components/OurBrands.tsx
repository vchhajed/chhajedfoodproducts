'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';

interface Brand {
  id: number;
  name: string;
  logo: string;
  tagline: string;
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'Divya Samrat',
    logo: '/assets/images/brands/Picture1.png',
    tagline: 'Traditional Excellence',
  },
  {
    id: 2,
    name: 'Divya Kamal',
    logo: '/assets/images/brands/Picture2.png',
    tagline: 'Pure & Natural',
  },
  {
    id: 3,
    name: "Yuhvi's",
    logo: '/assets/images/brands/Picture3.png',
    tagline: 'Bold Flavors',
  },
  {
    id: 4,
    name: 'Tajmahak',
    logo: '/assets/images/brands/Picture4.png',
    tagline: 'Royal Taste',
  },
  {
    id: 5,
    name: 'KK9',
    logo: '/assets/images/brands/Picture5.png',
    tagline: 'Premium Quality',
  },
  {
    id: 6,
    name: 'Nutgold',
    logo: '/assets/images/brands/Picture6.png',
    tagline: 'Nutty Goodness',
  },
];

export default function OurBrands() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-background via-card/50 to-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block font-accent text-primary text-sm tracking-[0.3em] uppercase mb-3">
            Our Portfolio
          </span>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-5">
            Brands That Define{' '}
            <span className="text-primary">Quality</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-6 rounded-full" />
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Each brand in our family carries forward the legacy of authentic
            Indian flavors with uncompromising quality standards
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 max-w-6xl mx-auto">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className={`group relative bg-background rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                hoveredId === brand.id
                  ? 'border-primary shadow-warm-lg scale-105 -translate-y-2'
                  : 'border-border/50 shadow-warm-sm hover:border-primary/40 hover:shadow-warm'
              }`}
              onMouseEnter={() => setHoveredId(brand.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glow effect on hover */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent transition-opacity duration-500 ${
                  hoveredId === brand.id ? 'opacity-100' : 'opacity-0'
                }`}
              />

              <div className="relative p-5 flex flex-col items-center">
                {/* Logo Container */}
                <div className="w-full aspect-[4/3] flex items-center justify-center mb-4 p-2">
                  <AppImage
                    src={brand.logo}
                    alt={brand.name}
                    width={160}
                    height={100}
                    objectFit="contain"
                    className={`max-h-full w-auto transition-transform duration-500 ${
                      hoveredId === brand.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>

                {/* Brand Info */}
                <div className="text-center">
                  <h3 className="font-cta font-semibold text-foreground text-sm">
                    {brand.name}
                  </h3>
                  <p
                    className={`font-body text-xs text-muted-foreground mt-1 transition-all duration-300 ${
                      hoveredId === brand.id
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                  >
                    {brand.tagline}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className="text-center mt-14">
          <p className="font-accent text-muted-foreground italic text-lg">
            &ldquo;From our family to yours &mdash; six brands, one promise of
            quality&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
