import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="text-center mt-10 text-lg">السلة فارغة 🛒</p>;

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛍️ Cart</h1>
      <div className="cart-list">
        {cart.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="flex items-center gap-3">
              <img src={item.thumbnail} alt={item.title} />
              <div className="cart-item-info">
                <h2>{item.title}</h2>
                <p>${item.price} × {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="cart-remove-btn"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <h2 className="cart-total">الإجمالي: ${total.toFixed(2)}</h2>
      <button onClick={clearCart} className="cart-clear-btn">
        تفريغ السلة
      </button>
    </div>
  );
}
