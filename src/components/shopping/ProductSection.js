import React from "react";
import ProductCard from "./ProductCard";
import { dots } from "../../constants/data";
const ProductSection = (props) => {
  return (
    <section className="flex flex-col gap-6">
      <div className="relative flex flex-col items-center text-purple text-2xl font-bold">
        <h2 className="capitalize absolute top-[6px] bg-white px-1">
          {props.title}
        </h2>
        <span>{dots}</span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {props.products.map((currProduct) => (
          <div
            key={currProduct.id + "-" + currProduct.type}
            className="flex justify-center my-4"
          >
            <ProductCard product={currProduct} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
