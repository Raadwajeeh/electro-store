function CartPage({ cart }) {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">

            <h1 className="text-4xl font-bold mb-8">
                Shopping Cart
            </h1>

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

                        <span className="text-xl font-bold">
                            €{item.price}
                        </span>
                    </div>
                ))}
                <div className="mt-8 bg-zinc-900 text-white rounded-xl p-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Total</h2>
                    <span className="text-3xl font-bold">€{totalPrice}</span>
                </div>
            </div>

        </div>
    );
}

export default CartPage;