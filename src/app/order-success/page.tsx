'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import Header from '@/components/common/Header';
import Icon from '@/components/ui/AppIcon';

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('orderId') || 'N/A';
  const paymentId = searchParams.get('paymentId') || 'N/A';

  return (
    <div className="container mx-auto px-4 py-16 sm:py-24 flex flex-col items-center text-center">
      {/* Success Icon */}
      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-8 animate-[scale-in_0.5s_ease-out]">
        <Icon name="CheckCircleIcon" size={56} variant="solid" className="text-green-600" />
      </div>

      <h1 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
        Thank You!
      </h1>
      <p className="font-body text-lg sm:text-xl text-muted-foreground mb-10 max-w-lg">
        Your order has been placed successfully. We&apos;ll send you a confirmation email shortly.
      </p>

      {/* Order Details Card */}
      <div className="w-full max-w-md bg-card rounded-xl border border-border p-6 sm:p-8 mb-10">
        <h2 className="font-headline text-lg font-bold text-foreground mb-4">
          Order Details
        </h2>

        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="font-body text-sm text-muted-foreground">Order ID</span>
            <span className="font-body text-sm font-semibold text-foreground break-all text-right ml-4">
              {orderId}
            </span>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-border">
            <span className="font-body text-sm text-muted-foreground">Payment ID</span>
            <span className="font-body text-sm font-semibold text-foreground break-all text-right ml-4">
              {paymentId}
            </span>
          </div>
          <div className="flex items-center justify-between py-2">
            <span className="font-body text-sm text-muted-foreground">Status</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full" />
              Confirmed
            </span>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        <Link
          href="/product-catalog"
          className="flex-1 px-6 py-3 bg-primary text-primary-foreground font-cta font-semibold rounded-lg hover:bg-primary/90 shadow-warm transition-all duration-300 text-center"
        >
          Continue Shopping
        </Link>
        <Link
          href="/homepage"
          className="flex-1 px-6 py-3 bg-background border border-border text-foreground font-cta font-medium rounded-lg hover:bg-muted transition-colors text-center"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default function OrderSuccessPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <Suspense
          fallback={
            <div className="container mx-auto px-4 py-24 flex items-center justify-center">
              <div className="w-8 h-8 border-3 border-primary/30 border-t-primary rounded-full animate-spin" />
            </div>
          }
        >
          <OrderSuccessContent />
        </Suspense>
      </div>
    </main>
  );
}
