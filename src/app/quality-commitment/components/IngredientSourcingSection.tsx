import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

export default function IngredientSourcingSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Trusted Ingredient Sourcing Partners
          </h2>
          <p className="font-body text-sm sm:text-base md:text-lg text-muted-foreground">
            We collaborate with certified suppliers who share our commitment to quality, sustainability, and ethical practices
          </p>
        </div>

        <div className="mb-8 md:mb-16">
          <div className="bg-card rounded-2xl shadow-warm-lg p-4 sm:p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h3 className="font-headline text-2xl font-bold text-foreground mb-6">
                  Our Sourcing Philosophy
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPinIcon" size={20} variant="solid" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                        Local First Approach
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        We prioritize partnerships with local farmers and suppliers to support regional economies and ensure ingredient freshness
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                        Rigorous Vetting Process
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        Every supplier undergoes comprehensive audits including facility inspections, certification verification, and quality testing
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="ArrowPathIcon" size={20} variant="solid" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                        Continuous Monitoring
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        Regular quality audits and performance reviews ensure our partners maintain the highest standards consistently
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon name="HeartIcon" size={20} variant="solid" className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-cta text-base font-semibold text-foreground mb-1">
                        Ethical Practices
                      </h4>
                      <p className="font-body text-sm text-muted-foreground">
                        We ensure fair trade practices, sustainable farming methods, and ethical treatment of workers throughout our supply chain
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl shadow-warm-lg">
                  <AppImage
                    src="https://img.rocket.new/generatedImages/rocket_gen_img_10d6cf5d6-1765079593854.png"
                    alt="Farmer in straw hat inspecting organic vegetable crops in sunlit field with quality produce"
                    className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover" />

                </div>
                <div className="absolute -bottom-4 left-2 sm:-bottom-6 sm:-left-6 bg-primary text-primary-foreground px-4 py-3 sm:px-8 sm:py-6 rounded-xl shadow-warm-lg">
                  <p className="font-headline text-2xl sm:text-4xl font-bold">50+</p>
                  <p className="font-body text-xs sm:text-sm">Trusted Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <Icon name="GlobeAltIcon" size={48} variant="outline" className="text-primary mx-auto mb-6" />
            <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
              Interactive Sourcing Map
            </h3>
            <p className="font-body text-base text-muted-foreground mb-8">
              Explore our nationwide network of quality ingredient suppliers and their locations
            </p>
            <div className="w-full h-[400px] bg-card rounded-xl shadow-warm-md overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Chhajed Food Products Supplier Network Map"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=18.5204,73.8567&z=6&output=embed"
                className="border-0">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>);

}