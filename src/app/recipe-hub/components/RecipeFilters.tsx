'use client';

import Icon from '@/components/ui/AppIcon';

interface RecipeFiltersProps {
  selectedCategory: string;
  selectedDifficulty: string;
  selectedProduct: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onDifficultyChange: (difficulty: string) => void;
  onProductChange: (product: string) => void;
  onSearchChange: (query: string) => void;
  onClearFilters: () => void;
}

const RecipeFilters = ({
  selectedCategory,
  selectedDifficulty,
  selectedProduct,
  searchQuery,
  onCategoryChange,
  onDifficultyChange,
  onProductChange,
  onSearchChange,
  onClearFilters,
}: RecipeFiltersProps) => {
  const categories = [
    'All Categories',
    'Appetizers',
    'Main Course',
    'Snacks',
    'Desserts',
    'Beverages',
    'Festival Special',
  ];

  const difficulties = ['All Levels', 'Easy', 'Medium', 'Hard'];

  const products = [
    'All Products',
    'Divya Kamal Dips',
    'Nut Gold',
    'Frylo Snacks',
    'Tyfoonz',
    'Pasto Pasta',
  ];

  const hasActiveFilters =
    selectedCategory !== 'All Categories' ||
    selectedDifficulty !== 'All Levels' ||
    selectedProduct !== 'All Products' ||
    searchQuery !== '';

  return (
    <div className="bg-card rounded-lg shadow-warm p-6 mb-8">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              variant="outline"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search recipes by name or ingredients..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-lg font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <select
            value={selectedCategory}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            value={selectedDifficulty}
            onChange={(e) => onDifficultyChange(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 cursor-pointer"
          >
            {difficulties.map((difficulty) => (
              <option key={difficulty} value={difficulty}>
                {difficulty}
              </option>
            ))}
          </select>

          <select
            value={selectedProduct}
            onChange={(e) => onProductChange(e.target.value)}
            className="px-4 py-3 bg-background border border-border rounded-lg font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all duration-300 cursor-pointer"
          >
            {products.map((product) => (
              <option key={product} value={product}>
                {product}
              </option>
            ))}
          </select>

          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="px-6 py-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-body font-medium transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
            >
              <Icon name="XMarkIcon" size={18} variant="outline" />
              Clear
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeFilters;