import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  className?: string;
}

const HeroSection = ({ className = '' }: HeroSectionProps) => {
  return (
    <section className={`relative h-[70vh] min-h-[500px] overflow-hidden ${className}`}>
      <div className="absolute inset-0">
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_141091b8d-1764678909515.png"
          alt="Modern food manufacturing facility with stainless steel equipment and quality control stations"
          className="w-full h-full object-cover"
          priority />

        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-transparent"></div>
      </div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Crafting Excellence Since Day One
          </h1>
          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Where traditional Indian culinary heritage meets cutting-edge food manufacturing technology. Our story is one of passion, precision, and unwavering commitment to quality.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary-foreground/30">
              <p className="font-cta text-sm text-primary-foreground/80 mb-1">Established</p>
              <p className="font-headline text-2xl font-bold text-primary-foreground">2010</p>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary-foreground/30">
              <p className="font-cta text-sm text-primary-foreground/80 mb-1">Production Capacity</p>
              <p className="font-headline text-2xl font-bold text-primary-foreground">500+ Tons/Month</p>
            </div>
            <div className="bg-primary/20 backdrop-blur-sm px-6 py-3 rounded-lg border border-primary-foreground/30">
              <p className="font-cta text-sm text-primary-foreground/80 mb-1">Quality Certifications</p>
              <p className="font-headline text-2xl font-bold text-primary-foreground">ISO + FSSAI</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;