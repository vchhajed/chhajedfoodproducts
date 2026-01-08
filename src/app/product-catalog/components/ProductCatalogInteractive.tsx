'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import ProductCard from './ProductCard';
import FilterSidebar from './FilterSidebar';
import ProductComparisonModal from './ProductComparisonModal';
import SampleRequestModal from './SampleRequestModal';
import BulkInquiryModal from './BulkInquiryModal';
import { products as realProducts, type Product } from '@/data/products';

interface Filters {
  brands: string[];
  categories: string[];
  dietary: string[];
  prepTime: string[];
}

interface ActiveFilters {
  brands: string[];
  categories: string[];
  dietary: string[];
  prepTime: string[];
  priceRange: [number, number];
  inStockOnly: boolean;
}

const mockProducts: Product[] = realProducts;


export default function ProductCatalogInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [products] = useState<Product[]>(mockProducts);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(mockProducts);
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [comparisonProducts, setComparisonProducts] = useState<Product[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [sampleRequestProduct, setSampleRequestProduct] = useState<string | null>(null);
  const [bulkInquiryProduct, setBulkInquiryProduct] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const [activeFilters, setActiveFilters] = useState<ActiveFilters>({
    brands: [],
    categories: [],
    dietary: [],
    prepTime: [],
    priceRange: [0, 1000],
    inStockOnly: false
  });

  const filters: Filters = {
    brands: ['Divya Kamal', 'Divya Samrat', 'Tajmahak', 'Yuhvi'],
    categories: ['Dips & Spreads', 'Syrups', 'Chatni', 'Fragrances', 'Nuts & Seeds', 'Snacks', 'Pasta'],
    dietary: ['Vegetarian', 'Vegan', 'Gluten-Free', 'Protein-Rich'],
    prepTime: ['Ready to use', 'Ready to eat', '8-10 mins', '10-12 mins']
  };

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    let filtered = [...products];

    if (activeFilters.brands.length > 0) {
      filtered = filtered.filter((p) => activeFilters.brands.includes(p.brand));
    }

    if (activeFilters.categories.length > 0) {
      filtered = filtered.filter((p) => activeFilters.categories.includes(p.category));
    }

    if (activeFilters.dietary.length > 0) {
      filtered = filtered.filter((p) =>
      activeFilters.dietary.some((diet) => p.dietary.includes(diet))
      );
    }

    if (activeFilters.prepTime.length > 0) {
      filtered = filtered.filter((p) => activeFilters.prepTime.includes(p.prepTime));
    }

    if (activeFilters.inStockOnly) {
      filtered = filtered.filter((p) => p.inStock);
    }

    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(filtered);
  }, [activeFilters, sortBy, products, isHydrated]);

  const handleFilterChange = (filterType: string, value: string | boolean | [number, number]) => {
    if (filterType === 'inStockOnly') {
      setActiveFilters((prev) => ({
        ...prev,
        inStockOnly: value as boolean
      }));
    } else if (Array.isArray(value)) {
      setActiveFilters((prev) => ({
        ...prev,
        priceRange: value
      }));
    } else {
      const filterKey = filterType as keyof Omit<ActiveFilters, 'priceRange' | 'inStockOnly'>;
      setActiveFilters((prev) => {
        const currentValues = prev[filterKey];
        const newValues = currentValues.includes(value as string) ?
        currentValues.filter((v) => v !== value) :
        [...currentValues, value as string];
        return { ...prev, [filterKey]: newValues };
      });
    }
  };

  const handleClearFilters = () => {
    setActiveFilters({
      brands: [],
      categories: [],
      dietary: [],
      prepTime: [],
      priceRange: [0, 1000],
      inStockOnly: false
    });
  };

  const handleAddToComparison = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product && comparisonProducts.length < 4 && !comparisonProducts.find((p) => p.id === productId)) {
      setComparisonProducts((prev) => [...prev, product]);
    }
  };

  const handleRemoveFromComparison = (productId: number) => {
    setComparisonProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  const handleSampleRequest = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setSampleRequestProduct(product.name);
    }
  };

  const handleBulkInquiry = (productId: number) => {
    const product = products.find((p) => p.id === productId);
    if (product) {
      setBulkInquiryProduct(product.name);
    }
  };

  const handleSampleRequestSubmit = (data: any) => {
    console.log('Sample request submitted:', data);
    setSampleRequestProduct(null);
    setSuccessMessage('Sample request submitted successfully! We will contact you soon.');
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  const handleBulkInquirySubmit = (data: any) => {
    console.log('Bulk inquiry submitted:', data);
    setBulkInquiryProduct(null);
    setSuccessMessage('Bulk inquiry submitted successfully! Our team will reach out to you shortly.');
    setTimeout(() => setSuccessMessage(null), 5000);
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted rounded w-1/3"></div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="h-96 bg-muted rounded"></div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) =>
                <div key={i} className="h-96 bg-muted rounded"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-headline font-bold text-4xl md:text-5xl text-foreground mb-4">
            Product Catalog
          </h1>
          <p className="font-body text-lg text-muted-foreground max-w-3xl">
            Explore our complete range of premium snacks, dips, nuts, and pasta products. Filter by
            brand, dietary preferences, and more to find exactly what you need.
          </p>
        </div>

        {successMessage &&
        <div className="mb-6 p-4 bg-success/10 border border-success rounded-lg flex items-start gap-3">
            <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-success flex-shrink-0 mt-0.5" />
            <p className="font-body text-success flex-grow">{successMessage}</p>
            <button
            onClick={() => setSuccessMessage(null)}
            className="text-success hover:text-success/80">

              <Icon name="XMarkIcon" size={20} variant="outline" />
            </button>
          </div>
        }

        <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 font-body font-medium text-foreground bg-card border border-border rounded-md hover:bg-muted transition-colors duration-300">

              <Icon name="AdjustmentsHorizontalIcon" size={20} variant="outline" />
              Filters
              {activeFilters.brands.length +
              activeFilters.categories.length +
              activeFilters.dietary.length +
              activeFilters.prepTime.length + (
              activeFilters.inStockOnly ? 1 : 0) > 0 &&
              <span className="bg-primary text-primary-foreground px-2 py-0.5 rounded-full text-xs font-semibold">
                  {activeFilters.brands.length +
                activeFilters.categories.length +
                activeFilters.dietary.length +
                activeFilters.prepTime.length + (
                activeFilters.inStockOnly ? 1 : 0)}
                </span>
              }
            </button>

            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="font-body text-sm text-muted-foreground">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 font-body text-foreground bg-card border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary">

                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name: A to Z</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-card border border-border rounded-md p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded transition-colors duration-300 ${
                viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
                }
                aria-label="Grid view">

                <Icon name="Squares2X2Icon" size={20} variant={viewMode === 'grid' ? 'solid' : 'outline'} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded transition-colors duration-300 ${
                viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'}`
                }
                aria-label="List view">

                <Icon name="ListBulletIcon" size={20} variant={viewMode === 'list' ? 'solid' : 'outline'} />
              </button>
            </div>

            {comparisonProducts.length > 0 &&
            <button
              onClick={() => setShowComparison(true)}
              className="flex items-center gap-2 px-4 py-2 font-cta font-semibold text-primary-foreground bg-secondary hover:bg-secondary/90 rounded-md shadow-warm-sm transition-all duration-300">

                <Icon name="ScaleIcon" size={20} variant="outline" />
                Compare ({comparisonProducts.length})
              </button>
            }
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
            <FilterSidebar
              filters={filters}
              activeFilters={activeFilters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters} />

          </div>

          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-body text-muted-foreground">
                Showing {filteredProducts.length} of {products.length} products
              </p>
            </div>

            {filteredProducts.length === 0 ?
            <div className="text-center py-16">
                <Icon name="FaceFrownIcon" size={64} variant="outline" className="text-muted-foreground mx-auto mb-4" />
                <h3 className="font-headline font-bold text-2xl text-foreground mb-2">
                  No products found
                </h3>
                <p className="font-body text-muted-foreground mb-6">
                  Try adjusting your filters to see more results
                </p>
                <button
                onClick={handleClearFilters}
                className="px-6 py-3 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300">

                  Clear All Filters
                </button>
              </div> :

            <div
              className={
              viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-6'
              }>

                {filteredProducts.map((product) =>
              <div key={product.id} className="relative">
                    <ProductCard
                  product={product}
                  onSampleRequest={handleSampleRequest}
                  onBulkInquiry={handleBulkInquiry} />

                    <button
                  onClick={() => handleAddToComparison(product.id)}
                  disabled={
                  comparisonProducts.length >= 4 ||
                  comparisonProducts.some((p) => p.id === product.id)
                  }
                  className="absolute top-3 right-3 p-2 bg-card/90 backdrop-blur-sm border border-border rounded-md hover:bg-card transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  aria-label="Add to comparison">

                      <Icon
                    name="ScaleIcon"
                    size={20}
                    variant={comparisonProducts.some((p) => p.id === product.id) ? 'solid' : 'outline'}
                    className={
                    comparisonProducts.some((p) => p.id === product.id) ?
                    'text-primary' : 'text-foreground'
                    } />

                    </button>
                  </div>
              )}
              </div>
            }
          </div>
        </div>
      </div>

      {showComparison &&
      <ProductComparisonModal
        products={comparisonProducts}
        onClose={() => setShowComparison(false)}
        onRemoveProduct={handleRemoveFromComparison} />

      }

      {sampleRequestProduct &&
      <SampleRequestModal
        productName={sampleRequestProduct}
        onClose={() => setSampleRequestProduct(null)}
        onSubmit={handleSampleRequestSubmit} />

      }

      {bulkInquiryProduct &&
      <BulkInquiryModal
        productName={bulkInquiryProduct}
        onClose={() => setBulkInquiryProduct(null)}
        onSubmit={handleBulkInquirySubmit} />

      }
    </div>);

}