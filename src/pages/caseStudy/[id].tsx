// pages/[id].tsx
import React from "react";
import Navbar from "../../components/common/navbar/index";
import Footer from "../../components/common/footer";
import Hero from "../../components/blog/hero";
import BlogHandler from "../../components/blog/blogHandler";
import CaseStudies from "../../components/common/caseStudies";
import Client from "../../components/common/clientTestimonies";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { clientList } from "@/data/clientTestimonies";
import { caseStudiesList } from "@/data/caseStudiesList";
import Head from "next/head";

interface IndexItem {
  name: string;
  id: string;
  
}

interface LandingProps {
  htmlContent: string;
  indexItems: IndexItem[];
  title:string
  headerImg: string
}

const Landing: React.FC<LandingProps> = ({ htmlContent, indexItems ,title, headerImg}) => {
  return (
    <div className="h-100vh w-100vw bg-[#F2F2F2]">
      <Head>
        <title>
          { title }
        </title>
      </Head>
      <Navbar />
      <Hero title={title} headerImg={headerImg} />
      <BlogHandler htmlContent={htmlContent} indexItems={indexItems} />
      <CaseStudies caseStudiesList={caseStudiesList} />
      <Client clientList={clientList} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params || typeof context.params.id !== 'string') {
    return {
      notFound: true,
    };
  }

  const id = context.params.id;

  const caseStudyData = caseStudiesList.find(({ caseStudyId }) => {
    return caseStudyId === id;
  });

  if (!caseStudyData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      htmlContent: caseStudyData.html,
      indexItems: caseStudyData.indexItems,
      title: caseStudyData.message,
      headerImg: caseStudyData.headerImg
    },
  };
};

export default Landing;
