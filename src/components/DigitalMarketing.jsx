
import React, { useState } from "react";
import HeroProp from "./HeroProp";
import digitalMarketingImage from "../assets/imgs/digitalMarketingImage.jpg";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function DigitalMarketing() {
  const cardsData = [
    {
      icon: Icon,
      title: "Basic Digital Marketing Package Plan",
      description: "Ideal for small businesses looking to start digital marketing.",
      price: "$250",
      duration: "one-time",
      features: [
        "SEO Optimization",
        "Social Media Management (1 platform)",
        "Basic Analytics Report",
        "Ad Campaign Setup",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: Icon,
      title: "Standard Digital Marketing Package",
      description: "For businesses looking to enhance online visibility and engagement.",
      price: "$500",
      duration: "one-time",
      features: [
        "SEO Optimization",
        "Social Media Management (2 platforms)",
        "Advanced Analytics Report",
        "Ad Campaign Management",
        "Email Marketing Setup",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: diamond,
      title: "Premium Digital Marketing Package",
      description: "For brands seeking a comprehensive digital marketing strategy.",
      price: "$1000",
      duration: "one-time",
      features: [
        "SEO Optimization",
        "Social Media Management (3 platforms)",
        "Custom Content Creation",
        "Advanced Analytics & Reporting",
        "Comprehensive Ad Campaign Management",
        "Email & SMS Marketing",
        "Brand Strategy Consulting",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
  ];

  return (
    <>
      <HeroProp
        heading="Premium Digital Marketing Services"
        highlightText="Boost Your Brand"
        description="Our digital marketing services are designed to help businesses increase their online presence and drive traffic. From SEO to social media marketing and paid campaigns, we provide a comprehensive strategy to boost your brand's digital footprint."
        image={digitalMarketingImage}
        secondHeading="Elevating Brands with"
        secondHighlightText="Effective Digital Strategies"
        secondDescription="At Digital Marketing Package, we offer tailor-made strategies that align with your business goals. Whether you're aiming to increase sales, drive website traffic, or enhance brand awareness, our services will help you reach your objectives."
        cards={cardsData}
      />

      <section className="2xl:px-[80px] p-[5%] bg-black">
        <div className="flex justify-center items-center text-center">
          <div className="md:w-[79%] w-full">
            <h1 className="2xl:text-[60px] xl:text-5xl md:text-3xl text-2xl 2xl:leading-[86px] md:leading-10 leading-8 text-[#FAFAFA] coustard-regular lg:pt-10 pt-2 ">
              Do you want to get in touch with us?
            </h1>
            <p className="text-[#7D8C95] xl:text-[20px] md:text-base text-sm open-sans 2xl:leading-10 leading-7 md:pt-5 pt-1">
              Looking for Expert Digital Marketing Solutions? <br /> Or need a custom
              quote for your next campaign?
            </p>
            <div className="flex justify-center items-center md:gap-5 gap-2 md:flex-row flex-col md:pt-10 pt-5">
              <a
                href="#contactus"
                className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px]"
              >
                Contact Us
              </a>
              <a
                href="#services"
                className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px]"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </section>
<ContactUs/>

    </>
  );
}

export default DigitalMarketing;
