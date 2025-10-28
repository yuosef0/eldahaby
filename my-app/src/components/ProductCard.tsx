import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-3 hover:shadow-lg transition bg-white">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded" />
        <h2 className="text-lg font-semibold mt-2">{product.title}</h2>
      </Link>
      <p className="">{product.stock}</p>
      <p>{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-3 py-1 rounded mt-2 hover:bg-blue-700"
      >
        أضف للسلة
      </button>
    </div>
  );
}
