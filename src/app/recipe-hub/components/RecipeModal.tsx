'use client';

import { useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  prepTime: number;
  cookTime: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  servings: number;
  products: string[];
  category: string;
  likes: number;
  author: string;
  authorImage: string;
  authorAlt: string;
  ingredients: string[];
  instructions: string[];
  nutritionalInfo: {
    calories: number;
    protein: string;
    carbs: string;
    fat: string;
  };
  tips: string[];
}

interface RecipeModalProps {
  recipe: Recipe | null;
  isOpen: boolean;
  onClose: () => void;
}

const RecipeModal = ({ recipe, isOpen, onClose }: RecipeModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !recipe) return null;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy':
        return 'bg-success text-success-foreground';
      case 'Medium':
        return 'bg-warning text-warning-foreground';
      case 'Hard':
        return 'bg-destructive text-destructive-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-warm-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-card z-10 flex items-center justify-between p-6 border-b border-border">
          <h2 className="font-headline font-bold text-2xl text-foreground">Recipe Details</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-muted transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
          </button>
        </div>

        <div className="p-6">
          <div className="relative h-80 rounded-lg overflow-hidden mb-6">
            <AppImage
              src={recipe.image}
              alt={recipe.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
                {recipe.difficulty}
              </span>
            </div>
          </div>

          <div className="mb-6">
            <h1 className="font-headline font-bold text-3xl text-foreground mb-3">
              {recipe.title}
            </h1>
            <p className="font-body text-muted-foreground text-lg mb-4">
              {recipe.description}
            </p>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <AppImage
                  src={recipe.authorImage}
                  alt={recipe.authorAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-body font-semibold text-foreground">By {recipe.author}</p>
                <p className="font-body text-sm text-muted-foreground">{recipe.category}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="ClockIcon" size={18} variant="outline" />
                <span>Prep: {recipe.prepTime} mins</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="FireIcon" size={18} variant="outline" />
                <span>Cook: {recipe.cookTime} mins</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="UserGroupIcon" size={18} variant="outline" />
                <span>{recipe.servings} servings</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Icon name="HeartIcon" size={18} variant="outline" />
                <span>{recipe.likes} likes</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-headline font-bold text-xl text-foreground mb-3">
              Chhajed Products Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {recipe.products.map((product, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg font-body font-medium"
                >
                  {product}
                </span>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-headline font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Icon name="ListBulletIcon" size={24} variant="outline" className="text-primary" />
                Ingredients
              </h3>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Icon
                      name="CheckCircleIcon"
                      size={20}
                      variant="solid"
                      className="text-success mt-0.5 flex-shrink-0"
                    />
                    <span className="font-body text-foreground">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline font-bold text-xl text-foreground mb-4 flex items-center gap-2">
                <Icon name="ChartBarIcon" size={24} variant="outline" className="text-primary" />
                Nutritional Info (per serving)
              </h3>
              <div className="bg-muted rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-body text-foreground">Calories</span>
                  <span className="font-body font-semibold text-foreground">
                    {recipe.nutritionalInfo.calories} kcal
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-foreground">Protein</span>
                  <span className="font-body font-semibold text-foreground">
                    {recipe.nutritionalInfo.protein}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-foreground">Carbs</span>
                  <span className="font-body font-semibold text-foreground">
                    {recipe.nutritionalInfo.carbs}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-body text-foreground">Fat</span>
                  <span className="font-body font-semibold text-foreground">
                    {recipe.nutritionalInfo.fat}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="font-headline font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <Icon name="DocumentTextIcon" size={24} variant="outline" className="text-primary" />
              Instructions
            </h3>
            <ol className="space-y-4">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-body font-bold">
                    {index + 1}
                  </span>
                  <p className="font-body text-foreground pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>

          <div className="bg-accent/10 rounded-lg p-6">
            <h3 className="font-headline font-bold text-xl text-foreground mb-4 flex items-center gap-2">
              <Icon name="LightBulbIcon" size={24} variant="outline" className="text-accent" />
              Chef&apos;s Tips
            </h3>
            <ul className="space-y-2">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Icon
                    name="SparklesIcon"
                    size={20}
                    variant="solid"
                    className="text-accent mt-0.5 flex-shrink-0"
                  />
                  <span className="font-body text-foreground">{tip}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
              <Icon name="PrinterIcon" size={20} variant="outline" />
              Print Recipe
            </button>
            <button className="flex-1 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-cta font-semibold hover:bg-secondary/90 transition-all duration-300 flex items-center justify-center gap-2">
              <Icon name="ShareIcon" size={20} variant="outline" />
              Share Recipe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;