import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/productService";

function ProductsPage({ onAddToCart }) {
  const products = getProducts();

  return (
    <section className="bg-zinc-100 min-h-screen py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-center mb-12">
          All Products
        </h1>

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
  );
}

export default ProductsPage;