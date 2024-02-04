import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  image: string;
  message: string;
  route: string;
}

interface ClientProps {
  caseStudiesList: CaseStudy[];
}

const Client: React.FC<ClientProps> = ({ caseStudiesList }) => {
  return (
    <div id="CaseStudies" className="bg-[#00388B] mx-auto p-4 flex flex-col items-center justify-center w-[100vw] pb-24">
      <p className="text-white text-3xl py-12 font-bold">Our Work</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 md:w-[70vw]">
        {caseStudiesList.map(({ image, message, route }, index) => (
          <Link key={index} href={route} passHref>
          <div className="block p-6 flex flex-col items-center cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
              <div className={`mb-4 relative w-full h-60 overflow-hidden rounded-lg animate-fade-in-up`} style={{ animationDelay: `${index * 0.1}s` }}>
                <Image
                  src={image}
                  alt="Case Study"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p className="text-left text-white mt-0">{message}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Client;
