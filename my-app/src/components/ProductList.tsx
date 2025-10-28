import React from "react";
import ProductCard from "./ProductCard";
import "../index.css";

export default function ProductsList({ products }: { products: any[] }) {
  return (
    <div className="products-wrapper">
      <div className="products-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
