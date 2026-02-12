'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

export interface BillingDetails {
  fullName: string;
  email: string;
  phone: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  state: string;
  pincode: string;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  addressLine1?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

interface CheckoutFormProps {
  billingDetails: BillingDetails;
  onChange: (details: BillingDetails) => void;
  errors: FormErrors;
}

export function validateBillingDetails(details: BillingDetails): FormErrors {
  const errors: FormErrors = {};

  if (!details.fullName.trim()) {
    errors.fullName = 'Full name is required';
  }

  if (!details.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)) {
    errors.email = 'Enter a valid email address';
  }

  if (!details.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!/^[6-9]\d{9}$/.test(details.phone.replace(/\s+/g, ''))) {
    errors.phone = 'Enter a valid 10-digit phone number';
  }

  if (!details.addressLine1.trim()) {
    errors.addressLine1 = 'Address is required';
  }

  if (!details.city.trim()) {
    errors.city = 'City is required';
  }

  if (!details.state.trim()) {
    errors.state = 'State is required';
  }

  if (!details.pincode.trim()) {
    errors.pincode = 'Pincode is required';
  } else if (!/^\d{6}$/.test(details.pincode)) {
    errors.pincode = 'Enter a valid 6-digit pincode';
  }

  return errors;
}

export default function CheckoutForm({ billingDetails, onChange, errors }: CheckoutFormProps) {
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const hasExternalErrors = Object.keys(errors).length > 0;

  const handleChange = (field: keyof BillingDetails, value: string) => {
    onChange({ ...billingDetails, [field]: value });
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Show error if field was touched OR if errors were triggered externally (e.g. "Proceed to Payment" clicked)
  const showError = (field: keyof FormErrors) => {
    return (touched[field] || hasExternalErrors) && errors[field];
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full px-3 py-2.5 sm:px-4 sm:py-3 font-body text-sm text-foreground bg-background border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent transition-all ${
      showError(field)
        ? 'border-destructive focus:ring-destructive/40'
        : 'border-border focus:ring-primary/40'
    }`;

  return (
    <div className="bg-card rounded-xl border border-border p-5 sm:p-6 md:p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon name="MapPinIcon" size={20} variant="solid" className="text-primary" />
        </div>
        <div>
          <h2 className="font-headline text-xl sm:text-2xl font-bold text-foreground">
            Billing & Shipping Details
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            Enter your delivery information
          </p>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block font-body text-sm font-medium text-foreground mb-1.5">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="fullName"
            type="text"
            value={billingDetails.fullName}
            onChange={(e) => handleChange('fullName', e.target.value)}
            onBlur={() => handleBlur('fullName')}
            placeholder="Enter your full name"
            className={inputClass('fullName')}
          />
          {showError('fullName') && (
            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
              <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
              {errors.fullName}
            </p>
          )}
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-1.5">
              Email <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              value={billingDetails.email}
              onChange={(e) => handleChange('email', e.target.value)}
              onBlur={() => handleBlur('email')}
              placeholder="you@example.com"
              className={inputClass('email')}
            />
            {showError('email') && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
                {errors.email}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-1.5">
              Phone Number <span className="text-destructive">*</span>
            </label>
            <div className={`flex items-center rounded-lg border overflow-hidden transition-all ${
              showError('phone')
                ? 'border-destructive focus-within:ring-2 focus-within:ring-destructive/40'
                : 'border-border focus-within:ring-2 focus-within:ring-primary/40'
            }`}>
              <span className="px-3 py-2.5 sm:py-3 font-body text-sm text-muted-foreground bg-muted border-r border-border select-none">
                +91
              </span>
              <input
                id="phone"
                type="tel"
                value={billingDetails.phone}
                onChange={(e) => handleChange('phone', e.target.value.replace(/\D/g, '').slice(0, 10))}
                onBlur={() => handleBlur('phone')}
                placeholder="98765 43210"
                maxLength={10}
                className="flex-1 px-3 py-2.5 sm:py-3 font-body text-sm text-foreground bg-background focus:outline-none"
              />
            </div>
            {showError('phone') && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
                {errors.phone}
              </p>
            )}
          </div>
        </div>

        {/* Address Line 1 */}
        <div>
          <label htmlFor="addressLine1" className="block font-body text-sm font-medium text-foreground mb-1.5">
            Address Line 1 <span className="text-destructive">*</span>
          </label>
          <input
            id="addressLine1"
            type="text"
            value={billingDetails.addressLine1}
            onChange={(e) => handleChange('addressLine1', e.target.value)}
            onBlur={() => handleBlur('addressLine1')}
            placeholder="House No., Building Name, Street"
            className={inputClass('addressLine1')}
          />
          {showError('addressLine1') && (
            <p className="mt-1 text-xs text-destructive flex items-center gap-1">
              <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
              {errors.addressLine1}
            </p>
          )}
        </div>

        {/* Address Line 2 */}
        <div>
          <label htmlFor="addressLine2" className="block font-body text-sm font-medium text-foreground mb-1.5">
            Address Line 2 <span className="text-xs text-muted-foreground font-normal">(Optional)</span>
          </label>
          <input
            id="addressLine2"
            type="text"
            value={billingDetails.addressLine2}
            onChange={(e) => handleChange('addressLine2', e.target.value)}
            placeholder="Landmark, Area"
            className="w-full px-3 py-2.5 sm:px-4 sm:py-3 font-body text-sm text-foreground bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-transparent transition-all"
          />
        </div>

        {/* City, State, Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="city" className="block font-body text-sm font-medium text-foreground mb-1.5">
              City <span className="text-destructive">*</span>
            </label>
            <input
              id="city"
              type="text"
              value={billingDetails.city}
              onChange={(e) => handleChange('city', e.target.value)}
              onBlur={() => handleBlur('city')}
              placeholder="City"
              className={inputClass('city')}
            />
            {showError('city') && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
                {errors.city}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="state" className="block font-body text-sm font-medium text-foreground mb-1.5">
              State <span className="text-destructive">*</span>
            </label>
            <input
              id="state"
              type="text"
              value={billingDetails.state}
              onChange={(e) => handleChange('state', e.target.value)}
              onBlur={() => handleBlur('state')}
              placeholder="State"
              className={inputClass('state')}
            />
            {showError('state') && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
                {errors.state}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="pincode" className="block font-body text-sm font-medium text-foreground mb-1.5">
              Pincode <span className="text-destructive">*</span>
            </label>
            <input
              id="pincode"
              type="text"
              value={billingDetails.pincode}
              onChange={(e) => handleChange('pincode', e.target.value.replace(/\D/g, '').slice(0, 6))}
              onBlur={() => handleBlur('pincode')}
              placeholder="411001"
              maxLength={6}
              className={inputClass('pincode')}
            />
            {showError('pincode') && (
              <p className="mt-1 text-xs text-destructive flex items-center gap-1">
                <Icon name="ExclamationCircleIcon" size={14} variant="solid" className="text-destructive" />
                {errors.pincode}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
