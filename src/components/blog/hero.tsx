import React from "react";
interface HeroProps {
  title: string;
  img: string;
  headerImg: string;
}
const Hero: React.FC<HeroProps> = ({ title, headerImg }) => {
  return (
    <div
      className="h-[20vh] md:h-[40vh] text-black font-['Roboto', 'Helvetica'] bg-cover bg-center"
      style={{ backgroundImage: `url('${headerImg}')` }}
    >
      <div className="flex justify-start items-center mx-[5vw] md:py-[20vh] h-full">
      <div className="text-white text-2xl md:text-6xl font-semibold text-center">
           {title}
          </div>

      </div>
    </div>
  );
}

export default Hero