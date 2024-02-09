import PrimsaSectionsData from "@/data/prismSection";
import Image from "next/image";
import React, { FC } from "react";
import PrimsaSection from "./primsaSection";



const Prisma: FC = () => {
  return (
    <div className="bg-white w-[100vw] px-[7vw] bg-[#f5f5f5] pt-16">
      {PrimsaSectionsData.map((section, index) => (
        <PrimsaSection
          key={index}
          title={section.title}
          content={section.content}
          imageSrc={section.imageSrc}
          imageAlt={section.imageAlt}
          alignment={section.alignment}
          additionalClasses={section.additionalClasses}
        />
      ))}
    </div>
  );
};

export default Prisma;
