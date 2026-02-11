'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Product {
  id: number;
  name: string;
  tagline: string;
  image: string;
  alt: string;
  category: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Divya Kamal',
    tagline: 'Premium Dips & Spreads for Every Occasion',
    image: '/assets/images/hero/h1.png',
    alt: 'Divya Kamal Vanilla Flavoured Dip - Creamy, Smooth, Dessert Ready',
    category: 'Dips & Spreads',
  },
  {
    id: 2,
    name: 'Divya Samrat',
    tagline: 'Traditional Chatni with Authentic Flavors',
    image: '/assets/images/hero/h2.png',
    alt: 'Divya Samrat Mango Flavoured Sweet Chatni - Sweet, Tangy & Sparkling',
    category: 'Chatni',
  },
  {
    id: 3,
    name: 'Tajmahak',
    tagline: 'Sweet & Refreshing Syrups',
    image: '/assets/images/hero/h3.png',
    alt: 'Tajmahak Strawberry Flavour Syrup - Sweet & Fruity',
    category: 'Syrups',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockProducts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + mockProducts.length) % mockProducts.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockProducts.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isHydrated) {
    return (
      <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-to-br from-background to-card">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="w-1/2">
            <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {mockProducts[0].name}
            </h1>
            <p className="font-body text-base sm:text-lg text-muted-foreground mt-2">
              {mockProducts[0].tagline}
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-br from-background to-card">
      <div className="container mx-auto px-4 h-full flex items-center relative z-20">
        {/* Left side - Text content */}
        <div className="w-full md:w-5/12 relative z-10">
          <span className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/90 text-primary-foreground font-cta font-semibold text-xs sm:text-sm rounded-full mb-3 sm:mb-4">
            {mockProducts[currentSlide].category}
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-2 sm:mb-3 md:mb-4">
            {mockProducts[currentSlide].name}
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-4 sm:mb-6 md:mb-8">
            {mockProducts[currentSlide].tagline}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3 md:gap-4">
            <button className="px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold text-sm sm:text-base rounded-md shadow-warm transition-all duration-300">
              Explore Products
            </button>
            <button className="px-6 py-3 sm:px-7 sm:py-3.5 md:px-8 md:py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-cta font-semibold text-sm sm:text-base rounded-md transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>

        {/* Right side - Product image */}
        <div className="hidden md:flex w-7/12 h-full items-center justify-center relative">
          {mockProducts.map((product, index) => (
            <div
              key={product.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-8'
              }`}
            >
              <AppImage
                src={product.image}
                alt={product.alt}
                width={700}
                height={500}
                objectFit="contain"
                className="max-h-[90%] w-auto object-contain drop-shadow-2xl"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile image - shown below text on small screens */}
      <div className="md:hidden absolute bottom-12 right-0 w-1/2 h-1/2">
        {mockProducts.map((product, index) => (
          <div
            key={product.id}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-700 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <AppImage
              src={product.image}
              alt={product.alt}
              width={300}
              height={200}
              objectFit="contain"
              className="max-h-full w-auto object-contain"
            />
          </div>
        ))}
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={handlePrevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm rounded-full transition-all duration-300"
        aria-label="Previous slide"
      >
        <Icon
          name="ChevronLeftIcon"
          size={20}
          className="text-foreground sm:w-6 sm:h-6"
        />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center bg-foreground/10 hover:bg-foreground/20 backdrop-blur-sm rounded-full transition-all duration-300"
        aria-label="Next slide"
      >
        <Icon
          name="ChevronRightIcon"
          size={20}
          className="text-foreground sm:w-6 sm:h-6"
        />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-3">
        {mockProducts.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-primary w-6 sm:w-8'
                : 'w-2 sm:w-3 bg-foreground/30 hover:bg-foreground/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
