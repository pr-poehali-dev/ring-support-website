
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const ProductCard = ({ 
  title, 
  description, 
  image, 
  specs 
}: { 
  title: string; 
  description: string; 
  image: string; 
  specs: string[] 
}) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="aspect-video relative overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-bold">{title}</h3>
        <p className="mb-4 text-muted-foreground">{description}</p>
        <div className="space-y-1">
          {specs.map((spec, index) => (
            <div key={index} className="flex items-center gap-2">
              <Icon name="Check" className="h-4 w-4 text-primary" />
              <span className="text-sm">{spec}</span>
            </div>
          ))}
        </div>
        <Button className="mt-4 w-full">Подробнее</Button>
      </CardContent>
    </Card>
  );
};

const FeatureItem = ({ 
  icon, 
  title, 
  description 
}: { 
  icon: string; 
  title: string; 
  description: string 
}) => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <div className="mb-4 rounded-full bg-primary/10 p-3">
        <Icon name={icon} className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-bold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen font-sans">
      {/* Навигация */}
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center">
            <span className="text-xl font-bold">
              РингТех<span className="text-primary">Пром</span>
            </span>
          </div>
          <div className="hidden items-center gap-6 md:flex">
            <a href="#features" className="text-sm font-medium">
              Преимущества
            </a>
            <a href="#products" className="text-sm font-medium">
              Продукция
            </a>
            <a href="#contact" className="text-sm font-medium">
              Контакты
            </a>
            <Button variant="outline" size="sm">
              <Icon name="Phone" className="mr-2 h-4 w-4" /> +7 (800) 123-45-67
            </Button>
          </div>
          <Button size="icon" variant="ghost" className="md:hidden">
            <Icon name="Menu" />
          </Button>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="bg-gradient-to-b from-muted/50 to-background py-20">
        <div className="container flex flex-col items-center gap-8 text-center md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
              Опорно-направляющие кольца высокого качества
            </h1>
            <p className="mb-6 text-lg text-muted-foreground">
              Надежные компоненты для промышленного оборудования с доставкой по всей России.
              Собственное производство, гарантия качества.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg">
                Получить консультацию
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="FileText" className="mr-2 h-4 w-4" />
                Скачать каталог
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop&q=80"
              alt="Опорно-направляющие кольца"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Секция с преимуществами */}
      <section id="features" className="py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Почему выбирают наши опорно-направляющие кольца
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureItem
              icon="Shield"
              title="Высокая надежность"
              description="Изготовлены из прочных материалов с учетом всех требований к эксплуатации в агрессивных средах."
            />
            <FeatureItem
              icon="Clock"
              title="Длительный срок службы"
              description="Устойчивость к истиранию и деформации. Срок службы от 5 лет при соблюдении условий эксплуатации."
            />
            <FeatureItem
              icon="Settings"
              title="Точная посадка"
              description="Высокая точность изготовления обеспечивает идеальную посадку и работу без люфтов."
            />
            <FeatureItem
              icon="Factory"
              title="Собственное производство"
              description="Контроль качества на всех этапах производства. Возможность изготовления по индивидуальным чертежам."
            />
            <FeatureItem
              icon="Truck"
              title="Быстрая доставка"
              description="Доставка по всей России и СНГ. Отгрузка со склада в течение 1-2 рабочих дней."
            />
            <FeatureItem
              icon="FileCheck"
              title="Сертификация"
              description="Вся продукция соответствует требованиям ГОСТ и имеет необходимые сертификаты качества."
            />
          </div>
        </div>
      </section>

      {/* Каталог продукции */}
      <section id="products" className="bg-muted/30 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Каталог опорно-направляющих колец
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProductCard
              title="Кольца серии ОНК-1"
              description="Стандартные кольца для гидравлических цилиндров"
              image="https://images.unsplash.com/photo-1516937941344-00b4e0337589?w=800&auto=format&fit=crop&q=80"
              specs={[
                "Диаметр: 50-200 мм",
                "Материал: полиамид PA6",
                "Рабочая температура: -40°C до +100°C"
              ]}
            />
            <ProductCard
              title="Кольца серии ОНК-2"
              description="Усиленные кольца для тяжелых условий эксплуатации"
              image="https://images.unsplash.com/photo-1533577116850-9cc66cad8a9b?w=800&auto=format&fit=crop&q=80"
              specs={[
                "Диаметр: 80-300 мм",
                "Материал: полиамид с стекловолокном",
                "Рабочая температура: -50°C до +120°C"
              ]}
            />
            <ProductCard
              title="Кольца серии ОНК-3"
              description="Кольца для особо агрессивных сред"
              image="https://images.unsplash.com/photo-1628344653888-8522e8df4df5?w=800&auto=format&fit=crop&q=80"
              specs={[
                "Диаметр: 100-350 мм",
                "Материал: фторопласт",
                "Рабочая температура: -60°C до +200°C"
              ]}
            />
          </div>
          <div className="mt-10 text-center">
            <Button variant="outline" size="lg">
              <Icon name="Plus" className="mr-2 h-4 w-4" />
              Смотреть все продукты
            </Button>
          </div>
        </div>
      </section>

      {/* Секция с информацией о компании */}
      <section className="py-20">
        <div className="container flex flex-col gap-8 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight md:text-4xl">
              О компании РингТехПром
            </h2>
            <p className="mb-4 text-lg text-muted-foreground">
              Наша компания специализируется на производстве и поставке опорно-направляющих колец для 
              промышленного оборудования с 2010 года. За это время мы стали надежным партнером для 
              сотен предприятий по всей России.
            </p>
            <p className="mb-6 text-lg text-muted-foreground">
              Производство оснащено современным оборудованием, что позволяет изготавливать 
              продукцию с высокой точностью и в соответствии со всеми техническими требованиями.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-primary/10 p-2">
                  <Icon name="Users" className="h-5 w-5 text-primary" />
                </div>
                <span className="font-bold">500+ клиентов</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-primary/10 p-2">
                  <Icon name="CheckCircle" className="h-5 w-5 text-primary" />
                </div>
                <span className="font-bold">10+ лет опыта</span>
              </div>
              <div className="flex items-center">
                <div className="mr-2 rounded-full bg-primary/10 p-2">
                  <Icon name="Package" className="h-5 w-5 text-primary" />
                </div>
                <span className="font-bold">1000+ наименований</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1563694983011-6f4d90358083?w=800&auto=format&fit=crop&q=80"
              alt="Производство"
              className="h-full rounded-lg object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Форма обратной связи */}
      <section id="contact" className="bg-primary/5 py-20">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            Получите консультацию специалиста
          </h2>
          <div className="mx-auto max-w-3xl rounded-xl bg-background p-6 shadow-lg md:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Электронная почта
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="example@company.ru"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Сообщение
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Опишите ваш запрос, интересующие размеры и количество"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <Button type="submit" size="lg" className="w-full">
                Отправить заявку
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку "Отправить заявку", вы соглашаетесь с нашей{" "}
                <a href="#" className="underline">
                  политикой конфиденциальности
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-muted-foreground/5 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <span className="mb-4 block text-xl font-bold">
                РингТех<span className="text-primary">Пром</span>
              </span>
              <p className="text-muted-foreground">
                Надежные компоненты для промышленного оборудования. Опорно-направляющие кольца, 
                уплотнения, подшипники скольжения.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" className="h-4 w-4 text-primary" />
                  <span>г. Москва, ул. Промышленная, 123</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" className="h-4 w-4 text-primary" />
                  <span>+7 (800) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" className="h-4 w-4 text-primary" />
                  <span>info@ringtechprom.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Следите за нами</h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Facebook" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Instagram" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Youtube" className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="rounded-full bg-muted p-2 transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon name="Telegram" className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} РингТехПром. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
