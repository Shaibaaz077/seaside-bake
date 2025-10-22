import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData } from "../menuData";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Star, ShoppingCart } from "lucide-react";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "../Context/CartContext";

export default function FullMenu() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  return (
    <div className="p-4 sm:p-6">
      {/* Back Button */}
      <div className="ml-2 sm:ml-6 mb-4">
        <button
          onClick={() => navigate("/")}
          className="text-lg sm:text-xl font-bold text-gray-800 hover:underline hover:text-primary"
        >
          &larr; Back
        </button>
      </div>

      {/* Search Bar */}
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-bold text-center mb-6 ml-6">Menu</h1>
        <div className="relative w-full max-w-md ml-8 mt-2">
          <Input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 h-10 w-full rounded-lg border focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="All" className="w-full">
        <TabsList className="flex overflow-x-auto justify-start sm:justify-center gap-2 sm:gap-3 mb-6 px-2">
          {categories.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="px-4 py-2 rounded-full border text-sm sm:text-base transition
                data-[state=active]:bg-orange-500 data-[state=active]:text-white data-[state=active]:border-orange-500"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((cat) => {
          const filteredItems = menuData.filter((item) => {
            const matchesCategory =
              cat === "All" ? true : item.category === cat;
            const matchesSearch = item.name
              .toLowerCase()
              .includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
          });

          return (
            <TabsContent key={cat} value={cat}>
              {filteredItems.length > 0 ? (
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
                          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 left-2 flex gap-2">
                          {item.isNew && (
                            <Badge className="bg-green-500 hover:bg-green-600">
                              New
                            </Badge>
                          )}
                          {item.isPopular && (
                            <Badge className="bg-orange-500 hover:bg-orange-600">
                              Popular
                            </Badge>
                          )}
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <div className="flex items-center gap-1 mb-2">
                          <Star className="size-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm font-medium">
                            {item.rating}
                          </span>
                        </div>
                        <h3 className="font-semibold mb-2">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                          {item.description}
                        </p>
                        <span className="text-lg font-bold text-primary">
                          ₹{item.price}
                        </span>
                      </CardContent>

                      <CardFooter className="p-4 pt-0 flex gap-2">
                        <Button
                          className="flex-1 bg-orange-500 hover:bg-orange-600"
                          onClick={() =>
                            addToCart({
                              id: item.id,
                              name: item.name,
                              price: item.price,
                              image: item.image,
                            })
                          }
                        >
                          <ShoppingCart className="size-5 mr-2" />
                          <span className="text-md">Add To Cart</span>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-6">
                  No results found.
                </p>
              )}
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
}
