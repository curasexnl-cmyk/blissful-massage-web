const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground section-padding">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-playfair font-semibold mb-4">
              Lay & Relax
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Ваше убежище для исцеления, расслабления и обновления. 
              Ощутите преобразующую силу терапевтического массажа.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Главная
              </a>
              <a href="#services" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Услуги
              </a>
              <a href="#about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                О нас
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                Контакты
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Связаться с нами</h4>
            <div className="space-y-2">
              <p className="text-primary-foreground/80">
                <span className="font-medium">Телефон:</span> (555) 123-4567
              </p>
              <p className="text-primary-foreground/80">
                <span className="font-medium">Email:</span> info@layandrelax.com
              </p>
              <p className="text-primary-foreground/80">
                <span className="font-medium">Адрес:</span> ул. Релакса, 123<br />
                Москва, Россия
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Lay & Relax. Все права защищены. | Политика конфиденциальности | Условия обслуживания
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;