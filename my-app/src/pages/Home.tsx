
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import ProductCard from "../components/ProductCard";
import CustomCarousel from "../components/CustomCarousel";
import ProductsList from "../components/ProductList";
export default function Home() {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProducts().then((data) => {
      setProducts(data);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center mt-10">جاري تحميل المنتجات...</p>;

  return (
  
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-6 card">
      <CustomCarousel>
      <img src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="slide1" />
      <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="slide2" />
      <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="slide2" />
      <img src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="slide2" />
      
    </CustomCarousel>
      
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
      <ProductsList products={products} />

    </div>
  );
}
