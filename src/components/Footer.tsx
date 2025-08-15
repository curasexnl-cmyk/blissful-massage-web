const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Serenity Spa
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Your sanctuary for healing, relaxation, and renewal. 
              Experience the transformative power of therapeutic massage.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Home
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Services
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                About Us
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">
                <span className="font-medium">Phone:</span> (555) 123-4567
              </p>
              <p className="text-primary-foreground/80">
                <span className="font-medium">Email:</span> info@serenityspa.com
              </p>
              <p className="text-primary-foreground/80">
                <span className="font-medium">Address:</span> 123 Wellness Avenue<br />
                Tranquil Valley, CA 90210
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Serenity Spa. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;