import { getProducts } from "../../lib/app";
import ProductCard from "../components/ProductCard";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
