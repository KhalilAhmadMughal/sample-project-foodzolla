import React from "react";

const CustomButton = (props) => {
  return (
    <button
      type={props.type}
      className="p-2 bg-gradient-primary w-full rounded text-black capitalize hover:text-white"
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
