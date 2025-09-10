import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "About Us", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact", href: "#contact" },
  ];

  const products = [
    "Cakes & Pastries",
    "Fresh Breads",
    "Cupcakes",
    "Cookies",
    "Custom Cakes",
    "Party Orders",
  ];

  const socialLinks = [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="size-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span>🧁</span>
              </div>
              <div>
                <h3 className="font-bold">SeaSide Live Bake Studio</h3>
                <p className="text-sm text-gray-400">Fresh • Live • Delicious</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Experience the magic of live baking at Cuddalore's premier bakery. 
              Fresh products, premium ingredients, and unforgettable taste.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="sm"
                  className="text-gray-400 hover:text-orange-500 hover:bg-gray-800 p-2"
                  asChild
                >
                  <a href={social.href} aria-label={social.label}>
                    <social.icon className="size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-orange-500 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <span className="text-gray-400 text-sm">{product}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  123 Beach Road<br />
                  Cuddalore, Tamil Nadu 607001
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="size-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="size-4 text-orange-500 flex-shrink-0" />
                <span className="text-sm text-gray-400">info@seasidebake.com</span>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="size-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-gray-400">
                  Mon-Sat: 6:00 AM - 10:00 PM<br />
                  Sunday: 7:00 AM - 9:00 PM
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 SeaSide Live Bake Studio. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}