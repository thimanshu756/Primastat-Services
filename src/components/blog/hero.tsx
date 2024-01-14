import React from "react";
interface HeroProps {
  title: string;
}
const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <div
      className="h-[40vh] md:h-[80vh] text-black font-['Roboto', 'Helvetica'] bg-cover bg-center"
      style={{ backgroundImage: "url('/public/check1.jpeg')" }}
    >
      <div className="flex justify-start items-center mx-[5vw] md:py-[20vh] h-full">
      <div className="text-white text-2xl md:text-6xl font-semibold">
           {title}
          </div>

      </div>
    </div>
  );
}

export default Hero