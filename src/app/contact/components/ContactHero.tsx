import React from 'react';

interface ContactHeroProps {
  className?: string;
}

const ContactHero: React.FC<ContactHeroProps> = ({ className = '' }) => {
  return (
    <section className={`relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Get in Touch with Chhajed Food Products
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Whether you're a distributor, retailer, or food enthusiast, we're here to serve you with quality products and exceptional service. Connect with us through your preferred channel.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;