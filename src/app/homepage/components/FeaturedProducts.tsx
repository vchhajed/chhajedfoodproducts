'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { products as realProducts } from '@/data/products';

interface Product {
  id: number;
  name: string;
  brand: string;
  category: string;
  description: string;
  image: string;
  alt: string;
  features: string[];
  preparationTime: string;
  dietary: string[];
}

// Select featured products and adapt them to the component interface
const mockProducts: Product[] = realProducts
  .filter(p => p.featured)
  .slice(0, 12)
  .map(p => ({
    id: p.id,
    name: p.name,
    brand: p.brand,
    category: p.category,
    description: p.description,
    image: p.image,
    alt: p.alt,
    features: [
      `${p.weight} pack`,
      'Premium quality',
      p.dietary[0] || 'Quality ingredients'
    ],
    preparationTime: p.prepTime,
    dietary: p.dietary
  }));

const categories = ['All Products', 'Dips & Spreads', 'Syrups', 'Chatni', 'Fragrances'];

export default function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState('All Products');
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'All Products' ?
  mockProducts :
  mockProducts.filter((product) => product.category === selectedCategory);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our premium range of products crafted with quality ingredients and traditional expertise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) =>
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2.5 font-cta font-semibold rounded-full transition-all duration-300 ${
            selectedCategory === category ?
            'bg-primary text-primary-foreground shadow-warm' :
            'bg-card text-foreground hover:bg-muted border border-border'}`
            }>

              {category}
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) =>
          <div
            key={product.id}
            className="bg-card rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}>

              <div className="relative h-64 overflow-hidden">
                <AppImage
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary/90 text-primary-foreground text-sm font-cta font-semibold rounded-full">
                    {product.brand}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-2xl font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                
                <p className="font-body text-muted-foreground mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Icon name="ClockIcon" size={16} />
                    <span className="font-body">{product.preparationTime}</span>
                  </div>
                  <div className="flex gap-2">
                    {product.dietary.slice(0, 2).map((diet, index) =>
                  <span
                    key={index}
                    className="px-2 py-1 bg-muted text-foreground text-xs font-body rounded">

                        {diet}
                      </span>
                  )}
                  </div>
                </div>

                {hoveredProduct === product.id &&
              <div className="space-y-2 mb-4">
                    {product.features.map((feature, index) =>
                <div key={index} className="flex items-center gap-2">
                        <Icon
                    name="CheckCircleIcon"
                    size={16}
                    variant="solid"
                    className="text-success" />

                        <span className="font-body text-sm text-foreground">
                          {feature}
                        </span>
                      </div>
                )}
                  </div>
              }

                <div className="flex gap-3">
                  <button className="flex-1 px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-md transition-all duration-300">
                    View Details
                  </button>
                  <button className="px-4 py-2.5 bg-muted hover:bg-muted/80 text-foreground rounded-md transition-all duration-300">
                    <Icon name="ShoppingCartIcon" size={20} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-cta font-semibold rounded-md shadow-warm transition-all duration-300">
            View All Products
          </button>
        </div>
      </div>
    </section>);

}