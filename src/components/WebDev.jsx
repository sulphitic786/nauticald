import React, { useState } from "react";
import HeroProp from "./HeroProp";
import webdev from "../assets/imgs/webdev.jpg";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function WebDev() {
  // Function to handle smooth scroll with offset

  const cardsData = [
    {
      icon: Icon,
      title: "Basic Starter Plan For   Web Development  ",
      description:
        "Ideal for small businesses and individuals starting their online journey.",
      price: "$500",
      duration: "per project",
      features: ["Responsive Design", "Basic SEO Integration", "Up to 5 Pages"],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: Icon,
      title: "Advanced Web Development Plan",
      description:
        "Perfect for growing  a businesses looking to enhance their online presence.",
      price: "$1000",
      duration: "per project",
      features: [
        "Custom Design and Features",
        "Enhanced Performance Optimization",
        "E-commerce Integration",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: diamond,
      title: "Enterprise Web Development Plan",
      description:
        "Tailored for large businesses needing comprehensive web solutions.",
      price: "$2500",
      duration: "per project",
      features: [
        "Advanced Security Features",
        "Full-Stack Development",
        "Ongoing Maintenance and Support",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
  ];

  return (
    <>
      {/* <Navbar /> */}
      <HeroProp
        heading="Custom Web Development Services
        That Drive Business Success"
        highlightText="Online Presence"
        description="Our web development services focus on building tailored solutions that enhance user experience, boost conversions, and establish a strong online presence for your business. Whether you need a personal portfolio, an e-commerce platform, or a corporate website, we deliver innovative and reliable solutions."
        image={webdev}
        secondHeading="Crafting Websites That "
        secondHighlightText="Stand Out"
        secondDescription="Are you looking for a web development partner to transform your ideas into a digital masterpiece? At Nautical Dynamics Technologies, we specialize in creating websites that combine aesthetics, functionality, and performance, ensuring your business leaves a lasting impression."
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

export default WebDev;
