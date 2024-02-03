import { useState, useEffect, useRef } from 'react';

const useScrollAnimation = (elementRef, scrollDownClass, scrollUpClass) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          // Assuming scrolling down into the viewport triggers the "scroll down" class
          // and scrolling up out of the viewport triggers the "scroll up" class
          if (entry.isIntersecting) {
            // Element comes into view (mimics scrolling down)
            setAnimationClass(scrollDownClass);
          } else {
            // Element goes out of view (mimics scrolling up)
            setAnimationClass(scrollUpClass);
          }
        });
      },
      {
        root: null, // observing relative to the viewport
        threshold: 0.1, // trigger callback when 10% of the element is in view
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
  }, [elementRef, scrollDownClass, scrollUpClass]);

  return animationClass;
};

export default useScrollAnimation;
