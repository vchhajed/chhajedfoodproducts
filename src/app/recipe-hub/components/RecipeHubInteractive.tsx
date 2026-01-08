'use client';

import { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import RecipeFilters from './RecipeFilters';
import RecipeModal from './RecipeModal';
import FeaturedRecipes from './FeaturedRecipes';
import RecipeCategories from './RecipeCategories';
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

const RecipeHubInteractive = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All Levels');
  const [selectedProduct, setSelectedProduct] = useState('All Products');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const mockRecipes: Recipe[] = [
  {
    id: 1,
    title: "Spicy Divya Kamal Bruschetta",
    description: "Italian-Indian fusion appetizer featuring crispy bread topped with tangy Divya Kamal dip, fresh tomatoes, and aromatic herbs",
    image: "https://images.unsplash.com/photo-1619441174172-26e021833857",
    alt: "Golden toasted bruschetta topped with red tomato mixture and green herbs on white plate",
    prepTime: 15,
    cookTime: 10,
    difficulty: "Easy",
    servings: 4,
    products: ["Divya Kamal Spicy Dip", "Divya Kamal Garlic Spread"],
    category: "Appetizers",
    likes: 234,
    author: "Chef Priya Sharma",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_172fd8d82-1763300805407.png",
    authorAlt: "Indian woman chef in white uniform smiling at camera in professional kitchen",
    ingredients: [
    "1 baguette, sliced into 1/2 inch pieces",
    "3 tablespoons Divya Kamal Spicy Dip",
    "2 tablespoons Divya Kamal Garlic Spread",
    "2 large tomatoes, diced",
    "1/4 cup fresh basil, chopped",
    "2 tablespoons olive oil",
    "Salt and pepper to taste",
    "Balsamic glaze for drizzling"],

    instructions: [
    "Preheat oven to 375°F (190°C). Arrange baguette slices on a baking sheet.",
    "Brush each slice lightly with olive oil and toast in oven for 5-7 minutes until golden and crispy.",
    "In a mixing bowl, combine diced tomatoes, Divya Kamal Spicy Dip, chopped basil, salt, and pepper.",
    "Spread a thin layer of Divya Kamal Garlic Spread on each toasted bread slice.",
    "Top generously with the tomato-dip mixture.",
    "Drizzle with balsamic glaze and garnish with extra basil leaves.",
    "Serve immediately while bread is still warm and crispy."],

    nutritionalInfo: {
      calories: 185,
      protein: "6g",
      carbs: "24g",
      fat: "7g"
    },
    tips: [
    "Toast bread just before serving to maintain crispiness",
    "Let tomato mixture sit for 10 minutes to allow flavors to meld",
    "For extra heat, add a pinch of red chili flakes",
    "Use day-old bread for better texture and easier slicing"]

  },
  {
    id: 2,
    title: "Nut Gold Energy Trail Mix Bowl",
    description: "Nutritious breakfast bowl combining premium Nut Gold cashews and almonds with fresh fruits, yogurt, and honey for sustained energy",
    image: "https://images.unsplash.com/photo-1711357187999-ac59a18eb341",
    alt: "Colorful breakfast bowl with mixed nuts, berries, banana slices, and yogurt on wooden table",
    prepTime: 10,
    cookTime: 0,
    difficulty: "Easy",
    servings: 2,
    products: ["Nut Gold Premium Cashews", "Nut Gold Roasted Almonds"],
    category: "Snacks",
    likes: 189,
    author: "Nutritionist Anjali Mehta",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_1da9492a1-1763293371986.png",
    authorAlt: "Young Indian woman nutritionist in green shirt holding clipboard in bright office",
    ingredients: [
    "1 cup Nut Gold Premium Cashews",
    "1 cup Nut Gold Roasted Almonds",
    "2 cups Greek yogurt",
    "1 banana, sliced",
    "1/2 cup mixed berries (strawberries, blueberries)",
    "2 tablespoons honey",
    "1 tablespoon chia seeds",
    "Fresh mint leaves for garnish"],

    instructions: [
    "Divide Greek yogurt equally between two serving bowls.",
    "Arrange banana slices and mixed berries on top of yogurt.",
    "Sprinkle Nut Gold Premium Cashews and Roasted Almonds generously over the fruit.",
    "Drizzle honey over the entire bowl in a decorative pattern.",
    "Sprinkle chia seeds for added nutrition and texture.",
    "Garnish with fresh mint leaves for a refreshing finish.",
    "Serve immediately or refrigerate for up to 2 hours for a chilled version."],

    nutritionalInfo: {
      calories: 425,
      protein: "18g",
      carbs: "42g",
      fat: "22g"
    },
    tips: [
    "Use frozen berries if fresh ones aren't available",
    "Substitute honey with maple syrup for vegan option",
    "Add a scoop of protein powder for post-workout nutrition",
    "Prepare nuts the night before for quick morning assembly"]

  },
  {
    id: 3,
    title: "Crispy Frylo Vegetable Pakora Platter",
    description: "Traditional Indian fritters made with Frylo coating mix, featuring assorted vegetables deep-fried to golden perfection with mint chutney",
    image: "https://images.unsplash.com/photo-1570875041575-fbdef29e30cb",
    alt: "Golden brown vegetable pakoras arranged on banana leaf with green mint chutney in small bowl",
    prepTime: 20,
    cookTime: 25,
    difficulty: "Medium",
    servings: 6,
    products: ["Frylo Crispy Coating Mix", "Divya Kamal Mint Dip"],
    category: "Snacks",
    likes: 312,
    author: "Chef Rajesh Kumar",
    authorImage: "https://img.rocket.new/generatedImages/rocket_gen_img_120a487c7-1763296325202.png",
    authorAlt: "Male Indian chef in white uniform and tall chef hat in commercial kitchen",
    ingredients: [
    "2 cups Frylo Crispy Coating Mix",
    "1 large onion, thinly sliced",
    "1 potato, thinly sliced",
    "1 cup cauliflower florets",
    "1/2 cup spinach leaves",
    "2 green chilies, chopped",
    "1 teaspoon cumin seeds",
    "1/2 teaspoon turmeric powder",
    "Salt to taste",
    "Oil for deep frying",
    "Divya Kamal Mint Dip for serving"],

    instructions: [
    "In a large bowl, combine Frylo Crispy Coating Mix with water to form a thick batter (consistency of pancake batter).",
    "Add cumin seeds, turmeric powder, green chilies, and salt to the batter. Mix well.",
    "Add all sliced vegetables to the batter and coat them evenly.",
    "Heat oil in a deep pan to 350°F (175°C) for optimal frying temperature.",
    "Carefully drop spoonfuls of the vegetable mixture into hot oil, frying 4-5 pakoras at a time.",
    "Fry for 4-5 minutes, turning occasionally, until golden brown and crispy on all sides.",
    "Remove with slotted spoon and drain on paper towels to remove excess oil.",
    "Serve hot with Divya Kamal Mint Dip and lemon wedges."],

    nutritionalInfo: {
      calories: 245,
      protein: "7g",
      carbs: "32g",
      fat: "10g"
    },
    tips: [
    "Ensure oil is at correct temperature to prevent soggy pakoras",
    "Don't overcrowd the pan - fry in small batches for even cooking",
    "Pat vegetables dry before coating to ensure batter adheres properly",
    "Serve immediately for maximum crispiness"]

  },
  {
    id: 4,
    title: "Tyfoonz Masala Pasta Fusion",
    description: "Indo-Italian fusion dish combining Pasto pasta with Tyfoonz spicy seasoning, vegetables, and creamy tomato sauce for unique flavor experience",
    image: "https://images.unsplash.com/photo-1564813227527-a99b83712e45",
    alt: "Colorful pasta dish with red sauce, green vegetables, and spices in white bowl on marble surface",
    prepTime: 15,
    cookTime: 20,
    difficulty: "Medium",
    servings: 4,
    products: ["Pasto Penne Pasta", "Tyfoonz Masala Seasoning"],
    category: "Main Course",
    likes: 267,
    author: "Chef Meera Patel",
    authorImage: "https://images.unsplash.com/photo-1732759959223-ed7294af5438",
    authorAlt: "Young Indian woman chef in black uniform preparing food in modern kitchen",
    ingredients: [
    "400g Pasto Penne Pasta",
    "3 tablespoons Tyfoonz Masala Seasoning",
    "2 tablespoons olive oil",
    "1 onion, finely chopped",
    "3 garlic cloves, minced",
    "1 bell pepper, diced",
    "1 cup cherry tomatoes, halved",
    "1/2 cup heavy cream",
    "1/4 cup fresh coriander, chopped",
    "Salt to taste",
    "Grated parmesan cheese for garnish"],

    instructions: [
    "Cook Pasto Penne Pasta according to package instructions until al dente. Drain and set aside.",
    "Heat olive oil in a large pan over medium heat. Sauté onions until translucent.",
    "Add minced garlic and cook for 1 minute until fragrant.",
    "Add diced bell peppers and cherry tomatoes. Cook for 5 minutes until vegetables soften.",
    "Stir in Tyfoonz Masala Seasoning and cook for 2 minutes to release flavors.",
    "Pour in heavy cream and simmer for 3-4 minutes until sauce thickens slightly.",
    "Add cooked pasta to the sauce and toss well to coat evenly.",
    "Garnish with fresh coriander and grated parmesan. Serve hot."],

    nutritionalInfo: {
      calories: 385,
      protein: "12g",
      carbs: "52g",
      fat: "14g"
    },
    tips: [
    "Reserve 1/2 cup pasta water to adjust sauce consistency if needed",
    "Add vegetables of your choice like broccoli or mushrooms",
    "For extra protein, add grilled chicken or paneer cubes",
    "Adjust Tyfoonz seasoning quantity based on spice preference"]

  },
  {
    id: 5,
    title: "Festival Special Nut Gold Ladoo",
    description: "Traditional Indian sweet made with Nut Gold cashews, dates, and coconut, perfect for celebrations and festive occasions without added sugar",
    image: "https://images.unsplash.com/photo-1708782343129-47b08cdc2329",
    alt: "Round golden brown ladoo sweets arranged on decorative silver plate with marigold flowers",
    prepTime: 30,
    cookTime: 15,
    difficulty: "Medium",
    servings: 20,
    products: ["Nut Gold Premium Cashews", "Nut Gold Roasted Almonds"],
    category: "Festival Special",
    likes: 445,
    author: "Chef Lakshmi Iyer",
    authorImage: "https://images.unsplash.com/photo-1515175620159-0634b62d32f8",
    authorAlt: "Elderly Indian woman in traditional saree smiling while cooking in home kitchen",
    ingredients: [
    "2 cups Nut Gold Premium Cashews",
    "1 cup Nut Gold Roasted Almonds",
    "1 cup pitted dates",
    "1/2 cup desiccated coconut",
    "2 tablespoons ghee (clarified butter)",
    "1/2 teaspoon cardamom powder",
    "2 tablespoons milk powder",
    "Pinch of saffron strands",
    "Silver leaf for decoration (optional)"],

    instructions: [
    "Dry roast Nut Gold Premium Cashews and Roasted Almonds separately in a pan until lightly golden. Let cool.",
    "In a food processor, pulse cashews and almonds until they form a coarse powder. Don't over-process.",
    "Add pitted dates to the processor and blend until mixture comes together into a sticky dough.",
    "Transfer mixture to a bowl. Add desiccated coconut, cardamom powder, and milk powder. Mix well.",
    "Heat ghee slightly and add to the mixture. Knead until everything is well combined.",
    "Grease your palms with a little ghee and shape the mixture into small round balls (ladoos).",
    "Press a saffron strand on top of each ladoo for decoration.",
    "Store in an airtight container. These ladoos stay fresh for up to 2 weeks."],

    nutritionalInfo: {
      calories: 165,
      protein: "4g",
      carbs: "14g",
      fat: "11g"
    },
    tips: [
    "Use fresh, soft dates for easier blending and better binding",
    "If mixture is too dry, add 1-2 teaspoons of warm milk",
    "Roll ladoos while mixture is still slightly warm for easier shaping",
    "Store in refrigerator for longer shelf life"]

  },
  {
    id: 6,
    title: "Pasto Creamy Alfredo Delight",
    description: "Classic Italian Alfredo pasta made with Pasto fettuccine, rich cream sauce, parmesan cheese, and garlic for restaurant-quality meal at home",
    image: "https://images.unsplash.com/photo-1699251775952-de85a3bfedb6",
    alt: "Creamy white pasta with herbs in ceramic bowl on rustic wooden table with fork",
    prepTime: 10,
    cookTime: 15,
    difficulty: "Easy",
    servings: 4,
    products: ["Pasto Fettuccine Pasta"],
    category: "Main Course",
    likes: 198,
    author: "Chef Marco Rossi",
    authorImage: "https://images.unsplash.com/photo-1623651671311-a38286c4699b",
    authorAlt: "Male chef in white uniform and chef hat preparing pasta in professional kitchen",
    ingredients: [
    "400g Pasto Fettuccine Pasta",
    "3 tablespoons butter",
    "4 garlic cloves, minced",
    "2 cups heavy cream",
    "1 1/2 cups grated parmesan cheese",
    "1/4 teaspoon nutmeg powder",
    "Salt and black pepper to taste",
    "Fresh parsley, chopped for garnish",
    "Extra parmesan for serving"],

    instructions: [
    "Cook Pasto Fettuccine according to package directions until al dente. Reserve 1 cup pasta water before draining.",
    "In a large pan, melt butter over medium heat. Add minced garlic and sauté for 1 minute until fragrant.",
    "Pour in heavy cream and bring to a gentle simmer. Cook for 3-4 minutes, stirring occasionally.",
    "Reduce heat to low. Gradually add grated parmesan cheese, stirring constantly until melted and smooth.",
    "Add nutmeg powder, salt, and black pepper. Stir well to combine.",
    "Add cooked fettuccine to the sauce. Toss gently to coat pasta evenly. Add reserved pasta water if sauce is too thick.",
    "Cook for 2 more minutes, allowing pasta to absorb the flavors.",
    "Serve immediately, garnished with fresh parsley and extra parmesan cheese."],

    nutritionalInfo: {
      calories: 565,
      protein: "18g",
      carbs: "48g",
      fat: "34g"
    },
    tips: [
    "Use freshly grated parmesan for best flavor and smooth sauce",
    "Don't let cream boil rapidly or it may separate",
    "Add grilled chicken or shrimp for protein variation",
    "Serve immediately as Alfredo sauce thickens as it cools"]

  }];


  const featuredRecipes = mockRecipes.slice(0, 3);

  const categories = [
  { name: "Appetizers", icon: "CakeIcon", count: 24, color: "bg-primary" },
  { name: "Main Course", icon: "FireIcon", count: 38, color: "bg-secondary" },
  { name: "Snacks", icon: "SparklesIcon", count: 45, color: "bg-accent" },
  { name: "Desserts", icon: "HeartIcon", count: 19, color: "bg-destructive" },
  { name: "Beverages", icon: "BeakerIcon", count: 12, color: "bg-success" },
  { name: "Festival Special", icon: "GiftIcon", count: 16, color: "bg-warning" }];


  const handleViewRecipe = (id: number) => {
    const recipe = mockRecipes.find((r) => r.id === id);
    if (recipe) {
      setSelectedRecipe(recipe);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };

  const handleClearFilters = () => {
    setSelectedCategory('All Categories');
    setSelectedDifficulty('All Levels');
    setSelectedProduct('All Products');
    setSearchQuery('');
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

  const filteredRecipes = mockRecipes.filter((recipe) => {
    const matchesCategory = selectedCategory === 'All Categories' || recipe.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'All Levels' || recipe.difficulty === selectedDifficulty;
    const matchesProduct = selectedProduct === 'All Products' || recipe.products.some((p) => p.includes(selectedProduct.replace('All Products', '')));
    const matchesSearch = searchQuery === '' ||
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    recipe.ingredients.some((i) => i.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesDifficulty && matchesProduct && matchesSearch;
  });

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="h-96 bg-muted animate-pulse rounded-lg"></div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-accent rounded-full font-body font-semibold mb-4">
            <Icon name="BookOpenIcon" size={20} variant="outline" />
            Recipe Hub
          </div>
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            Culinary Inspiration & Recipes
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover delicious recipes featuring Chhajed products, from traditional Indian favorites to innovative fusion creations
          </p>
        </div>

        <FeaturedRecipes recipes={featuredRecipes} onViewRecipe={handleViewRecipe} />

        <RecipeCategories categories={categories} onCategorySelect={handleCategorySelect} />

        <RecipeFilters
          selectedCategory={selectedCategory}
          selectedDifficulty={selectedDifficulty}
          selectedProduct={selectedProduct}
          searchQuery={searchQuery}
          onCategoryChange={setSelectedCategory}
          onDifficultyChange={setSelectedDifficulty}
          onProductChange={setSelectedProduct}
          onSearchChange={setSearchQuery}
          onClearFilters={handleClearFilters} />


        <div className="mb-6">
          <p className="font-body text-muted-foreground">
            Showing <span className="font-semibold text-foreground">{filteredRecipes.length}</span> recipes
          </p>
        </div>

        {filteredRecipes.length > 0 ?
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) =>
          <RecipeCard key={recipe.id} recipe={recipe} onViewRecipe={handleViewRecipe} />
          )}
          </div> :

        <div className="text-center py-16">
            <Icon name="MagnifyingGlassIcon" size={64} variant="outline" className="text-muted-foreground mx-auto mb-4" />
            <h3 className="font-headline font-bold text-2xl text-foreground mb-2">
              No recipes found
            </h3>
            <p className="font-body text-muted-foreground mb-6">
              Try adjusting your filters or search query
            </p>
            <button
            onClick={handleClearFilters}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-cta font-semibold hover:bg-primary/90 transition-all duration-300">

              Clear All Filters
            </button>
          </div>
        }

        <div className="mt-16 bg-gradient-to-r from-primary to-accent rounded-lg p-8 md:p-12 text-center">
          <Icon name="PencilSquareIcon" size={48} variant="outline" className="text-white mx-auto mb-4" />
          <h2 className="font-headline font-bold text-3xl text-white mb-4">
            Share Your Recipe
          </h2>
          <p className="font-body text-white/90 mb-6 max-w-2xl mx-auto">
            Have a unique recipe using Chhajed products? Share it with our community and inspire others!
          </p>
          <button className="px-8 py-3 bg-white text-primary rounded-lg font-cta font-semibold hover:bg-white/90 transition-all duration-300 inline-flex items-center gap-2">
            <Icon name="PlusCircleIcon" size={20} variant="outline" />
            Submit Your Recipe
          </button>
        </div>
      </div>

      <RecipeModal recipe={selectedRecipe} isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>);

};

export default RecipeHubInteractive;