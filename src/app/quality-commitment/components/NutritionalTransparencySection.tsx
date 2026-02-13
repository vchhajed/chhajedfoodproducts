'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface NutrientInfo {
  name: string;
  amount: string;
  dailyValue: string;
  description: string;
}

interface ProductNutrition {
  id: number;
  productName: string;
  servingSize: string;
  calories: string;
  nutrients: NutrientInfo[];
  allergens: string[];
  ingredients: string;
}

export default function NutritionalTransparencySection() {
  const [selectedProduct, setSelectedProduct] = useState<number>(1);

  const products: ProductNutrition[] = [
    {
      id: 1,
      productName: "Divya Kamal Garlic Dip",
      servingSize: "30g (2 tablespoons)",
      calories: "85",
      nutrients: [
        { name: "Total Fat", amount: "7g", dailyValue: "9%", description: "Includes healthy fats from quality oils" },
        { name: "Saturated Fat", amount: "1g", dailyValue: "5%", description: "Minimal saturated fat content" },
        { name: "Sodium", amount: "180mg", dailyValue: "8%", description: "Controlled sodium for flavor balance" },
        { name: "Total Carbohydrates", amount: "5g", dailyValue: "2%", description: "Low carb formulation" },
        { name: "Protein", amount: "1g", dailyValue: "2%", description: "Natural protein from ingredients" },
        { name: "Vitamin C", amount: "2mg", dailyValue: "2%", description: "From fresh garlic and herbs" }
      ],
      allergens: ["Contains: Garlic", "May contain traces of nuts"],
      ingredients: "Fresh Garlic (35%), Refined Vegetable Oil, Water, Salt, Citric Acid, Spices, Natural Preservatives (INS 211)"
    },
    {
      id: 2,
      productName: "Nut Gold Cashews",
      servingSize: "28g (about 18 cashews)",
      calories: "157",
      nutrients: [
        { name: "Total Fat", amount: "12g", dailyValue: "15%", description: "Heart-healthy monounsaturated fats" },
        { name: "Saturated Fat", amount: "2g", dailyValue: "10%", description: "Natural nut fats" },
        { name: "Sodium", amount: "3mg", dailyValue: "0%", description: "Naturally low sodium" },
        { name: "Total Carbohydrates", amount: "9g", dailyValue: "3%", description: "Complex carbohydrates" },
        { name: "Dietary Fiber", amount: "1g", dailyValue: "4%", description: "Natural fiber content" },
        { name: "Protein", amount: "5g", dailyValue: "10%", description: "Plant-based protein" },
        { name: "Iron", amount: "1.9mg", dailyValue: "11%", description: "Essential mineral" }
      ],
      allergens: ["Contains: Tree Nuts (Cashews)", "Processed in facility that handles peanuts"],
      ingredients: "Premium Cashew Nuts (100%), No Added Salt, No Preservatives"
    },
    {
      id: 3,
      productName: "Frylo Masala Chips",
      servingSize: "30g (about 15 chips)",
      calories: "145",
      nutrients: [
        { name: "Total Fat", amount: "8g", dailyValue: "10%", description: "Cooked in quality vegetable oil" },
        { name: "Saturated Fat", amount: "1.5g", dailyValue: "8%", description: "Controlled saturated fat" },
        { name: "Trans Fat", amount: "0g", dailyValue: "0%", description: "Zero trans fats" },
        { name: "Sodium", amount: "210mg", dailyValue: "9%", description: "Balanced seasoning" },
        { name: "Total Carbohydrates", amount: "18g", dailyValue: "6%", description: "From quality potatoes" },
        { name: "Dietary Fiber", amount: "2g", dailyValue: "7%", description: "Natural potato fiber" },
        { name: "Protein", amount: "2g", dailyValue: "4%", description: "Plant protein" }
      ],
      allergens: ["May contain traces of milk and soy"],
      ingredients: "Potatoes (65%), Refined Vegetable Oil, Spice Mix (Red Chili, Turmeric, Cumin, Coriander), Salt, Sugar, Citric Acid"
    }
  ];

  const currentProduct = products.find(p => p.id === selectedProduct) || products[0];

  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Complete Nutritional Transparency
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We believe in complete transparency about what goes into our products. Explore detailed nutritional information and ingredient breakdowns
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl shadow-warm-lg overflow-hidden">
            <div className="bg-gradient-to-r from-primary to-accent p-6">
              <h3 className="font-headline text-xl font-bold text-primary-foreground mb-4">
                Select Product for Detailed Analysis
              </h3>
              <div className="flex flex-wrap gap-3">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => setSelectedProduct(product.id)}
                    className={`px-6 py-3 rounded-lg font-cta font-semibold transition-all duration-300 ${
                      selectedProduct === product.id
                        ? 'bg-primary-foreground text-primary shadow-warm-sm'
                        : 'bg-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/30'
                    }`}
                  >
                    {product.productName}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="bg-background rounded-xl p-6 text-center">
                  <Icon name="ScaleIcon" size={32} variant="outline" className="text-primary mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground mb-1">Serving Size</p>
                  <p className="font-headline text-xl font-bold text-foreground">{currentProduct.servingSize}</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <Icon name="FireIcon" size={32} variant="solid" className="text-warning mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground mb-1">Calories</p>
                  <p className="font-headline text-xl font-bold text-foreground">{currentProduct.calories}</p>
                </div>
                <div className="bg-background rounded-xl p-6 text-center">
                  <Icon name="CheckBadgeIcon" size={32} variant="solid" className="text-success mx-auto mb-3" />
                  <p className="font-body text-sm text-muted-foreground mb-1">Quality</p>
                  <p className="font-headline text-xl font-bold text-foreground">Premium</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-headline text-xl font-bold text-foreground mb-4 flex items-center space-x-2">
                  <Icon name="ChartBarIcon" size={24} variant="solid" className="text-primary" />
                  <span>Nutritional Breakdown</span>
                </h4>
                <div className="space-y-3">
                  {currentProduct.nutrients.map((nutrient, index) => (
                    <div key={index} className="bg-background rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-cta text-sm font-semibold text-foreground">
                              {nutrient.name}
                            </span>
                            <span className="font-body text-sm font-medium text-foreground">
                              {nutrient.amount}
                            </span>
                          </div>
                          <p className="font-body text-xs text-muted-foreground">
                            {nutrient.description}
                          </p>
                        </div>
                        <div className="ml-4 text-right">
                          <span className="font-cta text-sm font-semibold text-primary">
                            {nutrient.dailyValue}
                          </span>
                          <p className="font-body text-xs text-muted-foreground">DV*</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-primary h-full rounded-full transition-all duration-500"
                          style={{ width: nutrient.dailyValue }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="font-body text-xs text-muted-foreground mt-4">
                  * Percent Daily Values are based on a 2,000 calorie diet. Your daily values may be higher or lower depending on your calorie needs.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-background rounded-xl p-6">
                  <h4 className="font-headline text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="ExclamationTriangleIcon" size={20} variant="solid" className="text-warning" />
                    <span>Allergen Information</span>
                  </h4>
                  <div className="space-y-2">
                    {currentProduct.allergens.map((allergen, index) => (
                      <div key={index} className="flex items-start space-x-2">
                        <Icon name="ShieldExclamationIcon" size={16} variant="solid" className="text-warning mt-0.5" />
                        <span className="font-body text-sm text-foreground">{allergen}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-background rounded-xl p-6">
                  <h4 className="font-headline text-lg font-bold text-foreground mb-4 flex items-center space-x-2">
                    <Icon name="ListBulletIcon" size={20} variant="solid" className="text-primary" />
                    <span>Ingredients</span>
                  </h4>
                  <p className="font-body text-sm text-foreground leading-relaxed">
                    {currentProduct.ingredients}
                  </p>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <Icon name="InformationCircleIcon" size={24} variant="solid" className="text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-cta text-base font-semibold text-foreground mb-2">
                      Our Commitment to Transparency
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      All nutritional information is verified through third-party laboratory testing. We update our labels regularly to reflect any formulation changes and maintain complete transparency about our ingredients and their sources.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}