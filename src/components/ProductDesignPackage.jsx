import React, { useState } from "react";
import HeroProp from "./HeroProp";
import productDesignImage from "../assets/imgs/productDesignImage.jpg";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function ProductDesignPackage() {
  const cardsData = [
    {
      icon: Icon,
      title: "Basic Product Design Package Plane",
      description: "Perfect for startups looking for simple product design solutions.",
      price: "$300",
      duration: "one-time",
      features: [
        "Initial Product Concept",
        "2 Design Iterations",
        "Basic Wireframes",
        "High-Resolution Mockups",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: Icon,
      title: "Standard Product Design Package",
      description: "For businesses seeking detailed and polished product designs.",
      price: "$600",
      duration: "one-time",
      features: [
        "Detailed Product Concept",
        "5 Design Iterations",
        "Interactive Wireframes",
        "User Flow Diagrams",
        "High-Resolution Mockups",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: diamond,
      title: "Premium Product Design Package",
      description: "For brands needing end-to-end product design with usability in focus.",
      price: "$1200",
      duration: "one-time",
      features: [
        "Comprehensive Product Strategy",
        "Unlimited Design Iterations",
        "Prototyping & Testing",
        "Interactive Mockups",
        "Production-Ready Assets",
        "UX/UI Consultation",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
  ];

  return (
    <>
      <HeroProp
        heading="Premium Product Design Services"
        highlightText="Innovative Solutions"
        description="Our expert product design services bring your ideas to life. From concept to prototype, we ensure that every design aligns with your vision and provides a seamless user experience."
        image={productDesignImage}
        secondHeading="Shaping Ideas into"
        secondHighlightText="Functional Designs"
        secondDescription="At Product Design Package, we specialize in creating user-centric designs that combine aesthetics and functionality. Whether you need a design for an app, website, or physical product, we deliver exceptional results."
        cards={cardsData}
      />

      <section className="2xl:px-[80px] p-[5%] bg-black">
        <div className="flex justify-center items-center text-center">
          <div className="md:w-[79%] w-full">
            <h1 className="2xl:text-[60px] xl:text-5xl md:text-3xl text-2xl 2xl:leading-[86px] md:leading-10 leading-8 text-[#FAFAFA] coustard-regular lg:pt-10 pt-2 ">
              Do you want to get in touch with us?
            </h1>
            <p className="text-[#7D8C95] xl:text-[20px] md:text-base text-sm open-sans 2xl:leading-10 leading-7 md:pt-5 pt-1">
              Looking for cutting-edge product design solutions? <br /> Or need a custom quote for your next design project?
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

export default ProductDesignPackage;
