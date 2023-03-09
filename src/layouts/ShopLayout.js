import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "../components/shopping/Filter";

const ShopLayout = () => {
  return (
    <section className="text-white">
      <div className="flex flex-row-reverse px-6">
        <Filter />
      </div>
      <Outlet />
    </section>
  );
};

export default ShopLayout;
