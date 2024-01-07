import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Hero from "../components/aboutUs/hero";
import Animation from "../components/home/animation";
import Client from "../components/home/client";
import CaseStudies from "../components/home/caseStudies";
import LogoCarousel from "../components/common/logoCarousel";

export const Landing = (): JSX.Element => {
  return (
    <div className="h-100vh w-100vw ">
      <Navbar />

      <Hero />
      <LogoCarousel/>
      <CaseStudies />
      <Client />

  

      <Footer />
    </div>
  );
};

export default Landing;
