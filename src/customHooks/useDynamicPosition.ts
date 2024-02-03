import { useState, useEffect, useRef } from 'react';

const useDynamicPosition = (elementRef) => {
  const [style, setStyle] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const { isIntersecting, intersectionRatio } = entry;
        
        // Fully visible: position as normal
        if (isIntersecting && intersectionRatio >= 0.9) {
          setStyle({
            transform: 'translateX(0)',
            opacity: 1,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          });
        } 
        // Becoming invisible: move out of view
        else if (!isIntersecting) {
          setStyle({
            transform: 'translateX(-100vw)',
            opacity: 0,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          });
        } 
        // Partially visible: dynamic positioning
        else {
          const translateX = (1 - intersectionRatio) * -100; // Convert ratio to a percentage out of view
          setStyle({
            transform: `translateX(${translateX}vw)`,
            opacity: intersectionRatio,
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-out',
          });
        }
      },
      {
        root: null, // viewport
        threshold: [0, 0.1, ...Array.from({ length: 9 }, (_, i) => (i + 1) / 10), 0.9, 1], // Multiple thresholds for smooth transitions
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef]);
console.log(" style ->",style)
  return style;
};

export default useDynamicPosition 