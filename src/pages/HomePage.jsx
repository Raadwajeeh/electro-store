import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function HomePage({ onAddToCart }) {
  return (
    <>
      <Hero />

      <section className="bg-zinc-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                image={product.image}
                category={product.category}
                title={product.title}
                description={product.description}
                price={product.price}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

export default HomePage;