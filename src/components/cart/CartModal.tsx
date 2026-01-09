'use client';

import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalItems } = useCart();

  if (!isOpen) return null;

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    // Format the order message
    let message = '🛒 *New Order from Chhajed Foods Website*\n\n';
    message += '📦 *Order Details:*\n';
    message += '━━━━━━━━━━━━━━━━━\n\n';

    cartItems.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   Brand: ${item.brand}\n`;
      message += `   Weight: ${item.weight}\n`;
      message += `   Quantity: ${item.quantity}\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━━\n`;
    message += `📊 *Total Items:* ${getTotalItems()}\n\n`;
    message += `Please provide pricing and confirm availability.\n\n`;
    message += `Thank you! 🙏`;

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp business number (include country code without + or spaces)
    const whatsappNumber = '918956794096';

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Clear cart after sending
    clearCart();
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-card shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Icon name="ShoppingCartIcon" size={24} variant="solid" className="text-primary" />
            <h2 className="font-headline text-2xl font-bold text-foreground">
              Your Cart
            </h2>
            {cartItems.length > 0 && (
              <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-sm font-semibold">
                {getTotalItems()}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <Icon name="ShoppingCartIcon" size={64} variant="outline" className="text-muted-foreground mb-4" />
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                Your cart is empty
              </h3>
              <p className="text-muted-foreground mb-6">
                Add some products to get started!
              </p>
              <button
                onClick={onClose}
                className="px-6 py-3 bg-primary text-primary-foreground font-cta font-semibold rounded-md hover:bg-primary/90 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-4 bg-background rounded-lg border border-border"
                >
                  <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <AppImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-body font-semibold text-foreground mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-2">
                      {item.brand} • {item.weight}
                    </p>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        <Icon name="MinusIcon" size={16} variant="outline" />
                      </button>
                      <span className="font-body font-semibold text-foreground w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        <Icon name="PlusIcon" size={16} variant="outline" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-2 hover:bg-destructive/10 rounded-md transition-colors self-start"
                  >
                    <Icon name="TrashIcon" size={20} variant="outline" className="text-destructive" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-border p-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-body text-lg text-foreground">Total Items:</span>
              <span className="font-headline text-2xl font-bold text-primary">
                {getTotalItems()}
              </span>
            </div>

            <button
              onClick={handleWhatsAppOrder}
              className="w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-cta font-semibold rounded-md shadow-lg transition-colors flex items-center justify-center gap-3"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 fill-current"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Send Order via WhatsApp
            </button>

            <button
              onClick={clearCart}
              className="w-full px-6 py-3 bg-background border-2 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground font-cta font-semibold rounded-md transition-colors"
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </>
  );
}
