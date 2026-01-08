'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    brand: string;
    category: string;
    image: string;
    alt: string;
    price: number;
    bulkPrice: number;
    minBulkQty: number;
    description: string;
    weight: string;
    prepTime: string;
    dietary: string[];
    nutritional: {
      calories: number;
      protein: number;
      carbs: number;
      fat: number;
    };
    inStock: boolean;
    featured: boolean;
  };
  onSampleRequest: (productId: number) => void;
  onBulkInquiry: (productId: number) => void;
}

export default function ProductCard({ product, onSampleRequest, onBulkInquiry }: ProductCardProps) {
  const [showNutrition, setShowNutrition] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useCart();

  return (
    <div className="bg-card rounded-lg shadow-warm overflow-hidden border border-border hover:shadow-warm-lg transition-all duration-300 flex flex-col h-full">
      <div className="relative h-64 bg-muted overflow-hidden">
        <AppImage
          src={product.image}
          alt={product.alt}
          className={`w-full h-full object-cover transition-all duration-500 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}
          onLoad={() => setImageLoaded(true)}
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 rounded-md font-cta font-semibold text-sm shadow-warm-sm">
            Featured
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-md font-cta font-semibold text-sm shadow-warm-sm">
            Out of Stock
          </div>
        )}
        <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
          {product.dietary.map((diet) => (
            <span
              key={diet}
              className="bg-success/90 text-success-foreground px-2 py-1 rounded text-xs font-body font-medium backdrop-blur-sm"
            >
              {diet}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <div className="mb-3">
          <p className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wide mb-1">
            {product.brand}
          </p>
          <h3 className="font-headline font-bold text-xl text-foreground mb-2 line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm font-body text-muted-foreground line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2">
            <Icon name="ScaleIcon" size={16} variant="outline" className="text-primary" />
            <span className="font-body text-foreground">{product.weight}</span>
          </div>
          <div className="flex items-center gap-2">
            <Icon name="ClockIcon" size={16} variant="outline" className="text-primary" />
            <span className="font-body text-foreground">{product.prepTime}</span>
          </div>
        </div>

        <button
          onClick={() => setShowNutrition(!showNutrition)}
          className="flex items-center justify-between w-full px-3 py-2 mb-4 bg-muted hover:bg-muted/80 rounded-md transition-colors duration-300"
        >
          <span className="font-body font-medium text-sm text-foreground">
            Nutritional Information
          </span>
          <Icon
            name={showNutrition ? 'ChevronUpIcon' : 'ChevronDownIcon'}
            size={20}
            variant="outline"
            className="text-primary"
          />
        </button>

        {showNutrition && (
          <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-background rounded-md">
            <div className="text-center">
              <p className="text-xs font-body text-muted-foreground mb-1">Calories</p>
              <p className="text-lg font-headline font-semibold text-foreground">
                {product.nutritional.calories}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-body text-muted-foreground mb-1">Protein</p>
              <p className="text-lg font-headline font-semibold text-foreground">
                {product.nutritional.protein}g
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-body text-muted-foreground mb-1">Carbs</p>
              <p className="text-lg font-headline font-semibold text-foreground">
                {product.nutritional.carbs}g
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs font-body text-muted-foreground mb-1">Fat</p>
              <p className="text-lg font-headline font-semibold text-foreground">
                {product.nutritional.fat}g
              </p>
            </div>
          </div>
        )}

        <div className="mt-auto">
          <button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                brand: product.brand,
                image: product.image,
                weight: product.weight,
              });
              setAddedToCart(true);
              setTimeout(() => setAddedToCart(false), 2000);
            }}
            disabled={!product.inStock}
            className="w-full px-4 py-3 font-cta font-semibold text-sm text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {addedToCart ? (
              <>
                <Icon name="CheckCircleIcon" size={20} variant="solid" />
                Added to Cart
              </>
            ) : (
              <>
                <Icon name="ShoppingCartIcon" size={20} variant="outline" />
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}