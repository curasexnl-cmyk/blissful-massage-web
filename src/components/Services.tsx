import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    title: "Классический массаж",
    duration: "60-90 минут",
    description: "Традиционный расслабляющий массаж с использованием длинных, плавных движений для снятия напряжения и глубокой релаксации.",
    benefits: ["Снятие стресса", "Улучшение кровообращения", "Расслабление мышц"]
  },
  {
    title: "Расслабляющий массаж",
    duration: "60-75 минут", 
    description: "Мягкий терапевтический массаж, направленный на полное расслабление тела и разума.",
    benefits: ["Глубокое расслабление", "Улучшение сна", "Снятие усталости"]
  },
  {
    title: "Антицеллюлитный массаж",
    duration: "60-90 минут",
    description: "Специализированный массаж для улучшения состояния кожи и борьбы с целлюлитом.",
    benefits: ["Улучшение состояния кожи", "Повышение тонуса", "Коррекция фигуры"]
  },
  {
    title: "Спортивный массаж", 
    duration: "45-75 минут",
    description: "Интенсивный массаж для спортсменов и активных людей, направленный на восстановление после нагрузок.",
    benefits: ["Восстановление мышц", "Повышение выносливости", "Профилактика травм"]
  },
  {
    title: "Лимфодренажный массаж",
    duration: "60-90 минут",
    description: "Специальная техника массажа для активизации лимфотока и выведения токсинов из организма.",
    benefits: ["Детоксикация", "Уменьшение отечности", "Укрепление иммунитета"]
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-gradient-to-b from-background to-accent/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-foreground mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Каждая процедура тщательно разработана для восстановления баланса и оздоровления, 
            с использованием проверенных временем техник и премиальных натуральных продуктов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="wellness-card group cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-foreground group-hover:text-primary transition-colors mb-3">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-wellness-stone text-base">
                  {service.duration}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Преимущества:</h4>
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