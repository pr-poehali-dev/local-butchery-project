import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PromoSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-red-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <Badge variant="destructive" className="mb-4 text-lg px-4 py-2">
          🔥 Акция
        </Badge>

        <Card className="border-4 border-red-200 bg-white shadow-xl">
          <CardContent className="p-8">
            <h2 className="text-5xl font-bold text-red-600 mb-4 font-montserrat">
              2 по цене 1
            </h2>
            <p className="text-2xl text-gray-800 mb-6">
              При покупке любых двух колбасных изделий — второе в подарок!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-4xl mb-2">🥩</div>
                <h3 className="font-semibold text-gray-800">Выберите любые</h3>
                <p className="text-gray-600">колбасные изделия</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💰</div>
                <h3 className="font-semibold text-gray-800">Платите за одно</h3>
                <p className="text-gray-600">второе — бесплатно</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">😋</div>
                <h3 className="font-semibold text-gray-800">Наслаждайтесь</h3>
                <p className="text-gray-600">качеством и экономией</p>
              </div>
            </div>

            <p className="text-sm text-gray-500 mt-6">
              * Акция действует на все виды колбасных изделий. Подробности
              уточняйте у продавца.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PromoSection;
