import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedRecipe {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  category: string;
  prepTime: number;
  difficulty: string;
}

interface FeaturedRecipesProps {
  recipes: FeaturedRecipe[];
  onViewRecipe: (id: number) => void;
}

const FeaturedRecipes = ({ recipes, onViewRecipe }: FeaturedRecipesProps) => {
  return (
    <section className="mb-12">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="font-headline font-bold text-3xl text-foreground mb-2">
            Featured Recipes
          </h2>
          <p className="font-body text-muted-foreground">
            Handpicked by our culinary experts
          </p>
        </div>
        <Icon name="StarIcon" size={32} variant="solid" className="text-accent" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            onClick={() => onViewRecipe(recipe.id)}
            className="bg-card rounded-lg shadow-warm overflow-hidden hover:shadow-warm-lg transition-all duration-300 cursor-pointer group"
          >
            <div className="relative h-48 overflow-hidden">
              <AppImage
                src={recipe.image}
                alt={recipe.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3">
                <span className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-xs font-semibold">
                  Featured
                </span>
              </div>
            </div>

            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded">
                  {recipe.category}
                </span>
                <div className="flex items-center gap-1 text-muted-foreground text-xs">
                  <Icon name="ClockIcon" size={14} variant="outline" />
                  <span>{recipe.prepTime} mins</span>
                </div>
              </div>

              <h3 className="font-headline font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {recipe.title}
              </h3>

              <p className="font-body text-sm text-muted-foreground line-clamp-2">
                {recipe.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedRecipes;