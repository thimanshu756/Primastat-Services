import Link from "next/link";
import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="h-[60vh] md:h-[80vh] text-black font-['Roboto', 'Helvetica'] bg-cover bg-center"
      style={{
        backgroundImage: `url(${"/public/case-studies/case-study-hero.png"})`,
      }}
    >
      <div className="flex justify-start items-center  flex-col  h-full ">
        <p className="text-black text-3xl md:text-6xl font-semibold mt-20">
          Case Studies by Primastat
        </p>
        <p className="text-black text-sm md:text-3xl font-semibold  mt-2 md:mt-4">
          Real-world Solutions and Impactful Results
        </p>
      </div>
    </div>
  );
};

export default Hero;
