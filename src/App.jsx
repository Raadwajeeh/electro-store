import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    console.log(product);
    setCart([...cart, product]);
  }

  function handleRemoveFromCart(indexToRemove) {
    const updatedCart = cart.filter((item, index) => index !== indexToRemove);
    setCart(updatedCart);
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={<HomePage onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          }
        />

        <Route
          path="/products"
          element={<ProductsPage onAddToCart={handleAddToCart} />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetailsPage onAddToCart={handleAddToCart} />}
        />
      </Routes>
    </>
  );
}

export default App;