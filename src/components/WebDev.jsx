
import React, { useState } from "react";
import HeroProp from "./HeroProp";
import webdev from "../assets/imgs/webdev.jpg";
import logo from "../assets/imgs/logo.png";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import Icon from "../assets/imgs/Icon.png";
import Check from "../assets/imgs/Check.png";
import diamond from "../assets/imgs/diamond.png";

function WebDev() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    postCode: "",
    phone: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data Submitted:", formData);

    setFormData({
      name: "",
      age: "",
      email: "",
      postCode: "",
      phone: "",
      photo: null, // Resetting the photo field as well
    });

    document.querySelector('input[type="file"]').value = "";
  };
  // Function to handle smooth scroll with offset
  const scrollToSectionWithOffset = (id) => {
    const section = document.getElementById(id);
    const yOffset = -80; // Adjust the offset as needed
    const yPosition =
      section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: "smooth",
    });
  };

  const cardsData = [
    {
      icon: Icon,
      title: "Basic Starter Plan For   Web Development  ",
      description:
        "Ideal for small businesses and individuals starting their online journey.",
      price: "$500",
      duration: "per project",
      features: [
        "Responsive Design",
        "Basic SEO Integration",
        "Up to 5 Pages",
      ],
      checkIcon: Check,
      link: "#",
      buttonText: "Get Started",
    },
    {
      icon: Icon,
      title: "Advanced Web Development Plan",
      description:
        "Perfect for growing businesses looking to enhance their online presence.",
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
      <section className="md:px-[5%] px-[5%] py-[5%]" id="contactus">
        <div className="flex lg:gap-20 gap-10 md:flex-row flex-col justify-between">
          <div className="lg:w-[55%] md:w-[50%] w-full">
            <h3 className="text-text-color 2xl:text-[80px] xl:text-[70px] lg:text-6xl md:text-5xl text-3xl inter font-black capitalize coustard-regular">
              Contact
            </h3>
            <p className=" 2xl:pt-[56px] xl:pt-12 lg:pt-9 pt-5 inter font-normal 2xl:text-xl  lg:text-lg text-sm text-text-color leading-6 open-sans">
              If you are looking for assistance in building a portfolio, or want
              the best advice to help propel your career, get in touch with us
              today!
            </p>
            <h3 className="font-black inter text-xl pt-10 open-sans open-sans">
              For booking inquiries, please contact us :
            </h3>

            <div className="flex  md:gap-8 gap-4 md:pt-10 pt-5 lg:flex-row flex-col">
              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base  coustard-regular">
                <FaPhone className="md:text-3xl text-xl text-[#b48104] " />
                0948347374{" "}
              </p>
              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base coustard-regular">
                <MdOutlineEmail className="md:text-3xl text-xl text-[#b48104] " />
                info@nauticaldynamic.com
              </p>
            </div>

            <div className="flex  md:gap-8 gap-4 md:pt-10 pt-5 lg:flex-row flex-col">
              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base coustard-regular">
                <FaSquareInstagram className="md:text-3xl text-xl text-[#b48104]  " />
                Instagram
              </p>
              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base coustard-regular">
                <FaSquareFacebook className="md:text-3xl text-xl text-[#b48104] " />
                Facebook
              </p>

              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base coustard-regular">
                <FaSquareWhatsapp className="md:text-3xl text-xl text-[#b48104] " />
                Whatsapp
              </p>
            </div>
          </div>
          <div className="lg:w-[35%] md:w-[50%] w-full shadow-lg   rounded-[1.5rem] shadow-[0 3px 20px 0px rgba(0 0 0 / 12%)]">
            <form
              className=" lg:p-10 md:p-7 p-4 rounded-[1.5rem] space-y-6 bg-[#FBFBFB]"
              onSubmit={handleSubmit}
            >
              <div className="mb-4 ">
                <label className="block text-[#121826] text-xs inter font-semibold z-50 -mb-1  ml-2">
                  <span className="bg-white rounded-lg px-3 py-1 open-sans">
                    {" "}
                    Your Name <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className=" rounded-lg  border border-gray-300">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-3 py-2  focus:outline-none   rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[#121826] text-xs inter font-semibold z-50 -mb-1  ml-2">
                  <span className="bg-white rounded-lg px-3 py-1 leading-5 open-sans">
                    E-mail <span className="text-red-500">*</span>
                  </span>
                </label>
                <div className=" rounded-lg  border border-gray-300">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="yourmail@gmail.com"
                    className="w-full px-3 py-2  focus:outline-none   rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[#121826] text-xs inter font-semibold z-50 -mb-1  ml-2">
                  <span className="bg-white rounded-lg px-3 py-1 leading-5 open-sans">
                    Phone<span className="text-red-500">*</span>
                  </span>
                </label>
                <div className=" rounded-lg  border border-gray-300">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2  focus:outline-none   rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[#121826] text-xs inter font-semibold z-50 -mb-1  ml-2">
                  <span className="bg-white rounded-lg px-3 py-1 leading-5 open-sans">
                    Subject
                  </span>
                </label>
                <div className=" rounded-lg  border border-gray-300">
                  <input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    className="w-full px-3 py-2  focus:outline-none   rounded-lg"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-[#121826] text-xs inter font-semibold z-50 -mb-1  ml-2">
                  <span className="bg-white rounded-lg px-3 py-1 leading-5 open-sans">
                    Message
                  </span>
                </label>
                <div className=" rounded-lg  border border-gray-300">
                  <textarea
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    className="w-full px-3 py-2 h-32  focus:outline-none   rounded-lg resize-none"
                    required
                  />
                </div>
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px] w-full">
                  SUBMIT
                </button>
                {/* <button
                        type="submit"
                        className="w-full bg-main-color text-white py-3 px-4 rounded-md hover:bg-pink-600 transition-all duration-200 2xl:text-[28px] lg:text-2xl md:text-xl text-base font-semibold"
                      >
                        SUBMIT
                      </button> */}
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="2xl:px-[100px]  pt-[50px] pb-[30px] p-[5%] bg-black">
        <div className="flex items-start justify-between gap-11 md:flex-row flex-col ">
          <div className="xl:w-[50%] md:w-[80%] w-full flex  items-center gap-5 md:flex-row flex-col">
            <img
              src={logo}
              alt=""
              className="w-36 cursor-pointer"
              onClick={() => scrollToSectionWithOffset("home")}
            />
            <p className="pt-2 text-white text-base leading-7 open-sans md:text-left text-center">
              At the heart of our company is a passion for innovation and
              digital transformation. We specialize in providing a wide range of
              services, including web development, app development, graphic
              design, and data analysis. Whether you're a startup looking to
              establish a digital presence or an established business aiming to
              scale, we are here to deliver solutions that cater to your
              specific needs.
            </p>
          </div>
          <div className="xl:w-[50%] md:w-[20%] w-full flex items-center justify-center">
            <ul className="sofia_regular 2xl:text-[20px] text-base text-white font-semibold space-y-4 capitalize ">
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("home")}
                  className="hover:text-red-600"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("about")}
                  className="hover:text-red-600"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("services")}
                  className="hover:text-red-600"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => scrollToSectionWithOffset("contactus")}
                  className="hover:text-red-600"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <hr className="w-full text-blue-950 mt-8 mb-4" />
          <div className="text-center">
            <p className="open-sans md:text-[20px] text-sm text-main-color capitalize">
              © Copyright 2024{" "}
              <span className="coustard-regular">Nautical Dynamics</span> all
              rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebDev;
