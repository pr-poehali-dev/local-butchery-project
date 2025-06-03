const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <h3 className="text-xl font-bold mb-3 font-montserrat">
              Местная лавка
            </h3>
            <p className="text-gray-300 text-sm">
              Качественные колбасные изделия от Ивана Ивановича
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Быстрые ссылки</h4>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>О нас</li>
              <li>Наша продукция</li>
              <li>Акции</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Социальные сети</h4>
            <div className="flex space-x-4 text-gray-300">
              <span>📱 WhatsApp</span>
              <span>📧 Email</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 Местная лавка. Основана Иваном Ивановичем.
          </p>
          <p className="text-gray-400 text-sm mt-2 md:mt-0">
            Все права защищены
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
