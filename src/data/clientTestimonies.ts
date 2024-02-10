export interface clientDetails {
      imgLink: string;
      testimony: string;
      name: string;
      designation: string;
      location: string;
    }
  

export const clientList:Array<clientDetails> = [


  {
    imgLink: "/public/client-testimony/review-1.svg",
    testimony:
      "Primastat's work is brilliant and their attention to detail, especially considering the complexities of our requirement was excellent.",

    name: "Alwyn Veliyeth",
    designation: "CTO",
    location: "Rezcomm",
  },
  {
    imgLink: "/public/client-testimony/review-2.svg",
    testimony:
      "Primastat's data analytics transformed our business, delivering actionable insights and driving exponential growth.",

    name: "Tushar Aggarwal",
    designation: "CEO",
    location: "TUAG",
  },
];
