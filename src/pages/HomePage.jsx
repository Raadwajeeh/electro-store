import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import CategoriesSection from "../components/CategoriesSection";
import { getProducts } from "../services/productService";
import { Link } from "react-router-dom";

function HomePage({ onAddToCart }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      const productsFromApi = await getProducts();

      setProducts(productsFromApi);
      setLoading(false);
    }

    loadProducts();
  }, []);

  const featuredProducts = products.slice(0, 3);

  return (
    <>
      <Hero />
      <CategoriesSection />

      <section className="bg-zinc-100 py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Featured Products
          </h2>

          {loading ? (
            <p className="text-center text-xl font-semibold">
              Loading featured products...
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
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
          )}

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-zinc-900 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;