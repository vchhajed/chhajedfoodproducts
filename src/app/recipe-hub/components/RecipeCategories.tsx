'use client';

import Icon from '@/components/ui/AppIcon';

interface Category {
  name: string;
  icon: string;
  count: number;
  color: string;
}

interface RecipeCategoriesProps {
  categories: Category[];
  onCategorySelect: (category: string) => void;
}

const RecipeCategories = ({ categories, onCategorySelect }: RecipeCategoriesProps) => {
  const getIconName = (iconName: string): any => {
    return iconName as any;
  };

  return (
    <section className="mb-12">
      <h2 className="font-headline font-bold text-3xl text-foreground mb-6">
        Browse by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => onCategorySelect(category.name)}
            className={`${category.color} rounded-lg p-6 hover:shadow-warm-lg transition-all duration-300 group`}
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon
                  name={getIconName(category.icon)}
                  size={24}
                  variant="outline"
                  className="text-white"
                />
              </div>
              <h3 className="font-body font-semibold text-white mb-1">{category.name}</h3>
              <p className="font-body text-xs text-white/80">{category.count} recipes</p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default RecipeCategories;