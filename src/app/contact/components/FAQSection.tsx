'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQSection: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: 'faq1',
      question: 'What are your minimum order quantities for bulk purchases?',
      answer: 'Minimum order quantities vary by product line. For Divya Kamal dips, the minimum is 100 units. For Nut Gold and Frylo snacks, we require a minimum of 500 units. For Pasto pasta products, the minimum is 200 units. Custom packaging options are available for orders exceeding 1000 units.',
      category: 'B2B'
    },
    {
      id: 'faq2',
      question: 'How can I become a distributor for Chhajed Foods?',
      answer: 'To become a distributor, please fill out our distributor application form or contact our regional sales manager for your area. We evaluate applications based on territory availability, business experience, and distribution capabilities. The approval process typically takes 7-10 business days.',
      category: 'B2B'
    },
    {
      id: 'faq3',
      question: 'What quality certifications do your products have?',
      answer: 'All our products are FSSAI certified and manufactured in ISO 22000:2018 certified facilities. We also hold HACCP certification and comply with all food safety standards. Our manufacturing processes undergo regular third-party audits to ensure consistent quality.',
      category: 'Quality'
    },
    {
      id: 'faq4',
      question: 'Do you offer custom packaging or private labeling?',
      answer: 'Yes, we offer custom packaging and private labeling services for bulk orders. Minimum order quantities apply, and lead times vary based on customization requirements. Please contact our business solutions team to discuss your specific needs and receive a detailed quotation.',
      category: 'B2B'
    },
    {
      id: 'faq5',
      question: 'What is your typical delivery timeline for bulk orders?',
      answer: 'Standard delivery timelines are 7-10 business days for orders within Maharashtra, 10-15 business days for other states, and 15-20 business days for remote locations. Express delivery options are available at additional cost. Custom orders may require extended lead times.',
      category: 'Logistics'
    },
    {
      id: 'faq6',
      question: 'How do I report a product quality concern?',
      answer: 'Product quality concerns can be reported through our 24/7 Quality Concern Hotline at +91 20 6789 9999 or via email at quality@chhajedfoods.com. Please provide product details, batch number, and purchase information. Our quality team will respond within 24 hours and arrange for product inspection if necessary.',
      category: 'Quality'
    }
  ];

  const toggleFAQ = (id: string) => {
    if (!isHydrated) return;
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Find quick answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map(faq => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-lg overflow-hidden hover:shadow-warm transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(faq.id)}
                disabled={!isHydrated}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors disabled:opacity-50"
              >
                <div className="flex-1 pr-4">
                  <div className="flex items-center space-x-3 mb-1">
                    <span className="px-2 py-1 font-body text-xs font-medium text-primary bg-primary/10 rounded">
                      {faq.category}
                    </span>
                  </div>
                  <h3 className="font-cta font-semibold text-foreground">
                    {faq.question}
                  </h3>
                </div>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                    openFAQ === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openFAQ === faq.id && (
                <div className="px-6 pb-4 pt-2 border-t border-border">
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">
            Can't find the answer you're looking for?
          </p>
          <a
            href="#inquiry-form"
            className="inline-flex items-center space-x-2 px-6 py-2.5 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} />
            <span>Contact Our Team</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;