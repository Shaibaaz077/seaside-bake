import { Menu, Phone, MapPin, Clock, ShoppingCart, User } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import seasidelogo from "../assets/seaside.jpg";
import { useEffect, useState } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import CartPage from "./CartPage";
import { useCart } from "../Context/CartContext";

interface NavItem {
  name: string;
  href: string;
}

export function Header() {
  const { cartItems, removeItem, updateQuantity } = useCart();

  const navigation: NavItem[] = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  // States
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);

  // 🛒 Cart states
  const [cartOpen, setCartOpen] = useState(false);

  // Load user on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  // Login / Signup Handlers
  const handleOpenLogin = () => {
    setShowLogin(true);
    setShowSignUp(false);
    setMobileMenuOpen(false);
  };

  const handleOpenSignUp = () => {
    setShowSignUp(true);
    setShowLogin(false);
    setMobileMenuOpen(false);
  };

  const handleLoginSuccess = () => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
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
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="size-12 rounded-full flex items-center justify-center overflow-hidden">
              <img
                src={seasidelogo}
                alt="SeaSide Live Bake Studio"
                className="object-cover"
              />
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

          {/* Right side */}
          <div className="flex items-center gap-6">
            {user ? (
              <>
                {/* 🛒 Cart Icon */}
                <button
                  onClick={() => setCartOpen(true)}
                  className="relative focus:outline-none"
                >
                  <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-orange-500 transition" />
                  {cartItems.length > 0 && (
                    <span className="absolute -top-1 -right-2 bg-orange-500 text-white text-xs rounded-full px-1.5 py-0.5">
                      {cartItems.length}
                    </span>
                  )}
                </button>

                {/* 👤 Profile Dropdown */}
                <div className="relative group">
                  <div className="w-9 h-9 flex items-center justify-center rounded-full bg-orange-500 text-white font-semibold cursor-pointer ring-2 ring-transparent hover:ring-orange-400 transition-all">
                    {user.first_name ? (
                      user.first_name.charAt(0).toUpperCase()
                    ) : (
                      <User className="w-5 h-5" />
                    )}
                  </div>

                  {/* Dropdown Menu */}
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-lg border border-gray-100 py-2 opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 invisible group-hover:visible transition-all duration-200 z-50">
                    <div className="px-4 py-3 border-b border-gray-100">
                      <p className="font-semibold text-gray-800">
                        {user.first_name}
                      </p>
                      <p className="text-sm text-gray-500">Welcome back!</p>
                    </div>

                    <ul className="py-2 text-sm text-gray-700">
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        Profile
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        Orders
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-50 cursor-pointer">
                        Favourites
                      </li>
                    </ul>

                    <div className="border-t border-gray-100 mt-1">
                      <button
                        onClick={handleLogout}
                        className="w-full text-left px-4 py-2 text-sm text-red-500 font-medium hover:bg-red-50 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="hidden md:flex items-center gap-4 md:pl-10">
                <Button onClick={handleOpenLogin}>Sign In</Button>
                <Button variant="outline" onClick={handleOpenSignUp}>
                  Sign Up
                </Button>
              </div>
            )}

            {/* Mobile menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="md:hidden">
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
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}

                  {!user ? (
                    <>
                      <Button className="w-full py-1" onClick={handleOpenLogin}>
                        Sign In
                      </Button>
                      <Button
                        className="w-full py-1 mt-2"
                        variant="outline"
                        onClick={handleOpenSignUp}
                      >
                        Sign Up
                      </Button>
                    </>
                  ) : (
                    <Button
                      className="w-full py-1 mt-2 bg-red-500 hover:bg-red-600"
                      onClick={handleLogout}
                    >
                      Logout
                    </Button>
                  )}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Auth Modals */}
      <SignIn
        isOpen={showLogin}
        onClose={() => setShowLogin(false)}
        onSwitchToSignUp={handleOpenSignUp}
        onLoginSuccess={handleLoginSuccess}
      />
      <SignUp
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={handleOpenLogin}
      />

      {/* 🛒 Cart Page */}
      <CartPage
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeItem}
      />
    </header>
  );
}

export default Header;
