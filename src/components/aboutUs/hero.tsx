import React from "react";

export default function Hero() {
  return (
    <div className="bg-[#F2F2F2] text-black font-['Roboto', 'Helvetica']">
    

    <div className="flex justify-center items-center mx-[5vw] md:py-[20vh]">
        <div className="md:w-[50vw] flex flex-col items-center justify-center ">
          <div className="text-center text-2xl md:text-6xl font-semibold mt-8">
          We are PrimaStat
          </div>
          <div className="text-center  text-lg my-8">
          We are dedicated to delivering<br/> exceptional results and fostering <br/>growth
          </div>

          <button className="p-2 rounded-full text-white  bg-black rounded-[16px] pl-4 pr-4 ">
          Get in touch
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mx-[5vw] md:my-[20vh]">
        <div className="md:w-[50vw] flex flex-col items-center justify-center ">
          
          <div className="text-center  text-lg my-8">
          Welcome to Primastat, where our commitment to excellence drives a diverse range of services empowering businesses in Data Transformation, Artificial Intelligence and Analytics. Our holistic and data-driven approach fosters success and growth for enterprises throughout the world.

          </div>

        
        </div>
      </div>

      <div className="text-center text-4xl font-semibold py-16">Our Clients</div>
    </div>
  );
}
