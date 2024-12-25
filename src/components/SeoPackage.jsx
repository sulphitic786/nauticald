import React, { useState } from "react";
import HeroProp from "./HeroProp";
import aboutwebfo from "../assets/imgs/aboutwebfo.jpg";

import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";
import ContactUs from "./ContactUs";


function SeoPackage() {
 
   
    



    const cardsData = [
      {
        icon: Icon,
        title: "Basic SEO Plan",
        description: "Small businesses and startups looking to establish an online presence.",
        price: "$250",
        duration: "per month",
        features: [
          "Customizable digital business card",
          "Basic Website Speed Optimization",
          "Keyword Research",
        ],
        checkIcon: Check,
        link: "#",
        buttonText: "Get Started",
      },
      {
        icon: Icon,
        title: "Advance SEO Plan",
        description: "For businesses boosting online presence with advanced SEO.",
        price: "$400",
        duration: "per month",
        features: [
          "Advanced Keyword Optimization",
          "Weekly Backups and Security Updates",
          "High-Speed Website Optimization",
        ],
        checkIcon: Check,
        link: "#",
        buttonText: "Get Started",
      },
      {
        icon: diamond,
        title: "Ecommerce SEO Plan",
        description: "For businesses driving sales with online product/services.",
        price: "$600",
        duration: "per month",
        features: [
          "Fully Custom E-Commerce Website",
          "Advanced Site Navigation",
          "Monthly Analytics and SEO Reports",
        ],
        checkIcon: Check,
        link: "#",
        buttonText: "Get Started",
      },
    ];
    
  return (
    <>
      <HeroProp
        heading="Best SEO Packages
That Increase Website Organic SEO Ranking"
        highlightText="Traffic & Sales"
        description="SEO packages from RankON don’t only increase your search engine rankings but also improve your conversion, domain authority and brand visibility. RankON Technologies is a leading search engine optimization company whose SEO Packages are worth every dime. Our SEO packages help you to rank higher in Google search results.

From website optimization to keyword rankings we take care of every single aspect of SEO to increase your organic traffic asap."
        image={aboutwebfo}
        secondHeading="Building  Foundation for "
        secondHighlightText="Success"
        secondDescription="Are you looking for an SEO package that will help your website rank higher in search engine results pages? If so, you’ve come to the right place! At Nautical Dynamics Technologies, we offer a variety of affordable and effective SEO packages that can help your website achieve better rankings."
        cards={cardsData}
      />
      
      <section className="2xl:px-[80px] p-[5%] bg-black">
        <div className="flex justify-center items-center text-center">
          <div className="md:w-[79%] w-full">
            <h1 className="2xl:text-[60px] xl:text-5xl md:text-3xl text-2xl 2xl:leading-[86px] md:leading-10 leading-8 text-[#FAFAFA] coustard-regular lg:pt-10 pt-2 ">
              Do you want to get in touch with us?
            </h1>
            <p className="text-[#7D8C95] xl:text-[20px] md:text-base text-sm open-sans 2xl:leading-10 leading-7 md:pt-5 pt-1">
              Looking for Expert Digital Solutions? <br /> Or need a custom quote for
              your next web or app project?
            </p>
            <div className="flex justify-center items-center md:gap-5 gap-2 md:flex-row flex-col md:pt-10 pt-5">
              <a href="#contactus" className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px]">
                Contact Us
              </a>
              <a href="#services" className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px]">
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

export default SeoPackage;
