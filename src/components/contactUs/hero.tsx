import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className={`flex flex-col md:flex-row  text-black py-16`}>
      <div className="w-[100vw] md:w-[50vw] bg-[#D5D4CF] flex flex-col justify-center items-start p-4  md:p-12">
        <p className="text-black font-poppins text-5xl font-semibold leading-none">
          Fuel the growth of your business
        </p>

        <p className="text-black font-roboto text-base font-normal leading-normal">
          Begin today for rapid growth tomorrow
        </p>
      </div>
      <div className="w-[100vw] md:w-[50vw] relative h-full">
        <Image
          src="/public/phoneImg.jpeg" // Assume you have an 'img' folder in your 'public' folder
          alt="Logo"
          width={200} // Adjust as needed
          height={10} // Adjust for your image's aspect ratio
          objectFit="cover"

          className={`w-[100%] h-[100%] scale-x-[-1]`}
        />


      </div>
    </div>
  );
}
