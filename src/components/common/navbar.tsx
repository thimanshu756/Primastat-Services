"use client";

import React, { useState, useRef, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import useOutsideClicker from "../../customHooks/outSideClicker";
import Accordion from "./accordian";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);

  useOutsideClicker(servicesRef, () => setIsServicesOpen(false));

  const navBarList = [
    {
      name: "Services",
      route: "/",
      subRoute: true,
      subRouteDetails: [
        { name: "Big Data", route: "/a" },
        {
          name: "Machine Learning",
          route: "/b",
        },
        {
          name: "Data Visualization",
          route: "/c",
        },
      ],
    },
    {
      name: "Case Studies",
      route: "/Case Studies",
      subRoute: false,
    },
    {
      name: "About Us",
      route: "/AboutUs",
      subRoute: false,
    },
  ];

  return (
    <div className="relative bg-white">
      <nav className="mx-auto px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between  flex-1">
            <Image
              src="https://c.animaapp.com/MXeDvc3F/img/group-31--1--2@2x.png" // Adjust with your logo's path
              alt="Logo"
              width={150} // Adjust as needed
              height={60} // Adjust for your image's aspect ratio
            />
            {/* Other elements for large screens */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navBarList.map(
                  ({ name, route, subRoute, subRouteDetails }) => {
                    if (subRoute) {
                      return (
                        <div key={name} className="relative" ref={servicesRef}>
                          <button
                            className="text-black px-3 py-2 rounded-md text-sm font-medium"
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                          >
                            Services
                          </button>
                          {isServicesOpen && (
                            <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-1 z-10 min-w-max whitespace-nowrap">
                              {subRouteDetails?.map(({ route, name }) => {
                                return (
                                  <Link key={route} href={route}>
                                    <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                                      {name}
                                    </p>
                                  </Link>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <Link key={route} href={route}>
                        <p className="text-black px-3 py-2 rounded-md text-sm font-medium">
                          {name}
                        </p>
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden">
            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon for menu open/close */}
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
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
          <div className="hidden md:block  ">
            {/* <div className="ml-4 flex items-center md:ml-6"> */}
            <Link href="/contact">
              <p className="p-2 rounded-full text-white  bg-[#00114d] rounded-[16px] pl-4 pr-4 ml-6">
                Get in touch
              </p>
            </Link>
            {/* </div> */}
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navBarList.map(({ name, route, subRoute, subRouteDetails }) => {
            if (subRoute) {
              return (
                <Accordion key={name} title={name}>
                  {subRouteDetails?.map(({ route, name }) => {
                    return (
                      <Link key={route} href={route}>
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                          {name}
                        </p>
                      </Link>
                    );
                  })}
                </Accordion>
              );
            }

            return (
              <Link key={route} href={route}>
                <p className="text-black block px-3 py-2 rounded-md text-base font-medium">
                  {name}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
