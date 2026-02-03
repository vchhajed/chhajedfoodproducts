import React from 'react';
import Icon from '@/components/ui/AppIcon';

const EmergencyContact: React.FC = () => {
  const emergencyContacts = [
    {
      id: 'quality',
      icon: 'ShieldCheckIcon',
      title: 'Quality Concern Hotline',
      description: 'Report product quality issues or safety concerns immediately',
      contact: '+91 20 6789 9999',
      email: 'quality@chhajedfoods.com',
      availability: '24/7 Emergency Response',
      priority: 'high'
    },
    {
      id: 'customer',
      icon: 'ChatBubbleLeftEllipsisIcon',
      title: 'Customer Service',
      description: 'General inquiries, order status, and product information',
      contact: '+91 89567 94096',
      email: 'support@chhajedfoods.com',
      availability: 'Mon-Sat: 9:00 AM - 8:00 PM',
      priority: 'normal'
    },
    {
      id: 'distributor',
      icon: 'TruckIcon',
      title: 'Distributor Support',
      description: 'Supply chain issues, delivery concerns, and logistics support',
      contact: '+91 20 6789 5555',
      email: 'logistics@chhajedfoods.com',
      availability: 'Mon-Sat: 8:00 AM - 7:00 PM',
      priority: 'normal'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Emergency & Priority Contacts
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick access to specialized support teams for urgent matters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {emergencyContacts.map(contact => (
            <div
              key={contact.id}
              className={`bg-card border rounded-lg p-6 hover:shadow-warm transition-all duration-300 ${
                contact.priority === 'high' ? 'border-destructive' : 'border-border'
              }`}
            >
              <div className="flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg mb-4 mx-auto">
                <Icon name={contact.icon as any} size={28} className="text-primary" />
              </div>

              {contact.priority === 'high' && (
                <div className="flex items-center justify-center space-x-2 mb-3">
                  <Icon name="ExclamationTriangleIcon" size={16} className="text-destructive" />
                  <span className="font-cta font-semibold text-xs text-destructive uppercase tracking-wide">
                    Priority Support
                  </span>
                </div>
              )}

              <h3 className="font-headline text-xl font-semibold text-foreground text-center mb-2">
                {contact.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground text-center mb-4 min-h-[48px]">
                {contact.description}
              </p>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-center space-x-2 text-foreground">
                  <Icon name="PhoneIcon" size={18} className="text-primary" />
                  <a
                    href={`tel:${contact.contact.replace(/\s/g, '')}`}
                    className="font-body text-sm hover:text-primary transition-colors"
                  >
                    {contact.contact}
                  </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-foreground">
                  <Icon name="EnvelopeIcon" size={18} className="text-primary" />
                  <a
                    href={`mailto:${contact.email}`}
                    className="font-body text-sm hover:text-primary transition-colors"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex items-center justify-center space-x-2">
                  <Icon name="ClockIcon" size={16} className="text-muted-foreground" />
                  <p className="font-body text-xs text-muted-foreground text-center">
                    {contact.availability}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-warning/10 border border-warning rounded-lg p-6">
          <div className="flex items-start space-x-4">
            <Icon name="InformationCircleIcon" size={24} className="text-warning flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-cta font-semibold text-foreground mb-2">
                Important Notice
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                For immediate quality or safety concerns, please use the Quality Concern Hotline available 24/7. All other inquiries will be addressed during regular business hours. Response times may vary based on inquiry complexity and volume.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyContact;