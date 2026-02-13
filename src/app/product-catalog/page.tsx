import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ProductCatalogInteractive from './components/ProductCatalogInteractive';

export const metadata: Metadata = {
  title: 'Product Catalog - Chhajed Food Products Hub',
  description: 'Explore our comprehensive range of premium snacks, dips, nuts, and pasta products. Filter by brand, dietary preferences, and bulk pricing options to find the perfect products for your business.',
};

export default function ProductCatalogPage() {
  return (
    <>
      <Header />
      <main className="pt-16 sm:pt-20">
        <ProductCatalogInteractive />
      </main>
    </>
  );
}