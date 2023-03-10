import React, { useState, createContext } from "react";
import Filter from "../components/shopping/Filter";
import ProductSection from "../components/shopping/ProductSection";

export const FilterContext = createContext(null);
const ShopPage = (props) => {
  const [filterProducts, setFilterProducts] = useState("");
  return (
    <FilterContext.Provider value={{ filterProducts, setFilterProducts }}>
      <section>
        <div className="flex flex-row-reverse px-6">
          <Filter />
        </div>
        <div className="p-6 text-black flex flex-col gap-6 min-h-[355px]">
          {!filterProducts ? (
            <div>
              <ProductSection title={"Salads"} products={props.salads} />
              <ProductSection title={"Sandwichs"} products={props.sandwichs} />
              <ProductSection title={"Pastas"} products={props.pastas} />
            </div>
          ) : (
            <div>
              <ProductSection
                title={filterProducts}
                products={
                  filterProducts === "salads"
                    ? props.salads
                    : filterProducts === "pastas"
                    ? props.pastas
                    : props.sandwichs
                }
              />
            </div>
          )}
        </div>
      </section>
    </FilterContext.Provider>
  );
};

export default ShopPage;
