import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface CaseStudy {
  image: string;
  message: string;
  route: string;
}

interface ClientProps {
  caseStudiesList: CaseStudy[];
  hideViewAll?: boolean;
  backgroundColor?: string;
  textColor?: string;
}

const Client: React.FC<ClientProps> = ({
  caseStudiesList,
  hideViewAll = false,
  backgroundColor = "#00388B",
  textColor = "#ffffff",
}) => {
  // Determine the list to map over based on hideViewAll
  const listToShow = hideViewAll
    ? caseStudiesList
    : caseStudiesList.slice(0, 2);

  // Animation variants
  const itemVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 1.2,
      },
    },
  };

  return (
    <div
      id="CaseStudies"
      className={`mx-auto p-4 flex flex-col items-center justify-center w-[100vw] pt-24 pb-24 bg-[${backgroundColor}]`}
    >
      <div
        className={`grid grid-cols-1 ${
          hideViewAll
            ? "md:grid-cols-3 gap-8 md:gap-4 md:w-[90vw]"
            : "md:grid-cols-2 gap-8 md:gap-24 md:w-[70vw]"
        } `}
      >
        {listToShow.map(({ image, message, route }, index) => (
          <Link key={index} href={route} passHref>
            <motion.div
              className="block p-6 flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
              variants={itemVariants}
              transition={{ delay: index * 0.1 }}
            >
              <div
                className={`mb-4 relative w-full h-60 overflow-hidden rounded-lg`}
              >
                <Image
                  src={image}
                  alt="Case Study"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <p
                className={`text-left  mt-0 font-medium`}
                style={{ color: textColor }}
              >
                {message}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>

      {!hideViewAll && (
        <Link href="/case-studies">
          <motion.button
            className="p-2 rounded-full border-[#FC6736] border mt-4 md:mt-6 px-4 bg-[#FC6736] text-white hover:border hover:border-[#FC6736] hover:bg-white hover:text-[#FC6736] transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            View All
          </motion.button>
        </Link>
      )}
    </div>
  );
};

export default Client;
