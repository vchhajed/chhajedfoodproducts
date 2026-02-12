'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  action: string;
  actionLabel: string;
  availability: string;
}

const ContactMethods: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const contactMethods: ContactMethod[] = [
    {
      id: 'phone',
      icon: 'PhoneIcon',
      title: 'Call Us',
      description: 'Speak directly with our customer service team for immediate assistance',
      action: 'tel:+918551971234',
      actionLabel: '+91 8551971234',
      availability: 'Mon-Sat: 9:00 AM - 6:00 PM IST'
    },
    {
      id: 'email',
      icon: 'EnvelopeIcon',
      title: 'Email Us',
      description: 'Send us your queries and we\'ll respond within 24 hours',
      action: 'mailto:info@chhajedfoods.com',
      actionLabel: 'info@chhajedfoods.com',
      availability: '24/7 - Response within 24 hours'
    },
    {
      id: 'whatsapp',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'WhatsApp Business',
      description: 'Quick responses for product inquiries and order updates',
      action: 'https://wa.me/918551971234',
      actionLabel: '+91 8551971234',
      availability: 'Mon-Sat: 9:00 AM - 8:00 PM IST'
    },
    {
      id: 'location',
      icon: 'MapPinIcon',
      title: 'Visit Our Office',
      description: 'Schedule an appointment to visit our headquarters in Pune',
      action: '#office-location',
      actionLabel: 'View on Map',
      availability: 'By Appointment Only'
    }
  ];

  const handleContactClick = (action: string) => {
    if (!isHydrated) return;
    
    if (action.startsWith('#')) {
      const element = document.querySelector(action);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = action;
    }
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Multiple Ways to Connect
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose your preferred communication channel and we'll be happy to assist you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-warm transition-all duration-300"
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4">
                <Icon name={method.icon as any} size={28} className="text-primary" />
              </div>
              <h3 className="font-headline text-xl font-semibold text-foreground mb-2">
                {method.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4 min-h-[48px]">
                {method.description}
              </p>
              <button
                onClick={() => handleContactClick(method.action)}
                disabled={!isHydrated}
                className="w-full px-4 py-2.5 font-cta font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-md transition-all duration-300 mb-3 disabled:opacity-50"
              >
                {method.actionLabel}
              </button>
              <p className="font-body text-xs text-muted-foreground text-center">
                {method.availability}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;