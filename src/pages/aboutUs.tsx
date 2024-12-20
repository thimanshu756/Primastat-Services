import React from "react";
import Navbar from "../components/common/navbar/index";
import Footer from "../components/common/footer";
import Hero from "../components/aboutUs/hero";
import Animation from "../components/home/animation";
import Client from "../components/common/clientTestimonies";
import CaseStudies from "../components/common/caseStudies";
import LogoCarousel from "../components/common/logoCarousel";
import { clientList } from "@/data/clientTestimonies";
import { caseStudiesList } from "@/data/caseStudiesList";
import BreadCrumbs from "@/components/common/breadCrumbs";
import { logos } from "@/data/clientCarousal";
import Prisma from "@/components/home/prisma";
import Head from "next/head";

export const Landing = (): JSX.Element => {
  return (
    <div className="h-100vh w-100vw bg-[#F2F2F2]">
      <Head>
        <title>
          About
        </title>
      </Head>
      <Navbar />
      <BreadCrumbs
        backgroundColor="bg-[#F2F2F2]"
        text={`Home \u25B6 About Primastat`}
      />
      <Hero />
      <LogoCarousel logos={logos} color="#00388B" />
    <div className="v-[100vw] overflow-hidden">  <Prisma/></div>
      <div className="my-24 bg-[#F2F2F2]"/>
      <CaseStudies caseStudiesList={caseStudiesList} />
      <Client clientList={clientList} />
      <Footer />
    </div>
  );
};

export default Landing;
