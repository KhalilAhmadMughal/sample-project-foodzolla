import React from "react";

const FeatureCard = (props) => {
  return (
    <div className="p-3 hover:bg-[rgba(0,0,0,.1)] flex items-center gap-6 rounded-xl">
      <div
        className={`w-[64px] h-[64px] rounded-full bg-gradient-secondary flex justify-center items-center`}
      >
        <img src={props.icon} alt="" className="" />
      </div>
      <div className="flex-1">
        <h2 className="capitalize text-lg font-semibold leading-10">
          {props.title}
        </h2>
        <p className={`text-sm leading-5`}>{props.content}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
