import React from "react";
import ProductSection from "./ProductSection";
const ShopSalad = (props) => {
  return (
    <section className="p-6 text-black flex flex-col gap-6">
      <ProductSection title={"Salads"} products={props.product} />
    </section>
  );
};

export default ShopSalad;
