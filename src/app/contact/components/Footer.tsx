'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Footer: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear());
  }, []);

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/manufacturing-story' },
      { label: 'Our Products', href: '/product-catalog' },
      { label: 'Quality Commitment', href: '/quality-commitment' },
      { label: 'Recipes', href: '/recipe-hub' }
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'FAQs', href: '/contact#faq' },
      { label: 'Distributor Portal', href: '/contact#distributor' },
      { label: 'Bulk Orders', href: '/contact#bulk-inquiry' }
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Food Safety', href: '/quality-commitment' },
      { label: 'Certifications', href: '/quality-commitment#certifications' }
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: 'ShareIcon', href: '#' },
    { name: 'Instagram', icon: 'CameraIcon', href: '#' },
    { name: 'Twitter', icon: 'ChatBubbleLeftIcon', href: '#' },
    { name: 'LinkedIn', icon: 'BriefcaseIcon', href: '#' }
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-lg">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-primary-foreground"
                >
                  <path
                    d="M16 4C16 4 8 8 8 16C8 20 10 24 16 28C22 24 24 20 24 16C24 8 16 4 16 4Z"
                    fill="currentColor"
                    opacity="0.9"
                  />
                  <circle cx="16" cy="16" r="4" fill="currentColor" />
                  <path
                    d="M12 12L16 8L20 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl leading-tight">
                  Chhajed Foods
                </span>
                <span className="font-body text-xs opacity-80">
                  Heritage &amp; Quality
                </span>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 leading-relaxed mb-4">
              Bringing traditional Indian flavors to modern snacking with uncompromising quality and innovation.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex items-center justify-center w-10 h-10 bg-primary/20 hover:bg-primary rounded-lg transition-colors duration-300"
                >
                  <Icon name={social.icon as any} size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 mb-4">
              {footerLinks.legal.map(link => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Icon name="PhoneIcon" size={16} className="opacity-80" />
                <a
                  href="tel:+912067891234"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  +91 20 6789 1234
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="EnvelopeIcon" size={16} className="opacity-80" />
                <a
                  href="mailto:info@chhajedfoods.com"
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  info@chhajedfoods.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm opacity-80 text-center md:text-left">
              {isHydrated && currentYear ? `© ${currentYear}` : '©'} Chhajed Food Products Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="ShieldCheckIcon" size={20} className="text-accent" />
                <span className="font-body text-sm opacity-80">FSSAI Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="CheckBadgeIcon" size={20} className="text-accent" />
                <span className="font-body text-sm opacity-80">ISO 22000:2018</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;