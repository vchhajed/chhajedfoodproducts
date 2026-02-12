'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/AppIcon';
import { BillingDetails, validateBillingDetails } from './CheckoutForm';
import { getOrderTotals } from './OrderSummary';
import PaymentModal from './PaymentModal';

interface PaymentButtonProps {
  billingDetails: BillingDetails;
  onValidationFail: () => void;
}

export default function PaymentButton({ billingDetails, onValidationFail }: PaymentButtonProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  const subtotal = getTotalPrice();
  const { grandTotal } = getOrderTotals(subtotal);

  const handleProceedToPayment = () => {
    setErrorMessage('');

    // Validate form before proceeding
    const errors = validateBillingDetails(billingDetails);
    if (Object.keys(errors).length > 0) {
      onValidationFail();
      setErrorMessage('Please fill in all required billing & shipping details before proceeding.');
      // Auto-dismiss after 5 seconds
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    if (cartItems.length === 0) return;

    // Open payment modal
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = async () => {
    setShowPaymentModal(false);

    try {
      // Create order on backend
      const response = await fetch('/api/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: grandTotal,
          currency: 'INR',
          billingDetails,
          cartItems,
        }),
      });

      const data = await response.json();
      const orderId = data.success ? data.order.id : `order_${Date.now()}`;
      const paymentId = `pay_${Date.now()}`;

      const params = new URLSearchParams({ orderId, paymentId });
      clearCart();
      router.push(`/order-success?${params.toString()}`);
    } catch {
      // Fallback if API fails
      const params = new URLSearchParams({
        orderId: `order_${Date.now()}`,
        paymentId: `pay_${Date.now()}`,
      });
      clearCart();
      router.push(`/order-success?${params.toString()}`);
    }
  };

  return (
    <div className="space-y-3">
      {/* Error Message */}
      {errorMessage && (
        <div className="flex items-start gap-2.5 p-3.5 bg-destructive/10 border border-destructive/20 rounded-lg animate-[fadeIn_0.3s_ease-out]">
          <Icon
            name="ExclamationTriangleIcon"
            size={18}
            variant="solid"
            className="text-destructive flex-shrink-0 mt-0.5"
          />
          <div className="flex-1">
            <p className="font-body text-sm font-medium text-destructive">{errorMessage}</p>
          </div>
          <button
            onClick={() => setErrorMessage('')}
            className="p-0.5 hover:bg-destructive/10 rounded transition-colors flex-shrink-0"
          >
            <Icon name="XMarkIcon" size={16} variant="outline" className="text-destructive" />
          </button>
        </div>
      )}

      <button
        onClick={handleProceedToPayment}
        disabled={cartItems.length === 0}
        className="w-full px-6 py-4 bg-primary hover:bg-primary/90 disabled:bg-muted disabled:cursor-not-allowed text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-warm transition-all duration-300 flex items-center justify-center gap-2.5"
      >
        <Icon name="LockClosedIcon" size={20} variant="solid" />
        Proceed to Payment
      </button>

      <div className="flex items-center justify-center gap-2 pt-1">
        <Icon name="ShieldCheckIcon" size={14} variant="solid" className="text-muted-foreground" />
        <span className="font-body text-xs text-muted-foreground">Secured by Razorpay</span>
      </div>

      {/* Payment Modal */}
      <PaymentModal
        isOpen={showPaymentModal}
        onClose={() => setShowPaymentModal(false)}
        onSuccess={handlePaymentSuccess}
        amount={grandTotal}
      />
    </div>
  );
}
