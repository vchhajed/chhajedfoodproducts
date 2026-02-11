import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {
  className?: string;
}

const Footer = ({ className = '' }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '/manufacturing-story' },
      { label: 'Quality Commitment', href: '/quality-commitment' },
      { label: 'Careers', href: '/contact' },
    ],
    products: [
      { label: 'All Products', href: '/product-catalog' },
      { label: 'Divya Kamal', href: '/product-catalog' },
      { label: 'Nut Gold', href: '/product-catalog' },
      { label: 'Frylo & Tyfoonz', href: '/product-catalog' },
    ],
    resources: [
      { label: 'Recipe Hub', href: '/recipe-hub' },
      { label: 'Contact Us', href: '/contact' },
    ],
  };

  return (
    <footer className={`bg-secondary text-primary-foreground ${className}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/assets/images/chhajedfoodproducts_logo-removebg-preview.png"
                  alt="Chhajed Food Products Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-xl">Chhajed Food Products</p>
                <p className="font-body text-xs opacity-80">Heritage & Quality</p>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 leading-relaxed">
              Crafting premium snacks with traditional Indian flavors and modern manufacturing excellence since 2010.
            </p>
          </div>

          <div>
            <h3 className="font-cta font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
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
            <h3 className="font-cta font-semibold text-lg mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
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
            <h3 className="font-cta font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
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
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-sm opacity-80">
              &copy; {currentYear} Chhajed Food Products. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                <Icon name="EnvelopeIcon" size={20} />
              </Link>
              <Link href="/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                <Icon name="PhoneIcon" size={20} />
              </Link>
              <Link href="/manufacturing-story" className="opacity-80 hover:opacity-100 transition-opacity">
                <Icon name="MapPinIcon" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;