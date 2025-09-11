import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Clock, Users, Award, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  const features = [
    {
      icon: Clock,
      title: "Live Baking Theater",
      description: "Watch master bakers craft your favorites in our open kitchen concept",
    },
    {
      icon: Heart,
      title: "Premium Ingredients",
      description: "Organic flour, fresh dairy, and locally sourced seasonal ingredients",
    },
    {
      icon: Users,
      title: "Heritage Recipes",
      description: "Time-honored techniques passed down through generations of artisans",
    },
    {
      icon: Award,
      title: "Award Recognition",
      description: "Tamil Nadu's Best Bakery 2023 - Excellence in taste and innovation",
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background with subtle pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 via-white to-orange-50/60"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-200/20 to-orange-200/10 rounded-full translate-x-48 -translate-y-48 blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold text-amber-700 bg-gradient-to-r from-amber-100 to-orange-100 px-6 py-3 rounded-full tracking-wider uppercase shadow-sm">
                Our Story
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Where Tradition Meets 
              <span className="block text-transparent bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 bg-clip-text">
                Culinary Innovation
              </span>
            </h2>
            
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed mb-10">
              <p>
                Nestled in the coastal charm of Cuddalore, SeaSide Live Bake Studio began as a 
                dream in 2019 – to create a space where the ancient art of baking meets modern 
                culinary excellence. Our unique live baking concept transforms every visit into 
                an immersive sensory experience.
              </p>
              
              <p>
                From the first crack of dawn, our master bakers begin their craft, filling the 
                air with the irresistible aroma of fresh bread, delicate pastries, and artisanal 
                creations. We honor Tamil Nadu's rich culinary heritage while embracing global 
                techniques to create truly exceptional baked goods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="p-3 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full">
                        <feature.icon className="size-6 text-white" />
                      </div>
                      <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-4 font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              Visit Our Live Baking Studio
            </Button>
          </div>
          
          {/* Images */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative">
              {/* Main image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1738717201678-412395e65b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlciUyMGtuZWFkaW5nJTIwZG91Z2glMjBraXRjaGVufGVufDF8fHx8MTc1NTM2NTMzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Master baker kneading dough in our kitchen"
                  className="w-full h-96 lg:h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              
              {/* Floating secondary image */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 lg:w-40 lg:h-40 rounded-xl overflow-hidden shadow-xl border-4 border-white">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649773287487-31206c652e0d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjaGVmJTIwZGVjb3JhdGluZyUyMGNha2V8ZW58MXx8fHwxNzU1MzY1MzQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Pastry chef decorating cake"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -top-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-amber-100 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text">2019</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Established</div>
              </div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl border border-amber-100 transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Happy Families</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-400/10 to-orange-400/10 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}