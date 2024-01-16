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
    let bgColorClass;

    switch (index) {
      case 0:
        bgColorClass = "bg-[#272339]";
        break;
      case 1:
        bgColorClass = "bg-[#273177]";
        break;
      case 2:
        bgColorClass = "bg-[#00061d]";
        break;
      default:
        bgColorClass = ""; // default background color class if needed
    }
    return `card p-4 ${hovered === index ? "hovered" : ""} ${bgColorClass}`;
  };

  const getTextClassName = (index: number): string => {
    return `text-details ${hovered === index ? "hovered" : ""}`;
  };
  return (
    <div className="relative w-full  animation-container ">
      <div className="flex justify-between">
        {/* Data Visualization */}
        <button
          className={getCardClassName(0)}
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          <div className="text-white text-3xl font-semibold text-left mt-4">
            Data Visualization
          </div>
          <div className="  h-[50%]  flex justify-start items-center">
            <Image
              height={200}
              width={200}
              alt="Data Visualization"
              src="https://c.animaapp.com/MXeDvc3F/img/-9d6d9e55-709a-4703-b411-51bd0c201705-1-1.svg"
            />
          </div>
          <p className={getTextClassName(0)}>
            We turn data into your strategic ally, unlocking insights that drive
            growth and informed decision-making for maximum impact
          </p>
        </button>

        {/* Big Data */}
        <button
          className={getCardClassName(1)}
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={handleMouseLeave}
        >
          {" "}
          <div className="text-white text-3xl font-semibold text-left mt-4">
            Big Data
          </div>
          <div className="  h-[50%] flex justify-start items-center">
            <Image
              height={200}
              width={200}
              alt="Big Data"
              src="https://c.animaapp.com/MXeDvc3F/img/etl-1.svg"
            />
          </div>
          <p className={getTextClassName(1)}>
            From efficient warehousing to powerful analytics, we turn big data
            challenges into opportunities, driving smarter decisions for your
            business success
          </p>
        </button>

        {/* Machine Learning */}
        <button
          className={getCardClassName(2)}
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={handleMouseLeave}
        >
          =
          <div className="text-white text-3xl font-semibold text-left mt-4">
            Machine Learning
          </div>
          <div className=" h-[50%] flex justify-start items-center">
            <Image
              height={200}
              width={200}
              alt="Machine Learning"
              src="https://c.animaapp.com/MXeDvc3F/img/ai-brain-learning-scaled-e1689603131824-1.svg"
            />
          </div>
          <p className={getTextClassName(2)}>
            From end-to-end model management to powerful inference, we bring AI
            solutions that propel your success through data-driven insights and
            innovation
          </p>
        </button>
      </div>
    </div>
  );
}
