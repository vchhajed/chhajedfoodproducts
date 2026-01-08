import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SustainabilityMetric {
  id: number;
  title: string;
  value: string;
  description: string;
  icon: string;
}

interface SustainabilityProps {
  className?: string;
}

const Sustainability = ({ className = '' }: SustainabilityProps) => {
  const metrics: SustainabilityMetric[] = [
  {
    id: 1,
    title: "Waste Reduction",
    value: "85%",
    description: "Manufacturing waste diverted from landfills through recycling and composting programs",
    icon: "ArrowPathIcon"
  },
  {
    id: 2,
    title: "Energy Efficiency",
    value: "40%",
    description: "Reduction in energy consumption through solar panels and efficient machinery upgrades",
    icon: "BoltIcon"
  },
  {
    id: 3,
    title: "Water Conservation",
    value: "60%",
    description: "Water recycling and rainwater harvesting reducing freshwater consumption annually",
    icon: "BeakerIcon"
  },
  {
    id: 4,
    title: "Local Sourcing",
    value: "75%",
    description: "Raw materials sourced from local farmers and suppliers within 200km radius",
    icon: "MapPinIcon"
  }];


  const initiatives = [
  {
    title: "Solar Power Integration",
    description: "50kW rooftop solar installation generating clean energy for daily operations"
  },
  {
    title: "Zero-Waste Packaging",
    description: "Transitioning to biodegradable and recyclable packaging materials by 2026"
  },
  {
    title: "Organic Waste Composting",
    description: "Converting production waste into organic compost for local agricultural use"
  },
  {
    title: "Efficient Water Systems",
    description: "Closed-loop water recycling system reducing freshwater dependency"
  }];


  return (
    <section className={`py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-success/20 rounded-full mb-4">
            <p className="font-cta text-sm font-semibold text-success-foreground">Sustainability Commitment</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Manufacturing with Responsibility
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality extends beyond products to environmental stewardship and sustainable manufacturing practices.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric) =>
          <div key={metric.id} className="bg-background rounded-2xl p-6 shadow-warm-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success/20 rounded-full mb-4">
                <Icon name={metric.icon as any} size={32} className="text-success" />
              </div>
              <h3 className="font-headline text-4xl font-bold text-success mb-2">{metric.value}</h3>
              <p className="font-cta font-semibold text-foreground mb-2">{metric.title}</p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {metric.description}
              </p>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="font-headline text-3xl font-bold text-foreground mb-6">
              Our Green Initiatives
            </h3>
            <div className="space-y-4">
              {initiatives.map((initiative, index) =>
              <div key={index} className="flex items-start space-x-4 bg-background rounded-xl p-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                    <Icon name="CheckCircleIcon" size={24} className="text-success" />
                  </div>
                  <div>
                    <h4 className="font-cta font-semibold text-foreground mb-1">
                      {initiative.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {initiative.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-success/20 to-primary/20 rounded-2xl blur-2xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <AppImage
                src="https://images.unsplash.com/photo-1632884943447-474061c1ea63"
                alt="Solar panels installed on factory rooftop with green trees and blue sky in background"
                className="w-full h-[500px] object-cover" />

            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-success/10 to-primary/10 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-headline text-3xl font-bold text-foreground mb-3">
              Environmental Impact Goals 2026
            </h3>
            <p className="font-body text-muted-foreground">
              Our commitment to sustainable manufacturing continues with ambitious targets
            </p>
          </div>
          
          <div className="grid sm:grid-cols-3 gap-6">
            <div className="bg-background rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-success/20 rounded-full mb-3">
                <Icon name="SunIcon" size={24} className="text-success" />
              </div>
              <p className="font-headline text-2xl font-bold text-foreground mb-2">100%</p>
              <p className="font-body text-sm text-muted-foreground">Renewable Energy Usage</p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 rounded-full mb-3">
                <Icon name="CubeIcon" size={24} className="text-primary" />
              </div>
              <p className="font-headline text-2xl font-bold text-foreground mb-2">Zero</p>
              <p className="font-body text-sm text-muted-foreground">Plastic Packaging</p>
            </div>
            <div className="bg-background rounded-xl p-6 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-accent/20 rounded-full mb-3">
                <Icon name="SparklesIcon" size={24} className="text-accent" />
              </div>
              <p className="font-headline text-2xl font-bold text-foreground mb-2">Carbon</p>
              <p className="font-body text-sm text-muted-foreground">Neutral Operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default Sustainability;