import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "../index.css";

export default function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart();

  const discounted = product.discountPercentage
    ? (product.price - product.price * (product.discountPercentage / 100)).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`} className="product-link">
        <div className="product-image-wrapper">
          <img src={product.thumbnail} alt={product.title} className="product-image" />
          {product.discountPercentage && (
            <span className="discount-badge">خصم {product.discountPercentage}%</span>
          )}
        </div>
        <h3 className="product-title">{product.title}</h3>
      </Link>

      <div className="price-section">
        {product.discountPercentage ? (
          <>
            <span className="price-new">EGP {discounted}</span>
            <span className="price-old">EGP {product.price}</span>
          </>
        ) : (
          <span className="price-new">EGP {product.price}</span>
        )}
      </div>

      <button className="add-to-cart-button" onClick={() => addToCart(product)}>
        أضف إلى السلة
      </button>
    </div>
  );
}
