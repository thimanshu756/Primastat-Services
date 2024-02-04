import React, { useState } from "react";
import Image from "next/image";
import Card from "./card"; // Adjust the import path as needed
import Link from "next/link";
type CardData = {
  index: number;
  title: string;
  imageSrc: string;
  description: string;
  route:String;
};

type HoverState = number | null;
interface CardProps {
  data: CardData;
  hovered: HoverState;
  handleMouseEnter: (index: number) => void;
  handleMouseLeave: () => void;
}

export default function Animation() {
  const [hovered, setHovered] = useState<HoverState>(null);
  const cardData: CardData[] = [
    {
      index: 0,
      title: "Data Visualization",
      imageSrc: `/public/services/home-animation/data-visualization.png`,
      description:
        "We help you unlock insights that drive growth and enhance decision-making",
        route:"/service/dataVisualization"
    },
    {
      index: 1,
      title: "Big Data",
      imageSrc: `/public/services/home-animation/big-data.png`,
      description: "Organize, manage and transform your data",
      route:"/service/bigData" 
    },
    {
      index: 2,

      title: "Machine Learning",
      imageSrc: `/public/services/home-animation/machine-learning.png`,
      description: "Tailored ML solutions for exponential growth",
      route: "/service/machineLearning"
    },
  ];

  const handleMouseEnter = (index: number): void => {
    setHovered(index);
  };

  const handleMouseLeave = (): void => {
    setHovered(null);
  };

  return (
    <div className="relative w-full animation-container mb-[10vh] md:mb-[40vh]">
    <div className="flex flex-col md:flex-row md:justify-between  bg-black">
      {cardData.map((data) => (
        <Card
          key={data.index}
          data={data}
          hovered={hovered}
          handleMouseEnter={handleMouseEnter}
          handleMouseLeave={handleMouseLeave}
        />
      ))}
    </div>
  </div>
  );
}
