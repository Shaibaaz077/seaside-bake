import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import React, { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleWhatsAppContact = () => {
    const phoneNumber = "919876543210";
    const message =
      "Hi! I'd like to know more about your bakery products and services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700 hover:bg-orange-200">
            Get In Touch
          </Badge>
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions about our products or want to place a custom order?
            We'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="size-5 text-orange-500" />
                  <h3 className="font-semibold">Visit Our Studio</h3>
                </div>
                <p className="text-muted-foreground">
                  39, Main Road, Vannarapalayam, Cuddalore.
                  <br />
                  Tamil Nadu 607001
                  <br />
                  India
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="size-5 text-orange-500" />
                  <h3 className="font-semibold">Call Us</h3>
                </div>
                <p className="text-muted-foreground">9994592607</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="size-5 text-orange-500" />
                  <h3 className="font-semibold">Opening Hours</h3>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Saturday: 6:00 AM - 10:00 PM</p>
                  <p>Sunday: 7:00 AM - 9:00 PM</p>
                </div>
              </CardContent>
            </Card>

            <Button
              onClick={handleWhatsAppContact}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              <MessageCircle className="size-4 mr-2" />
              Contact via WhatsApp
            </Button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium mb-2"
                      >
                        Phone *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      placeholder="Tell us about your inquiry, custom order, or any questions you have..."
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Mail className="size-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map placeholder */}
            <Card className="mt-6">
              <CardContent className="p-0">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62501.25129307465!2d79.69015483105204!3d11.74191279303907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a54990006e64b81%3A0x30b8cd979a65b277!2sVanniyar%20palayam!5e0!3m2!1sen!2sin!4v1757534520819!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
