import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { homeNavs } from "../constants/data";
import { BiMenu, BiX } from "react-icons/bi";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const clickHandler = () => {
    setToggle(!toggle);
  };

  return (
    <div className="flex justify-between items-center bg-gradient-secondary w-full px-6 h-[50px] text-white font-sans">
      <span className="border border-white p-1 text-white">logo</span>
      <ul className="flex gap-4">
        {homeNavs.map((nav, index) => (
          <li className="capitalize" key={nav.id + "-" + index}>
            <NavLink
              to={nav.to}
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-dashed font-semibold text-purple border-purple transition-all duration-200 text-secondary hover:text-white"
                  : "hover:text-purple font-semibold cursor-pointer"
              }
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>
      <div
        onClick={clickHandler}
        className="cursor-pointer hover:text-purple md:hidden"
      >
        {!toggle ? <BiMenu size={32} /> : ""}
      </div>
      <div
        className={`${
          toggle
            ? "fixed right-0 top-0 p-4 w-[300px] rounded-lg border-r border-r-gray min-h-screen bg-gradient-secondary ease-in-out duration-700"
            : "fixed right-[-100%]"
        } `}
      >
        <div
          onClick={clickHandler}
          id="menu"
          className="flex justify-end cursor-pointer hover:text-secondary mb-6"
        >
          {toggle ? <BiX size="32px" /> : ""}
        </div>
        <div className="flex justify-between">
          <span className="border border-white p-1 cursor-pointer hover:text-purple">
            logo
          </span>
        </div>
        <ul className="flex flex-col mt-6 gap-2">
          {homeNavs.map((nav) => (
            <li key={nav.id}>
              <NavLink
                to={nav.to}
                className={({ isActive }) =>
                  isActive
                    ? "border-2 p-2 border-dashed font-semibold text-purple border-purple transition-all duration-200 text-secondary hover:text-white"
                    : "p-2 hover:text-purple font-semibold cursor-pointer"
                }
              >
                {nav.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
