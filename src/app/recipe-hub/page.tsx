import type { Metadata } from 'next';
import Header from '@/components/common/Header';
// import RecipeHubInteractive from './components/RecipeHubInteractive'; // REMOVED: Contains mock recipes

export const metadata: Metadata = {
  title: 'Recipe Hub - Chhajed Food Products Hub',
  description: 'Discover delicious recipes featuring Chhajed products including cooking videos, snack pairing guides, and user-generated content for culinary inspiration.',
};

export default function RecipeHubPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
            Recipe Hub Coming Soon
          </h1>
          <p className="font-body text-lg text-muted-foreground">
            We're working on bringing you delicious recipes featuring our products. Check back soon!
          </p>
        </div>
      </div>
      {/* <RecipeHubInteractive /> */}
    </main>
  );
}