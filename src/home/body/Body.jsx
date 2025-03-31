import React from "react";
import ProductCard from "./ProductCard";
import { useCartContext } from "../../context/cartContext/CartContext";

const Body = () => {
  const { products } = useCartContext();

  return (
    <div className="flex flex-wrap gap-4 m-4">
      {products.map((product) => {
        return (
          <ProductCard key={product.id} productDetails={product}></ProductCard>
        );
      })}
    </div>
  );
};

export default Body;
