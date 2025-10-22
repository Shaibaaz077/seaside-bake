import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  category: string;
  isNew?: boolean;
  isPopular?: boolean;
}

export function ProductCard({
  name,
  description,
  price,
  originalPrice,
  image,
  rating,
  category,
  isNew,
  isPopular,
}: ProductCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 left-2 flex gap-2">
          {isNew && (
            <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
          )}
          {isPopular && (
            <Badge className="bg-orange-500 hover:bg-orange-600">Popular</Badge>
          )}
        </div>
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="bg-white/90">
            {category}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="flex items-center gap-1 mb-2">
          <Star className="size-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">
            ({Math.floor(Math.random() * 50) + 10} reviews)
          </span>
        </div>

        <h3 className="font-semibold mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-primary">₹{price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ₹{originalPrice}
              </span>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button className="flex-1">
          <ShoppingCart className="size-5 mr-2" />
          <span className="text-md">Add To Cart</span>
        </Button>
      </CardFooter>
    </Card>
  );
}
