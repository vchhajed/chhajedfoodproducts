'use client';

import { useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface Product {
  id: number;
  name: string;
  brand: string;
  image: string;
  alt: string;
  mrp: number;
  sellingPrice: number;
  weight: string;
  prepTime: string;
  dietary: string[];
  nutritional: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

interface ProductComparisonModalProps {
  products: Product[];
  onClose: () => void;
  onRemoveProduct: (productId: number) => void;
}

export default function ProductComparisonModal({
  products,
  onClose,
  onRemoveProduct,
}: ProductComparisonModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-warm-lg border border-border w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-headline font-bold text-2xl text-foreground">
            Product Comparison ({products.length})
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="Close comparison"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
          </button>
        </div>

        <div className="overflow-x-auto overflow-y-auto flex-grow">
          <table className="w-full">
            <thead className="bg-muted sticky top-0 z-10">
              <tr>
                <th className="p-4 text-left font-body font-semibold text-foreground border-r border-border">
                  Feature
                </th>
                {products.map((product) => (
                  <th key={product.id} className="p-4 border-r border-border last:border-r-0">
                    <div className="flex flex-col items-center gap-3">
                      <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                        <AppImage
                          src={product.image}
                          alt={product.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="text-center">
                        <p className="text-xs font-body text-muted-foreground mb-1">
                          {product.brand}
                        </p>
                        <p className="font-body font-semibold text-sm text-foreground">
                          {product.name}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveProduct(product.id)}
                        className="text-xs font-body font-medium text-destructive hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  MRP
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center border-r border-border last:border-r-0"
                  >
                    <p className="font-headline font-semibold text-muted-foreground line-through">
                      ₹{product.mrp}
                    </p>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Selling Price
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center border-r border-border last:border-r-0"
                  >
                    <p className="font-headline font-bold text-lg text-primary">
                      ₹{product.sellingPrice}
                    </p>
                    <p className="text-xs font-body text-success mt-1">
                      Save ₹{product.mrp - product.sellingPrice} ({Math.round(((product.mrp - product.sellingPrice) / product.mrp) * 100)}% off)
                    </p>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Weight
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center font-body text-foreground border-r border-border last:border-r-0"
                  >
                    {product.weight}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Prep Time
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center font-body text-foreground border-r border-border last:border-r-0"
                  >
                    {product.prepTime}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Dietary
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center border-r border-border last:border-r-0"
                  >
                    <div className="flex flex-wrap gap-2 justify-center">
                      {product.dietary.map((diet) => (
                        <span
                          key={diet}
                          className="bg-success text-success-foreground px-2 py-1 rounded text-xs font-body font-medium"
                        >
                          {diet}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Calories
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center font-body text-foreground border-r border-border last:border-r-0"
                  >
                    {product.nutritional.calories} kcal
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Protein
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center font-body text-foreground border-r border-border last:border-r-0"
                  >
                    {product.nutritional.protein}g
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border bg-muted/30">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Carbohydrates
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center font-body text-foreground border-r border-border last:border-r-0"
                  >
                    {product.nutritional.carbs}g
                  </td>
                ))}
              </tr>
              <tr className="border-b border-border">
                <td className="p-4 font-body font-medium text-foreground border-r border-border">
                  Fat
                </td>
                {products.map((product) => (
                  <td
                    key={product.id}
                    className="p-4 text-center font-body text-foreground border-r border-border last:border-r-0"
                  >
                    {product.nutritional.fat}g
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="p-6 border-t border-border bg-muted/30">
          <button
            onClick={onClose}
            className="w-full px-6 py-3 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300"
          >
            Close Comparison
          </button>
        </div>
      </div>
    </div>
  );
}