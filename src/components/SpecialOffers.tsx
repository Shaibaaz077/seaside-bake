import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Gift, Percent, Users, Calendar } from "lucide-react";

export function SpecialOffers() {
  const offers = [
    {
      icon: Percent,
      title: "First Order Discount",
      description: "Get 20% off on your first order above ₹500",
      code: "FIRST20",
      validUntil: "Dec 31, 2024",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      icon: Gift,
      title: "Birthday Special",
      description: "Free birthday cake decoration with any cake order",
      code: "BIRTHDAY",
      validUntil: "Ongoing",
      bgColor: "bg-pink-50",
      iconColor: "text-pink-500",
    },
    {
      icon: Users,
      title: "Bulk Order Discount",
      description: "15% off on orders above ₹2000 for events",
      code: "BULK15",
      validUntil: "Dec 31, 2024",
      bgColor: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      icon: Calendar,
      title: "Weekend Special",
      description: "Buy 2 croissants, get 1 free every weekend",
      code: "WEEKEND",
      validUntil: "Every Weekend",
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            Special Offers
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Sweet Deals & Offers</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our amazing deals! Save more while enjoying the
            best bakery products in Cuddalore.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className={`${offer.bgColor} border-0 hover:shadow-lg transition-shadow duration-300`}
            >
              <CardContent className="p-6 text-center">
                <offer.icon
                  className={`size-12 ${offer.iconColor} mx-auto mb-4`}
                />
                <h3 className="font-semibold mb-2">{offer.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {offer.description}
                </p>

                <div className="bg-white rounded-lg p-3 mb-4">
                  <p className="text-xs text-muted-foreground">Use Code:</p>
                  <p className="font-mono font-bold text-primary">
                    {offer.code}
                  </p>
                </div>

                <p className="text-xs text-muted-foreground mb-4">
                  Valid until: {offer.validUntil}
                </p>

                <Button size="sm" variant="outline" className="w-full">
                  Claim Offer
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter signup */}
        <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Never Miss an Offer!</h3>
            <p className="mb-6 opacity-90">
              Subscribe to our newsletter and be the first to know about new
              products, special offers, and exclusive deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg text-white placeholder-gray-100"
              />
              <Button
                variant="secondary"
                className="bg-white text-orange-500 hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
