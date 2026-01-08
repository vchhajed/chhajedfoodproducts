'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface RegionalContact {
  id: string;
  region: string;
  name: string;
  designation: string;
  phone: string;
  email: string;
  territories: string[];
}

const RegionalContacts: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const regionalContacts: RegionalContact[] = [
    {
      id: 'west',
      region: 'Western Region',
      name: 'Rajesh Sharma',
      designation: 'Regional Sales Manager',
      phone: '+91 98765 43210',
      email: 'rajesh.sharma@chhajedfoods.com',
      territories: ['Maharashtra', 'Gujarat', 'Goa', 'Madhya Pradesh']
    },
    {
      id: 'north',
      region: 'Northern Region',
      name: 'Priya Gupta',
      designation: 'Regional Sales Manager',
      phone: '+91 98765 43211',
      email: 'priya.gupta@chhajedfoods.com',
      territories: ['Delhi NCR', 'Punjab', 'Haryana', 'Rajasthan', 'Uttar Pradesh']
    },
    {
      id: 'south',
      region: 'Southern Region',
      name: 'Karthik Reddy',
      designation: 'Regional Sales Manager',
      phone: '+91 98765 43212',
      email: 'karthik.reddy@chhajedfoods.com',
      territories: ['Karnataka', 'Tamil Nadu', 'Andhra Pradesh', 'Telangana', 'Kerala']
    },
    {
      id: 'east',
      region: 'Eastern Region',
      name: 'Ananya Das',
      designation: 'Regional Sales Manager',
      phone: '+91 98765 43213',
      email: 'ananya.das@chhajedfoods.com',
      territories: ['West Bengal', 'Odisha', 'Bihar', 'Jharkhand', 'Assam']
    }
  ];

  const filteredContacts = selectedRegion === 'all' 
    ? regionalContacts 
    : regionalContacts.filter(contact => contact.id === selectedRegion);

  const handleCallClick = (phone: string) => {
    if (!isHydrated) return;
    window.location.href = `tel:${phone.replace(/\s/g, '')}`;
  };

  const handleEmailClick = (email: string) => {
    if (!isHydrated) return;
    window.location.href = `mailto:${email}`;
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4">
            Regional Sales Representatives
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our regional experts for personalized assistance and local support
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => isHydrated && setSelectedRegion('all')}
            disabled={!isHydrated}
            className={`px-6 py-2.5 font-cta font-semibold rounded-md transition-all duration-300 disabled:opacity-50 ${
              selectedRegion === 'all' ?'bg-primary text-primary-foreground shadow-warm-sm' :'bg-card text-foreground border border-border hover:bg-muted'
            }`}
          >
            All Regions
          </button>
          {regionalContacts.map(contact => (
            <button
              key={contact.id}
              onClick={() => isHydrated && setSelectedRegion(contact.id)}
              disabled={!isHydrated}
              className={`px-6 py-2.5 font-cta font-semibold rounded-md transition-all duration-300 disabled:opacity-50 ${
                selectedRegion === contact.id
                  ? 'bg-primary text-primary-foreground shadow-warm-sm'
                  : 'bg-card text-foreground border border-border hover:bg-muted'
              }`}
            >
              {contact.region.replace(' Region', '')}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {filteredContacts.map(contact => (
            <div
              key={contact.id}
              className="bg-card border border-border rounded-lg p-6 hover:shadow-warm transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-headline text-xl font-semibold text-foreground mb-1">
                    {contact.region}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    {contact.territories.join(', ')}
                  </p>
                </div>
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg flex-shrink-0">
                  <Icon name="UserIcon" size={24} className="text-primary" />
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <p className="font-cta font-semibold text-foreground text-lg">
                    {contact.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {contact.designation}
                  </p>
                </div>

                <div className="flex items-center space-x-2 text-foreground">
                  <Icon name="PhoneIcon" size={18} className="text-primary" />
                  <button
                    onClick={() => handleCallClick(contact.phone)}
                    disabled={!isHydrated}
                    className="font-body text-sm hover:text-primary transition-colors disabled:opacity-50"
                  >
                    {contact.phone}
                  </button>
                </div>

                <div className="flex items-center space-x-2 text-foreground">
                  <Icon name="EnvelopeIcon" size={18} className="text-primary" />
                  <button
                    onClick={() => handleEmailClick(contact.email)}
                    disabled={!isHydrated}
                    className="font-body text-sm hover:text-primary transition-colors break-all disabled:opacity-50"
                  >
                    {contact.email}
                  </button>
                </div>
              </div>

              <div className="flex space-x-3">
                <button
                  onClick={() => handleCallClick(contact.phone)}
                  disabled={!isHydrated}
                  className="flex-1 px-4 py-2 font-cta font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Icon name="PhoneIcon" size={18} />
                  <span>Call</span>
                </button>
                <button
                  onClick={() => handleEmailClick(contact.email)}
                  disabled={!isHydrated}
                  className="flex-1 px-4 py-2 font-cta font-semibold text-primary bg-primary/10 hover:bg-primary hover:text-primary-foreground rounded-md transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50"
                >
                  <Icon name="EnvelopeIcon" size={18} />
                  <span>Email</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegionalContacts;