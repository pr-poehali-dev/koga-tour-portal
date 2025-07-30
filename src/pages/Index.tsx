import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import InteractiveMap from "@/components/InteractiveMap";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-montserrat font-bold text-2xl text-kogalym-blue">
            Когалым - прикипаешь сердцем!
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="font-open-sans text-gray-700 hover:text-kogalym-blue transition-colors">О городе</a>
            <a href="#" className="font-open-sans text-gray-700 hover:text-kogalym-blue transition-colors">Туры</a>
            <a href="#" className="font-open-sans text-gray-700 hover:text-kogalym-blue transition-colors">Достопримечательности</a>
            <a href="#" className="font-open-sans text-gray-700 hover:text-kogalym-blue transition-colors">Контакты</a>
          </nav>
          <Button className="bg-kogalym-blue hover:bg-blue-700 text-white">
            Забронировать тур
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-kogalym-blue to-kogalym-green text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-montserrat text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Добро пожаловать в Когалым
          </h1>
          <p className="font-open-sans text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
            Откройте для себя уникальный северный город с богатой историей, 
            современной культурой и незабываемыми природными красотами
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-kogalym-blue hover:bg-gray-100 font-semibold">
              <Icon name="MapPin" size={20} className="mr-2" />
              Исследовать город
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-kogalym-blue">
              <Icon name="Calendar" size={20} className="mr-2" />
              Выбрать тур
            </Button>
          </div>
        </div>
      </section>

      {/* About City */}
      <section className="py-16 bg-kogalym-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
              О городе Когалым
            </h2>
            <p className="font-open-sans text-lg text-gray-600 max-w-2xl mx-auto">
              Современный северный город с уникальной историей развития нефтяной промышленности
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/img/733ed5b7-2d7b-47ed-ba68-1957bd63f6a3.jpg" 
                alt="Панорама Когалыма" 
                className="rounded-lg shadow-lg w-full h-80 object-cover"
              />
            </div>
            <div>
              <h3 className="font-montserrat text-2xl font-bold mb-4 text-gray-900">
                История и современность
              </h3>
              <p className="font-open-sans text-gray-700 mb-6 leading-relaxed">
                Когалым — город в Ханты-Мансийском автономном округе, основанный в 1975 году. 
                Сегодня это современный благоустроенный город с развитой инфраструктурой, 
                культурными центрами и уникальными природными объектами.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-montserrat text-2xl font-bold text-kogalym-blue">65,000</div>
                  <div className="font-open-sans text-sm text-gray-600">жителей</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="font-montserrat text-2xl font-bold text-kogalym-green">1975</div>
                  <div className="font-open-sans text-sm text-gray-600">год основания</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Places */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
              Достопримечательности
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Откройте для себя лучшие места города
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="p-0">
                <img 
                  src="/img/a77e845b-0093-4b2c-be70-dcb8d2b8df3f.jpg" 
                  alt="Культурный центр" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Camera" size={16} className="text-kogalym-blue" />
                  <Badge variant="secondary">Культура</Badge>
                </div>
                <CardTitle className="font-montserrat mb-2">Культурный центр</CardTitle>
                <CardDescription className="font-open-sans">
                  Современный культурный комплекс с выставочными залами, 
                  театром и музейными экспозициями
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="p-0">
                <img 
                  src="/img/ea96fc63-843a-427a-b846-c0682ed2cfb0.jpg" 
                  alt="Спортивный комплекс" 
                  className="w-full h-48 object-cover rounded-t-lg"
                />
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Activity" size={16} className="text-kogalym-green" />
                  <Badge variant="secondary">Спорт</Badge>
                </div>
                <CardTitle className="font-montserrat mb-2">Спортивный комплекс</CardTitle>
                <CardDescription className="font-open-sans">
                  Современные спортивные объекты для зимних и летних видов спорта, 
                  ледовый дворец
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow animate-scale-in">
              <CardHeader className="p-0">
                <div className="h-48 bg-gradient-to-br from-kogalym-blue to-kogalym-green rounded-t-lg flex items-center justify-center">
                  <Icon name="TreePine" size={64} className="text-white" />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="Trees" size={16} className="text-kogalym-green" />
                  <Badge variant="secondary">Природа</Badge>
                </div>
                <CardTitle className="font-montserrat mb-2">Природные зоны</CardTitle>
                <CardDescription className="font-open-sans">
                  Уникальные северные ландшафты, парки и зоны отдыха 
                  для активного времяпрепровождения
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tour Types */}
      <section className="py-16 bg-kogalym-accent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
              Виды туров
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Выберите подходящий формат путешествия
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Group Tours */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-kogalym-blue rounded-full flex items-center justify-center mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-xl">Сборные туры</CardTitle>
                <CardDescription className="font-open-sans">
                  Присоединяйтесь к готовым турам с другими путешественниками
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="font-open-sans text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Фиксированные даты</li>
                  <li>• Группы до 15 человек</li>
                  <li>• Доступные цены</li>
                  <li>• Опытные гиды</li>
                </ul>
                <Button className="w-full bg-kogalym-blue hover:bg-blue-700">
                  Выбрать тур
                </Button>
              </CardContent>
            </Card>

            {/* Corporate Tours */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-kogalym-green rounded-full flex items-center justify-center mb-4">
                  <Icon name="Building" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-xl">Корпоративные туры</CardTitle>
                <CardDescription className="font-open-sans">
                  Организуем мероприятия для компаний и коллективов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="font-open-sans text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Тимбилдинг программы</li>
                  <li>• Деловые поездки</li>
                  <li>• Конференц-услуги</li>
                  <li>• Индивидуальный подход</li>
                </ul>
                <Button className="w-full bg-kogalym-green hover:bg-green-700">
                  Получить предложение
                </Button>
              </CardContent>
            </Card>

            {/* Individual Tours */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-kogalym-red rounded-full flex items-center justify-center mb-4">
                  <Icon name="User" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-xl">Индивидуальные туры</CardTitle>
                <CardDescription className="font-open-sans">
                  Создадим уникальное путешествие специально для вас
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="font-open-sans text-sm text-gray-600 space-y-2 mb-6">
                  <li>• Персональные маршруты</li>
                  <li>• Гибкие даты</li>
                  <li>• Премиум сервис</li>
                  <li>• Экскурсии с гидом</li>
                </ul>
                <Button className="w-full bg-kogalym-red hover:bg-red-700">
                  Создать тур
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-4xl font-bold text-gray-900 mb-4">
              Карта достопримечательностей
            </h2>
            <p className="font-open-sans text-lg text-gray-600">
              Интерактивная карта главных мест города
            </p>
          </div>
          <InteractiveMap />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-montserrat text-xl font-bold mb-4">Когалым - прикипаешь сердцем!</h3>
              <p className="font-open-sans text-gray-400 text-sm">
                Ваш путеводитель по удивительному северному городу
              </p>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Туры</h4>
              <ul className="font-open-sans text-sm space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Сборные туры</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Корпоративные</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Индивидуальные</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Город</h4>
              <ul className="font-open-sans text-sm space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Достопримечательности</a></li>
                <li><a href="#" className="hover:text-white transition-colors">История</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Культура</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
              <div className="font-open-sans text-sm text-gray-400 space-y-2">
                <div className="flex items-center">
                  <Icon name="Phone" size={16} className="mr-2" />
                  +7 (XXX) XXX-XX-XX
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" size={16} className="mr-2" />
                  info@kogalym-portal.ru
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-open-sans text-sm text-gray-400">
              © 2024 Когалым - прикипаешь сердцем! Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;