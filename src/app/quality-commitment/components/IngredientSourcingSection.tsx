import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Supplier {
  id: number;
  name: string;
  location: string;
  specialty: string;
  partnership: string;
  image: string;
  alt: string;
  certifications: string[];
}

export default function IngredientSourcingSection() {
  const suppliers: Supplier[] = [
  {
    id: 1,
    name: "Maharashtra Organic Farms",
    location: "Pune, Maharashtra",
    specialty: "Organic Spices & Herbs",
    partnership: "Since 2018",
    image: "https://images.unsplash.com/photo-1660071170343-fc569b264eca",
    alt: "Aerial view of green organic farm fields with rows of crops in Maharashtra countryside",
    certifications: ["Organic Certified", "Fair Trade", "ISO 22000"]
  },
  {
    id: 2,
    name: "Gujarat Premium Nuts",
    location: "Ahmedabad, Gujarat",
    specialty: "Cashews & Almonds",
    partnership: "Since 2016",
    image: "https://images.unsplash.com/photo-1502596630940-851f9f28f1e6",
    alt: "Close-up of premium cashew nuts and almonds in wooden bowls on rustic table",
    certifications: ["FSSAI Approved", "Export Quality", "GMP Certified"]
  },
  {
    id: 3,
    name: "Karnataka Pulse Traders",
    location: "Bangalore, Karnataka",
    specialty: "Lentils & Pulses",
    partnership: "Since 2019",
    image: "https://images.unsplash.com/photo-1697715095046-4f24fd70b3bc",
    alt: "Colorful display of various lentils and pulses in market baskets showing quality grains",
    certifications: ["Quality Assured", "Pesticide Free", "BIS Certified"]
  },
  {
    id: 4,
    name: "Rajasthan Wheat Mills",
    location: "Jaipur, Rajasthan",
    specialty: "Premium Wheat & Flour",
    partnership: "Since 2017",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11b52f75a-1765241127927.png",
    alt: "Golden wheat grains in burlap sacks at traditional mill with stone grinding wheels",
    certifications: ["HACCP Certified", "ISO 9001", "Food Safe"]
  }];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-headline text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Trusted Ingredient Sourcing Partners
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            We collaborate with certified suppliers who share our commitment to quality, sustainability, and ethical practices
          </p>
        </div>

        <div className="mb-16">
          <div className="bg-card rounded-2xl shadow-warm-lg p-8 lg:p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                    className="w-full h-[500px] object-cover" />

                </div>
                <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground px-8 py-6 rounded-xl shadow-warm-lg">
                  <p className="font-headline text-4xl font-bold">50+</p>
                  <p className="font-body text-sm">Trusted Partners</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {suppliers.map((supplier) =>
          <div
            key={supplier.id}
            className="bg-card rounded-xl shadow-warm-md hover:shadow-warm-lg transition-all duration-300 overflow-hidden">

              <div className="relative overflow-hidden h-56">
                <AppImage
                src={supplier.image}
                alt={supplier.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />

                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full">
                  <span className="font-cta text-xs font-semibold">{supplier.partnership}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="font-headline text-xl font-bold text-foreground mb-2">
                    {supplier.name}
                  </h3>
                  <div className="flex items-center space-x-2 text-muted-foreground mb-3">
                    <Icon name="MapPinIcon" size={16} variant="outline" />
                    <span className="font-body text-sm">{supplier.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Icon name="SparklesIcon" size={16} variant="solid" className="text-accent" />
                    <span className="font-cta text-sm font-semibold text-foreground">{supplier.specialty}</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground mb-2">Certifications</p>
                  <div className="flex flex-wrap gap-2">
                    {supplier.certifications.map((cert, index) =>
                  <span
                    key={index}
                    className="inline-flex items-center space-x-1 px-3 py-1 bg-success/10 text-success rounded-full">

                        <Icon name="CheckBadgeIcon" size={14} variant="solid" />
                        <span className="font-body text-xs font-medium">{cert}</span>
                      </span>
                  )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-2xl p-8 lg:p-12">
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
                title="Chhajed Foods Supplier Network Map"
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