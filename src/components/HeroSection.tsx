import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import heroBackgroundImage from "../assets/b3ad8e939dc2d455337cc8700b5c8148d81c78b2.png";

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-[130vh] flex items-center overflow-hidden bg-white"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroBackgroundImage})`,
          }}
        />

        {/* Enhanced Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-orange-900/20 z-10"></div>
      </div>

      {/* Animated Particles/Flour Dust Effect */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-[float_8s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-amber-200/40 rounded-full animate-[float_12s_ease-in-out_infinite_2s]"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-white/20 rounded-full animate-[float_10s_ease-in-out_infinite_4s]"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-orange-200/30 rounded-full animate-[float_14s_ease-in-out_infinite_6s]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-br from-amber-200/20 to-orange-300/20 rounded-full blur-3xl animate-pulse z-5"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 bg-gradient-to-br from-yellow-200/20 to-amber-300/20 rounded-full blur-2xl animate-pulse delay-1000 z-5"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl transform -translate-x-[10%] ml-12 md:ml-30">
          <Badge className="mb-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white border-0 px-6 py-2 text-sm animate-[fadeInUp_0.8s_ease-out] md:px-[21px] md:py-[7px]">
            Live Baking Experience Since 2019
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out_0.2s_both]">
            Artisan Baked
            <span className="block text-transparent bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-400 bg-clip-text">
              Fresh Daily
            </span>
          </h1>

          <p className="text-xl text-gray-200 mb-10 leading-relaxed max-w-2xl animate-[fadeInUp_0.8s_ease-out_0.4s_both]">
            Step into SeaSide Live Bake Studio and witness the artistry of
            traditional baking. From handcrafted sourdough to decadent pastries,
            every creation tells a story of passion, quality, and the finest
            ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-[fadeInUp_0.8s_ease-out_0.6s_both]">
            <Button
              onClick={() => navigate("/full-menu")}
              size="lg"
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Menu
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-gray-900 px-10 py-4 text-lg font-semibold backdrop-blur-sm bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              Order via WhatsApp
            </Button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-[fadeInUp_0.8s_ease-out_0.8s_both]">
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-b from-amber-300 to-orange-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Happy Customers
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-b from-amber-300 to-orange-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                50+
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Artisan Products
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
            </div>
            <div className="text-center group">
              <div className="text-4xl font-bold text-transparent bg-gradient-to-b from-amber-300 to-orange-400 bg-clip-text group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-sm text-gray-300 uppercase tracking-wider">
                Years Excellence
              </div>
              <div className="w-8 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mt-2 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          25% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-5px);
            opacity: 0.5;
          }
          75% {
            transform: translateY(-25px) translateX(15px);
            opacity: 0.9;
          }
        }

        /* Respect reduced motion preferences */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
