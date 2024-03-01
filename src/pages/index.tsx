import React from "react";
import Navbar from "../components/common/navbar";
import Footer from "../components/common/footer";
import Hero from "../components/home/hero/index";
import Animation from "../components/home/animation";
import Client from "../components/common/clientTestimonies";
import CaseStudies from "../components/common/caseStudies";
import { clientList } from '@/data/clientTestimonies';
import { caseStudiesList } from "@/data/caseStudiesList";
import LogoCarousel from "@/components/common/logoCarousel";
import { logos } from "@/data/toolsUsedCarousal";
import Prisma from "@/components/home/prisma";
import Head from "next/head";




export const Landing = (): JSX.Element => {
  return (
    <div className="h-100vh w-100vw overflow-hidden bg-[#F2F2F2]">
      <Head>
        <title>
          PrimaStat | Harness the knowledge in your data
        </title>
      </Head>
      <Navbar />

      <Hero />
      <Animation/>
      <Prisma/>
      <div className="my-24 bg-[#F2F2F2]"/>
      <CaseStudies caseStudiesList={caseStudiesList}/>
      {/* <p className="text-white text-3xl py-12 text-bold flex justify-center items-center bg-[#00388B]">Tools we specialize in</p> */}
      {/* <LogoCarousel logos={logos} /> */}
      <Client clientList={clientList} />
      <Footer />
    </div>
  );
};

export default Landing;
