import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  experience: string;
  quote: string;
  image: string;
  alt: string;
}

interface TeamSpotlightProps {
  className?: string;
}

const TeamSpotlight = ({ className = '' }: TeamSpotlightProps) => {
  const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Dr. Priya Sharma",
    role: "Head of Quality Assurance",
    department: "Quality Control",
    experience: "15+ years in food safety",
    quote: "Every batch that leaves our facility represents our commitment to excellence. Quality isn't just a department here—it's our culture.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13dfc050e-1763295834719.png",
    alt: "Professional Indian woman in white lab coat holding clipboard in modern food testing laboratory"
  },
  {
    id: 2,
    name: "Amit Patel",
    role: "Production Manager",
    department: "Manufacturing",
    experience: "12+ years in food production",
    quote: "We blend traditional recipes with modern technology. It's about preserving authenticity while ensuring consistency at scale.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_11ab9dbb5-1763300617059.png",
    alt: "Indian man in blue uniform and safety helmet standing in food manufacturing facility with production equipment"
  },
  {
    id: 3,
    name: "Sneha Desai",
    role: "R&D Lead",
    department: "Innovation",
    experience: "10+ years in food science",
    quote: "Innovation means respecting our culinary heritage while creating products that fit modern lifestyles. Every new product tells a story.",
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_13ac3b046-1763300274943.png",
    alt: "Young Indian woman in white lab coat examining food samples in research laboratory with scientific equipment"
  }];


  return (
    <section className={`py-20 bg-background ${className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/20 rounded-full mb-4">
            <p className="font-cta text-sm font-semibold text-primary">Meet Our Team</p>
          </div>
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-foreground mb-4">
            The People Behind Our Quality
          </h2>
          <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
            Our success is built on the expertise, dedication, and passion of our team members who bring excellence to every aspect of manufacturing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) =>
          <div key={member.id} className="bg-card rounded-2xl overflow-hidden shadow-warm-md hover:shadow-warm-lg transition-all duration-300">
              <div className="relative h-80 overflow-hidden">
                <AppImage
                src={member.image}
                alt={member.alt}
                className="w-full h-full object-cover" />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/90 to-transparent p-6">
                  <h3 className="font-headline text-2xl font-bold text-primary-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="font-cta text-sm text-primary-foreground/90">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <Icon name="BriefcaseIcon" size={18} className="text-primary" />
                    <span className="font-body text-sm text-muted-foreground">{member.department}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Icon name="ClockIcon" size={18} className="text-accent" />
                    <span className="font-body text-sm text-muted-foreground">{member.experience}</span>
                  </div>
                </div>
                
                <div className="relative">
                  <Icon name="ChatBubbleLeftIcon" size={24} className="text-primary/20 absolute -top-2 -left-2" />
                  <p className="font-body text-foreground/80 italic leading-relaxed pl-6">
                    "{member.quote}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-headline text-3xl font-bold text-foreground mb-4">
                Join Our Growing Team
              </h3>
              <p className="font-body text-lg text-foreground/80 mb-6 leading-relaxed">
                We're always looking for passionate individuals who share our commitment to quality and innovation. Be part of a team that's shaping the future of Indian snacking.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="font-body text-foreground">Competitive compensation packages</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="font-body text-foreground">Professional development opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="font-body text-foreground">Collaborative work environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircleIcon" size={20} className="text-success" />
                  <span className="font-body text-foreground">Industry-leading facilities</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-cta font-semibold rounded-lg shadow-warm-md transition-all duration-300">
                <Icon name="UserPlusIcon" size={20} />
                <span>View Open Positions</span>
              </button>
              <p className="font-body text-sm text-muted-foreground mt-4">
                Currently hiring for 8 positions across departments
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default TeamSpotlight;