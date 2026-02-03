'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  variants?: Product[];
  onSampleRequest: (productId: number) => void;
  onBulkInquiry: (productId: number) => void;
}

export default function ProductCard({ product, variants = [], onSampleRequest, onBulkInquiry }: ProductCardProps) {
  const allVariants = variants.length > 0 ? variants : [product];
  const [selectedVariant, setSelectedVariant] = useState<Product>(allVariants[0]);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedQuantity, setAddedQuantity] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const hasMultipleVariants = allVariants.length > 1;

  const handleVariantChange = (variantId: number) => {
    const variant = allVariants.find(v => v.id === variantId);
    if (variant) {
      setSelectedVariant(variant);
      setImageLoaded(false);
      setQuantity(1);
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="bg-card rounded-xl shadow-warm overflow-hidden border border-border hover:shadow-warm-lg transition-all duration-300 flex flex-col h-full group">
      {/* Image Container - Fixed aspect ratio with full image visibility */}
      <div className="relative bg-gradient-to-b from-muted/50 to-muted p-4">
        <div className="relative aspect-square w-full">
          <AppImage
            src={selectedVariant.image}
            alt={selectedVariant.alt}
            fill
            objectFit="contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`transition-all duration-500 ${imageLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-2">
          {selectedVariant.featured && (
            <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full font-cta font-semibold text-xs shadow-warm-sm">
              Featured
            </div>
          )}
          {!selectedVariant.inStock && (
            <div className="bg-destructive text-destructive-foreground px-3 py-1 rounded-full font-cta font-semibold text-xs shadow-warm-sm">
              Out of Stock
            </div>
          )}
        </div>

        {/* Dietary Tags */}
        {selectedVariant.dietary.length > 0 && (
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
            {selectedVariant.dietary.map((diet) => (
              <span
                key={diet}
                className="bg-success/90 text-success-foreground px-2 py-0.5 rounded-full text-xs font-body font-medium backdrop-blur-sm"
              >
                {diet}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        {/* Brand */}
        <p className="text-xs font-body font-medium text-muted-foreground uppercase tracking-wider mb-1">
          {selectedVariant.brand}
        </p>

        {/* Product Name */}
        <h3 className="font-headline font-bold text-lg text-foreground mb-2 line-clamp-2">
          {selectedVariant.name}
        </h3>

        {/* Price */}
        <div className="flex flex-col gap-1 mb-3">
          <div className="flex items-baseline gap-2">
            <span className="font-headline font-bold text-2xl text-primary">
              {formatPrice(selectedVariant.sellingPrice)}
            </span>
            <span className="text-sm font-body text-muted-foreground line-through">
              {formatPrice(selectedVariant.mrp)}
            </span>
          </div>
          <span className="text-xs font-body text-success">
            Save {formatPrice(selectedVariant.mrp - selectedVariant.sellingPrice)} ({Math.round(((selectedVariant.mrp - selectedVariant.sellingPrice) / selectedVariant.mrp) * 100)}% off)
          </span>
        </div>

        {/* Size Selector */}
        {hasMultipleVariants && (
          <div className="mb-4">
            <label className="text-xs font-body font-medium text-muted-foreground mb-2 block">
              Select Size
            </label>
            <div className="relative">
              <select
                value={selectedVariant.id}
                onChange={(e) => handleVariantChange(Number(e.target.value))}
                className="w-full px-4 py-2.5 pr-10 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent appearance-none cursor-pointer transition-all"
              >
                {allVariants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.weight} - {formatPrice(variant.sellingPrice)}
                  </option>
                ))}
              </select>
              <Icon
                name="ChevronDownIcon"
                size={16}
                variant="outline"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
              />
            </div>
          </div>
        )}

        {/* Weight & Prep Time (only show if single variant) */}
        {!hasMultipleVariants && (
          <div className="flex items-center gap-4 mb-4 text-sm">
            <div className="flex items-center gap-1.5">
              <Icon name="ScaleIcon" size={14} variant="outline" className="text-primary" />
              <span className="font-body text-foreground">{selectedVariant.weight}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon name="ClockIcon" size={14} variant="outline" className="text-primary" />
              <span className="font-body text-foreground">{selectedVariant.prepTime}</span>
            </div>
          </div>
        )}

        {/* Description */}
        <p className="text-sm font-body text-muted-foreground line-clamp-2 mb-4">
          {selectedVariant.description}
        </p>

        {/* Quantity Selector and Add to Cart */}
        <div className="mt-auto space-y-3">
          {/* Quantity Selector */}
          <div className="flex items-center justify-between">
            <span className="text-sm font-body font-medium text-foreground">Quantity</span>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                disabled={quantity <= 1 || !selectedVariant.inStock}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="MinusIcon" size={16} variant="outline" />
              </button>
              <span className="w-8 text-center font-headline font-semibold text-foreground">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((prev) => prev + 1)}
                disabled={!selectedVariant.inStock}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border bg-background hover:bg-muted text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Icon name="PlusIcon" size={16} variant="outline" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => {
              addToCart({
                id: selectedVariant.id,
                name: `${selectedVariant.name} (${selectedVariant.weight})`,
                brand: selectedVariant.brand,
                image: selectedVariant.image,
                weight: selectedVariant.weight,
                price: selectedVariant.sellingPrice,
              }, quantity);
              setAddedQuantity(quantity);
              setAddedToCart(true);
              setQuantity(1);
              setTimeout(() => setAddedToCart(false), 2000);
            }}
            disabled={!selectedVariant.inStock}
            className="w-full px-4 py-3 font-cta font-semibold text-sm text-primary-foreground bg-primary hover:bg-primary/90 rounded-lg shadow-warm-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {addedToCart ? (
              <>
                <Icon name="CheckCircleIcon" size={20} variant="solid" />
                {addedQuantity} {addedQuantity === 1 ? 'item' : 'items'} added
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
