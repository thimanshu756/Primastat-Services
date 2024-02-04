import React, { useState, useEffect } from "react";
import Card from "./card"; // Adjust the import path as needed

type CardData = {
  index: number;
  title: string;
  imageSrc: string;
  description: string;
  route: string;
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
  const [isMediumScreen, setIsMediumScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 768px)');
    setIsMediumScreen(mediaQuery.matches);

    function handleResize() {
      setIsMediumScreen(mediaQuery.matches);
    }

    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  const cardData: CardData[] = [
    {
      index: 0,
      title: "Data Visualization",
      imageSrc: "/public/services/home-animation/data-visualization.png",
      description: "We help you unlock insights that drive growth and enhance decision-making.",
      route: "/service/dataVisualization"
    },
    {
      index: 1,
      title: "Machine Learning",
      imageSrc: "/public/services/home-animation/machine-learning.svg",
      description: "Tailored ML solutions for exponential growth.",
      route: "/service/machineLearning"
    },
    {
      index: 2,
      title: "Big Data",
      imageSrc: "/public/services/home-animation/big-data.png",
      description: "Organize, manage and transform your data.",
      route: "/service/bigData"
    },
    // Add more cards as needed
  ];

  const handleMouseEnter = (index: number): void => {
    if (isMediumScreen) {
      setHovered(index);
    }
  };

  const handleMouseLeave = (): void => {
    if (isMediumScreen) {
      setHovered(null);
    }
  };

  return (
    <div className="relative w-full md:animation-container mb-[10vh] md:mb-[40vh]">
      <div className="flex flex-col md:flex-row md:justify-between bg-black">
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
