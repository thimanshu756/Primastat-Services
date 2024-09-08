import React, { FC } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
interface DotsProps {
  hide?: boolean;
}
interface HeadingProps {
  text: string;
}

interface content {
  heading: string;
  text: string;
}

interface PrimsaSectionProps {
  title: string;
  content: content;
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

  const textVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 2.5 },
    },
  };

  const imageVariants = {
    offscreen: { x: 100, opacity: 0 },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.4, duration: 2.5 },
    },
  };

  return (
    <div className={`py-8 md:py-16 ${additionalClasses}`}>
      <Heading text={title} />
      <div className={`flex ${alignmentClasses} mt-12`}>
        <motion.div
          id={`text-${title}`}
          className="md:w-[60%] w-full"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
        >
          <div className="w-[100%] md:w-[70%]">
            <p className="text-center md:text-left text-2xl md:text-3xl font-semibold">
              {content.heading}
            </p>
            <div
              className="text-md pt-4 text-center md:text-left"
              dangerouslySetInnerHTML={{ __html: content.text }}
            />
          </div>
        </motion.div>
        <motion.div
          id={`image-${title}`}
          className={`${imageWidth} object-cover rounded-3xl p-4`}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: false, amount: 0.5 }}
          variants={imageVariants}
        >
          <Image src={imageSrc} alt={imageAlt} height={800} width={800} />
        </motion.div>
      </div>
    </div>
  );
};
export default PrimsaSection;
