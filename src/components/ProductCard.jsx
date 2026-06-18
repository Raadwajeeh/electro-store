import { Link } from "react-router-dom";

function ProductCard({
  product,
  image,
  category,
  title,
  description,
  price,
  onAddToCart,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="bg-white h-64 flex items-center justify-center p-6">
        <img
          src={image}
          alt={title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition duration-300"
        />
      </Link>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-sm text-blue-500 font-semibold mb-2 capitalize">
          {category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-bold text-zinc-900 mb-2 hover:text-blue-500 line-clamp-2">
            {title}
          </h3>
        </Link>

        <p className="text-zinc-500 mb-5 text-sm line-clamp-3">
          {description}
        </p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold text-zinc-900">
              €{price}
            </span>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <Link
              to={`/product/${product.id}`}
              className="text-center border border-zinc-300 hover:border-blue-500 px-4 py-2 rounded-lg font-semibold"
            >
              Details
            </Link>

            <button
              onClick={() => onAddToCart(product)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;