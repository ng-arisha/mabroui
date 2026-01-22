import { Star } from "lucide-react";

function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "The roses arrived fresh and lasted over a week! My mom was absolutely thrilled.",
      rating: 5,
    },
    {
      name: "James K.",
      text: "Ordering was so easy and the bouquet was even more beautiful than the photo!",
      rating: 5,
    },
    {
      name: "Emily R.",
      text: "Same-day delivery saved my anniversary. Thank you for making it special!",
      rating: 5,
    },
  ];
  return (
    <section className="relative z-10 py-20 px-4 bg-gradient-to-br from-purple-100/50 via-pink-100/50 to-blue-100/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-16">
          Loved by Our Customers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
              <p className="font-semibold text-pink-600">
                — {testimonial.name}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="px-10 py-4 bg-white text-pink-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-pink-300 hover:bg-pink-50">
            Join Our Happy Customers — Place an Order
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
