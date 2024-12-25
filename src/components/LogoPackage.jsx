
import React, { useState } from "react";
import HeroProp from "./HeroProp";
import logode from "../assets/imgs/logode.jpg";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function LogoPackage() {
  const cardsData = [
    {
      icon: Icon,
      title: "Basic Logo Package",
      description:
        "Ideal for small businesses seeking an affordable logo.",
      price: "$150",
      duration: "one-time",
      features: [
        "Custom Logo Design",
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
      title: "Standard Logo Package",
      description: "For businesses seeking a more refined and versatile logo.",
      price: "$300",
      duration: "one-time",
      features: [
        "Custom Logo Design",
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
      title: "Premium Logo Package",
      description: "For brands seeking a unique logo with complete branding support.",
      price: "$500",
      duration: "one-time",
      features: [
        "Custom Logo Design",
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
        heading="Premium Logo Design Services"
        highlightText="Brand Identity"
        description="Our professional logo design services help businesses establish a strong visual identity that stands out. Whether you are a startup or an established company, we create logos that capture your essence and communicate your values effectively."
        image={logode}
        secondHeading="Building Brands with"
        secondHighlightText="Impactful Logos"
        secondDescription="At Logo Package, we specialize in creating memorable logos that leave a lasting impression. From conceptual design to final execution, our team ensures your logo aligns with your brand's vision and audience."
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
              quote for your next web or app project?
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

export default LogoPackage;
