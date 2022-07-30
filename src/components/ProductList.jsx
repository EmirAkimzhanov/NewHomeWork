import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, handleDelete, handleEdit }) => {
  console.log(products);
  return (
    <div className="d-flex justify-content-evenly flex-wrap">
      {products.map((item) => (
        <ProductCard
          item={item}
          key={item.id}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default ProductList;
