import Link from "next/link";

export default function ProductCard({ product }) {
  const { title, price, slug, image } = product;

  return (
    <Link href={`/products/${slug}`}>
      <div className="border rounded-lg p-4 hover:shadow-lg cursor-pointer">
        <img
          src={`http://localhost:1337${image?.url}`}
          alt={title}
          className="h-48 w-full object-cover rounded"
        />
        <h2 className="font-semibold mt-2">{title}</h2>
        <p className="text-green-600 font-bold">₹{price}</p>
      </div>
    </Link>
  );
}
