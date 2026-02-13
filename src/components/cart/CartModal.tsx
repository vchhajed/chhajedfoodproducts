'use client';

import { useRouter } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } =
    useCart();
  const router = useRouter();

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleProceedToCheckout = () => {
    onClose();
    router.push('/checkout');
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-card shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3">
            <Icon
              name="ShoppingCartIcon"
              size={20}
              variant="solid"
              className="text-primary sm:w-6 sm:h-6"
            />
            <h2 className="font-headline text-lg sm:text-xl md:text-2xl font-bold text-foreground">
              Your Cart
            </h2>
            {cartItems.length > 0 && (
              <span className="bg-primary text-primary-foreground px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                {getTotalItems()}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 hover:bg-muted rounded-md transition-colors"
          >
            <Icon
              name="XMarkIcon"
              size={20}
              variant="outline"
              className="text-foreground sm:w-6 sm:h-6"
            />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Icon
                name="ShoppingCartIcon"
                size={64}
                variant="outline"
                className="text-muted-foreground mb-4"
              />
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground mb-6">Add some products to get started!</p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-primary text-primary-foreground font-cta font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-background rounded-lg border border-border"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0 bg-muted">
                    <AppImage
                      src={item.image}
                      alt={item.name}
                      fill={true}
                      objectFit="contain"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {item.brand} &bull; {item.weight}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-primary mb-1 sm:mb-0">
                      {formatPrice(item.price)} x {item.quantity} ={' '}
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        <Icon
                          name="MinusIcon"
                          size={14}
                          variant="outline"
                          className="sm:w-4 sm:h-4"
                        />
                      </button>
                      <span className="font-body font-semibold text-foreground w-6 sm:w-8 text-center text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        <Icon
                          name="PlusIcon"
                          size={14}
                          variant="outline"
                          className="sm:w-4 sm:h-4"
                        />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 sm:p-2 hover:bg-destructive/10 rounded-md transition-colors self-start"
                  >
                    <Icon
                      name="TrashIcon"
                      size={18}
                      variant="outline"
                      className="text-destructive sm:w-5 sm:h-5"
                    />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4">
            <div className="space-y-1.5 sm:space-y-2">
              <div className="flex items-center justify-between text-sm sm:text-base">
                <span className="font-body text-foreground">Total Items:</span>
                <span className="font-semibold text-foreground">{getTotalItems()}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-base sm:text-lg text-foreground">
                  Total Amount:
                </span>
                <span className="font-headline text-xl sm:text-2xl font-bold text-primary">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>

            <button
              onClick={handleProceedToCheckout}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold text-sm sm:text-base rounded-md shadow-warm transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3"
            >
              <Icon name="ArrowRightIcon" size={20} variant="outline" />
              Proceed to Checkout
            </button>

            <button
              onClick={clearCart}
              className="w-full px-4 py-2.5 sm:px-5 sm:py-3 md:px-6 bg-background border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground font-cta font-semibold text-sm sm:text-base rounded-md transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
