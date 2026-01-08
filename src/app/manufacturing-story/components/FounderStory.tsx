import AppImage from '@/components/ui/AppImage';

interface FounderStoryProps {
  className?: string;
}

const FounderStory = ({ className = '' }: FounderStoryProps) => {
  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-2 bg-accent/20 rounded-full mb-6">
              <p className="font-cta text-sm font-semibold text-accent-foreground">Our Heritage</p>
            </div>
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-6">
              From Our Family Kitchen to Yours
            </h2>
            <div className="space-y-4 text-foreground/80 font-body text-lg leading-relaxed">
              <p>
                The Chhajed Foods story began in the heart of Pune, where generations of culinary expertise met a vision for accessible premium snacking. What started as a family passion for authentic Indian flavors has evolved into a state-of-the-art manufacturing facility that serves thousands of families across the nation.
              </p>
              <p>
                Our founder, Mr. Rajesh Chhajed, grew up watching his mother craft traditional snacks with meticulous care. He understood that the secret to great food wasn't just in the recipe—it was in the quality of ingredients, the precision of preparation, and the love poured into every batch.
              </p>
              <p>
                Today, that same philosophy drives our manufacturing excellence. We've scaled our operations without compromising the artisanal quality that defined our beginnings. Every product that leaves our facility carries forward the legacy of trust, taste, and tradition.
              </p>
            </div>
            <div className="mt-8 p-6 bg-card rounded-lg border-l-4 border-primary">
              <p className="font-headline text-xl font-semibold text-foreground mb-2">
                "Quality you can taste, trust you can feel"
              </p>
              <p className="font-body text-muted-foreground">
                — Rajesh Chhajed, Founder & Managing Director
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
                <AppImage
                  src="https://images.unsplash.com/photo-1733119527135-5b6844650002"
                  alt="Founder Rajesh Chhajed in traditional Indian attire standing in modern manufacturing facility with quality control equipment"
                  className="w-full h-[600px] object-cover" />

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default FounderStory;