import Image from "next/image";
import React, { FC } from "react";

interface DotsProps {
  hide?: boolean;
}
interface HeadingProps {
  text: string;
}

interface Content {
  heading: string;
  text: string;
}

interface PrimsaSectionProps {
  title: string;
  content: Content;
  imageSrc: string;
  imageAlt: string;
  alignment?: "between" | "start";
  additionalClasses?: string;
}

const Dots: FC<DotsProps> = ({ hide = false }) => {
  return (
    <span
      className={`h-2 w-2 mx-8 rounded-full bg-black ${
        hide ? "hidden md:block" : ""
      }`}
    />
  );
};

const Heading: FC<HeadingProps> = ({ text }) => {
  return (
    <div className="flex justify-center items-center py-1 md:py-8">
      <Dots hide={true} />
      <Dots />
      <p className="text-3xl md:text-5xl">
        prima <strong>{text}</strong>
      </p>
      <Dots />
      <Dots hide={true} />
    </div>
  );
};

const PrimsaSection: FC<PrimsaSectionProps> = ({
  title,
  content,
  imageSrc,
  imageAlt,
  alignment = "between",
  additionalClasses = "",
}) => {
  const imageWidth = alignment === "between" ? "md:w-[40%] w-full" : "w-full";
  const alignmentClasses =
    alignment === "between"
      ? "justify-between items-center flex-col md:flex-row"
      : "justify-start items-start flex-col";

  return (
    <div className={`py-8 md:py-16 ${additionalClasses}`}>
      <Heading text={title} />
      <div className={`flex ${alignmentClasses} mt-12`}>
        <div className="md:w-[60%] w-full">
          <div className="w-[100%] md:w-[70%]">
            <p className="text-center md:text-left text-2xl md:text-3xl font-semibold">
              {content.heading}
            </p>
            <div
              className="text-md pt-4 text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
          </div>
        </div>
        <div className={`${imageWidth}  object-cover rounded-3xl p-4`}>
          <Image src={imageSrc} alt={imageAlt} height={800} width={800} />
        </div>
      </div>
    </div>
  );
};

export default PrimsaSection;
