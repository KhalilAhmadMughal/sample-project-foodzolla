import React from "react";
import CustomButton from "../CustomButton";

const ProductCard = (props) => {
  return (
    <div className="mx-auto flex flex-col w-[280px] h-[350px] rounded-lg  bg-[rgba(0,0,0,.1)] hover:scale-105 hover:ease-in-out hover:duration-500">
      <div className="w-full h-[60%] rounded-lg ">
        <img
          className="h-full w-full rounded-lg"
          src={props.product.pic}
          alt=""
        />
      </div>
      <div className="px-4 mt-2 flex-col w-full">
        <div className=" flex justify-between items-center w-full">
          <h2 className="capitalize w-[83%] h-full line-clamp-1">
            {props.product.name}
          </h2>
          <p className="flex-1 flex items-center justify-center text-[12px] text-green font-semibold">
            {props.product.price + " Rs."}
          </p>
        </div>
      </div>
      <div className="px-4 mb-auto">
        <p className="text-[rgba(0,0,0,.5)] w-full text-xs line-clamp-3 leading-4">
          {props.product.description}
        </p>
      </div>
      <div className="p-2">
        <CustomButton>Add</CustomButton>
      </div>
    </div>
  );
};

export default ProductCard;
