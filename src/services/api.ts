const BASE_URL = "https://dummyjson.com";

export async function getProducts() {
  const res = await fetch(`${BASE_URL}/products?limit=20`);
  const data = await res.json();
  return data.products;
}

export async function getProductById(id: number) {
  const res = await fetch(`${BASE_URL}/products/${id}`);
  return await res.json();
}
