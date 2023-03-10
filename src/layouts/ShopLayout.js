import React from "react";
import { Outlet } from "react-router-dom";

const ShopLayout = () => {
  return (
    <section className="text-white">
      <Outlet />
    </section>
  );
};

export default ShopLayout;
