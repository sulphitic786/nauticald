
import React, { useState } from "react";
import HeroProp from "./HeroProp";
import webmain from "../assets/imgs/webmain.jpg";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function WebMaintainance() {

 

  const cardsData = [
    {
      icon: Icon,
      title: "Basic Maintenance Plan",
      description: "Ideal for small websites requiring occasional updates and security checks.",
      price: "$150",
      duration: "per month",
      features: [
        "Monthly Security Updates",
        "Basic Performance Monitoring",
        "Content Updates (up to 5 changes)",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: Icon,
      title: "Advanced Maintenance Plan",
      description: "For websites needing frequent updates and advanced monitoring tools.",
      price: "$300",
      duration: "per month",
      features: [
        "Bi-Weekly Security Updates",
        "Performance Optimization",
        "Content Updates (up to 20 changes)",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: diamond,
      title: "E-Commerce Maintenance Plan",
      description: "Perfect for e-commerce websites requiring round-the-clock monitoring and updates.",
      price: "$500",
      duration: "per month",
      features: [
        "24/7 Uptime Monitoring",
        "Unlimited Content Updates",
        "Monthly Analytics and SEO Reports",
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
        heading="Professional Web Maintenance Services"
        highlightText="Keep Your Website Secure & Updated"
        description="Our web maintenance packages ensure that your website remains updated, secure, and optimized for performance. We take care of regular backups, security checks, and content updates so you can focus on growing your business easily."
        image={webmain}
        secondHeading="Why Regular Maintenance is Crucial for "
        secondHighlightText="Your Website"
        secondDescription="A well-maintained website ensures seamless performance, enhances user experience, and protects your data. With our tailored maintenance plans, your website will always be in its best shape, driving more engagement and conversions."
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

export default WebMaintainance;
