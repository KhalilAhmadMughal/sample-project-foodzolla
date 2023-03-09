import React from "react";
const ChefCard = (props) => {
  return (
    <section className="p-10 flex flex-col justify-between rounded-xl bg-[rgba(0,0,0,.05)] w-[320px] h-[350px] ">
      <div className="flex gap-6 items-center">
        <span className="h-[27px] w-[42px]">
          <img
            src={props.icon}
            alt="quotes"
            className="w-full h-full object-contain"
          />
        </span>
        <h2 className="capitalize text-2xl font-semibold">{props.type}</h2>
      </div>
      <p className="font-poppins text-[18px]">{props.content}</p>
      <div className="flex items-center gap-4">
        <div className="rounded-full h-[48px] w-[48px]">
          <img
            src={props.image}
            alt=""
            className="h-full w-full object-contain rounded-full"
          />
        </div>
        <div>
          <h2 className="font-poppins text-[20px] capitalize">{props.name}</h2>
          <p className={`capitalize font-poppins text-[16px] text-gray`}>
            {props.title}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChefCard;
