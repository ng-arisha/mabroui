import FeatureSection from "@/components/sections/feature";
import FlowersByOccassion from "@/components/sections/flowers-by-occassion";
import HeroSection from "@/components/sections/hero";
import Testimonials from "@/components/sections/testimonials";
import WhyChooseUs from "@/components/sections/why-choose-us";

export default function Home() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Floating Petals */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              animationDuration: `${15 + i * 3}s`,
            }}
          >
            <div className="w-8 h-8 bg-pink-300 rounded-full blur-sm"></div>
          </div>
        ))}
      </div>

      {/* hero section */}
      <HeroSection />

      {/* feature section */}
      <FeatureSection />

      {/* why choose us */}
      <WhyChooseUs />

      {/* flowers by occassion */}
      <FlowersByOccassion />

      {/* testimonials */}
      <Testimonials />
    </div>
  );
}
