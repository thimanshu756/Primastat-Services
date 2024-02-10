// pages/[id].tsx
import React from "react";
import Navbar from "../components/common/navbar/index";
import Footer from "../components/common/footer";
import Hero from "../components/case-studies/hero";
import CaseStudies from "../components/common/caseStudies";
import { caseStudiesList } from "@/data/caseStudiesList";
import BreadCrumbs from "@/components/common/breadCrumbs";

const CaseStudy: React.FC = () => {
  return (
    <div className="h-100vh w-100vw bg-[#F2F2F2]">
      <Navbar />
      <BreadCrumbs
        backgroundColor="bg-[#F2F2F2]"
        text={"Home \u25B6 Case Studies"}
      />
      <Hero />
      <CaseStudies
        backgroundColor={`#F2F2F2`}
        textColor={`#000000`}
        hideViewAll
        caseStudiesList={caseStudiesList}
      />

      <Footer />
    </div>
  );
};

export default CaseStudy;
