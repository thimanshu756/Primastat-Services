import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-white text-black font-['Roboto', 'Helvetica']">
      {/* Hero Container */}

      {/* Left Section - Text Content */}

      <div className="bg-white text-black px-4 py-10">
        <div className="mx-auto">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            {/* Text Section */}
            <h1 className="text-center md:text-left text-5xl font-semibold md:relative md:left-12 md:bottom-16 md:w-[55vw]">
              We help you harness the knowledge in
              <br className="hidden md:inline" /> your data.
            </h1>

            {/* Image Section */}
            <div className="flex-1 flex justify-center md:justify-end md:w-[45vw]">
              <Image
              className="w-full md:w-auto md:max-w-md h-auto"
              src="https://c.animaapp.com/MXeDvc3F/img/group-24.svg"
              alt="Group"
              width={500}
              height={500}
              layout="responsive"
            
            />
         
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-[5vw] md:my-[20vh]">
        <div className="md:w-[50vw] flex flex-col items-center justify-center ">
          <div className="text-center text-2xl font-semibold">
            About PrimaStat
          </div>
          <div className="text-center  text-lg my-8">
            At Primastat, we are dedicated to helping you harness the knowledge
            embedded in your data. Our tailored solutions in &nbsp;
            <strong>Data Visualization</strong>,&nbsp;
            <strong>Big Data Management</strong>, and&nbsp;
            <strong>Machine Learning</strong> empower businesses to make
            informed decisions and drive success.
          </div>

          <button className="p-2 rounded-full text-white  bg-black rounded-[16px] pl-4 pr-4 ">
            About Us
          </button>
        </div>
      </div>

      <div className="text-center text-4xl font-semibold my-16">What we do</div>
    </div>
  );
}
