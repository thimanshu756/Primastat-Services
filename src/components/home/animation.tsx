import Image from "next/image";
import React, { useState } from "react";

type HoverState = number | null;

export default function Animation() {
  const [hovered, setHovered] = useState<HoverState>(null);

  const handleMouseEnter = (index: number): void => {
    setHovered(index);
  };

  const handleMouseLeave = (): void => {
    setHovered(null);
  };

  const getCardClassName = (index: number): string => {
    return `card ${hovered === index ? "hovered" : ""}`;
  };

  const getTextClassName = (index: number): string => {
    return `text-details ${hovered === index ? "hovered" : ""}`;
  };
  return (
    <div className="relative w-full h-[600px] bg-[#262338] border border-solid border-black">
      <div className="flex justify-between mx-auto max-w-[1444px] h-[600px]">
        {/* Data Visualization */}
        <div
          className={getCardClassName(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[280px] h-[280px] mt-20 flex justify-start items-center">
            <Image
              height={200}
              width={200}
              className="w-full h-full object-cover"
              alt="Data Visualization"
              src="https://c.animaapp.com/MXeDvc3F/img/-9d6d9e55-709a-4703-b411-51bd0c201705-1-1.svg"
            />
          </div>
          <div className="text-white text-3xl font-semibold text-left mt-4">
            Data Visualization
          </div>
          <p className={getTextClassName(0)}>
            We turn data into your strategic ally, unlocking insights that drive
            growth and informed decision-making for maximum impact
          </p>
        </div>

        {/* Big Data */}
        <div
          className={getCardClassName(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[314px] h-[255px] mt-20  flex justify-start items-center">
            <Image
              height={200}
              width={200}
              className="w-full h-full object-cover"
              alt="Big Data"
              src="https://c.animaapp.com/MXeDvc3F/img/etl-1.svg"
            />
          </div>
          <div className="text-white text-3xl font-semibold text-left mt-4">
            Big Data
          </div>
          <p className={getTextClassName(1)}>
            From efficient warehousing to powerful analytics, we turn big data
            challenges into opportunities, driving smarter decisions for your
            business success
          </p>
        </div>

        {/* Machine Learning */}
        <div
          className={getCardClassName(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          <div className="w-[377px] h-[283px] mt-12  flex justify-start items-center">
            <Image
              height={200}
              width={200}
              className="w-full h-full object-cover"
              alt="Machine Learning"
              src="https://c.animaapp.com/MXeDvc3F/img/ai-brain-learning-scaled-e1689603131824-1.svg"
            />
          </div>
          <div className="text-white text-3xl font-semibold text-left mt-4">
            Machine Learning
          </div>
          <p className={getTextClassName(2)}>
            From end-to-end model management to powerful inference, we bring AI
            solutions that propel your success through data-driven insights and
            innovation
          </p>
        </div>
      </div>
    </div>
  );
}
