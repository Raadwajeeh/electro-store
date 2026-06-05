import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import CartPage from "./pages/CartPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(product) {
    console.log(product);
    setCart([...cart, product]);
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
        element={<CartPage cart={cart} />}
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