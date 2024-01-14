import Image from "next/image";
import React from "react";

interface ServiceDetailsProps {
  shouldRight: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features: Array<{
    icon: string;
    text: string;
  }>;
}

const ServiceDetails: React.FC<ServiceDetailsProps> = ({
  shouldRight,
  imageSrc,
  imageAlt,
  title,
  description,
  features,
}) => {
  const textSection = (
    <div className="w-[100vw] md:w-[50vw] h-full flex justify-center items-start py-4 md:py-4 md:p-0">
      <div className="w-[90%] md:w-[70%]">
        <p className="text-blue-900 font-sans text-2xl font-extrabold leading-normal">
          {title}
        </p>
        <p className="text-black font-sans text-xl font-medium leading-normal">
          {description}
        </p>

        {features.map((feature, index) =>
          feature.icon ? (
            <p
              key={index}
              className="mt-4 text-center flex justify-start items-center  px-3 py-2 text-black font-bold text-[20px]"
            >
              <Image
                className="h-[20px] w-[20px] mr-4"
                objectFit="contain"
                alt={feature.text}
                src={feature.icon}
                width={200}
                height={200}
              />{" "}
              {feature.text}
            </p>
          ) : (
            <p
              key={index}
              className="mt-4 text-center bg-[#00114d] rounded-[14px] px-3 py-2 text-white text-[20px]"
            >
              {feature.text}
            </p>
          )
        )}
      </div>
    </div>
  );

  const imageSection = (
    <div className="w-[100vw] md:w-[50vw] h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        className={`w-full h-[60vh] object-cover rounded-3xl ${
          shouldRight
            ? "md:rounded-l-2xl md:rounded-r-none"
            : "md:rounded-r-2xl md:rounded-l-none"
        }  p-4 md:p-0`}
        height={200}
        width={200}
      />
    </div>
  );

  return (
    <div
      className={`flex flex-col md:flex-row bg-white py-16 ${
        shouldRight ? "md:flex-row-reverse" : ""
      }`}
    >
      {imageSection}
      {textSection}
    </div>
  );
};

export default ServiceDetails;
