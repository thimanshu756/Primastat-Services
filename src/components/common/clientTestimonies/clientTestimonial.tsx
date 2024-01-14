import React from 'react';
import Image from 'next/image';
import { clientDetails } from '@/data/clientTestimonies';

const ClientTestimonial: React.FC<clientDetails> = ({
  imgLink,
  testimony,
  name,
  designation,
  location
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start space-y-4 hover:shadow-lg transition-shadow duration-300">
   <div className="h-16 w-24 flex justify-start overflow-hidden">
  <Image
    src={imgLink}
    alt={name}
    layout="responsive"
    width={96}   // This should match the aspect ratio of your images
    height={64}  // Adjust height accordingly to maintain aspect ratio
  />
</div>
      <div className="text-left text-black">
        <p className="font-normal text-base mb-2" style={{ maxHeight: '4.5rem', overflow: 'hidden' }}>{testimony}</p>
        <div className="font-bold text-base">{name}</div>
        <div className="font-normal text-sm">{designation}</div>
        <div className="font-normal text-sm">{location}</div>
      </div>
    </div>
  );
};

export default ClientTestimonial;
