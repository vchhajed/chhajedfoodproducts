import Icon from '@/components/ui/AppIcon';

interface CTACard {
  id: number;
  title: string;
  description: string;
  icon: string;
  buttonText: string;
  buttonVariant: 'primary' | 'secondary';
}

const mockCTAs: CTACard[] = [
  {
    id: 1,
    title: 'Become a Distribution Partner',
    description: 'Join our growing network of distributors and unlock exclusive business opportunities with competitive margins',
    icon: 'TruckIcon',
    buttonText: 'Partner With Us',
    buttonVariant: 'primary'
  },
  {
    id: 2,
    title: 'Request Product Samples',
    description: 'Experience our quality firsthand. Request free samples for your business or retail evaluation',
    icon: 'CubeIcon',
    buttonText: 'Request Samples',
    buttonVariant: 'secondary'
  },
  {
    id: 3,
    title: 'Download Product Catalog',
    description: 'Get our comprehensive catalog with detailed product specifications, pricing, and bulk order information',
    icon: 'DocumentArrowDownIcon',
    buttonText: 'Download Catalog',
    buttonVariant: 'primary'
  }
];

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Take the next step in your journey with Chhajed Food Products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockCTAs.map((cta) => (
            <div
              key={cta.id}
              className="bg-card rounded-lg p-8 text-center hover:shadow-warm-lg transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6">
                <Icon name={cta.icon as any} size={32} className="text-primary" />
              </div>

              <h3 className="font-headline text-2xl font-semibold text-foreground mb-3">
                {cta.title}
              </h3>

              <p className="font-body text-muted-foreground mb-6">
                {cta.description}
              </p>

              <button
                className={`w-full px-6 py-3 font-cta font-semibold rounded-md shadow-warm-sm transition-all duration-300 ${
                  cta.buttonVariant === 'primary' ?'bg-primary hover:bg-primary/90 text-primary-foreground' :'bg-secondary hover:bg-secondary/90 text-secondary-foreground'
                }`}
              >
                {cta.buttonText}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-lg p-8 md:p-12 text-center shadow-warm">
          <h3 className="font-headline text-3xl font-bold text-foreground mb-4">
            Have Questions? We&apos;re Here to Help
          </h3>
          <p className="font-body text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team is ready to assist you with product inquiries, bulk orders, or partnership opportunities
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-md shadow-warm transition-all duration-300 flex items-center gap-2">
              <Icon name="PhoneIcon" size={20} />
              <span>Call Us Now</span>
            </button>
            <button className="px-8 py-4 bg-secondary hover:bg-secondary/90 text-secondary-foreground font-cta font-semibold rounded-md shadow-warm transition-all duration-300 flex items-center gap-2">
              <Icon name="EnvelopeIcon" size={20} />
              <span>Email Us</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}