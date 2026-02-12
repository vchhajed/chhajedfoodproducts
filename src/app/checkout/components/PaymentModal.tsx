'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

type PaymentTab = 'card' | 'upi' | 'qr';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
  amount: number;
}

export default function PaymentModal({ isOpen, onClose, onSuccess, amount }: PaymentModalProps) {
  const [activeTab, setActiveTab] = useState<PaymentTab>('card');
  const [isProcessing, setIsProcessing] = useState(false);

  // Card form state
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // UPI state
  const [upiId, setUpiId] = useState('');

  if (!isOpen) return null;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatCardNumber = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 16);
    return digits.replace(/(\d{4})(?=\d)/g, '$1 ');
  };

  const formatExpiry = (value: string) => {
    const digits = value.replace(/\D/g, '').slice(0, 4);
    if (digits.length >= 3) {
      return `${digits.slice(0, 2)}/${digits.slice(2)}`;
    }
    return digits;
  };

  const handlePayNow = () => {
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 2000);
  };

  const tabs: { id: PaymentTab; label: string; icon: string }[] = [
    { id: 'card', label: 'Card', icon: 'CreditCardIcon' },
    { id: 'upi', label: 'UPI', icon: 'DevicePhoneMobileIcon' },
    { id: 'qr', label: 'QR Code', icon: 'QrCodeIcon' },
  ];

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-card rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
          {/* Header */}
          <div className="bg-[#2C1810] px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="LockClosedIcon" size={18} variant="solid" className="text-[#D4A843]" />
              <div>
                <h3 className="font-headline text-base font-bold text-white">Secure Payment</h3>
                <p className="text-xs text-white/60">Chhajed Food Products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-headline text-lg font-bold text-[#D4A843]">
                {formatPrice(amount)}
              </span>
              <button
                onClick={onClose}
                disabled={isProcessing}
                className="p-1 hover:bg-white/10 rounded transition-colors disabled:opacity-50"
              >
                <Icon name="XMarkIcon" size={20} variant="outline" className="text-white/70" />
              </button>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex border-b border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                disabled={isProcessing}
                className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 font-body text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'text-primary border-b-2 border-primary bg-primary/5'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                <Icon name={tab.icon} size={18} variant="outline" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Card Tab */}
            {activeTab === 'card' && (
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                    Card Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      placeholder="1234 5678 9012 3456"
                      className="w-full px-3 py-2.5 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent pr-12"
                    />
                    <Icon
                      name="CreditCardIcon"
                      size={20}
                      variant="outline"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="Name on card"
                    className="w-full px-3 py-2.5 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(formatExpiry(e.target.value))}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-3 py-2.5 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                      CVV
                    </label>
                    <input
                      type="password"
                      value={cardCvv}
                      onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, '').slice(0, 4))}
                      placeholder="***"
                      maxLength={4}
                      className="w-full px-3 py-2.5 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* UPI Tab */}
            {activeTab === 'upi' && (
              <div className="space-y-4">
                <div>
                  <label className="block font-body text-sm font-medium text-foreground mb-1.5">
                    UPI ID
                  </label>
                  <input
                    type="text"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    placeholder="yourname@upi"
                    className="w-full px-3 py-2.5 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent"
                  />
                </div>

                <div className="text-center py-2">
                  <p className="font-body text-xs text-muted-foreground mb-4">Or pay using UPI apps</p>
                  <div className="flex items-center justify-center gap-4">
                    {['Google Pay', 'PhonePe', 'Paytm', 'BHIM'].map((app) => (
                      <button
                        key={app}
                        onClick={() => setUpiId(`demo@${app.toLowerCase().replace(' ', '')}`)}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all"
                      >
                        <div className="w-10 h-10 bg-muted rounded-full flex items-center justify-center">
                          <span className="font-cta text-xs font-bold text-foreground">
                            {app.charAt(0)}
                          </span>
                        </div>
                        <span className="font-body text-[10px] text-muted-foreground">{app}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* QR Code Tab */}
            {activeTab === 'qr' && (
              <div className="flex flex-col items-center py-4 space-y-4">
                <p className="font-body text-sm text-muted-foreground text-center">
                  Scan this QR code with any UPI app to pay
                </p>

                {/* Simulated QR Code */}
                <div className="w-48 h-48 bg-white rounded-xl border-2 border-border p-3 flex items-center justify-center">
                  <div className="w-full h-full grid grid-cols-8 grid-rows-8 gap-[2px]">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`rounded-[1px] ${
                          // Create a QR-like pattern
                          (i < 24 && (i % 8 < 3 || (i < 3))) ||
                          (i >= 40 && i % 8 < 3) ||
                          (i % 8 >= 5 && i < 24) ||
                          (Math.random() > 0.5 && i >= 24 && i < 40)
                            ? 'bg-[#2C1810]'
                            : 'bg-transparent'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <p className="font-headline text-lg font-bold text-primary">
                    {formatPrice(amount)}
                  </p>
                  <p className="font-body text-xs text-muted-foreground mt-1">
                    QR code is valid for 10 minutes
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t border-border space-y-3">
            <button
              onClick={handlePayNow}
              disabled={isProcessing}
              className="w-full px-6 py-3.5 bg-primary hover:bg-primary/90 disabled:bg-primary/60 text-primary-foreground font-cta font-semibold text-base rounded-lg shadow-warm transition-all duration-300 flex items-center justify-center gap-2.5"
            >
              {isProcessing ? (
                <>
                  <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Processing Payment...
                </>
              ) : (
                <>
                  Pay {formatPrice(amount)}
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-2">
              <Icon name="ShieldCheckIcon" size={14} variant="solid" className="text-green-600" />
              <span className="font-body text-xs text-muted-foreground">
                256-bit SSL Encrypted &bull; Secured by Razorpay
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
