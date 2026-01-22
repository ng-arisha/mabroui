function FeatureSection() {
  const bouquets = [
    {
      name: "Rose Romance",
      description: "12 premium red roses with eucalyptus",
      price: "$65",
      image:
        "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=500&fit=crop",
    },
    {
      name: "Lavender Dream",
      description: "Mixed lavender & white lily arrangement",
      price: "$55",
      image:
        "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400&h=500&fit=crop",
    },
    {
      name: "Peach Bliss",
      description: "Peach roses, carnations & baby's breath",
      price: "$48",
      image:
        "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400&h=500&fit=crop",
    },
    {
      name: "Garden Paradise",
      description: "Wildflower mix with seasonal blooms",
      price: "$72",
      image:
        "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=500&fit=crop",
    },
  ];

  return (
    <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
          Best-Selling Bouquets
        </h2>
        <p className="text-gray-600 text-lg">
          Handpicked favorites loved by our customers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {bouquets.map((bouquet, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="relative overflow-hidden h-64">
              <img
                src={bouquet.image}
                alt={bouquet.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif text-gray-800 mb-2">
                {bouquet.name}
              </h3>
              <p className="text-gray-600 mb-3">{bouquet.description}</p>
              <p className="text-3xl font-bold text-pink-600 mb-4">
                {bouquet.price}
              </p>
              <button className="w-full py-3 bg-gradient-to-r from-pink-400 to-rose-400 text-white rounded-full font-semibold hover:from-pink-500 hover:to-rose-500 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                🌸 Order This Bouquet
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeatureSection;
