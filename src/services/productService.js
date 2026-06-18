const API_URL = "https://fakestoreapi.com/products/category/electronics";

export async function getProducts() {
  const response = await fetch(API_URL);
  return await response.json();
}

export async function getProductById(id) {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  return await response.json();
}