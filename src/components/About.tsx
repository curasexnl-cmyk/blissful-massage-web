import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-r from-wellness-sage-light/20 to-wellness-earth-light/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Your Journey to 
              <span className="text-primary block">Wellness Begins Here</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Serenity Spa, we believe that true wellness comes from the harmony of 
                body, mind, and spirit. Our team of licensed massage therapists brings 
                over 15 years of combined experience in therapeutic healing.
              </p>
              
              <p>
                Each treatment is personalized to your unique needs, whether you're seeking 
                relief from chronic pain, stress reduction, or simply a moment of tranquil 
                escape from daily life.
              </p>
              
              <p>
                We use only the finest organic oils and products, combined with techniques 
                rooted in ancient healing traditions and modern therapeutic science.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="wellness" size="lg">
                Meet Our Team
              </Button>
              <Button variant="wellness-secondary" size="lg">
                Read Our Story
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="wellness-card">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                Why Choose Serenity Spa?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Licensed Professionals</h4>
                    <p className="text-muted-foreground">Certified massage therapists with extensive training</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Personalized Care</h4>
                    <p className="text-muted-foreground">Every session tailored to your specific needs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Serene Environment</h4>
                    <p className="text-muted-foreground">Tranquil space designed for deep relaxation</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Products</h4>
                    <p className="text-muted-foreground">Organic oils and therapeutic-grade materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;