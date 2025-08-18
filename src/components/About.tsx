import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-r from-wellness-sage-light/20 to-wellness-earth-light/20">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground">
              Ваше путешествие к 
              <span className="text-primary block">здоровью начинается здесь</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                В Lay & Relax мы верим, что истинное здоровье приходит от гармонии 
                тела, разума и духа. Наша команда лицензированных массажистов обладает 
                более чем 15-летним опытом в терапевтическом лечении.
              </p>
              
              <p>
                Каждая процедура подбирается индивидуально под ваши потребности, будь то 
                облегчение хронической боли, снятие стресса или просто момент спокойного 
                отдыха от повседневной жизни.
              </p>
              
              <p>
                Мы работаем <strong>круглосуточно</strong> и предлагаем <strong>выездные услуги</strong> - 
                наши мастера приедут к вам домой или в офис с профессиональным оборудованием. 
                Эта услуга особенно популярна среди наших клиентов.
              </p>
              
              <p>
                Мы используем только лучшие органические масла и продукты, сочетая техники, 
                основанные на древних традициях исцеления и современной терапевтической науке.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="wellness" size="lg">
                Познакомиться с командой
              </Button>
              <Button variant="wellness-secondary" size="lg">
                Наша история
              </Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="wellness-card">
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
                Почему выбирают Lay & Relax?
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Лицензированные специалисты</h4>
                    <p className="text-muted-foreground">Сертифицированные массажисты с обширной подготовкой</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Персональный подход</h4>
                    <p className="text-muted-foreground">Каждый сеанс адаптирован под ваши потребности</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Спокойная атмосфера</h4>
                    <p className="text-muted-foreground">Умиротворяющее пространство для глубокого расслабления</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <h4 className="font-semibold text-foreground">Премиум продукты</h4>
                    <p className="text-muted-foreground">Органические масла и материалы терапевтического класса</p>
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