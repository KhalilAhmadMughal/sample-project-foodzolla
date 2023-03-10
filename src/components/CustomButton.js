import React from "react";

const CustomButton = (props) => {
  return (
    <button
      type={props.type}
      className="p-2 font-semibold bg-gradient-primary w-full rounded text-white capitalize hover:text-purple hover:bg-gradient-secondary"
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
