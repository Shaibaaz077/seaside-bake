import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { AboutSection } from "./components/AboutSection";
import { GallerySection } from "./components/GallerySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { SpecialOffers } from "./components/SpecialOffers";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import FullMenu from "./components/Fullmenu";
import "./index.css";
import { Home } from "lucide-react";

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <SpecialOffers />
      <ContactSection />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/full-menu" element={<FullMenu />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
