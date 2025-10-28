import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0)
    return <p className="text-center mt-10 text-lg">السلة فارغة 🛒</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🛍️ سلتك</h1>
      <div className="space-y-3">
        {cart.map((item) => (
          <div key={item.id} className="flex items-center justify-between border p-3 rounded">
            <div className="flex items-center gap-3">
              <img src={item.thumbnail} alt={item.title} className="w-16 h-16 object-cover rounded" />
              <div>
                <h2 className="font-semibold">{item.title}</h2>
                <p>${item.price} × {item.quantity}</p>
              </div>
            </div>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-xl font-bold mt-4">الإجمالي: ${total.toFixed(2)}</h2>
      <button
        onClick={clearCart}
        className="bg-gray-800 text-white px-4 py-2 rounded mt-4 hover:bg-gray-900"
      >
        تفريغ السلة
      </button>
    </div>
  );
}
