import { Link } from "react-router-dom";

function CartPage({ cart, onRemoveFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Your cart is empty
        </h1>

        <p className="text-zinc-500 mb-8">
          Start shopping and add products to your cart.
        </p>

        <Link
          to="/products"
          className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Shopping Cart</h1>

      <p className="text-xl mb-8">
        Total Items: {cart.length}
      </p>

      <div className="space-y-4">
        {cart.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-xl p-4 flex items-center justify-between"
          >
            <div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="text-zinc-500">{item.category}</p>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xl font-bold">€{item.price}</span>

              <button
                onClick={() => onRemoveFromCart(index)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-zinc-900 text-white rounded-xl p-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">Total</h2>
        <span className="text-3xl font-bold">€{totalPrice}</span>
      </div>
    </div>
  );
}

export default CartPage;