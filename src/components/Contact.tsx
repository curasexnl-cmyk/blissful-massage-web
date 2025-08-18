import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-background to-wellness-sage/5">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Начните ваше путешествие к здоровью
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Готовы ощутить преобразующую силу терапевтического массажа? 
            Мы поможем вам найти путь к расслаблению и исцелению.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">
                  Контактная информация
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Телефон</h3>
                    <p className="text-muted-foreground">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <p className="text-muted-foreground">info@layandrelax.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-primary-foreground" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Адрес</h3>
                    <p className="text-muted-foreground">ул. Релакса, 123<br />Москва, Россия</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">
                  Режим работы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center">
                  <span className="text-2xl font-semibold text-primary">24/7</span>
                  <p className="text-muted-foreground mt-2">Мы работаем круглосуточно для вашего удобства</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Выездные массажисты</h4>
                  <p className="text-muted-foreground text-sm">
                    Популярная услуга! Наши специалисты приедут к вам домой или в офис. 
                    Профессиональное оборудование и все необходимое мы привозим с собой.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Section */}
          <div className="space-y-8">
            <Card className="wellness-card">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground">
                  Записаться на прием
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  Готовы ощутить целительное прикосновение наших опытных терапевтов? 
                  Запишитесь сегодня и сделайте первый шаг к обновленной 
                  жизненной силе и внутреннему покою.
                </p>

                <div className="space-y-4">
                  <Button variant="wellness" size="lg" className="w-full">
                    Записаться онлайн
                  </Button>
                  <Button variant="wellness-secondary" size="lg" className="w-full">
                    Позвонить для записи
                  </Button>
                </div>

                <div className="pt-4 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Что вас ждет:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Консультация для обсуждения ваших потребностей
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Персональный план лечения
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Расслабляющий, приватный кабинет
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      Рекомендации по здоровью после процедуры
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;