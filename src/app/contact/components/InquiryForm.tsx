'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  inquiryType: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  message?: string;
}

const InquiryForm: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    inquiryType: 'general',
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const inquiryTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'b2b', label: 'B2B Partnership' },
    { value: 'bulk', label: 'Bulk Order' },
    { value: 'distributor', label: 'Become a Distributor' },
    { value: 'quality', label: 'Quality Concern' },
    { value: 'export', label: 'Export Inquiry' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/\s/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit Indian phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    if (!isHydrated) return;
    
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isHydrated) return;

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      inquiryType: 'general',
      fullName: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    });

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
              Send Us Your Inquiry
            </h2>
            <p className="font-body text-lg text-muted-foreground">
              Fill out the form below and our team will get back to you within 24 hours
            </p>
          </div>

          {submitSuccess && (
            <div className="mb-8 p-4 bg-success/10 border border-success rounded-lg flex items-start space-x-3">
              <Icon name="CheckCircleIcon" size={24} className="text-success flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-cta font-semibold text-success mb-1">
                  Inquiry Submitted Successfully!
                </h3>
                <p className="font-body text-sm text-foreground">
                  Thank you for contacting Chhajed Foods. Our team will review your inquiry and respond within 24 hours.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 md:p-8 shadow-warm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="md:col-span-2">
                <label htmlFor="inquiryType" className="block font-body font-medium text-foreground mb-2">
                  Inquiry Type <span className="text-destructive">*</span>
                </label>
                <select
                  id="inquiryType"
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleInputChange}
                  disabled={!isHydrated}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                >
                  {inquiryTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="fullName" className="block font-body font-medium text-foreground mb-2">
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  disabled={!isHydrated}
                  className={`w-full px-4 py-3 font-body text-foreground bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 ${
                    errors.fullName ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-destructive font-body">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block font-body font-medium text-foreground mb-2">
                  Email Address <span className="text-destructive">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={!isHydrated}
                  className={`w-full px-4 py-3 font-body text-foreground bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 ${
                    errors.email ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-destructive font-body">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block font-body font-medium text-foreground mb-2">
                  Phone Number <span className="text-destructive">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={!isHydrated}
                  className={`w-full px-4 py-3 font-body text-foreground bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 ${
                    errors.phone ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="9876543210"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-destructive font-body">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="company" className="block font-body font-medium text-foreground mb-2">
                  Company Name <span className="text-muted-foreground text-sm">(Optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  disabled={!isHydrated}
                  className="w-full px-4 py-3 font-body text-foreground bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
                  placeholder="Your company name"
                />
              </div>

              <div className="md:col-span-2">
                <label htmlFor="message" className="block font-body font-medium text-foreground mb-2">
                  Message <span className="text-destructive">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  disabled={!isHydrated}
                  rows={6}
                  className={`w-full px-4 py-3 font-body text-foreground bg-background border rounded-md focus:outline-none focus:ring-2 focus:ring-ring resize-none disabled:opacity-50 ${
                    errors.message ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Tell us about your inquiry, requirements, or questions..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-destructive font-body">{errors.message}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || !isHydrated}
              className="w-full md:w-auto px-8 py-3 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <>
                  <Icon name="ArrowPathIcon" size={20} className="animate-spin" />
                  <span>Submitting...</span>
                </>
              ) : (
                <>
                  <Icon name="PaperAirplaneIcon" size={20} />
                  <span>Submit Inquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;