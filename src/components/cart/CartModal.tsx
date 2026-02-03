'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface DeliveryAddress {
  name: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

export default function CartModal({ isOpen, onClose }: CartModalProps) {
  const { cartItems, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice } = useCart();
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    name: '',
    phone: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
  });
  const [showAddressWarning, setShowAddressWarning] = useState(false);

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppOrder = () => {
    if (cartItems.length === 0) return;

    // Check if required delivery address fields are entered
    const isAddressValid = deliveryAddress.name.trim() &&
                          deliveryAddress.phone.trim() &&
                          deliveryAddress.addressLine1.trim() &&
                          deliveryAddress.city.trim() &&
                          deliveryAddress.state.trim() &&
                          deliveryAddress.pincode.trim();

    if (!isAddressValid) {
      setShowAddressWarning(true);
      setTimeout(() => setShowAddressWarning(false), 3000);
      return;
    }

    const totalPrice = getTotalPrice();
    const totalItems = getTotalItems();

    // Format the order message professionally
    let message = '*CHHAJED FOODS*\n';
    message += 'Order Inquiry\n';
    message += '------------------------\n\n';

    message += '*ORDER DETAILS*\n\n';

    cartItems.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      message += `${index + 1}. ${item.name}\n`;
      message += `   Brand: ${item.brand}\n`;
      message += `   Weight: ${item.weight}\n`;
      message += `   Rate: ${formatPrice(item.price)}\n`;
      message += `   Qty: ${item.quantity}\n`;
      message += `   Amount: ${formatPrice(itemTotal)}\n\n`;
    });

    message += '------------------------\n';
    message += '*ORDER SUMMARY*\n\n';
    message += `Total Items: ${totalItems}\n`;
    message += `Total Amount: ${formatPrice(totalPrice)}\n\n`;
    message += '------------------------\n';
    message += '*DELIVERY ADDRESS*\n\n';
    message += `Name: ${deliveryAddress.name}\n`;
    message += `Phone: ${deliveryAddress.phone}\n`;
    message += `Address: ${deliveryAddress.addressLine1}\n`;
    if (deliveryAddress.addressLine2) {
      message += `         ${deliveryAddress.addressLine2}\n`;
    }
    message += `City: ${deliveryAddress.city}\n`;
    message += `State: ${deliveryAddress.state}\n`;
    message += `Pincode: ${deliveryAddress.pincode}\n\n`;
    message += '------------------------\n\n';
    message += '*Note:* Delivery cost would not be included in this.\n\n';
    message += 'Please confirm availability and delivery details.\n\n';
    message += 'Thank you!';

    // Encode the message for WhatsApp URL
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp business number (include country code without + or spaces)
    const whatsappNumber = '918956794096';

    // Open WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

    // Clear cart and address after sending
    clearCart();
    setDeliveryAddress({
      name: '',
      phone: '',
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
      pincode: '',
    });
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
      <div className="fixed right-0 top-0 h-full w-full sm:max-w-md md:max-w-lg lg:max-w-xl bg-card shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 md:p-6 border-b border-border">
          <div className="flex items-center gap-2 sm:gap-3">
            <Icon name="ShoppingCartIcon" size={20} variant="solid" className="text-primary sm:w-6 sm:h-6" />
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
            <Icon name="XMarkIcon" size={20} variant="outline" className="text-foreground sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 md:p-6">
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
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-2 sm:gap-3 md:gap-4 p-3 sm:p-4 bg-background rounded-lg border border-border"
                >
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-md overflow-hidden flex-shrink-0">
                    <AppImage
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-body font-semibold text-foreground mb-0.5 sm:mb-1 text-sm sm:text-base truncate">
                      {item.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">
                      {item.brand} • {item.weight}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-primary mb-1 sm:mb-0">
                      {formatPrice(item.price)} x {item.quantity} = {formatPrice(item.price * item.quantity)}
                    </p>
                    <div className="flex items-center gap-2 sm:gap-3 mt-1">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        <Icon name="MinusIcon" size={14} variant="outline" className="sm:w-4 sm:h-4" />
                      </button>
                      <span className="font-body font-semibold text-foreground w-6 sm:w-8 text-center text-sm sm:text-base">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center bg-muted hover:bg-muted/80 rounded-md transition-colors"
                      >
                        <Icon name="PlusIcon" size={14} variant="outline" className="sm:w-4 sm:h-4" />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="p-1.5 sm:p-2 hover:bg-destructive/10 rounded-md transition-colors self-start"
                  >
                    <Icon name="TrashIcon" size={18} variant="outline" className="text-destructive sm:w-5 sm:h-5" />
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
                <span className="font-semibold text-foreground">
                  {getTotalItems()}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-body text-base sm:text-lg text-foreground">Total Amount:</span>
                <span className="font-headline text-xl sm:text-2xl font-bold text-primary">
                  {formatPrice(getTotalPrice())}
                </span>
              </div>
            </div>

            {/* Delivery Address Fields */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-body font-semibold text-foreground text-sm sm:text-base">
                Delivery Details <span className="text-destructive">*</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label htmlFor="name" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={deliveryAddress.name}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                    Phone Number <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={deliveryAddress.phone}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, phone: e.target.value })}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="addressLine1" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                  Address Line 1 <span className="text-destructive">*</span>
                </label>
                <input
                  id="addressLine1"
                  type="text"
                  value={deliveryAddress.addressLine1}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, addressLine1: e.target.value })}
                  placeholder="House No., Building Name, Street"
                  className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label htmlFor="addressLine2" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                  Address Line 2 <span className="text-xs text-muted-foreground">(Optional)</span>
                </label>
                <input
                  id="addressLine2"
                  type="text"
                  value={deliveryAddress.addressLine2}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, addressLine2: e.target.value })}
                  placeholder="Landmark, Area"
                  className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                <div>
                  <label htmlFor="city" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                    City <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="city"
                    type="text"
                    value={deliveryAddress.city}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, city: e.target.value })}
                    placeholder="City"
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="pincode" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                    Pincode <span className="text-destructive">*</span>
                  </label>
                  <input
                    id="pincode"
                    type="text"
                    value={deliveryAddress.pincode}
                    onChange={(e) => setDeliveryAddress({ ...deliveryAddress, pincode: e.target.value })}
                    placeholder="000000"
                    maxLength={6}
                    className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="state" className="block font-body text-xs sm:text-sm text-muted-foreground mb-1">
                  State <span className="text-destructive">*</span>
                </label>
                <input
                  id="state"
                  type="text"
                  value={deliveryAddress.state}
                  onChange={(e) => setDeliveryAddress({ ...deliveryAddress, state: e.target.value })}
                  placeholder="State"
                  className="w-full px-2 py-1.5 sm:px-3 sm:py-2 font-body text-xs sm:text-sm text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                />
              </div>

              {showAddressWarning && (
                <div className="flex items-center gap-2 p-2 sm:p-3 bg-destructive/10 border border-destructive/20 rounded-md">
                  <Icon name="ExclamationTriangleIcon" size={16} variant="solid" className="text-destructive flex-shrink-0 sm:w-4 sm:h-4" />
                  <p className="text-xs sm:text-sm font-body text-destructive">
                    Please fill in all required delivery details
                  </p>
                </div>
              )}
            </div>

            <button
              onClick={handleWhatsAppOrder}
              disabled={!(deliveryAddress.name.trim() &&
                         deliveryAddress.phone.trim() &&
                         deliveryAddress.addressLine1.trim() &&
                         deliveryAddress.city.trim() &&
                         deliveryAddress.state.trim() &&
                         deliveryAddress.pincode.trim())}
              className="w-full px-4 py-3 sm:px-5 sm:py-3.5 md:px-6 md:py-4 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-cta font-semibold text-sm sm:text-base rounded-md shadow-lg transition-colors flex items-center justify-center gap-2 sm:gap-3"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-5 h-5 sm:w-6 sm:h-6 fill-current flex-shrink-0"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span className="truncate">Send Order via WhatsApp</span>
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
