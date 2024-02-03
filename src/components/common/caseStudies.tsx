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
      <p className="text-white text-3xl py-12 text-bold">Our Work</p>
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 md:w-[70vw]`}>
        {caseStudiesList.map(({ image, message, route }, index) => (
          <Link key={index} href={route} passHref>
            <div className="block p-6 flex flex-col items-center cursor-pointer">
              <div className="mb-4 relative w-full h-60">
                <Image
                  src={image}
                  alt="Case Study"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
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
