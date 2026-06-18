import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
                <h1 className="text-3xl font-bold">Loading product details...</h1>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="max-w-7xl mx-auto px-4 py-12 flex justify-center items-center min-h-[50vh]">
                <h1 className="text-4xl font-bold">Product not found</h1>
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full rounded-2xl shadow-lg"
                />

                <div>
                    <p className="text-blue-500 font-semibold mb-3">
                        {product.category}
                    </p>

                    <h1 className="text-4xl font-bold mb-4">
                        {product.title}
                    </h1>

                    <p className="text-zinc-600 text-lg mb-6">
                        {product.description}
                    </p>

                    <p className="text-4xl font-bold mb-8">
                        €{product.price}
                    </p>

                    <button
                        onClick={() => onAddToCart(product)}
                        className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsPage;