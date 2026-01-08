import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Recipe {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  prepTime: string;
  difficulty: string;
  products: string[];
}

const mockRecipes: Recipe[] = [
{
  id: 1,
  title: 'Garlic Mayo Chicken Wrap',
  description: 'Delicious grilled chicken wrap with our signature garlic mayo, fresh vegetables, and crispy lettuce',
  image: "https://images.unsplash.com/photo-1728657824680-f2ab468f5578",
  alt: 'Grilled chicken wrap with garlic mayo sauce lettuce tomatoes wrapped in tortilla on wooden board',
  prepTime: '15 mins',
  difficulty: 'Easy',
  products: ['Divya Kamal Garlic Mayo']
},
{
  id: 2,
  title: 'Cashew Butter Smoothie Bowl',
  description: 'Nutritious breakfast bowl topped with crushed cashews, fresh fruits, and honey drizzle',
  image: "https://images.unsplash.com/photo-1588368254556-d491748d3414",
  alt: 'Purple smoothie bowl topped with cashew nuts fresh berries banana slices and granola',
  prepTime: '10 mins',
  difficulty: 'Easy',
  products: ['Nut Gold Cashews']
},
{
  id: 3,
  title: 'Masala Pasta Fusion',
  description: 'Indo-Italian fusion dish combining our premium pasta with traditional Indian spices and vegetables',
  image: "https://images.unsplash.com/photo-1697877366366-f09b85e04f51",
  alt: 'Colorful pasta dish with Indian spices vegetables and herbs in white ceramic bowl',
  prepTime: '25 mins',
  difficulty: 'Medium',
  products: ['Pasto Penne Pasta', 'Divya Kamal Mint Chutney']
}];


export default function RecipeShowcase() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
            Recipe Inspiration
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious ways to use our products with these chef-curated recipes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockRecipes.map((recipe) =>
          <div
            key={recipe.id}
            className="bg-background rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 group">

              <div className="relative h-56 overflow-hidden">
                <AppImage
                src={recipe.image}
                alt={recipe.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Icon name="ClockIcon" size={16} />
                      <span className="font-body">{recipe.prepTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="ChartBarIcon" size={16} />
                      <span className="font-body">{recipe.difficulty}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                  {recipe.title}
                </h3>
                
                <p className="font-body text-muted-foreground mb-4">
                  {recipe.description}
                </p>

                <div className="mb-4">
                  <p className="font-cta font-semibold text-sm text-foreground mb-2">
                    Products Used:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {recipe.products.map((product, index) =>
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary text-xs font-body rounded-full">

                        {product}
                      </span>
                  )}
                  </div>
                </div>

                <button className="w-full px-4 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-md transition-all duration-300 flex items-center justify-center gap-2">
                  <span>View Recipe</span>
                  <Icon name="ArrowRightIcon" size={16} />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-cta font-semibold rounded-md shadow-warm transition-all duration-300">
            Explore Recipe Hub
          </button>
        </div>
      </div>
    </section>);

}