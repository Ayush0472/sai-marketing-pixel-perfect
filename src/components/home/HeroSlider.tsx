import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/banners/hero-devotional.jpg";

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "shri sai marketing",
      subtitle: "Welcome to",
      description: "Devotional & Puja Essentials",
      image: heroBg,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative rounded-2xl overflow-hidden mx-4 md:mx-0">
      <div
        className="relative h-[300px] md:h-[400px] lg:h-[450px] bg-cover bg-center"
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-8 md:px-16">
            <div className="max-w-lg text-white">
              <p className="text-lg md:text-xl font-script mb-2">
                {slides[currentSlide].subtitle}
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-semibold mb-4">
                {slides[currentSlide].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {slides[currentSlide].description}
              </p>
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg"
              >
                <Link to="/shop">Shop Now</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-foreground" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-foreground" />
        </button>
      </div>
    </section>
  );
};

export default HeroSlider;
