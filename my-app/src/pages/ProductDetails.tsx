import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) getProductById(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-10">جاري تحميل المنتج...</p>;

  return (
    <div className="p-6 flex flex-col md:flex-row gap-6">
      <img src={product.thumbnail} alt={product.title} className="w-64 h-64 object-cover rounded" />
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-gray-600 mt-2">{product.description}</p>
        <p className="text-green-600 font-bold mt-3 text-xl">${product.price}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-600 text-white px-4 py-2 rounded mt-4 hover:bg-blue-700"
        >
          أضف للسلة
        </button>
      </div>
    </div>
  );
}
