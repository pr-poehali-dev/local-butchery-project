import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <Badge variant="secondary" className="mb-4 bg-red-100 text-red-800">
          С 2025 года
        </Badge>
        <div className="mb-6">
          <Avatar className="h-24 w-24 mx-auto mb-4 ring-4 ring-amber-200">
            <AvatarImage
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=200&h=200&fit=crop"
              alt="Местная лавка"
            />
            <AvatarFallback className="text-2xl font-bold bg-amber-100 text-amber-800">
              МЛ
            </AvatarFallback>
          </Avatar>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4 font-montserrat">
          Местная лавка
        </h1>
        <p className="text-xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Добро пожаловать в нашу уютную лавку! Иван Иванович и его команда
          готовы предложить вам лучшие колбасные изделия, приготовленные с
          любовью и по традиционным рецептам.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 inline-block">
          <div className="flex items-center gap-4 mb-3">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Иван Иванович"
              />
              <AvatarFallback className="text-lg font-semibold">
                ИИ
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">
                Владелец магазина
              </h3>
              <p className="text-gray-600 font-medium">Иван Иванович</p>
              <p className="text-sm text-gray-500">
                Мастер колбасного дела с многолетним опытом
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
