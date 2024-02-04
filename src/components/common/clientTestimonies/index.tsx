import React from "react";
import ClientTestimonial from "./clientTestimonial";
import { clientDetails } from "../../../data/clientTestimonies";
import Link from "next/link";

interface ClientProps {
  clientList: Array<clientDetails>;
}

const Client: React.FC<ClientProps> = ({ clientList }) => {
  
  return (
    <div className="bg-[#00388B] mx-auto p-4 text-white">
      <div className="text-center text-2xl font-semibold py-12 pb-20">
        A word from our clients
      </div>

      <div className="flex items-center justify-center">
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20 md:w-[70vw] mb-8  md:pb-28`}
        >
          {clientList.map((client, index) => (
            <div key={index} className="flex justify-center">
              <ClientTestimonial {...client} />
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-3xl font-semibold text-[#f34a4a]">
        Let’s work together!
      </div>
      <div className="text-center text-5xl font-semibold my-12">
        Transform your Business with us
      </div>
      <div className="flex justify-center my-8">
        <Link href="/contactUs">
          <div className="bg-white p-2 rounded-full text-black text-center px-4 border border-black hover:border-white  hover:bg-black hover:text-white transition duration-300 ease-in-out">
            Get in touch
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Client;
