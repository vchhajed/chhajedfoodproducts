import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {
  className?: string;
}

const CTASection = ({ className = '' }: CTASectionProps) => {
  return (
    <section className={`py-20 bg-gradient-to-br from-primary via-accent to-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Experience Our Quality Firsthand
          </h2>
          <p className="font-body text-xl text-primary-foreground/90 mb-12 leading-relaxed">
            Whether you're a distributor seeking reliable partners, a retailer looking for premium products, or a consumer wanting to taste the difference—we invite you to connect with us.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Icon name="BuildingStorefrontIcon" size={32} className="text-primary-foreground mx-auto mb-3" />
              <h3 className="font-cta font-semibold text-primary-foreground mb-2">B2B Partners</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Explore bulk ordering and distribution opportunities
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Icon name="ShoppingBagIcon" size={32} className="text-primary-foreground mx-auto mb-3" />
              <h3 className="font-cta font-semibold text-primary-foreground mb-2">Retailers</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Stock premium products your customers will love
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/20">
              <Icon name="UserGroupIcon" size={32} className="text-primary-foreground mx-auto mb-3" />
              <h3 className="font-cta font-semibold text-primary-foreground mb-2">Consumers</h3>
              <p className="font-body text-sm text-primary-foreground/80">
                Find our products at stores near you
              </p>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-foreground text-primary font-cta font-semibold rounded-lg shadow-warm-lg hover:shadow-warm-xl transition-all duration-300"
            >
              <Icon name="ChatBubbleLeftRightIcon" size={20} />
              <span>Schedule Facility Tour</span>
            </Link>
            <Link
              href="/product-catalog"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border-2 border-primary-foreground text-primary-foreground font-cta font-semibold rounded-lg hover:bg-primary-foreground/10 transition-all duration-300"
            >
              <Icon name="CubeIcon" size={20} />
              <span>Explore Products</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;