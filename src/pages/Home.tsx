import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import CustomCarousel from "../components/CustomCarousel";
import ProductsList from "../components/ProductList";

export default function Home() {
  const [categories, setCategories] = useState<{ name: string; products: any[] }[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts().then((data) => {
      // استخراج التصنيفات
      const grouped: Record<string, any[]> = {};
      data.forEach((item: any) => {
        const cat = item.category || "غير مصنف";
        if (!grouped[cat]) grouped[cat] = [];
        grouped[cat].push(item);
      });

      // تحويلها لمصفوفة منظمة
      const cats = Object.entries(grouped).map(([name, products]) => ({
        name,
        products,
      }));

      setCategories(cats);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center mt-10">جاري تحميل المنتجات...</p>;

  return (
    <div className="home-container">
      {/* السلايدر */}
      <CustomCarousel>
        <img
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="slide1"
        />
        <img
          src="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="slide2"
        />
        <img
          src="https://images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="slide3"
        />
      </CustomCarousel>

      {/* عرض التصنيفات */}
      <div className="categories-section">
        {categories.map((cat) => (
          <div key={cat.name} className="category-block">
            <h2 className="category-title">{cat.name}</h2>
            <ProductsList products={cat.products.slice(0, 8)} />
          </div>
        ))}
      </div>
    </div>
  );
}
