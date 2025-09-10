// pages/FullMenu.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData } from "../menuData";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Star, ShoppingCart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export default function FullMenu() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");

  // Extract unique categories
  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  // Filtered items
  const filteredItems =
    activeTab === "All"
      ? menuData
      : menuData.filter((item) => item.category === activeTab);

  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Menu</h1>

      {/* Back Button */}
      <div className="ml-6 mb-4">
        <button
          onClick={() => navigate("/")}
          className="text-xl font-bold text-gray-800 hover:underline hover:text-primary mb-2"
        >
          &larr; Back
        </button>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-4 py-2 rounded-full border transition ${
              activeTab === cat
                ? "bg-orange-500 text-white border-orange-500"
                : "bg-white text-gray-700 border-gray-300 hover:bg-orange-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredItems.map((item) => (
          <Card
            key={item.id}
            className="group hover:shadow-lg transition-all duration-300 overflow-hidden"
          >
            <div className="relative">
              <ImageWithFallback
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Badges */}
              <div className="absolute top-2 left-2 flex gap-2">
                {item.isNew && (
                  <Badge className="bg-green-500 hover:bg-green-600">New</Badge>
                )}
                {item.isPopular && (
                  <Badge className="bg-orange-500 hover:bg-orange-600">
                    Popular
                  </Badge>
                )}
              </div>
              <div className="absolute top-2 right-2">
                <Badge variant="secondary" className="bg-white/90">
                  {item.category}
                </Badge>
              </div>
            </div>

            <CardContent className="p-4">
              {/* Rating */}
              {item.rating && (
                <div className="flex items-center gap-1 mb-2">
                  <Star className="size-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{item.rating}</span>
                  <span className="text-sm text-muted-foreground">
                    ({item.reviews ?? Math.floor(Math.random() * 50) + 10}{" "}
                    reviews)
                  </span>
                </div>
              )}

              {/* Title & Description */}
              <h3 className="font-semibold mb-2">{item.name}</h3>
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                {item.description}
              </p>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-lg font-bold text-primary">
                  ₹{item.price}
                </span>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex gap-2">
              <Button className="flex-1">
                <ShoppingCart className="size-5 mr-2" />
                <span className="text-md">Add To Cart</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
