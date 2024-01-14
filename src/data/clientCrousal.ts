export type Logo = {
    src: string;
    alt: string;
  };
  
  // Array of logos with stronger typing
  export  const logos: Logo[] = [
    { src: "/public/client-testimony/review-1.svg", alt: "TUAG" },
    { src: "/public/client-testimony/review-2.svg", alt: "Rezcomm" },
  
    //resusing the same client because crorusal was looking to empty
    { src: "/public/client-testimony/review-1.svg", alt: "TUAG" },
    { src: "/public/client-testimony/review-2.svg", alt: "Rezcomm" },
    { src: "/public/client-testimony/review-1.svg", alt: "TUAG" },
    { src: "/public/client-testimony/review-2.svg", alt: "Rezcomm" },
  ];
  