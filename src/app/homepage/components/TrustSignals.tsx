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
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
            Quality You Can Trust
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Our commitment to excellence is backed by industry-leading certifications and proven track record
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {mockCertifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-background rounded-lg p-6 text-center hover:shadow-warm transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Icon name={cert.icon as any} size={32} variant="solid" className="text-primary" />
              </div>
              <h3 className="font-cta font-semibold text-foreground mb-2">
                {cert.name}
              </h3>
              <p className="font-body text-sm text-muted-foreground">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {mockMetrics.map((metric) => (
            <div key={metric.id} className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-3">
                <Icon name={metric.icon as any} size={24} className="text-primary" />
              </div>
              <div className="font-headline text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="font-body text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}