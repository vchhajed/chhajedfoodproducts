import Icon from '@/components/ui/AppIcon';


interface Certification {
  id: number;
  name: string;
  description: string;
  icon: string;
}

interface Metric {
  id: number;
  value: string;
  label: string;
  icon: string;
}

const mockCertifications: Certification[] = [
  {
    id: 1,
    name: 'ISO 22000:2018',
    description: 'Food Safety Management System',
    icon: 'ShieldCheckIcon'
  },
  {
    id: 2,
    name: 'FSSAI Licensed',
    description: 'Government Approved Facility',
    icon: 'DocumentCheckIcon'
  },
  {
    id: 3,
    name: 'HACCP Certified',
    description: 'Hazard Analysis Critical Control',
    icon: 'ClipboardDocumentCheckIcon'
  },
  {
    id: 4,
    name: 'GMP Compliant',
    description: 'Good Manufacturing Practices',
    icon: 'BuildingOffice2Icon'
  }
];

const mockMetrics: Metric[] = [
  {
    id: 1,
    value: '25+',
    label: 'Years of Excellence',
    icon: 'CalendarDaysIcon'
  },
  {
    id: 2,
    value: '500+',
    label: 'Distribution Partners',
    icon: 'UsersIcon'
  },
  {
    id: 3,
    value: '50,000+',
    label: 'Retail Outlets',
    icon: 'BuildingStorefrontIcon'
  },
  {
    id: 4,
    value: '15+',
    label: 'States Covered',
    icon: 'MapPinIcon'
  }
];

export default function TrustSignals() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h2 className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Quality You Can Trust
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications and proven track record
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16">
          {mockCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-background rounded-lg p-3 sm:p-4 md:p-6 text-center hover:shadow-warm transition-all duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary/10 rounded-full mx-auto mb-2 sm:mb-3 md:mb-4">
                <Icon name={cert.icon as any} size={20} variant="solid" className="text-primary sm:w-6 sm:h-6 md:w-8 md:h-8" />
              </div>
              <h3 className="font-cta font-semibold text-foreground text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
                {cert.name}
              </h3>
              <p className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {mockMetrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-full mx-auto mb-2 sm:mb-3">
                <Icon name={metric.icon as any} size={20} className="text-primary sm:w-6 sm:h-6" />
              </div>
              <div className="font-headline text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                {metric.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}