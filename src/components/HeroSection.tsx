import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
          С 2025 года
        </Badge>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 font-montserrat">
          Местная лавка
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Добро пожаловать в нашу уютную лавку! Лидия Деменева и её команда
          готовы предложить вам лучшие колбасные изделия, приготовленные с
          любовью и по традиционным рецептам.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 inline-block">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Владелец магазина
          </h3>
          <p className="text-gray-600">Лидия Деменева</p>
          <p className="text-sm text-gray-500 mt-1">
            Мастер колбасного дела с многолетним опытом
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
