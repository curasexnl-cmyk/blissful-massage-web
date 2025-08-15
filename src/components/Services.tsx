import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Swedish Massage",
    duration: "60-90 minutes",
    price: "From $120",
    description: "Classic relaxation massage using long, flowing strokes to ease tension and promote deep relaxation.",
    benefits: ["Stress relief", "Improved circulation", "Muscle relaxation"]
  },
  {
    title: "Deep Tissue Massage",
    duration: "60-90 minutes", 
    price: "From $140",
    description: "Intensive therapy targeting deeper muscle layers to release chronic tension and knots.",
    benefits: ["Pain relief", "Increased mobility", "Injury recovery"]
  },
  {
    title: "Hot Stone Therapy",
    duration: "75-90 minutes",
    price: "From $160",
    description: "Heated volcanic stones placed on key points to melt away stress and restore energy flow.",
    benefits: ["Deep relaxation", "Energy balance", "Improved sleep"]
  },
  {
    title: "Aromatherapy Massage", 
    duration: "60-75 minutes",
    price: "From $135",
    description: "Therapeutic massage enhanced with essential oils to harmonize body, mind, and spirit.",
    benefits: ["Emotional balance", "Enhanced mood", "Holistic healing"]
  },
  {
    title: "Prenatal Massage",
    duration: "60 minutes",
    price: "From $130",
    description: "Gentle, specialized massage designed for expectant mothers to ease pregnancy discomfort.",
    benefits: ["Reduced swelling", "Better sleep", "Stress relief"]
  },
  {
    title: "Couples Massage",
    duration: "60-90 minutes",
    price: "From $240",
    description: "Share a relaxing experience in our couples suite with side-by-side massage tables.",
    benefits: ["Shared relaxation", "Quality time", "Stress relief"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Signature Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Each treatment is thoughtfully designed to restore balance and promote healing, 
            using time-honored techniques and premium natural products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="wellness-card group cursor-pointer">
              <CardHeader>
                <div className="flex justify-between items-start mb-3">
                  <CardTitle className="text-2xl font-playfair text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <span className="text-primary font-semibold text-lg">
                    {service.price}
                  </span>
                </div>
                <CardDescription className="text-wellness-stone text-base">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;