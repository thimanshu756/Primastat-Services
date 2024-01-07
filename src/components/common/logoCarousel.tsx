"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";

// Define a type for each logo
type Logo = {
  src: string;
  alt: string;
};

// Array of logos with stronger typing
const logos: Logo[] = [
  { src: "/public/dummy.svg", alt: "Facebook" },
  { src: "/public/dummy.svg", alt: "Disney" },
  { src: "/public/dummy.svg", alt: "Facebook" },
  { src: "/public/dummy.svg", alt: "Disney" },
  { src: "/public/dummy.svg", alt: "Facebook" },
  { src: "/public/dummy.svg", alt: "Disney" },
  { src: "/public/dummy.svg", alt: "Facebook" },
  { src: "/public/dummy.svg", alt: "Disney" },
  // Add more logos here
];

const LogoCarousel: React.FC = () => {
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
      className="w-full inline-flex flex-nowrap overflow-hidden bg-[#00388B] py-24"
     
    >

      <ul
        ref={logosRef}
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        {logos.map((logo, index) => (
          <li key={index}>
            <Image
              src={logo.src}
              alt={logo.alt}
              width={75}
              height={25}
              priority
              className="rounded-8"
            />
          </li>
        ))}
      </ul>
    </div>

  );
};

export default LogoCarousel;
