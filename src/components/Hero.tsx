import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-massage.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Serene massage therapy room with calming atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6 leading-tight">
          Restore Your
          <span className="block text-wellness-sage-light">Inner Peace</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto leading-relaxed">
          Experience the ultimate relaxation with our therapeutic massage treatments 
          designed to rejuvenate your body and mind.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="wellness" size="lg" className="text-lg px-10 py-4">
            Book Your Session
          </Button>
          <Button variant="wellness-secondary" size="lg" className="text-lg px-10 py-4 bg-white/10 border-white/30 text-white hover:bg-white/20">
            View Services
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;