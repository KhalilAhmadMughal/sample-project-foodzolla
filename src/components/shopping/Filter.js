import React, { useState, useContext } from "react";
import { FilterContext } from "../../pages/ShopPage";
import { BsFillFunnelFill } from "react-icons/bs";
import { BiX } from "react-icons/bi";

const Filter = () => {
  const { filterProducts, setFilterProducts } = useContext(FilterContext);

  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };

  const filterHandler = (event) => {
    setFilterProducts(event.target.innerHTML);
  };
  return (
    <section className="relative text-black">
      <div
        onClick={clickHandler}
        className="absolute right-0 z-20 h-[60px] w-[60px] rounded-full bg-gradient-secondary flex items-center justify-center text-purple cursor-pointer hover:shadow-xl border-[4px] border-white"
      >
        {!toggle ? <BsFillFunnelFill size={32} /> : <BiX size={52} />}
      </div>
      <div
        className={`absolute text-white flex flex-col gap-4 h-[200px] w-[200px] bg-gradient-secondary right-5 top-5 p-4 rounded-lg shadow-xl z-10 ${
          toggle ? "block" : "hidden"
        }`}
      >
        <h2 className="font-semibold text-xl">Filter Products</h2>
        <ul>
          <li
            onClick={() => {
              setFilterProducts("");
            }}
            className={`capitalize cursor-pointer hover:text-purple ${
              filterProducts === ""
                ? "border-2 border-dotted p-1 text-purple "
                : ""
            }`}
          >
            all
          </li>
          <li
            onClick={filterHandler}
            className={`capitalize cursor-pointer hover:text-purple ${
              filterProducts === "salads"
                ? "border-2 border-dotted p-1 text-purple "
                : ""
            }`}
          >
            salads
          </li>
          <li
            onClick={filterHandler}
            className={`capitalize cursor-pointer hover:text-purple ${
              filterProducts === "sandwiches"
                ? "border-2 border-dotted p-1 text-purple "
                : ""
            }`}
          >
            sandwiches
          </li>
          <li
            onClick={filterHandler}
            className={`capitalize cursor-pointer hover:text-purple ${
              filterProducts === "pastas"
                ? "border-2 border-dotted p-1 text-purple "
                : ""
            }`}
          >
            pastas
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Filter;
