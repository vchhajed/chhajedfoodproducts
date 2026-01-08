import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import RecipeHubInteractive from './components/RecipeHubInteractive';

export const metadata: Metadata = {
  title: 'Recipe Hub - Chhajed Foods Hub',
  description: 'Discover delicious recipes featuring Chhajed products including cooking videos, snack pairing guides, and user-generated content for culinary inspiration.',
};

export default function RecipeHubPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <RecipeHubInteractive />
    </main>
  );
}