import { ProductCard } from "./ProductCard";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

const featuredProducts = [
  {
    id: "1",
    name: "Decadent Chocolate Cake",
    description:
      "Rich, moist chocolate layers with velvety ganache and fresh seasonal berries.",
    price: 450,
    originalPrice: 500,
    image:
      "https://images.unsplash.com/photo-1639488296096-1a3e6e7cd5b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2UlMjBkZXNzZXJ0fGVufDF8fHx8MTc1NTM0NTc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
    category: "Signature Cakes",
    isPopular: true,
  },
  {
    id: "2",
    name: "Artisan Sourdough Loaves",
    description:
      "Traditional fermented sourdough with crispy golden crust and perfect tang.",
    price: 180,
    image:
      "https://images.unsplash.com/photo-1594400316172-d7ca545d9bf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMGJyZWFkJTIwbG9hdmVzJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NTUzNjUzMzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
    category: "Artisan Breads",
    isNew: true,
  },
  {
    id: "3",
    name: "Gourmet Cupcake Collection",
    description:
      "Handcrafted cupcakes with premium buttercream and edible decorations.",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1742730710512-86fe03525eb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsJTIwZnJvc3RpbmclMjBkaXNwbGF5fGVufDF8fHx8MTc1NTM2NTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.7,
    category: "Cupcakes",
    isPopular: true,
  },
  {
    id: "4",
    name: "Wedding Cake Elegance",
    description:
      "Multi-tier wedding cakes with custom designs and premium ingredients.",
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1584158531321-2a1fefff2e51?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnQlMjB3aGl0ZXxlbnwxfHx8fDE3NTUzNDE4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
    category: "Special Orders",
  },
];

export function FeaturedProducts() {
  const navigate = useNavigate();

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-amber-50/50 via-white to-orange-50/30 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-100/30 to-orange-100/20 rounded-full -translate-x-48 -translate-y-48 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-orange-100/30 to-amber-100/20 rounded-full translate-x-40 translate-y-40 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-amber-600 bg-amber-100 px-4 py-2 rounded-full tracking-wider uppercase">
              Featured Menu
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Our Signature
            <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 bg-clip-text">
              Creations
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Each product is a masterpiece, carefully crafted by our skilled
            bakers using time-honored techniques and the finest locally sourced
            ingredients. Experience the perfect blend of tradition and
            innovation.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="transform transition-all duration-700 hover:scale-105"
              style={{
                animationDelay: `${index * 200}ms`,
              }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={() => navigate("/full-menu")}
            size="lg"
            variant="outline"
            className="border-2 border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Explore Full Menu Collection
          </Button>
        </div>

        {/* Live baking indicator */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg animate-pulse">
            <div className="w-3 h-3 bg-white rounded-full animate-ping"></div>
            <span className="font-semibold">
              Live Baking Now • Fresh Products Every Hour
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
