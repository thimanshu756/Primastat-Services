import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#F2F2F2] text-black font-['Roboto', 'Helvetica']">
      <div className="flex justify-center items-center mx-[5vw] md:py-[10vh]">
        <div className="md:w-[50vw] flex flex-col items-center justify-center ">
          <div className="text-center text-2xl md:text-6xl font-semibold mt-8">
            We are PrimaStat
          </div>
          <div className="text-center  text-lg my-8">
            We are dedicated to delivering
            <br /> exceptional results and fostering <br />
            growth
          </div>
          <Link href="/contactUs">
            <button className="p-2 rounded-full hover:border hover:border-[#00114d]  hover:bg-white hover:text-[#00114d] transition duration-300 ease-in-out  text-white bg-[#00114d] rounded-[16px] pl-4 pr-4 ml-6">
              Get in touch
            </button>
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center mx-[5vw] my-[10vh] md:mt-[0] md:mb-[10vh]">
        <div className="md:w-[50vw] flex flex-col items-center justify-center ">
          <div className="text-center text-lg my-4">
            Welcome to Primastat, where our commitment to excellence drives a
            diverse range of services empowering businesses in Data
            Transformation, Artificial Intelligence and Analytics. Our holistic
            and data-driven approach fosters success and growth for enterprises
            throughout the world.
          </div>
        </div>
      </div>

      <div className="text-center text-4xl font-semibold pb-16">
        Our Clients
      </div>
    </div>
  );
}
