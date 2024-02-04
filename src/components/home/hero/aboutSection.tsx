import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";

const AboutSection = () => {
  // Specify the type of element the ref will be attached to
  const sectionRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(() =>
    typeof window !== "undefined" ? window.scrollY : 0
  );
  const [isFullyVisible, setIsFullyVisible] = useState(false);

  useEffect(() => {
    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      setLastScrollY(currentScrollY);

      if (sectionRef.current) {
        const { top, bottom } = sectionRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        if (direction === "down" && top >= 0 && bottom <= viewportHeight) {
          setIsFullyVisible(true);
          sectionRef.current.style.transform = "translateY(0)";
          sectionRef.current.style.opacity = "1";
          sectionRef.current.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        } else if (direction === "up" && top >= 0 && bottom <= viewportHeight) {
          setIsFullyVisible(true);
          sectionRef.current.style.transform = "translateY(0)";
          sectionRef.current.style.opacity = "1";
          sectionRef.current.style.transition = "transform 1s ease-out, opacity 1s ease-out";
        } else if (!isFullyVisible) {
          sectionRef.current.style.transform = "translateY(50%)";
          sectionRef.current.style.opacity = "0";
        }
      }
    };

    window.addEventListener("scroll", handleScrollDirection);
    return () => window.removeEventListener("scroll", handleScrollDirection);
  }, [lastScrollY, isFullyVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && isFullyVisible) {
          setIsFullyVisible(false);
        }
      },
      { root: null, threshold: 1.0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isFullyVisible]);

  return (
    <div className="flex justify-center items-center mx-[5vw] md:mx-[2vw] md:my-[10vh]">
      <div ref={sectionRef} className="md:w-[50vw] flex flex-col items-center justify-center opacity-0">
        <div className="text-center text-2xl font-semibold">About PrimaStat</div>
        <div className="text-center text-lg my-8">
          At Primastat, we are dedicated to helping you harness the knowledge embedded in your data. Our tailored solutions in <strong> Data Visualization</strong>, <strong> Big Data Management</strong>, and<strong>  Machine Learning</strong> empower businesses to make informed decisions and drive success.
        </div>
        <Link href="/aboutUs">
        <button  className="p-2 rounded-full text-white bg-black rounded-[16px] pl-4 pr-4 border hover:border-white hover:bg-black hover:text-white transition duration-300 ease-in-out">
            About Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutSection;
