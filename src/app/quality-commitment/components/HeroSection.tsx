import AppImage from '@/components/ui/AppImage';

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-accent/5 to-background py-12 md:py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 rounded-full">
              <span className="font-cta text-xs sm:text-sm font-semibold text-primary">
                Quality You Can Trust
              </span>
            </div>
            <h1 className="font-headline text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
              Our Commitment to Excellence
            </h1>
            <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
              At Chhajed Food Products, quality isn't just a promise—it's our foundation. From ingredient sourcing to final packaging, every step is meticulously monitored to ensure you receive products that meet the highest standards of safety, nutrition, and taste.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg shadow-warm-sm">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="font-headline text-2xl font-bold text-success">✓</span>
                </div>
                <div>
                  <p className="font-cta text-sm font-semibold text-foreground">ISO Certified</p>
                  <p className="font-body text-xs text-muted-foreground">International Standards</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-card px-6 py-3 rounded-lg shadow-warm-sm">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <span className="font-headline text-2xl font-bold text-success">✓</span>
                </div>
                <div>
                  <p className="font-cta text-sm font-semibold text-foreground">FSSAI Approved</p>
                  <p className="font-body text-xs text-muted-foreground">Food Safety Authority</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-warm-lg">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_19e1c1eeb-1766491952532.png"
                alt="Quality control specialist in white lab coat examining food samples with microscope in modern laboratory"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />

            </div>
            <div className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 bg-primary text-primary-foreground px-4 py-3 sm:px-8 sm:py-6 rounded-xl shadow-warm-lg">
              <p className="font-headline text-2xl sm:text-4xl font-bold">100%</p>
              <p className="font-body text-xs sm:text-sm">Quality Assured</p>
            </div>
          </div>
        </div>
      </div>
    </section>);

}