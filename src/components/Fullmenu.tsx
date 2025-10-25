import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { menuData } from "../menuData";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent } from "./ui/tabs";
import { Star, ShoppingCart, Menu as MenuIcon } from "lucide-react";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useCart } from "../Context/CartContext";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export default function FullMenu() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();

  const categories = ["All", ...new Set(menuData.map((item) => item.category))];

  const filteredItems = menuData.filter((item) => {
    const matchesCategory =
      activeCategory === "All" ? true : item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <button
          onClick={() => navigate("/")}
          className="text-lg sm:text-xl font-bold text-gray-800 hover:underline hover:text-primary"
        >
          &larr; Back
        </button>

        <h1 className="text-3xl font-bold flex-1 text-center sm:text-left">
          Menu
        </h1>

        {/* Categories Drawer Button */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-orange-50 border-orange-200 hover:bg-orange-100"
            >
              <MenuIcon className="size-5" /> Categories
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-72 pt-3 pl-6">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <div className="overflow-y-auto max-h-[calc(100vh-6rem)] pr-4 scrollbar-thin scrollbar-thumb-gray-300">
              <ul className="space-y-2">
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setActiveCategory(cat)}
                      className={`w-full text-left px-2 py-2 rounded-md transition ${
                        activeCategory === cat
                          ? "bg-orange-500 text-white"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </SheetContent>
        </Sheet>

        {/* Search Bar */}
        <div className="relative w-full max-w-md ml-auto">
          <Input
            type="text"
            placeholder="Search for dishes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 h-10 w-full rounded-lg border focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Menu Grid */}
      <Tabs value={activeCategory} className="w-full">
        <TabsContent value={activeCategory}>
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
                      <span className="text-sm font-medium">{item.rating}</span>
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
            <p className="text-center text-gray-500 py-6">No results found.</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
