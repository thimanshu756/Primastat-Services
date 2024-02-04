import Link from "next/link";
import React from "react";

interface HeroProps {
  imageUrl: string;
  titleText: string;
  
  buttonClasses: string;
}

const Hero: React.FC<HeroProps> = ({ imageUrl, titleText, buttonClasses }) => {
  return (
    <div
      className="h-[60vh] md:h-[80vh] text-black font-['Roboto', 'Helvetica'] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex justify-center items-center mx-[5vw] md:py-[20vh] h-full">
        <div className="w-full md:w-[70vw] flex flex-col items-center md:items-start justify-center text-center md:text-left">
          <div className="text-white text-2xl md:text-6xl font-semibold">
            {titleText}
          </div>
          <Link href="/contactUs">
            <button className={`p-2 rounded-full    border  mt-4 md:mt-6 px-4 ${buttonClasses} `}>
              Get in touch
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
