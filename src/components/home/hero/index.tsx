// Hero.js
import React from "react";
import HeroText from "./heroText";
import HeroImage from "./heroImage";
import AboutSection from "./aboutSection";

const Hero = () => {
  return (
    <div className="bg-white bg-[#f5f5f5] text-black font-['Roboto', 'Helvetica']">
      <div className="text-black md:mb-[10vh] md:px-[7vw] py-[5vh] md:py-[8vh]">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <HeroText />
            <HeroImage />
          </div>
        </div>
      </div>
      <AboutSection />
      <div className="text-center text-4xl font-semibold py-24">What we do</div>
    </div>
  );
};

export default Hero;
