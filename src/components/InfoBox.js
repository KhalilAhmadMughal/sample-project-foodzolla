import React from "react";

import CustomButton from "./CustomButton";

const InfoBox = (props) => {
  return (
    <section className="flex flex-col gap-6 my-10 w-full">
      <h1 className="text-[32px] font-bold">{props.title}</h1>
      <p className="">{props.content}</p>
      <div>
        <CustomButton>{props.buttonText}</CustomButton>
      </div>
    </section>
  );
};

export default InfoBox;
