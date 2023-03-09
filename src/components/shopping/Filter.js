import React, { useState } from "react";
import { BsFillFunnelFill } from "react-icons/bs";

const Filter = () => {
  const [toggle, setToggle] = useState(false);

  const clickHandler = () => {
    setToggle(!toggle);
  };
  return (
    <section className="text-black">
      <div
        onClick={clickHandler}
        className="h-[60px] w-[60px] rounded-full bg-gradient-secondary flex items-center justify-center text-purple cursor-pointer hover:shadow-xl"
      >
        {!toggle ? <BsFillFunnelFill size={32} /> : ""}
      </div>
    </section>
  );
};

export default Filter;
