function Hero() {
  return (
    <section className="bg-zinc-950 text-white min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">

        <div>
          <p className="text-blue-500 font-semibold mb-4">
            New Technology Collection
          </p>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Discover The Best Electronic Products
          </h1>

          <p className="text-zinc-400 text-lg mb-8">
            Shop laptops, smartphones, gaming accessories,
            headphones and modern electronic devices.
          </p>

          <div className="flex gap-4">
            <button className="bg-blue-500 px-6 py-3 rounded-lg">
              Shop Now
            </button>

            <button className="border border-zinc-700 px-6 py-3 rounded-lg">
              View Products
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
            alt="Electronics"
            className="rounded-2xl w-full max-w-lg"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;