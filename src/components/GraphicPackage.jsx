import React, { useState } from "react";
import HeroProp from "./HeroProp";
import graphicImage from "../assets/imgs/graphicImage.jpg";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function GraphicPackage() {
  const cardsData = [
    {
      icon: Icon,
      title: "Basic Graphic Package",
      description: "Perfect for small businesses needing basic graphic design services.",
      price: "$200",
      duration: "one-time",
      features: [
        "Custom Graphic Design",
        "2 Initial Concepts",
        "1 Revision",
        "High-Resolution Files",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: Icon,
      title: "Standard Graphic Package",
      description: "For businesses needing more refined and versatile graphic designs.",
      price: "$400",
      duration: "one-time",
      features: [
        "Custom Graphic Design",
        "3 Initial Concepts",
        "3 Revisions",
        "High-Resolution Files",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: diamond,
      title: "Premium Graphic Package",
      description: "For brands needing unique, high-quality graphics with complete branding support.",
      price: "$700",
      duration: "one-time",
      features: [
        "Custom Graphic Design",
        "5 Initial Concepts",
        "Unlimited Revisions",
        "High-Resolution Files",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
  ];

  return (
    <>
      <HeroProp
        heading="Premium Graphic Design Services"
        highlightText="Creative Designs"
        description="Our expert graphic design services help your brand stand out with stunning visuals. Whether you need marketing materials, branding elements, or social media graphics, we create designs that make an impact."
        image={graphicImage}
        secondHeading="Designing with"
        secondHighlightText="Creative Excellence"
        secondDescription="At Graphic Package, we specialize in creating visually compelling designs that align with your brand's identity. From logos to print designs, we ensure every detail reflects your vision and audience."
        cards={cardsData}
      />

      <section className="2xl:px-[80px] p-[5%] bg-black">
        <div className="flex justify-center items-center text-center">
          <div className="md:w-[79%] w-full">
            <h1 className="2xl:text-[60px] xl:text-5xl md:text-3xl text-2xl 2xl:leading-[86px] md:leading-10 leading-8 text-[#FAFAFA] coustard-regular lg:pt-10 pt-2 ">
              Do you want to get in touch with us?
            </h1>
            <p className="text-[#7D8C95] xl:text-[20px] md:text-base text-sm open-sans 2xl:leading-10 leading-7 md:pt-5 pt-1">
              Looking for Expert Digital Solutions? <br /> Or need a custom
              quote for your next graphic design project?
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

export default GraphicPackage;
