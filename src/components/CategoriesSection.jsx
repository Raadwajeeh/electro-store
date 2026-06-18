import { Link } from "react-router-dom";

const categories = [
  {
    id: 1,
    name: "Laptops",
    icon: "💻",
    description: "Powerful machines for work & study",
    bg: "from-blue-500 to-blue-700",
  },
  {
    id: 2,
    name: "Smartphones",
    icon: "📱",
    description: "Latest models with top performance",
    bg: "from-purple-500 to-purple-700",
  },
  {
    id: 3,
    name: "Headphones",
    icon: "🎧",
    description: "Crystal clear sound & comfort",
    bg: "from-pink-500 to-pink-700",
  },
  {
    id: 4,
    name: "Gaming",
    icon: "🎮",
    description: "Level up your gaming experience",
    bg: "from-green-500 to-green-700",
  },
];

function CategoriesSection() {
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">
          Shop by Category
        </h2>
        <p className="text-zinc-500 text-center mb-12 text-lg">
          Find exactly what you're looking for
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              to="/products"
              key={cat.id}
              className={`bg-gradient-to-br ${cat.bg} text-white rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg`}
            >
              <span className="text-5xl mb-4">{cat.icon}</span>
              <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
              <p className="text-sm opacity-80">{cat.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
