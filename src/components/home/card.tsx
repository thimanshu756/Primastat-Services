import React from "react";

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

const Card: React.FC<CardProps> = ({
  data,
  hovered,
  handleMouseEnter,
  handleMouseLeave,
}) => {
  const { index, title, imageSrc, description } = data;


  const getCardClassName = (): string => {
    
    return `card relative overflow-hidden p-4 flex w-full flex-col justify-between items-start text-white ${
      hovered === index ? "hovered" : ""
    } }`;
  };

  // Background image style
  const backgroundImageStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <button
      className={getCardClassName()}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
      style={backgroundImageStyle} // Apply background image here
    >
      <div className="text-3xl font-semibold text-left mb-4 z-10 p-8">
        {title}
      </div>
      <p className={"mt-4 p-8 text-left mb-12 text-xl " }>{description}</p>
    </button>
  );
};

export default Card;
