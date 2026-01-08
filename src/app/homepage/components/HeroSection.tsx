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
  image: "https://images.unsplash.com/photo-1578922793921-649a37b9e0b5",
  alt: 'Assorted colorful dips and spreads in glass bowls on wooden table with fresh vegetables',
  category: 'Dips & Spreads'
},
{
  id: 2,
  name: 'Divya Samrat',
  tagline: 'Traditional Chatni with Authentic Flavors',
  image: "https://images.unsplash.com/photo-1596040033229-a0b30b9edfc8",
  alt: 'Traditional Indian chatni in decorative bowls with fresh herbs and spices',
  category: 'Chatni'
},
{
  id: 3,
  name: 'Tajmahak',
  tagline: 'Sweet & Refreshing Syrups',
  image: "https://images.unsplash.com/photo-1546173159-315724a31696",
  alt: 'Colorful fruit syrups in glass bottles with fresh fruits',
  category: 'Syrups'
},
{
  id: 4,
  name: 'Yuhvi',
  tagline: 'Premium Fragrances',
  image: "https://images.unsplash.com/photo-1602524206684-48f5ab5c0654",
  alt: 'Elegant fragrance bottles with flowers and essential oils',
  category: 'Fragrances'
}];


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
    setCurrentSlide((prev) => (prev - 1 + mockProducts.length) % mockProducts.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockProducts.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  if (!isHydrated) {
    return (
      <section className="relative h-[600px] bg-gradient-to-br from-amber-50 to-amber-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-headline text-5xl font-bold text-foreground mb-4">
              {mockProducts[0].name}
            </h1>
            <p className="font-body text-xl text-muted-foreground">
              {mockProducts[0].tagline}
            </p>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="relative h-[600px] overflow-hidden bg-gradient-to-br from-amber-50 to-amber-100">
      <div className="absolute inset-0">
        {mockProducts.map((product, index) =>
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
          index === currentSlide ? 'opacity-100' : 'opacity-0'}`
          }>

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10" />
            <AppImage
            src={product.image}
            alt={product.alt}
            className="w-full h-full object-cover" />

          </div>
        )}
      </div>

      <div className="relative z-20 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 bg-primary/90 text-primary-foreground font-cta font-semibold rounded-full mb-4">
            {mockProducts[currentSlide].category}
          </span>
          <h1 className="font-headline text-6xl font-bold text-white mb-4">
            {mockProducts[currentSlide].name}
          </h1>
          <p className="font-body text-2xl text-white/90 mb-8">
            {mockProducts[currentSlide].tagline}
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-md shadow-warm transition-all duration-300">
              Explore Products
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-cta font-semibold rounded-md backdrop-blur-sm transition-all duration-300">
              Contact Sales
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handlePrevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
        aria-label="Previous slide">

        <Icon name="ChevronLeftIcon" size={24} className="text-white" />
      </button>

      <button
        onClick={handleNextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full transition-all duration-300"
        aria-label="Next slide">

        <Icon name="ChevronRightIcon" size={24} className="text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {mockProducts.map((_, index) =>
        <button
          key={index}
          onClick={() => handleDotClick(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
          index === currentSlide ?
          'bg-primary w-8' : 'bg-white/50 hover:bg-white/70'}`
          }
          aria-label={`Go to slide ${index + 1}`} />

        )}
      </div>
    </section>);

}