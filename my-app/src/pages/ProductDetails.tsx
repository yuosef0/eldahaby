import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../services/api";
import { useCart } from "../context/CartContext";
import "../index.css";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (id) getProductById(Number(id)).then(setProduct);
  }, [id]);

  if (!product) return <p className="text-center mt-10 text-lg">جاري تحميل المنتج...</p>;

  return (
    <div className="product-details-container">
      <div className="product-details-wrapper">
        <div className="product-image-section">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-image"
          />
        </div>

        <div className="product-info">
          <h1 className="product-title">{product.title}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>

          <button
            onClick={() => addToCart(product)}
            className="add-to-cart-btn"
          >
            🛒 أضف للسلة
          </button>
        </div>
      </div>

      <div className="back-section mt-8">
        <Link to="/" className="back-link">
          ← العودة إلى الصفحة الرئيسية
        </Link>
      </div>
    </div>
  );
}
