import React from "react";
import Image from "next/image";
import { clientDetails } from "@/data/clientTestimonies";

const ClientTestimonial: React.FC<clientDetails> = ({
  imgLink,
  testimony,
  name,
  designation,
  location,
}) => {
  return (
    // Add the 'group' class to the parent div
    <div className="group bg-white p-6 rounded-3xl shadow-custom duration-500 transform hover:scale-105 hover:shadow-custom-hover origin-bottom-left flex flex-col items-start md:min-h-[65vh] w-full cursor-pointer">
      <div className="h-[20%]">
        <div className="h-16  flex justify-start overflow-hidden">
          {/* Use group-hover:scale-105 to apply the scale transformation when the parent is hovered */}
          <Image
            src={imgLink}
            alt={name}
            layout="responsive"
            width={96}
            height={64}
            className="group-hover:scale-90 transition-transform duration-500"
          />
        </div>
      </div>
      <div className="text-left text-black flex-grow flex flex-col justify-between">
        <p className="font-normal text-base my-8">
          {testimony}
        </p>
        <div className="py-4">
          <p className="font-bold text-base">{name}</p>
          <p className="font-normal text-sm">{designation}</p>
          <p className="font-normal text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
