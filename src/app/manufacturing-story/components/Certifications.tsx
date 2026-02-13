
import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  description: string;
  icon: string;
  validUntil: string;
}

interface CertificationsProps {
  className?: string;
}

const Certifications = ({ className = '' }: CertificationsProps) => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "ISO 22000:2018",
      issuer: "International Organization for Standardization",
      description: "Food Safety Management System certification ensuring systematic approach to controlling food safety hazards and maintaining hygiene standards throughout production.",
      icon: "ShieldCheckIcon",
      validUntil: "December 2026"
    },
    {
      id: 2,
      name: "FSSAI License",
      issuer: "Food Safety and Standards Authority of India",
      description: "Government-mandated food safety license confirming compliance with Indian food safety regulations and quality standards for manufacturing and distribution.",
      icon: "DocumentCheckIcon",
      validUntil: "March 2027"
    },
    {
      id: 3,
      name: "HACCP Certified",
      issuer: "Hazard Analysis Critical Control Point",
      description: "Systematic preventive approach to food safety addressing physical, chemical, and biological hazards in production processes to ensure safe food products.",
      icon: "ClipboardDocumentCheckIcon",
      validUntil: "August 2026"
    },
    {
      id: 4,
      name: "GMP Compliance",
      issuer: "Good Manufacturing Practices",
      description: "Adherence to quality assurance guidelines ensuring products are consistently produced and controlled according to quality standards appropriate for their use.",
      icon: "BuildingOffice2Icon",
      validUntil: "Ongoing"
    }
  ];

  const auditResults = [
    { metric: "Hygiene Score", value: "98.5%", status: "Excellent" },
    { metric: "Process Compliance", value: "99.2%", status: "Outstanding" },
    { metric: "Documentation", value: "100%", status: "Perfect" },
    { metric: "Traceability", value: "100%", status: "Complete" }
  ];

  return (
    <section className={`py-12 md:py-20 bg-card ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
            <p className="font-cta text-sm font-semibold text-primary">Certifications & Compliance</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            Certified Excellence in Every Batch
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality is validated by internationally recognized certifications and regular third-party audits.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8 md:mb-16">
          {certifications.map((cert) => (
            <div key={cert.id} className="bg-background rounded-2xl p-8 shadow-warm-md hover:shadow-warm-lg transition-all duration-300">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-xl flex items-center justify-center">
                  <Icon name={cert.icon as any} size={32} className="text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="font-headline text-2xl font-bold text-foreground mb-1">
                    {cert.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              
              <p className="font-body text-foreground/80 leading-relaxed mb-4">
                {cert.description}
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  <Icon name="CalendarIcon" size={18} className="text-success" />
                  <span className="font-body text-sm text-muted-foreground">
                    Valid until: {cert.validUntil}
                  </span>
                </div>
                <div className="flex items-center space-x-2 bg-success/20 px-3 py-1 rounded-full">
                  <Icon name="CheckCircleIcon" size={18} className="text-success" />
                  <span className="font-cta text-sm font-semibold text-success-foreground">
                    Active
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="font-headline text-3xl font-bold text-foreground mb-3">
              Latest Third-Party Audit Results
            </h3>
            <p className="font-body text-muted-foreground">
              Independent verification conducted in November 2025
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {auditResults.map((result, index) => (
              <div key={index} className="bg-background rounded-xl p-6 text-center shadow-warm-sm">
                <p className="font-body text-sm text-muted-foreground mb-2">{result.metric}</p>
                <p className="font-headline text-4xl font-bold text-primary mb-2">{result.value}</p>
                <div className="inline-flex items-center space-x-1 bg-success/20 px-3 py-1 rounded-full">
                  <Icon name="StarIcon" size={16} className="text-success" variant="solid" />
                  <span className="font-cta text-xs font-semibold text-success-foreground">
                    {result.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="font-body text-muted-foreground mb-4">
            All certification documents and audit reports available for B2B partners
          </p>
          <button className="inline-flex items-center space-x-2 px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-lg shadow-warm-sm transition-all duration-300">
            <Icon name="DocumentArrowDownIcon" size={20} />
            <span>Download Certification Pack</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Certifications;