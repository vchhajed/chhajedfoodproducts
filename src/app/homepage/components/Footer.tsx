import Link from 'next/link';
import Image from 'next/image';
import Icon from '@/components/ui/AppIcon';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const footerSections: FooterSection[] = [
  {
    title: 'Products',
    links: [
      { label: 'Divya Kamal', href: '/product-catalog' },
      { label: 'Nut Gold', href: '/product-catalog' },
      { label: 'Frylo & Tyfoonz', href: '/product-catalog' },
      { label: 'Pasto Pasta', href: '/product-catalog' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', href: '/manufacturing-story' },
      { label: 'Quality Commitment', href: '/quality-commitment' },
      { label: 'Manufacturing', href: '/manufacturing-story' },
      { label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Recipe Hub', href: '/recipe-hub' },
      { label: 'Product Catalog', href: '/product-catalog' },
      { label: 'Nutritional Info', href: '/quality-commitment' },
      { label: 'Certifications', href: '/quality-commitment' }
    ]
  },
  {
    title: 'Business',
    links: [
      { label: 'Become a Partner', href: '/contact' },
      { label: 'Bulk Orders', href: '/contact' },
      { label: 'Distribution Network', href: '/contact' },
      { label: 'Request Samples', href: '/contact' }
    ]
  }
];

const socialLinks = [
  { name: 'Facebook', icon: 'facebook', href: '#' },
  { name: 'Instagram', icon: 'instagram', href: '#' },
  { name: 'Twitter', icon: 'twitter', href: '#' },
  { name: 'LinkedIn', icon: 'linkedin', href: '#' }
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-14 h-14 flex-shrink-0">
                <Image
                  src="/assets/images/chhajedfoodproducts_logo-removebg-preview.png"
                  alt="Chhajed Food Products Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline font-bold text-xl leading-tight">
                  Chhajed Food Products
                </span>
                <span className="font-body text-xs opacity-80">
                  Heritage &amp; Quality
                </span>
              </div>
            </div>
            <p className="font-body text-sm opacity-80 mb-4">
              Transforming everyday snacking into moments of joy with premium quality products that blend traditional Indian flavors with modern convenience.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 flex items-center justify-center bg-primary/20 hover:bg-primary rounded-full transition-all duration-300"
                  aria-label={social.name}
                >
                  <Icon name="ShareIcon" size={20} />
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-cta font-semibold text-lg mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="font-body text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-primary/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-body text-sm opacity-80">
              &copy; {currentYear} Chhajed Food Products. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="font-body text-sm opacity-80 hover:opacity-100 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="font-body text-sm opacity-80 hover:opacity-100 transition-all duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="font-body text-sm opacity-80 hover:opacity-100 transition-all duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}