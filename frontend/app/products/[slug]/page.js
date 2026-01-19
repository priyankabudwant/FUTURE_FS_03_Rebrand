import { getProduct } from "../../../lib/app";

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = await getProduct(slug);

  if (!product) return <p>Product not found</p>;

  const { title, price, image, description } = product;

  return (
    <div className="p-10 max-w-4xl mx-auto">
      <img
        src={`http://localhost:1337${image?.url}`}
        alt={title}
        className="w-full max-w-md rounded"
      />
      <h1 className="text-3xl font-bold mt-6">{title}</h1>
      <p className="text-xl text-green-600 mt-2">₹{price}</p>
      <p className="mt-4 text-gray-700">
        {description?.[0]?.children?.[0]?.text}
      </p>
    </div>
  );
}
