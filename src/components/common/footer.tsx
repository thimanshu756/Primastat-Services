import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-white w-full">
      <div className="mx-auto py-12 px-4 sm:px-6 md:px-8">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0">
          {/* First Column */}
          <div className="flex flex-col space-y-4">
            <div className="h-8 w-auto">
              <Image
                src="https://c.animaapp.com/MXeDvc3F/img/group-31--1--2@2x.png" // Assume you have an 'img' folder in your 'public' folder
                alt="Logo"
                width={120} // Adjust as needed
                height={42} // Adjust for your image's aspect ratio
                layout="intrinsic"
              />
            </div>
            <div className="text-black font-bold text-lg">Follow us</div>
            <div className="flex items-center">
              <div className="w-8 h-8 mr-4 cursor-pointer">
                <a
                  href="https://www.linkedin.com/company/primastat"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="https://c.animaapp.com/MXeDvc3F/img/ed5451961869a97b434b185f2fe064cc-1.svg" // Adjust path as needed
                    alt="Img"
                    width={32}
                    height={32}
                    layout="intrinsic"
                  />
                </a>
              </div>

              <a
                href="https://www.linkedin.com/company/primastat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 cursor-pointer">
                  <Image
                    src="https://c.animaapp.com/MXeDvc3F/img/group-75.svg" // Adjust path as needed
                    alt="Group"
                    width={32}
                    height={32}
                    layout="intrinsic"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Second and Third Column */}
          <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-8">
            {/* Second Column */}
            <div className="flex flex-col space-y-4">
              <div className="text-black font-bold text-lg">Solutions</div>
              <Link href="/service/dataVisualization">
                <p className="text-black text-lg cursor-pointer">
                  Data Visualization
                </p>
              </Link>
              <Link href="/service/bigData">
                <p className="text-black text-lg cursor-pointer">Big Data</p>
              </Link>
              <Link href="/service/machineLearning">
                <p className="text-black text-lg cursor-pointer">
                  Machine Learning
                </p>
              </Link>
            </div>

            {/* Third Column */}
            <div className="flex flex-col space-y-4">
              <div className="text-black font-bold text-lg">About</div>
              <Link href="/aboutUs">
                <p className="text-black text-lg cursor-pointer">About Us</p>
              </Link>
              <Link href="#CaseStudies">
                <p className="text-black text-lg cursor-pointer">Blogs</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-200 mt-8 py-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-700 text-lg">
              &copy; Primastat Services Pvt. Ltd.
            </p>
            <div className="flex space-x-4">
              <Link href="https://legal.primastat.in">
                <p className="text-gray-700 text-lg">Terms &amp; Conditions</p>
              </Link>
              <Link href="https://legal.primastat.in/policies/privacy-policy">
                <p className="text-gray-700 text-lg">Privacy Policy</p>
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
