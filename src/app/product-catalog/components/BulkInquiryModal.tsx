'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface BulkInquiryModalProps {
  productName: string;
  onClose: () => void;
  onSubmit: (data: BulkInquiryData) => void;
}

interface BulkInquiryData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  quantity: string;
  deliveryLocation: string;
  message: string;
}

export default function BulkInquiryModal({
  productName,
  onClose,
  onSubmit,
}: BulkInquiryModalProps) {
  const [formData, setFormData] = useState<BulkInquiryData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    quantity: '',
    deliveryLocation: '',
    message: '',
  });

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80 backdrop-blur-sm">
      <div className="bg-card rounded-lg shadow-warm-lg border border-border w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="font-headline font-bold text-2xl text-foreground mb-1">
              Bulk Order Inquiry
            </h2>
            <p className="font-body text-sm text-muted-foreground">{productName}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-muted rounded-md transition-colors duration-300"
            aria-label="Close modal"
          >
            <Icon name="XMarkIcon" size={24} variant="outline" className="text-foreground" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="overflow-y-auto flex-grow p-6">
          <div className="space-y-5">
            <div>
              <label htmlFor="name" className="block font-body font-medium text-foreground mb-2">
                Full Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Enter your full name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                  placeholder="+91 89567 94096"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block font-body font-medium text-foreground mb-2">
                Company Name <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="company"
                name="company"
                required
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="Your company name"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="businessType"
                  className="block font-body font-medium text-foreground mb-2"
                >
                  Business Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="businessType"
                  name="businessType"
                  required
                  value={formData.businessType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select business type</option>
                  <option value="distributor">Distributor</option>
                  <option value="retailer">Retail Chain</option>
                  <option value="restaurant">Restaurant/Food Service</option>
                  <option value="export">Export Business</option>
                  <option value="manufacturer">Private Label Manufacturer</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block font-body font-medium text-foreground mb-2"
                >
                  Estimated Quantity <span className="text-destructive">*</span>
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select quantity range</option>
                  <option value="100-500">100-500 units</option>
                  <option value="500-1000">500-1,000 units</option>
                  <option value="1000-5000">1,000-5,000 units</option>
                  <option value="5000+">5,000+ units</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="deliveryLocation"
                className="block font-body font-medium text-foreground mb-2"
              >
                Delivery Location <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                id="deliveryLocation"
                name="deliveryLocation"
                required
                value={formData.deliveryLocation}
                onChange={handleChange}
                className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                placeholder="City, State"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                Additional Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Tell us about your bulk order requirements, delivery timeline, payment terms, etc."
              />
            </div>
          </div>
        </form>

        <div className="p-6 border-t border-border bg-muted/30">
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 font-cta font-semibold text-foreground bg-background border-2 border-border hover:bg-muted rounded-md transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex-1 px-6 py-3 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300"
            >
              Submit Inquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}