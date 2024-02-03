// components/HeroImage.js
import useScrollAnimation from '@/customHooks/useScrollAnimation';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HeroImage = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const scrolledPercentage = (currentScroll / totalScrollHeight) * 100;

      setScrollPercentage(scrolledPercentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate the desired translation based on scroll percentage.
  // This example assumes a horizontal translation; adjust as needed.
  const translateAmount = Math.min(100, scrollPercentage*2); // Cap at 100% for demonstration


  return (
    <div
    style={{
      transform: `translateX(${translateAmount}%)`,
      transition: 'transform 0.3s ease-out',
    }}
    className={`flex-1 flex md:p-0 p-4 py-16 justify-center md:justify-end md:w-[45vw] `}>
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
