// components/HeroImage.js
import Image from 'next/image';
import React from 'react';

const HeroImage = () => {
  return (
    <div className="flex-1 flex md:p-0 p-4 py-16 justify-center md:justify-end md:w-[45vw]">
      <Image
        className="w-full md:w-auto md:max-w-md h-auto"
        src="/public/home/homeHero.svg" // Adjust path as needed
        alt="Group"
        width={700}
        height={700}
        layout="responsive"
      />
    </div>
  );
};

export default HeroImage;
