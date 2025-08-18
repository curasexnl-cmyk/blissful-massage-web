import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-playfair font-semibold text-primary">
            Lay & Relax
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-foreground hover:text-primary transition-colors">
            Главная
          </a>
          <a href="#services" className="text-foreground hover:text-primary transition-colors">
            Услуги
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            О нас
          </a>
          <a href="#contact" className="text-foreground hover:text-primary transition-colors">
            Контакты
          </a>
        </nav>

        <Button variant="wellness" size="lg">
          Записаться
        </Button>
      </div>
    </header>
  );
};

export default Header;