import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Star, Quote } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Cuddalore",
      rating: 5,
      review: "The chocolate fudge cake from SeaSide Live Bake Studio made my daughter's birthday absolutely perfect! The live baking experience is amazing to watch.",
      avatar: "P"
    },
    {
      name: "Rajesh Kumar",
      location: "Pondicherry",
      rating: 5,
      review: "I drive 30 minutes just for their French croissants. The quality and freshness is unmatched. Best bakery in the region!",
      avatar: "R"
    },
    {
      name: "Anita Devi",
      location: "Cuddalore",
      rating: 5,
      review: "Their artisan sourdough is incredible! The staff is so friendly and the WhatsApp ordering makes it super convenient.",
      avatar: "A"
    },
    {
      name: "Suresh Babu",
      location: "Villupuram",
      rating: 5,
      review: "Ordered a custom cake for our anniversary. The attention to detail and taste exceeded our expectations. Highly recommended!",
      avatar: "S"
    },
    {
      name: "Meera Krishnan",
      location: "Cuddalore",
      rating: 5,
      review: "The live baking concept is so unique! My kids love watching the bakers work while we wait for our order. Great family experience.",
      avatar: "M"
    },
    {
      name: "Vikram Patel",
      location: "Chennai",
      rating: 5,
      review: "Stumbled upon this gem during a visit to Cuddalore. The rainbow cupcakes are a work of art and taste even better than they look!",
      avatar: "V"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their SeaSide Live Bake Studio experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="size-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative">
                  <Quote className="size-6 text-orange-200 absolute -top-2 -left-2" />
                  <p className="text-muted-foreground italic pl-4">
                    "{testimonial.review}"
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 px-6 py-3 rounded-full">
            <Star className="size-5 fill-yellow-400 text-yellow-400" />
            <span className="font-semibold">4.9/5 average rating</span>
            <span className="text-muted-foreground">from 200+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}