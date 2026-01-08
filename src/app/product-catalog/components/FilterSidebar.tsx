'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterSidebarProps {
  filters: {
    brands: string[];
    categories: string[];
    dietary: string[];
    prepTime: string[];
  };
  activeFilters: {
    brands: string[];
    categories: string[];
    dietary: string[];
    prepTime: string[];
    priceRange: [number, number];
    inStockOnly: boolean;
  };
  onFilterChange: (filterType: string, value: string | boolean | [number, number]) => void;
  onClearFilters: () => void;
}

export default function FilterSidebar({
  filters,
  activeFilters,
  onFilterChange,
  onClearFilters,
}: FilterSidebarProps) {
  const [expandedSections, setExpandedSections] = useState({
    brands: true,
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const activeFilterCount = activeFilters.brands.length;

  return (
    <div className="bg-card rounded-lg shadow-warm border border-border p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-headline font-bold text-xl text-foreground">Filters</h2>
        {activeFilterCount > 0 && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-2 px-3 py-1.5 text-sm font-body font-medium text-destructive hover:bg-destructive/10 rounded-md transition-colors duration-300"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" />
            Clear All ({activeFilterCount})
          </button>
        )}
      </div>

      <div className="space-y-6">
        <div>
          <button
            onClick={() => toggleSection('brands')}
            className="flex items-center justify-between w-full mb-3"
          >
            <h3 className="font-body font-semibold text-foreground">Brand</h3>
            <Icon
              name={expandedSections.brands ? 'ChevronUpIcon' : 'ChevronDownIcon'}
              size={20}
              variant="outline"
              className="text-primary"
            />
          </button>
          {expandedSections.brands && (
            <div className="space-y-2">
              {filters.brands.map((brand) => (
                <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    checked={activeFilters.brands.includes(brand)}
                    onChange={() => onFilterChange('brands', brand)}
                    className="w-4 h-4 text-primary bg-background border-border rounded focus:ring-2 focus:ring-primary cursor-pointer"
                  />
                  <span className="font-body text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                    {brand}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}