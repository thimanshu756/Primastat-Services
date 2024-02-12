interface Content {
  heading: string;
  text: string;
}

interface PrimsaSectionProps {
  title: string;
  content: Content;
  imageSrc: string;
  imageAlt: string;
  alignment?: "between" | "start";
  additionalClasses?: string;
}

const PrimsaSectionsData: PrimsaSectionProps[] = [
  {
    title: "BI",
    content: {
      heading: "Use your data to grow",
      text: "<p>In the age of AI, capturing and leveraging crucial data is paramount. At <strong>Primastat</strong>, we recognize the pivotal role data plays in decision-making and growth. Our commitment is to tackle diverse challenges by transforming data into actionable insights using advanced Data Science and reliable automation practices.</p>",
    },
    imageSrc: "/public/forge/bi.png",
    imageAlt: "BI Image",
    alignment: "between",
  },
  {
    title: "ML",
    content: {
      heading: "Fast Implementation of Machine Learning models",
      text: "<p>At <strong>Primastat</strong>, we specialize in the swift implementation of Machine Learning models, ensuring that state-of-the-art technology is accessible to all. Our expertise spans various domains, including <strong>Computer Vision, Natural Language Processing, and Forecasting.</strong> In this era of <strong>Large Language Models</strong>, we propel your growth by unlocking endless opportunities and delivering value promptly. Whether you require a proof-of-concept or a production-grade application, <strong>Primastat</strong> is committed to delivering quality solutions tailored to your needs.</p>",
    },
    imageSrc: "/public/forge/ml.png",
    imageAlt: "ML Image",
    alignment: "between",
  },
  {
    title: "Forge",
    content: {
      heading: "Empower your projects with advanced tools",
      text: "<p>At <strong>Primastat</strong>, we provide cutting-edge tools to enhance your projects. Our Forge platform offers seamless integration of machine learning models and data analytics tools, empowering your business with efficiency and innovation.<br>We will provide you the tools and help you build an efficient data system. Now, don’t worry about chaotic data storage, Primastat is here to setup state of the art <strong>Data Lakehouse</strong> and <strong>Data Warehouse</strong> architecture.</p>",
    },
    imageSrc: "/public/forge/forge.svg",
    imageAlt: "Forge Image",
    alignment: "between"
    // alignment: "start",
    // additionalClasses: "mt-8",
  },
];

export default PrimsaSectionsData;
