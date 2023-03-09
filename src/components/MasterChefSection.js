import React from "react";
import { masterChefs } from "../constants/data";
import ChefCard from "./ChefCard";
const MasterChefSection = () => {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] font-bold">
          We have world class Master Chef.
        </h1>
        <p className={` text-lg`}>
          We will make shure, we provide authentic and healthy food. Customer's
          health is our first priority.
        </p>
        <p className="text-[rgba(0,0,0,.7)] text-sm">
          Cooking for me is a way to wind down. It’s different from cooking on
          camera, where you have to do everything twice, for a wide shot and a
          close-up
        </p>
      </div>
      <div className="my-6 flex flex-col items-center gap-4 sm:grid sm:grid-cols-3">
        {masterChefs.map((shef, index) => (
          <div className="flex justify-center" key={shef.id + "-" + index}>
            <ChefCard
              key={shef.id}
              id={shef.id}
              icon={shef.icon}
              name={shef.name}
              content={shef.content}
              title={shef.title}
              image={shef.img}
              type={shef.type}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MasterChefSection;
