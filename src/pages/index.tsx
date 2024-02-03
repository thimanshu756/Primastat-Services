import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Hero from "../components/home/hero/index";
import Animation from "../components/home/animation";
import Client from "../components/common/clientTestimonies";
import CaseStudies from "../components/common/caseStudies";
import { clientList } from '@/data/clientTestimonies';
import { caseStudiesList } from "@/data/caseStudiesList";




export const Landing = (): JSX.Element => {
  return (
    <div className="h-100vh w-100vw overflow-hidden bg-[#F2F2F2]">
      <Navbar />

      <Hero />
      <Animation/>
      <CaseStudies caseStudiesList={caseStudiesList}/>
      <Client clientList={clientList} />



      <Footer />
    </div>
  );
};

export default Landing;
