import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function GallerySection() {
  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1698288280603-22997a335234?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBmcmVzaCUyMGJyZWFkJTIwcGFzdHJpZXN8ZW58MXx8fHwxNzU1MzYyMzI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Fresh bakery display",
      category: "Bakery Display"
    },
    {
      src: "https://images.unsplash.com/photo-1640794334523-b299f14d28db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwYmlydGhkYXklMjBjYWtlfGVufDF8fHx8MTc1NTM2MjMyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Chocolate birthday cake",
      category: "Special Cakes"
    },
    {
      src: "https://images.unsplash.com/photo-1587912001191-0cd4f14fd89e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcm9pc3NhbnRzJTIwZnJlbmNoJTIwcGFzdHJpZXN8ZW58MXx8fHwxNzU1MzYyMzI3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "French croissants",
      category: "Pastries"
    },
    {
      src: "https://images.unsplash.com/photo-1691052155048-b7993c82b837?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBraXRjaGVuJTIwY2hlZiUyMGJha2luZ3xlbnwxfHx8fDE3NTUzNjIzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Live baking in action",
      category: "Live Baking"
    },
    {
      src: "https://images.unsplash.com/photo-1582461833047-2aeb4f8af173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXBjYWtlcyUyMGNvbG9yZnVsJTIwZGVzc2VydHN8ZW58MXx8fHwxNzU1MzYyMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Colorful cupcakes",
      category: "Cupcakes"
    },
    {
      src: "https://images.unsplash.com/photo-1627308593341-d886acdc06a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc2FuJTIwYnJlYWQlMjBzb3VyZG91Z2h8ZW58MXx8fHwxNzU1MzYyMzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      alt: "Artisan sourdough bread",
      category: "Artisan Breads"
    }
  ];

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            Our Gallery
          </Badge>
          <h2 className="text-3xl font-bold mb-4">A Visual Journey</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step into our world of fresh baking and artistic creations. Every image tells a story of passion, quality, and delicious moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300">
              <ImageWithFallback
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Badge className="bg-white text-black hover:bg-white">
                  {image.category}
                </Badge>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline">
            View More Photos
          </Button>
        </div>
      </div>
    </section>
  );
}