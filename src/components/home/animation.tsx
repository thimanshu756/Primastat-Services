import React, { useState } from "react";
import Image from "next/image";
import Card from "./card"; // Adjust the import path as needed
type CardData = {
  index: number;
  title: string;
  imageSrc: string;
  description: string;
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
      imageSrc:
        "https://c.animaapp.com/MXeDvc3F/img/-9d6d9e55-709a-4703-b411-51bd0c201705-1-1.svg",
      description:
        "We turn data into your strategic ally, unlocking insights that drive growth and informed decision-making for maximum impact.",
    },
    {
      index: 1,
      title: "Big Data",
      imageSrc: "https://c.animaapp.com/MXeDvc3F/img/etl-1.svg",
      description:
        "From efficient warehousing to powerful analytics, we turn big data challenges into opportunities, driving smarter decisions for your business success.",
    },
    {
      index: 2,
      title: "Machine Learning",
      imageSrc:
        "https://c.animaapp.com/MXeDvc3F/img/ai-brain-learning-scaled-e1689603131824-1.svg",
      description:
        "From end-to-end model management to powerful inference, we bring AI solutions that propel your success through data-driven insights and innovation.",
    },
  ];

  const handleMouseEnter = (index: number): void => {
    setHovered(index);
  };

  const handleMouseLeave = (): void => {
    setHovered(null);
  };

  return (
    <div className="relative w-full animation-container">
      <div className="flex justify-between">
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
