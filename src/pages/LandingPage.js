import React from "react";
import Business from "../components/Business";
import About from "../components/About";
import MasterChefSection from "../components/MasterChefSection";
const LandingPage = () => {
  return (
    <section className="text-black px-6 ">
      <About />
      <MasterChefSection />
      <Business />
    </section>
  );
};

export default LandingPage;
