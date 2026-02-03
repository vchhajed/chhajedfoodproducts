import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary via-accent to-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Icon name="ShieldCheckIcon" size={64} variant="solid" className="text-primary-foreground mx-auto mb-6" />
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
            Experience Quality You Can Trust
          </h2>
          <p className="font-body text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Our commitment to quality isn't just a promise—it's backed by certifications, testing, and transparency. Partner with us for products that meet the highest standards.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/product-catalog"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground text-primary font-cta font-semibold rounded-lg shadow-warm-lg hover:scale-105 transition-all duration-300"
            >
              <Icon name="ShoppingBagIcon" size={20} variant="outline" />
              <span>Explore Our Products</span>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground/10 text-primary-foreground font-cta font-semibold rounded-lg border-2 border-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} variant="outline" />
              <span>Contact Quality Team</span>
            </Link>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
              <Icon name="DocumentTextIcon" size={32} variant="solid" className="text-primary-foreground mx-auto mb-3" />
              <p className="font-cta text-sm font-semibold text-primary-foreground mb-1">
                Download Certificates
              </p>
              <p className="font-body text-xs text-primary-foreground/80">
                Access our quality certifications
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
              <Icon name="VideoCameraIcon" size={32} variant="solid" className="text-primary-foreground mx-auto mb-3" />
              <p className="font-cta text-sm font-semibold text-primary-foreground mb-1">
                Virtual Facility Tour
              </p>
              <p className="font-body text-xs text-primary-foreground/80">
                See our quality processes
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6">
              <Icon name="PhoneIcon" size={32} variant="solid" className="text-primary-foreground mx-auto mb-3" />
              <p className="font-cta text-sm font-semibold text-primary-foreground mb-1">
                Quality Hotline
              </p>
              <p className="font-body text-xs text-primary-foreground/80">
                +91 89567 94096
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}