import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Client() {
  const caseStudiesList = [
    {
      image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
      message: "How Primastat set up a Business Intelligence System from the ground up for DSquare",
      route: "/sdd",
    },
    {
      image: "https://c.animaapp.com/MXeDvc3F/img/istock-1143391583-1@2x.png",
      message: "Primastat drives growth and analytical innovation for Secure Process Intelligence",
      route: "/sdd",
    },
  
    // ... you can add more case studies here
  ];


    return (
      <div className="bg-[#00388B]  mx-auto p-4 flex flex-col items-center justify-center w-[100vw] pb-24">
        <p className="text-white text-3xl py-12 text-bold">Our Work</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-[70vw]">
          {/* Grid items */}
          {caseStudiesList.map(({ image, message, route }, index) => (
            <Link key={index} href={route} passHref>
              <div className="block p-6 flex flex-col items-center">
                <div className="mb-4 relative w-full h-60"> {/* Adjust width and height as needed */}
                  <Image
                    src={image}
                    alt="Case Study"
                    layout="responsive"
                    height={30} // These are the height and width of the frame
                    width={30} // Adjust as needed
                    objectFit="cover" // Adjust as needed
                    className="rounded-lg"
                  />
                </div>
                <p className="text-center text-white mt-0">{message}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
  