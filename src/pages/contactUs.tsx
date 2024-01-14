import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Hero from "../components/contactUs/hero";
import Animation from "../components/home/animation";
import Client from "../components/common/clientTestimonies";
import CaseStudies from "../components/common/caseStudies";
import ContactForm from "@/components/contactUs/form";
import Calendly from "@/components/contactUs/calendly";

export const Landing = (): JSX.Element => {
  return (
    <div className="h-100vh w-100vw bg-[#F2F2F2]">
      <Navbar />

      <Hero />

      <div className="flex-col  md:flex-row relative items-stretch md:flex">
        <ContactForm />
        <div className="w-px bg-[#00114D] my-8 md:ml-16 hidden md:block"></div>
        <div className="h-px bg-[#00114D] mx-8 md:mt-16 md:mb-16 block my-12  md:hidden"></div>


        <Calendly />
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
