'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';
import { useCart } from '@/context/CartContext';
import CartModal from '@/components/cart/CartModal';

interface HeaderProps {
  className?: string;
}

const Header = ({ className = '' }: HeaderProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { getTotalItems } = useCart();

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Products', href: '/product-catalog' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-card shadow-warm ${className}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/homepage" className="flex items-center space-x-3">
            <div className="relative w-14 h-14 flex-shrink-0">
              <Image
                src="/assets/images/chhajedfoodproducts_logo-removebg-preview.png"
                alt="Chhajed Food Products Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-headline font-bold text-xl text-foreground leading-tight">
                Chhajed Foods
              </span>
              <span className="font-body text-xs text-muted-foreground">
                Heritage & Quality
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-body font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300 ease-out"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-foreground hover:text-primary transition-colors duration-300"
              aria-label="Shopping cart"
            >
              <Icon name="ShoppingCartIcon" size={24} variant="outline" />
              {getTotalItems() > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <Link
              href="/contact"
              className="px-6 py-2.5 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300 ease-out"
            >
              Contact Us
            </Link>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-300"
            aria-label="Toggle mobile menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={28}
              variant="outline"
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 font-body font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300 ease-out"
              >
                {item.label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsCartOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="px-4 py-3 font-body font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-all duration-300 ease-out flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Icon name="ShoppingCartIcon" size={20} variant="outline" />
                Cart
              </span>
              {getTotalItems() > 0 && (
                <span className="bg-primary text-primary-foreground text-xs font-bold rounded-full px-2 py-1">
                  {getTotalItems()}
                </span>
              )}
            </button>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-4 py-3 font-cta font-semibold text-center text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300 ease-out"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
};

export default Header;