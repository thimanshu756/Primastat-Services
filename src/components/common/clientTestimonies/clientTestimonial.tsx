import React from "react";
import Image from "next/image";

// Assuming clientDetails interface is correctly defined and imported
export interface ClientDetails {
  imgLink: string;
  testimony: string;
  name: string;
  designation: string;
  location: string;
}

interface StarProps {
  filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => (
  <svg className={`w-6 h-6 ms-2 ${filled ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
  </svg>
);

interface RatingProps {
  rating: number;
}

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const totalStars = 5;

  return (
    <div className="flex justify-end items-end h-[20%]">
      <div className="flex justify-start items-end w-full h-full px-4">
        <div className="flex items-center">
          {[...Array(totalStars)].map((_, index) => (
            <Star key={index} filled={index < rating} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface TestimonyProps {
  testimony: string;
}

const Testimony: React.FC<TestimonyProps> = ({ testimony }) => {
  return <p className="font-normal text-base px-6 pt-4 pb-24 h-[80%]">{testimony}</p>;
};

interface CompanyDetailsProps {
  name: string;
  designation: string;
  location: string;
  imgLink: string;
}

const CompanyDetails: React.FC<CompanyDetailsProps> = ({ name, designation, location, imgLink }) => {
  return (
    <div className="flex justify-start items-start bg-[#FC6736] rounded-b-3xl w-full py-4 px-6">
      <div className="h-16 w-16 rounded-full border-0 flex justify-center items-center mr-4">
        <Image
          src={imgLink}
          alt={name}
          layout="responsive"
          width={96}
          height={64}
          className="h-16 w-16 border-0 rounded-full group-hover:scale-90 transition-transform duration-500"
        />
      </div>
      <div>
        <p className="font-bold text-base text-white">{name}</p>
        <p className="font-normal text-sm text-gray-100">{designation}</p>
        <p className="font-normal text-sm text-gray-200">{location}</p>
      </div>
    </div>
  );
};

const ClientTestimonial: React.FC<ClientDetails> = ({
  imgLink,
  testimony,
  name,
  designation,
  location,
}) => {
  return (
    <div className="group bg-white rounded-3xl text-black shadow-custom duration-500 transform hover:scale-105 hover:shadow-custom-hover origin-bottom-left flex flex-col justify-between items-start md:min-h-[20vh] w-full">
      <div>
        <Rating rating={5} />
        <Testimony testimony={testimony} />
      </div>
      <CompanyDetails
        name={name}
        designation={designation}
        location={location}
        imgLink={imgLink}
      />
    </div>
  );
};

export default ClientTestimonial;
