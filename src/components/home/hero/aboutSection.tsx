// components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <div className="flex justify-center items-center mx-[5vw] md:mx-[2vw] md:my-[10vh]">
      <div className="md:w-[50vw] flex flex-col items-center justify-center">
        <div className="text-center text-2xl font-semibold">About PrimaStat</div>
        <div className="text-center text-lg my-8">
        At Primastat, we are dedicated to helping you harness the knowledge
            embedded in your data. Our tailored solutions in &nbsp;
            <strong>Data Visualization</strong>,&nbsp;
            <strong>Big Data Management</strong>, and&nbsp;
            <strong>Machine Learning</strong> empower businesses to make
            informed decisions and drive success.
        </div>
        <button className="p-2 rounded-full text-white bg-black rounded-[16px] pl-4 pr-4">
          About Us
        </button>
      </div>
    </div>
  );
};

export default AboutSection;
