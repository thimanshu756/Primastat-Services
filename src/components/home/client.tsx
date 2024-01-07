import React from "react";
import Image from "next/image";

export default function Client() {
  const clientList = [
    {
      imgLink: "https://c.animaapp.com/MXeDvc3F/img/download--1--1@2x.png",
      testimony:
        "Primastats data analytics transformed our business, delivering actionable insights and drivin exponential growth.",

      name: "XYZ",
      designation: "Head of Sales",
      location: "Volkswagen, Germany",
    },

    {
      imgLink: "https://c.animaapp.com/MXeDvc3F/img/download--1--1@2x.png",
      testimony:
        "Primastats data analytics transformed our business, delivering actionable insights and drivin exponential growth.",

      name: "XYZ",
      designation: "Head of Sales",
      location: "Volkswagen, Germany",
    },
    {
      imgLink: "https://c.animaapp.com/MXeDvc3F/img/download--1--1@2x.png",
      testimony:
        "Primastats data analytics transformed our business, delivering actionable insights and drivin exponential growth.",

      name: "XYZ",
      designation: "Head of Sales",
      location: "Volkswagen, Germany",
    },
  ];
  return (
    <div className="bg-[#00388B] mx-auto p-4 text-white">
      {/* Header Text */}
      <div className="text-center text-2xl font-semibold  py-12 pb-20">
        A word from our clients
      </div>

      {/* Client Testimonials */}
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 md:w-[70vw] md:pb-28">
          {clientList.map(
            ({ location, designation, name, imgLink, testimony }, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start space-y-4"
              >
                <Image
                  src={imgLink}
                  alt="Download"
                  width={84}
                  height={81}
                  className="rounded-lg"
                />
                <p className="font-normal text-black text-base">{testimony}</p>
                <div className="font-bold text-black text-base">{name}</div>
                <div className="font-normal text-black text-base">
                  {designation}
                </div>
                <div className="font-normal text-black text-base">
                  {location}
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Contact Button */}
      <div className="text-center text-xl font-semibold text-[#f34a4a] ">
        Let’s work together!
      </div>
      <div className="text-center text-3xl font-semibold my-12">
        Transform your Business with us
      </div>
      <div className="flex justify-center my-8">
        <div className="bg-[#f2f2f2] p-2 rounded-full text-black text-center px-4">
          Get in touch
        </div>
      </div>

      {/* Bottom Text */}
    </div>
  );
}
