import React, { useState, useEffect } from 'react';

const HeroText = () => {
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
    <h1
      style={{
        transform: `translateX(-${translateAmount}%)`,
        transition: 'transform 0.3s ease-out',
      }}
      className="px-4 md:px-0 text-left text-4xl md:text-6xl font-semibold relative md:bottom-16 md:w-[55vw] transition-opacity"
    >
      We help you harness the
      <br />
      knowledge in
      <br />
      your data.
    </h1>
  );
};

export default HeroText;
