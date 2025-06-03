import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12 font-montserrat">
          Как нас найти
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📍 Наш адрес
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">ул. Центральная, 25</p>
              <p className="text-gray-700 mb-2">г. Местный, 123456</p>
              <p className="text-gray-600 text-sm">
                Рядом с центральным рынком
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🕐 Режим работы
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-1">Пн-Пт: 8:00 - 19:00</p>
              <p className="text-gray-700 mb-1">Сб-Вс: 9:00 - 18:00</p>
              <p className="text-gray-600 text-sm mt-3">
                Без перерывов и выходных
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📞 Контакты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-2">+7 (123) 456-78-90</p>
              <p className="text-gray-700 mb-2">mestlavka@email.com</p>
              <p className="text-gray-600 text-sm">Звоните для предзаказа</p>
            </CardContent>
          </Card>

          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💳 Способы оплаты
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-1">• Наличные</p>
              <p className="text-gray-700 mb-1">• Банковские карты</p>
              <p className="text-gray-700 mb-1">• Переводы по QR-коду</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
