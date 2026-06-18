import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-zinc-950 text-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        <div>
          <p className="text-blue-500 font-semibold mb-4">
            New Technology Collection
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover The Best Electronic Products
          </h1>

          <p className="text-zinc-400 text-base md:text-lg mb-8">
            View electronic products from an external API in a simple responsive
            frontend application.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/products"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-center font-semibold"
            >
              View Products
            </Link>

            <Link
              to="/cart"
              className="border border-zinc-700 hover:bg-zinc-800 px-6 py-3 rounded-lg text-center font-semibold"
            >
              View Cart
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Electronics"
            className="rounded-2xl w-full max-w-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
