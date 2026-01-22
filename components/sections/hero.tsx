"use client";

import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1487070183336-b863922373d4?w=1600&h=1000&fit=crop')",
        }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-pink-100/60 via-purple-100/40 to-pink-50/60"></div>

      <div
        className={`relative z-10 text-center px-4 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="text-6xl md:text-8xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-purple-600 to-pink-500 mb-6 leading-tight">
          Beautiful Flowers,
          <br />
          Delivered with Love
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-10 max-w-2xl mx-auto font-light">
          Handcrafted bouquets for every occasion, delivered fresh to your
          doorstep
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="group px-10 py-5 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white rounded-full text-lg font-semibold shadow-2xl hover:shadow-pink-300 transform hover:scale-105 transition-all duration-300 hover:from-pink-600 hover:to-rose-600 flex items-center gap-2">
            🌷 Place Your Order Now
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="px-8 py-5 bg-white/80 backdrop-blur-sm text-pink-700 rounded-full text-lg font-semibold shadow-lg hover:bg-white transition-all duration-300 hover:shadow-xl border-2 border-pink-200">
            Browse Flower Collections
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
          <div className="w-2 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
