import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      name: "Домашняя",
      description: "Классическая вареная колбаса по бабушкиному рецепту",
      price: "450₽/кг",
      image:
        "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&h=200&fit=crop",
      badge: "Хит продаж",
    },
    {
      id: 2,
      name: "Деревенская",
      description: "Копченая колбаса с натуральными специями",
      price: "680₽/кг",
      image:
        "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=200&fit=crop",
      badge: "Премиум",
    },
    {
      id: 3,
      name: "Салями Милано",
      description: "Сыровяленая колбаса в итальянском стиле",
      price: "890₽/кг",
      image:
        "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop",
      badge: "Новинка",
    },
    {
      id: 4,
      name: "Сосиски Венские",
      description: "Нежные сосиски для всей семьи",
      price: "320₽/кг",
      image:
        "https://images.unsplash.com/photo-1551515230-5b5e2b7e1bf8?w=300&h=200&fit=crop",
      badge: "Для детей",
    },
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4 font-montserrat">
          Наши колбасные изделия
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Каждое изделие изготавливается из отборного мяса с соблюдением всех
          традиций колбасного мастерства
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <Badge className="absolute top-2 right-2 bg-red-600 hover:bg-red-700">
                  {product.badge}
                </Badge>
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-gray-900">
                  {product.name}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-red-600">
                    {product.price}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
