// Navbar.tsx
import React, { useState, FC } from "react";
import Image from "next/image";
import ServicesDropdown from "./servicesDropdown";
import MobileMenu from "./mobileMenu";
import Link from "next/link";

interface SubRouteDetail {
  name: string;
  route: string;
}

interface NavBarList {
  name: string;
  route: string;
  subRoute: boolean;
  subRouteDetails?: SubRouteDetail[];
}

const NavbarLink: FC<SubRouteDetail> = ({ name, route }) => {
  const isInternalLink = route.startsWith("#");

  return isInternalLink ? (
    <a
      href={route}
      className="text-black px-3 py-2 rounded-md text-sm font-medium"
    >
      {name}
    </a>
  ) : (
    <Link href={route}>
      <p className="text-black px-3 py-2 rounded-md text-sm font-medium">
        {name}
      </p>
    </Link>
  );
};

const Navbar: FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const navBarList: NavBarList[] = [
    {
      name: "Services",
      route: "/",
      subRoute: true,
      subRouteDetails: [
        { name: "Big Data", route: "/service/bigData" },
        { name: "Machine Learning", route: "/service/machineLearning" },
        { name: "Data Visualization", route: "/service/dataVisualization" },
      ],
    },
    {
      name: "Case Studies",
      route: "#CaseStudies",
      subRoute: false,
    },
    {
      name: "About Us",
      route: "/aboutUs",
      subRoute: false,
    },
  ];

  return (
    <div className="relative bg-white md:px-[7vw]">
      <nav className="px-4 md:px-0">
        <div className="flex items-center justify-between h-16">
        
          <div className="flex items-center">
          <Link href="/" className="cursor-pointer">
            <Image
              src="https://c.animaapp.com/MXeDvc3F/img/group-31--1--2@2x.png"
              alt="Logo"
              width={150}
              height={60}
            />
                      </Link>
          </div>

          <div className="flex justify-end items-center ">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navBarList.map(({ name, route, subRoute, subRouteDetails }) =>
                  subRoute ? (
                    <ServicesDropdown
                      key={name}
                      services={subRouteDetails!}
                      isOpen={isServicesOpen}
                      setIsOpen={setIsServicesOpen}
                    />
                  ) : (
                    <NavbarLink key={route} name={name} route={route} />
                  )
                )}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-black"
                aria-label="Open main menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>

            <div className="hidden md:block">
              <Link href="/contactUs">
                <p className="p-2 rounded-full text-white bg-[#00114d] rounded-[16px] pl-4 pr-4 ml-6 border  hover:border-[#00114d]  hover:bg-white hover:text-[#00114d] transition duration-300 ease-in-out">
                  Get in touch
                </p>
              </Link>
            </div>
          </div>
        </div>
        <MobileMenu isOpen={isOpen} navBarList={navBarList} />
      </nav>
    </div>
  );
};

export default Navbar;
