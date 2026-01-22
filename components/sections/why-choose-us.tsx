import { DollarSign, Heart, Sparkles, Truck } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Fresh & Handpicked",
      desc: "Sourced daily from local farms",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Same-Day Delivery",
      desc: "Order by 2pm for same-day service",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Custom Arrangements",
      desc: "Personalized to your vision",
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Affordable Luxury",
      desc: "Premium flowers, fair prices",
    },
  ];
  return (
    <section className="relative z-10 py-20 px-4 bg-gradient-to-r from-pink-100/50 to-purple-100/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16">
          Why Choose Blossom & Bloom
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="inline-flex p-4 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full text-pink-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            Order Fresh Flowers Today →
          </button>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
