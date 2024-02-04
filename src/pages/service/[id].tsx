// pages/[id].tsx
import React from "react";
import Navbar from "../../components/common/navbar/index";
import Footer from "../../components/common/footer";
import Hero from "../../components/services/hero";
import ServiceDetails from "../../components/services/serviceDetails";
import Animation from "../../components/home/animation";
import Client from "../../components/common/clientTestimonies";
import CaseStudies from "../../components/common/caseStudies";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { caseStudiesList } from "@/data/caseStudiesList";
import { clientList } from "@/data/clientTestimonies";
import serviceDataList, { ServiceData } from "@/data/services";

import BreadCrumbs from "@/components/common/breadCrumbs";

interface LandingProps {
  serviceData: ServiceData;
}

const Landing: React.FC<LandingProps> = ({ serviceData }) => {
  return (
    <div className="h-100vh w-100vw bg-[#F2F2F2]">
      <Navbar />
      <BreadCrumbs
        backgroundColor="bg-[#F2F2F2]"
        text={serviceData.breadCrumbsText}
      />
      <Hero
        imageUrl={serviceData.heroImage}
        titleText={serviceData.heroText}

      />

      {serviceData.serviceDetails.map((currentDetails, index) => {
        return (
          <span key={currentDetails.serviceId}>
            <ServiceDetails
              imageSrc={currentDetails.image}
              imageAlt={currentDetails.heading}
              title={currentDetails.heading}
              description={currentDetails.description}
              features={currentDetails.details}
              shouldRight={index % 2 !== 0}
            />
          </span>
        );
      })}

      <CaseStudies caseStudiesList={caseStudiesList} />
      <Client clientList={clientList} />
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  // Check if 'id' exists and is a string
  if (!context.params || typeof context.params.id !== "string") {
    return {
      notFound: true,
    };
  }

  const id = context.params.id;
  const serviceData = serviceDataList.find(({ serviceId }) => serviceId === id);

  // If no serviceData is found for the given id, return a 404 error
  if (!serviceData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      serviceData,
    },
  };
};

export default Landing;
