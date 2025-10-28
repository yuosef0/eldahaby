import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../index.css";
export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} className="product-image" />
      </Link>
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">{product.price} USD</p>
      <button
        className="add-to-cart-button"
        onClick={() => addToCart(product)}
      >
        أضف إلى السلة
      </button>


    </div>
  );
}
