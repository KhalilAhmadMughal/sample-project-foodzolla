import React from "react";

import { features } from "../constants/data";
import FeatureCard from "./FeatureCard";
import InfoBox from "./InfoBox";

const Business = () => {
  const content =
    "Quality in a product or service is not what the supplier puts in. it is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe.";
  const title = "We provide authentic & healthy food, with variety.";
  const buttonText = "get started";
  return (
    <section className="flex flex-col sm:grid sm:grid-cols-2 sm:items-center sm:gap-4 md:gap-8 lg:gap-14 text-black rounded-xl ">
      <InfoBox title={title} content={content} buttonText={buttonText} />
      <div className="flex flex-col gap-6 my-10 md:my-20">
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            icon={feature.icon}
            title={feature.title}
            content={feature.content}
          />
        ))}
      </div>
    </section>
  );
};

export default Business;
