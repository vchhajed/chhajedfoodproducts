import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Certification {
  id: number;
  name: string;
  issuer: string;
  validUntil: string;
  certificateNumber: string;
  image: string;
  alt: string;
  description: string;
}

export default function CertificationsSection() {
  const certifications: Certification[] = [
  {
    id: 1,
    name: "ISO 22000:2018",
    issuer: "International Organization for Standardization",
    validUntil: "December 2026",
    certificateNumber: "ISO-22000-IN-2024-8765",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_133c4f44f-1766572911939.png",
    alt: "ISO 22000 food safety management certificate with official seal and signatures on white paper",
    description: "Food Safety Management System certification ensuring systematic approach to controlling food safety hazards"
  },
  {
    id: 2,
    name: "FSSAI License",
    issuer: "Food Safety and Standards Authority of India",
    validUntil: "March 2027",
    certificateNumber: "FSSAI-10012345678901",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1aab9bef4-1766049848177.png",
    alt: "FSSAI food safety license certificate with Indian government emblem and official stamps",
    description: "Mandatory food safety license for manufacturing and distribution of food products in India"
  },
  {
    id: 3,
    name: "HACCP Certification",
    issuer: "Hazard Analysis Critical Control Point",
    validUntil: "August 2026",
    certificateNumber: "HACCP-IND-2024-4532",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b3c4820c-1764663267673.png",
    alt: "HACCP food safety certification document with blue border and quality assurance stamps",
    description: "Systematic preventive approach to food safety addressing physical, chemical, and biological hazards"
  },
  {
    id: 4,
    name: "BIS Certification",
    issuer: "Bureau of Indian Standards",
    validUntil: "November 2026",
    certificateNumber: "BIS-CM/L-9876543210",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e645ccc4-1765038739637.png",
    alt: "BIS quality certification with Indian standards mark and official verification seals",
    description: "National standards body certification ensuring product quality and consumer safety"
  },
  {
    id: 5,
    name: "Organic Certification",
    issuer: "India Organic Certification Agency",
    validUntil: "June 2027",
    certificateNumber: "IOCA-ORG-2024-7891",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_123d331b7-1767082265239.png",
    alt: "Organic food certification with green leaf logo and authenticity verification stamps",
    description: "Certification for organic product lines ensuring compliance with organic farming standards"
  },
  {
    id: 6,
    name: "GMP Certification",
    issuer: "Good Manufacturing Practices",
    validUntil: "September 2026",
    certificateNumber: "GMP-MFG-2024-3456",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13cf0d826-1766902852918.png",
    alt: "GMP manufacturing certification document with quality control symbols and official signatures",
    description: "Ensures manufacturing processes meet quality standards for consistent product safety"
  }];


  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Our Certifications & Accreditations
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We maintain the highest industry standards through rigorous certifications and continuous compliance monitoring
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert) =>
          <div
            key={cert.id}
            className="bg-card rounded-xl shadow-warm-md hover:shadow-warm-lg transition-all duration-300 overflow-hidden group">

              <div className="relative overflow-hidden h-48">
                <AppImage
                src={cert.image}
                alt={cert.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                <div className="absolute top-4 right-4 bg-success text-success-foreground px-3 py-1 rounded-full">
                  <div className="flex items-center space-x-1">
                    <Icon name="CheckBadgeIcon" size={16} variant="solid" />
                    <span className="font-cta text-xs font-semibold">Verified</span>
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-start space-x-2">
                    <Icon name="BuildingOfficeIcon" size={16} variant="outline" className="text-primary mt-0.5" />
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Issued By</p>
                      <p className="font-body text-sm font-medium text-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="CalendarIcon" size={16} variant="outline" className="text-primary mt-0.5" />
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Valid Until</p>
                      <p className="font-body text-sm font-medium text-foreground">{cert.validUntil}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <Icon name="DocumentTextIcon" size={16} variant="outline" className="text-primary mt-0.5" />
                    <div>
                      <p className="font-body text-xs text-muted-foreground">Certificate No.</p>
                      <p className="font-body text-xs font-mono text-foreground">{cert.certificateNumber}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center space-x-2 px-8 py-3 bg-primary text-primary-foreground font-cta font-semibold rounded-lg shadow-warm-sm hover:bg-primary/90 transition-all duration-300">
            <Icon name="ArrowDownTrayIcon" size={20} variant="outline" />
            <span>Download All Certificates</span>
          </button>
        </div>
      </div>
    </section>);

}