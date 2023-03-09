import React from "react";
import ProductSection from "../components/shopping/ProductSection";

const ShopPage = (props) => {
  return (
    <section className="p-6 text-black flex flex-col gap-6">
      <ProductSection title={"Salads"} products={props.product_1} />
      <ProductSection title={"Sandwichs"} products={props.product_1} />
      <ProductSection title={"Pastas"} products={props.product_1} />
    </section>
  );
};

export default ShopPage;
