function ProductCard({
  product,
  image,
  category,
  title,
  description,
  price,
  onAddToCart,
}) 

{
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <img src={image} alt={title} className="w-full h-56 object-cover" />

      <div className="p-5">
        <p className="text-sm text-blue-500 font-semibold mb-2">{category}</p>

        <h3 className="text-xl font-bold text-zinc-900 mb-2">{title}</h3>

        <p className="text-zinc-500 mb-4">{description}</p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-zinc-900">€{price}</span>

          <button
            onClick={() => onAddToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;