import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProductById } from "../services/productService";

function ProductDetailsPage({ onAddToCart }) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      setLoading(true);
      try {
        const productFromApi = await getProductById(id);
        setProduct(productFromApi);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Loading product details...
        </h1>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col justify-center items-center gap-6 min-h-[50vh]">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Product not found
        </h1>
        <Link to="/products" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg">
          Back to products
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-zinc-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12">
        <Link to="/products" className="inline-block mb-6 text-blue-500 font-semibold hover:text-blue-600">
          ← Back to products
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-5 md:p-8 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="bg-white h-72 md:h-[420px] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          <div>
            <p className="text-blue-500 font-semibold mb-3 capitalize">
              {product.category}
            </p>

            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-zinc-600 text-base md:text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            <p className="text-3xl md:text-4xl font-bold mb-8">
              €{product.price}
            </p>

            <button
              onClick={() => onAddToCart(product)}
              className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
