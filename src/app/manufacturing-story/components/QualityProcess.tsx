import Icon from '@/components/ui/AppIcon';

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: string;
}

interface QualityProcessProps {
  className?: string;
}

const QualityProcess = ({ className = '' }: QualityProcessProps) => {
  const processSteps: ProcessStep[] = [
    {
      id: 1,
      title: "Ingredient Sourcing",
      description: "We partner with certified suppliers and conduct rigorous audits to ensure every ingredient meets our quality standards before entering our facility.",
      icon: "ShoppingCartIcon"
    },
    {
      id: 2,
      title: "Incoming Inspection",
      description: "Every batch undergoes comprehensive testing including visual inspection, chemical analysis, and microbiological screening to verify quality and safety.",
      icon: "MagnifyingGlassIcon"
    },
    {
      id: 3,
      title: "Production Monitoring",
      description: "Real-time quality checks at critical control points ensure consistency. Our automated systems track temperature, humidity, and processing parameters continuously.",
      icon: "ChartBarIcon"
    },
    {
      id: 4,
      title: "Laboratory Testing",
      description: "In-house laboratory conducts detailed analysis including nutritional profiling, shelf-life studies, and sensory evaluation by trained experts.",
      icon: "BeakerIcon"
    },
    {
      id: 5,
      title: "Final Verification",
      description: "Finished products undergo final quality checks including packaging integrity, labeling accuracy, and batch documentation before warehouse release.",
      icon: "ClipboardDocumentCheckIcon"
    },
    {
      id: 6,
      title: "Traceability & Records",
      description: "Complete batch traceability from raw material to finished product. Digital records maintained for regulatory compliance and quality assurance.",
      icon: "DocumentTextIcon"
    }
  ];

  return (
    <section className={`py-12 md:py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-success/20 rounded-full mb-4">
            <p className="font-cta text-sm font-semibold text-success-foreground">Quality Assurance</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our 6-Stage Quality Process
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Every product goes through rigorous quality checks at multiple stages, ensuring that only the best reaches your table.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={step.id} className="relative">
              <div className="bg-card rounded-2xl p-8 shadow-warm-md hover:shadow-warm-lg transition-shadow duration-300 h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                    <Icon name={step.icon as any} size={28} className="text-primary-foreground" />
                  </div>
                  <div className="flex-shrink-0 w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <span className="font-headline text-xl font-bold text-accent-foreground">
                      {step.id}
                    </span>
                  </div>
                </div>
                
                <h3 className="font-headline text-2xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-foreground/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <Icon name="ArrowRightIcon" size={24} className="text-primary" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 md:mt-16 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
                <Icon name="ShieldCheckIcon" size={32} className="text-primary-foreground" />
              </div>
              <h4 className="font-headline text-3xl font-bold text-foreground mb-2">100%</h4>
              <p className="font-body text-muted-foreground">Batch Testing Coverage</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-success rounded-full mb-4">
                <Icon name="CheckBadgeIcon" size={32} className="text-success-foreground" />
              </div>
              <h4 className="font-headline text-3xl font-bold text-foreground mb-2">24/7</h4>
              <p className="font-body text-muted-foreground">Quality Monitoring</p>
            </div>
            <div>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent rounded-full mb-4">
                <Icon name="DocumentCheckIcon" size={32} className="text-accent-foreground" />
              </div>
              <h4 className="font-headline text-3xl font-bold text-foreground mb-2">ISO</h4>
              <p className="font-body text-muted-foreground">Certified Standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;