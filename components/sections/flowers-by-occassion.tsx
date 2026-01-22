function FlowersByOccassion() {
  const occasions = [
    {
      name: "Birthdays",
      emoji: "🎂",
      description: "Bright & cheerful arrangements",
    },
    { name: "Weddings", emoji: "💒", description: "Elegant bridal bouquets" },
    {
      name: "Anniversaries",
      emoji: "💝",
      description: "Romantic classic roses",
    },
    {
      name: "Valentine's Day",
      emoji: "💕",
      description: "Love-filled surprises",
    },
    { name: "Sympathy", emoji: "🕊️", description: "Peaceful white florals" },
    {
      name: "Thank You",
      emoji: "🙏",
      description: "Thoughtful gratitude blooms",
    },
  ];
  return (
    <section className="relative z-10 py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-serif text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
        Flowers for Every Occasion
      </h2>
      <p className="text-center text-gray-600 text-lg mb-16">
        Celebrate life's special moments
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {occasions.map((occasion, idx) => (
          <div
            key={idx}
            className="group bg-gradient-to-br from-white to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-pink-100 hover:border-pink-300"
          >
            <div className="text-5xl mb-4">{occasion.emoji}</div>
            <h3 className="text-2xl font-serif text-gray-800 mb-2">
              {occasion.name}
            </h3>
            <p className="text-gray-600 mb-6">{occasion.description}</p>
            <button className="w-full py-3 bg-gradient-to-r from-pink-300 to-purple-300 text-gray-800 rounded-full font-semibold hover:from-pink-400 hover:to-purple-400 transition-all duration-300 group-hover:shadow-lg">
              🌺 Order for This Occasion
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FlowersByOccassion;
