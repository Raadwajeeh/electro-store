import { products } from "../data/products";

export function getProducts() {
  return products;
}

export function getProductById(id) {
  return products.find((product) => product.id === Number(id));
}