'use client';

import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const DELIVERY_CHARGE = 0; // Configurable: set to desired amount (e.g., 49)
const GST_RATE = 0; // Configurable: set to desired GST rate (e.g., 0.18 for 18%)

export function getOrderTotals(subtotal: number) {
  const deliveryCharge = subtotal > 0 ? DELIVERY_CHARGE : 0;
  const gstAmount = Math.round(subtotal * GST_RATE);
  const grandTotal = subtotal + deliveryCharge + gstAmount;
  return { subtotal, deliveryCharge, gstAmount, grandTotal };
}

export default function OrderSummary() {
  const { cartItems, updateQuantity, removeFromCart, getTotalItems, getTotalPrice } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const subtotal = getTotalPrice();
  const { deliveryCharge, gstAmount, grandTotal } = getOrderTotals(subtotal);

  return (
    <div className="bg-card rounded-xl border border-border p-5 sm:p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="ShoppingBagIcon" size={20} variant="solid" className="text-primary" />
        </div>
        <div>
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">
            Order Summary
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            {getTotalItems()} {getTotalItems() === 1 ? 'item' : 'items'} in cart
          </p>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto pr-1">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex gap-3 p-3 bg-background rounded-lg border border-border"
          >
            <div className="relative w-16 h-16 rounded-md overflow-hidden flex-shrink-0 bg-muted">
              <AppImage
                src={item.image}
                alt={item.name}
                fill={true}
                objectFit="contain"
                sizes="64px"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-body font-semibold text-sm text-foreground truncate">
                {item.name}
              </h4>
              <p className="text-xs text-muted-foreground">
                {item.brand} &bull; {item.weight}
              </p>
              <div className="flex items-center justify-between mt-1.5">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-6 h-6 flex items-center justify-center bg-muted hover:bg-muted/80 rounded text-foreground transition-colors"
                  >
                    <Icon name="MinusIcon" size={12} variant="outline" />
                  </button>
                  <span className="font-body font-semibold text-sm text-foreground w-6 text-center">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-6 h-6 flex items-center justify-center bg-muted hover:bg-muted/80 rounded text-foreground transition-colors"
                  >
                    <Icon name="PlusIcon" size={12} variant="outline" />
                  </button>
                </div>
                <span className="font-body font-semibold text-sm text-primary">
                  {formatPrice(item.price * item.quantity)}
                </span>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="p-1 hover:bg-destructive/10 rounded transition-colors self-start"
            >
              <Icon name="XMarkIcon" size={16} variant="outline" className="text-muted-foreground hover:text-destructive" />
            </button>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="border-t border-border pt-4 space-y-2.5">
        <div className="flex items-center justify-between font-body text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="text-foreground font-medium">{formatPrice(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between font-body text-sm">
          <span className="text-muted-foreground">Delivery Charge</span>
          <span className="text-foreground font-medium">
            {deliveryCharge === 0 ? (
              <span className="text-green-600">Free</span>
            ) : (
              formatPrice(deliveryCharge)
            )}
          </span>
        </div>

        {GST_RATE > 0 && (
          <div className="flex items-center justify-between font-body text-sm">
            <span className="text-muted-foreground">GST ({Math.round(GST_RATE * 100)}%)</span>
            <span className="text-foreground font-medium">{formatPrice(gstAmount)}</span>
          </div>
        )}

        <div className="border-t border-border pt-3 flex items-center justify-between">
          <span className="font-body text-base font-semibold text-foreground">Grand Total</span>
          <span className="font-headline text-xl sm:text-2xl font-bold text-primary">
            {formatPrice(grandTotal)}
          </span>
        </div>
      </div>
    </div>
  );
}
