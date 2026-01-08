'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  rating: number;
  testimonial: string;
  type: 'b2b' | 'consumer';
}

const mockTestimonials: Testimonial[] = [
{
  id: 1,
  name: 'Rajesh Kumar',
  role: 'Procurement Manager',
  company: 'Metro Supermarket Chain',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_105b96742-1763300606680.png",
  alt: 'Professional Indian man in blue business suit smiling at camera in modern office',
  rating: 5,
  testimonial: 'Chhajed Foods has been our trusted partner for over 5 years. Their consistent quality, timely deliveries, and competitive pricing make them our preferred supplier for premium snacks.',
  type: 'b2b'
},
{
  id: 2,
  name: 'Priya Sharma',
  role: 'Home Chef & Food Blogger',
  company: 'Cooking with Priya',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_178bba9c8-1763299141008.png",
  alt: 'Young Indian woman with long black hair in casual attire smiling in modern kitchen',
  rating: 5,
  testimonial: 'The Divya Kamal range has transformed my cooking! The garlic mayo is a staple in my kitchen, and my family loves the authentic taste. Quality you can trust for everyday meals.',
  type: 'consumer'
},
{
  id: 3,
  name: 'Amit Patel',
  role: 'Distribution Partner',
  company: 'Gujarat Food Distributors',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_13678b705-1763296904811.png",
  alt: 'Middle-aged Indian businessman in white shirt smiling confidently in warehouse setting',
  rating: 5,
  testimonial: 'Excellent partnership experience! Their support team is responsive, product margins are healthy, and customer demand is consistently high. Proud to represent Chhajed Foods.',
  type: 'b2b'
},
{
  id: 4,
  name: 'Sneha Desai',
  role: 'Working Professional',
  company: 'Tech Solutions Pvt Ltd',
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_11672db96-1763301706352.png",
  alt: 'Young professional Indian woman in business casual attire smiling in corporate office',
  rating: 4,
  testimonial: 'Nut Gold cashews are my go-to healthy snack at work. Perfect quality, great taste, and the packaging keeps them fresh. Worth every rupee!',
  type: 'consumer'
}];


export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % mockTestimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const handleDotClick = (index: number) => {
    setActiveTestimonial(index);
  };

  if (!isHydrated) {
    return (
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
              What Our Partners Say
            </h2>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-foreground mb-4">
            What Our Partners Say
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Trusted by businesses and loved by consumers across India
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card rounded-lg p-8 md:p-12 shadow-warm">
            {mockTestimonials.map((testimonial, index) =>
            <div
              key={testimonial.id}
              className={`transition-opacity duration-500 ${
              index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0 p-8 md:p-12'}`
              }>

                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                      <AppImage
                      src={testimonial.image}
                      alt={testimonial.alt}
                      className="w-full h-full object-cover" />

                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <div className="flex justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) =>
                    <Icon
                      key={i}
                      name="StarIcon"
                      size={20}
                      variant={i < testimonial.rating ? 'solid' : 'outline'}
                      className={i < testimonial.rating ? 'text-accent' : 'text-muted'} />

                    )}
                    </div>

                    <p className="font-body text-lg text-foreground mb-6 italic">
                      &quot;{testimonial.testimonial}&quot;
                    </p>

                    <div>
                      <h4 className="font-headline text-xl font-semibold text-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="font-body text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="font-body text-sm text-primary">
                        {testimonial.company}
                      </p>
                    </div>

                    <div className="mt-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-cta font-semibold ${
                    testimonial.type === 'b2b' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'}`
                    }>
                        {testimonial.type === 'b2b' ? 'B2B Partner' : 'Consumer'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {mockTestimonials.map((_, index) =>
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeTestimonial ?
              'bg-primary w-8' : 'bg-muted hover:bg-muted-foreground'}`
              }
              aria-label={`Go to testimonial ${index + 1}`} />

            )}
          </div>
        </div>
      </div>
    </section>);

}