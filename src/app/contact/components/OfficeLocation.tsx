import React from 'react';
import Icon from '@/components/ui/AppIcon';

const OfficeLocation: React.FC = () => {
  const officeDetails = {
    name: 'Chhajed Food Products Pvt. Ltd.',
    address: 'Plot No. 45, Food Processing Zone, Chakan Industrial Area, Pune - 410501, Maharashtra, India',
    coordinates: { lat: 18.7606, lng: 73.8636 },
    hours: [
      { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 2:00 PM' },
      { day: 'Sunday', time: 'Closed' }
    ]
  };

  return (
    <section id="office-location" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Visit Our Headquarters
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience our state-of-the-art manufacturing facility and meet our team in person
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="bg-card border border-border rounded-lg p-6 md:p-8">
            <h3 className="font-headline text-2xl font-semibold text-foreground mb-6">
              Office Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="BuildingOfficeIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-cta font-semibold text-foreground mb-1">
                    Corporate Office
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {officeDetails.name}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="MapPinIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-cta font-semibold text-foreground mb-1">
                    Address
                  </h4>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {officeDetails.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="ClockIcon" size={24} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-cta font-semibold text-foreground mb-2">
                    Office Hours
                  </h4>
                  <div className="space-y-1">
                    {officeDetails.hours.map((schedule, index) => (
                      <div key={index} className="flex justify-between font-body text-sm">
                        <span className="text-muted-foreground">{schedule.day}:</span>
                        <span className="text-foreground font-medium ml-4">{schedule.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="font-body text-sm text-muted-foreground mb-4">
                  <strong className="text-foreground">Note:</strong> Factory visits require prior appointment. Please contact us at least 48 hours in advance to schedule your visit.
                </p>
                <a
                  href={`https://www.google.com/maps?q=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-6 py-2.5 font-cta font-semibold text-primary-foreground bg-primary hover:bg-primary/90 rounded-md shadow-warm-sm transition-all duration-300"
                >
                  <Icon name="MapIcon" size={20} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg overflow-hidden h-[500px]">
            <iframe
              width="100%"
              height="100%"
              loading="lazy"
              title="Chhajed Food Products Office Location"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${officeDetails.coordinates.lat},${officeDetails.coordinates.lng}&z=14&output=embed`}
              className="border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;