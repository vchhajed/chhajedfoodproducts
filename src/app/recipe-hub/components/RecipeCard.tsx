'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    description: string;
    image: string;
    alt: string;
    prepTime: number;
    difficulty: 'Easy' | 'Medium' | 'Hard';
    servings: number;
    products: string[];
    category: string;
    likes: number;
    author: string;
    authorImage: string;
    authorAlt: string;
  };
  onViewRecipe: (id: number) => void;
}

const RecipeCard = ({ recipe, onViewRecipe }: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(recipe.likes);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

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
    <div className="bg-card rounded-lg shadow-warm overflow-hidden hover:shadow-warm-lg transition-all duration-300 cursor-pointer group">
      <div className="relative h-56 overflow-hidden" onClick={() => onViewRecipe(recipe.id)}>
        <AppImage
          src={recipe.image}
          alt={recipe.alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(recipe.difficulty)}`}>
            {recipe.difficulty}
          </span>
        </div>
        <button
          onClick={handleLike}
          className="absolute bottom-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-colors duration-300"
        >
          <Icon
            name="HeartIcon"
            variant={isLiked ? 'solid' : 'outline'}
            size={20}
            className={isLiked ? 'text-destructive' : 'text-foreground'}
          />
        </button>
      </div>

      <div className="p-5" onClick={() => onViewRecipe(recipe.id)}>
        <div className="flex items-center gap-2 mb-3">
          <span className="px-2 py-1 bg-accent/20 text-accent text-xs font-medium rounded">
            {recipe.category}
          </span>
          <div className="flex items-center gap-1 text-muted-foreground text-sm">
            <Icon name="ClockIcon" size={16} variant="outline" />
            <span>{recipe.prepTime} mins</span>
          </div>
        </div>

        <h3 className="font-headline font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {recipe.title}
        </h3>

        <p className="font-body text-sm text-muted-foreground mb-4 line-clamp-2">
          {recipe.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {recipe.products.slice(0, 2).map((product, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded"
            >
              {product}
            </span>
          ))}
          {recipe.products.length > 2 && (
            <span className="px-2 py-1 bg-muted text-muted-foreground text-xs font-medium rounded">
              +{recipe.products.length - 2} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <AppImage
                src={recipe.authorImage}
                alt={recipe.authorAlt}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-body text-sm text-foreground">{recipe.author}</span>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <Icon name="HeartIcon" size={16} variant="outline" />
              <span>{likeCount}</span>
            </div>
            <div className="flex items-center gap-1">
              <Icon name="UserGroupIcon" size={16} variant="outline" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;