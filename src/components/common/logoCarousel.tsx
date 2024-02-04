"use client";
import { logos } from "@/data/clientCarousal";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// Define the Logo type
export type Logo = {
  src: string;
  alt: string;
};

// Define the props for LogoCarousel component
export interface LogoCarouselProps {
  logos: Logo[];
  color?: string;
}

const LogoCarousel: React.FC<LogoCarouselProps> = ({ logos, color }) => {
  const logosRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const ul = logosRef.current;
    if (ul) {
      const clone = ul.cloneNode(true) as HTMLUListElement;
      clone.setAttribute("aria-hidden", "true");
      ul.parentNode?.insertBefore(clone, ul.nextSibling);
    }
  }, []);

  return (
    <div
      className={`w-full inline-flex flex-nowrap overflow-hidden ${
        color ? `bg-[${color}]` : "bg-white"
      } py-16 `}
    >
      <ul
        ref={logosRef}
        className="flex justify-end items-end [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index} className="mx-8">
          
            <Image
              src={logo.src}
              alt={logo.alt}
              width={75}
              height={25}
              objectFit="contain" 
              priority
              className="rounded-8 h-16 w-auto"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogoCarousel;
