const API_URL = "http://localhost:1337/api";

export async function getProducts() {
  const res = await fetch(`${API_URL}/products?populate=image`, {
    cache: "no-store",
  });
  const json = await res.json();
  return json.data;
}

export async function getProduct(slug) {
   const res = await fetch(
    `http://localhost:1337/api/products?filters[slug][$eq]=${slug}&populate=*`,
    {
      cache: "no-store",
    }
  );
    const json = await res.json();
  return json?.data?.[0] || null;
}
