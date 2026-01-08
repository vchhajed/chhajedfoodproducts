'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface SampleRequestModalProps {
  productName: string;
  onClose: () => void;
  onSubmit: (data: SampleRequestData) => void;
}

interface SampleRequestData {
  name: string;
  email: string;
  phone: string;
  company: string;
  businessType: string;
  quantity: string;
  message: string;
}

export default function SampleRequestModal({
  productName,
  onClose,
  onSubmit,
}: SampleRequestModalProps) {
  const [formData, setFormData] = useState<SampleRequestData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    businessType: '',
    quantity: '',
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
              Request Sample
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
                  placeholder="+91 98765 43210"
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
                  <option value="retailer">Retailer</option>
                  <option value="restaurant">Restaurant/Food Service</option>
                  <option value="export">Export Business</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="quantity"
                  className="block font-body font-medium text-foreground mb-2"
                >
                  Sample Quantity <span className="text-destructive">*</span>
                </label>
                <select
                  id="quantity"
                  name="quantity"
                  required
                  value={formData.quantity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                >
                  <option value="">Select quantity</option>
                  <option value="1-5">1-5 units</option>
                  <option value="6-10">6-10 units</option>
                  <option value="11-20">11-20 units</option>
                  <option value="20+">20+ units</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 font-body text-foreground bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300 resize-none"
                placeholder="Tell us more about your requirements..."
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
              Submit Request
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}