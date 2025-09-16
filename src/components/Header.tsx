import { Menu, Phone, MapPin, Clock } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import seasidelogo from "../assets/seaside.jpg";

export function Header() {
  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <Phone className="size-3" />
                <span className="text-xs md:text-sm">+91 9994592607</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="size-3" />
                <span className="text-xs md:text-sm">
                  Cuddalore, Tamil Nadu
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="size-3" />
              <span className="text-xs md:text-sm">
                Open: 6:00 AM - 10:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="size-12 rounded-full flex items-center justify-center">
              <img src={seasidelogo} alt="SeaSide Live Bake Studio" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">
                SeaSide Live Bake Studio
              </h1>
              <p className="text-xs text-muted-foreground">
                Fresh • Live • Delicious
              </p>
            </div>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-4 md:pl-10">
              <Button className="hidden text-md sm:inline-flex">
                Order Now
              </Button>
            </div>
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="size-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8 mx-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-lg py-2 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}

                  <Button className="w-full py-1">Order Now</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
