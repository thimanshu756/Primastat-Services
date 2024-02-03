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
    <div className="bg-white p-6 rounded-lg shadow-3xl flex flex-col items-start hover:shadow-lg  md:min-h-[65vh]  w-[100%]">
      <div className="h-[20%] ">
      <div className="h-16 w-24 flex justify-start overflow-hidden">
        <Image
          src={imgLink}
          alt={name}
          layout="responsive"
          width={96} // This should match the aspect ratio of your images
          height={64} // Adjust height accordingly to maintain aspect ratio
        />
      </div>
      </div>
      <div className="text-left text-black h-[80%] flex flex-col justify-between">

        <p
          className="font-normal text-base my-8"
         
        >
          {testimony}
        </p>
       
        <div className=" py-4">
          <p className="font-bold text-base">{name}</p>
          <p className="font-normal text-sm">{designation}</p>
          <p className="font-normal text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
