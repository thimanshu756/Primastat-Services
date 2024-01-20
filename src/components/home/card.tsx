import Image from "next/image";
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
        bgColorClass = "";
    }
    return `card p-4 flex flex-col justify-center items-start ${
      hovered === index ? "hovered" : ""
    } ${bgColorClass}`;
  };

  const getTextClassName = (): string => {
    return `text-details mt-4 ${hovered === index ? "hovered" : ""}`;
  };

  return (
    <button
      className={getCardClassName()}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={handleMouseLeave}
    >
      <div className="text-white text-3xl font-semibold text-left mb-4">
        {title}
      </div>
      <div className="h-[50%] flex justify-center items-center">
        <Image height={250} width={250} alt={title} src={imageSrc} />
      </div>
      <p className={getTextClassName()}>{description}</p>
    </button>
  );
};

export default Card