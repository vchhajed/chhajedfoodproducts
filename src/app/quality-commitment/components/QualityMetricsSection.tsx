import Icon from '@/components/ui/AppIcon';

interface Metric {
  id: number;
  label: string;
  value: string;
  description: string;
  icon: string;
  trend: string;
}

export default function QualityMetricsSection() {
  const metrics: Metric[] = [
    {
      id: 1,
      label: "Quality Pass Rate",
      value: "99.8%",
      description: "Products meeting quality standards on first inspection",
      icon: "CheckCircleIcon",
      trend: "+0.3% from last year"
    },
    {
      id: 2,
      label: "Zero Defect Batches",
      value: "97.5%",
      description: "Production batches with no quality issues",
      icon: "ShieldCheckIcon",
      trend: "+2.1% from last year"
    },
    {
      id: 3,
      label: "Customer Satisfaction",
      value: "4.8/5",
      description: "Average quality rating from B2B partners",
      icon: "StarIcon",
      trend: "+0.2 from last year"
    },
    {
      id: 4,
      label: "Testing Frequency",
      value: "24/7",
      description: "Continuous quality monitoring and testing",
      icon: "ClockIcon",
      trend: "Round-the-clock operations"
    },
    {
      id: 5,
      label: "Supplier Compliance",
      value: "100%",
      description: "Suppliers meeting quality certification requirements",
      icon: "BuildingOfficeIcon",
      trend: "Maintained for 3 years"
    },
    {
      id: 6,
      label: "Audit Score",
      value: "98.2%",
      description: "Average score from third-party quality audits",
      icon: "DocumentCheckIcon",
      trend: "+1.5% from last year"
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quality Performance Metrics
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Real-time data showcasing our commitment to maintaining the highest quality standards across all operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="bg-card rounded-xl shadow-warm-md hover:shadow-warm-lg transition-all duration-300 p-8 group"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={metric.icon as any} size={28} variant="solid" className="text-primary" />
                </div>
                <div className="px-3 py-1 bg-success/10 text-success rounded-full">
                  <span className="font-body text-xs font-medium">{metric.trend}</span>
                </div>
              </div>
              <div className="space-y-3">
                <p className="font-body text-sm text-muted-foreground">
                  {metric.label}
                </p>
                <p className="font-headline text-4xl font-bold text-foreground">
                  {metric.value}
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-warm-lg p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                Continuous Improvement Culture
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="ArrowTrendingUpIcon" size={20} variant="solid" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                      Data-Driven Decisions
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      We track over 150 quality parameters daily to identify improvement opportunities and maintain excellence
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="UserGroupIcon" size={20} variant="solid" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                      Team Training
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Regular training programs ensure our team stays updated with latest quality management practices
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="LightBulbIcon" size={20} variant="solid" className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                      Innovation Focus
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      Investment in new testing technologies and quality assurance methodologies keeps us ahead
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
              <div className="text-center mb-6">
                <Icon name="TrophyIcon" size={48} variant="solid" className="text-primary mx-auto mb-4" />
                <h4 className="font-headline text-xl font-bold text-foreground mb-2">
                  Industry Recognition
                </h4>
                <p className="font-body text-sm text-muted-foreground">
                  Our quality commitment has earned us multiple awards and certifications
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-card rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="StarIcon" size={20} variant="solid" className="text-accent" />
                  <span className="font-body text-sm text-foreground">Best Quality Manufacturer 2024</span>
                </div>
                <div className="bg-card rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="StarIcon" size={20} variant="solid" className="text-accent" />
                  <span className="font-body text-sm text-foreground">Food Safety Excellence Award</span>
                </div>
                <div className="bg-card rounded-lg p-4 flex items-center space-x-3">
                  <Icon name="StarIcon" size={20} variant="solid" className="text-accent" />
                  <span className="font-body text-sm text-foreground">ISO Certification Achievement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}