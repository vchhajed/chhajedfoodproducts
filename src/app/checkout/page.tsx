'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/common/Header';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/AppIcon';
import CheckoutForm, { BillingDetails } from './components/CheckoutForm';
import OrderSummary from './components/OrderSummary';
import PaymentButton from './components/PaymentButton';

export default function CheckoutPage() {
  const { cartItems } = useCart();
  const router = useRouter();
  const [isHydrated, setIsHydrated] = useState(false);

  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    fullName: '',
    email: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleBillingChange = (details: BillingDetails) => {
    setBillingDetails(details);
  };

  // Wait for hydration to check cart state
  if (!isHydrated) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-[60vh]">
          <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
        </div>
      </main>
    );
  }

  // Redirect to product catalog if cart is empty
  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-background">
        <Header />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mb-6">
              <Icon name="ShoppingCartIcon" size={40} variant="outline" className="text-muted-foreground" />
            </div>
            <h1 className="font-headline text-2xl sm:text-3xl font-bold text-foreground mb-3">
              Your cart is empty
            </h1>
            <p className="font-body text-muted-foreground mb-8 max-w-md">
              Add some products to your cart before proceeding to checkout.
            </p>
            <Link
              href="/product-catalog"
              className="px-8 py-3 bg-primary text-primary-foreground font-cta font-semibold rounded-lg hover:bg-primary/90 shadow-warm transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <nav className="flex items-center gap-2 font-body text-sm text-muted-foreground">
            <Link href="/product-catalog" className="hover:text-primary transition-colors">
              Products
            </Link>
            <Icon name="ChevronRightIcon" size={14} variant="outline" />
            <span className="text-foreground font-medium">Checkout</span>
          </nav>
        </div>

        {/* Page Title */}
        <div className="container mx-auto px-4 pb-6">
          <h1 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            Checkout
          </h1>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pb-12 sm:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">
            {/* Left: Billing Form */}
            <div id="billing-form" className="lg:col-span-3 scroll-mt-24">
              <CheckoutForm
                billingDetails={billingDetails}
                onChange={handleBillingChange}
                errors={{}}
              />
            </div>

            {/* Right: Order Summary + Payment */}
            <div className="lg:col-span-2 space-y-4 lg:sticky lg:top-28 lg:self-start">
              <OrderSummary />
              <PaymentButton billingDetails={billingDetails} />
              <button
                onClick={() => router.back()}
                className="w-full px-6 py-3 bg-background border border-border text-foreground font-cta font-medium text-sm rounded-lg hover:bg-muted transition-colors flex items-center justify-center gap-2"
              >
                <Icon name="ArrowLeftIcon" size={16} variant="outline" />
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
