import React from "react";
import InfoBox from "./InfoBox";
import { aboutImage } from "../constants/data";
const About = () => {
  const content =
    "Quality in a product or service is not what the supplier puts in. it is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe.";
  const title = "We provide authentic & healthy food, with variety.";
  const buttonText = "get started";
  return (
    <section className="sm:gap-4 md:gap-8 lg:gap-14 sm:grid sm:grid-cols-2">
      <div className="h-[300px]">
        <img src={aboutImage} alt="" className="w-full h-full object-cover" />
      </div>
      <InfoBox title={title} content={content} buttonText={buttonText} />
    </section>
  );
};

export default About;
