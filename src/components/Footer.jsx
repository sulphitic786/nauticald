import React from "react";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/imgs/logo.png";

function Footer() {
  const navigate = useNavigate();

  const scrollToSectionWithOffset = (id) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80; // Adjust the offset as needed
      const yPosition =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({
        top: yPosition,
        behavior: "smooth",
      });
    } else {
      // Redirect to home or any specific page, then scroll
      navigate("/");
      setTimeout(() => {
        const delayedSection = document.getElementById(id);
        if (delayedSection) {
          const yOffset = -80;
          const yPosition =
            delayedSection.getBoundingClientRect().top +
            window.pageYOffset +
            yOffset;
          window.scrollTo({
            top: yPosition,
            behavior: "smooth",
          });
        }
      }, 500); // Delay to ensure the new page has loaded
    }
  };

  return (
    <>
      <section className="2xl:px-[100px]  pt-[50px] pb-[30px] p-[5%] bg-black">
        <div className="flex items-start justify-between md:gap-11 gap-8 md:flex-row flex-col ">
          <div className=" md:w-[33%] w-full">
            <img
              src={logo}
              alt=""
              className="w-36 cursor-pointer"
              onClick={() => scrollToSectionWithOffset("home")}
            />
            <p className="pt-2 text-white text-base leading-7 open-sans text-left ">
              We specialize in innovative solutions, offering web development,
              app development, graphic design, and data analysis. Whether you're
              a startup building your presence or a business scaling up, we
              deliver tailored digital solutions.
            </p>
          </div>
          <div className="md:w-[33%] w-full flex md:items-center justify-center items-start-start flex-col  ">
            <h1 className="text-3xl mb-4 text-white">Quick Links</h1>
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
          <div className="md:w-[33%] w-full flex items-start flex-col ">
            <div className="text-white md:text-center text-start">
              <h1 className="text-3xl mb-4">Office Headquarter</h1>
              <p>811 Verdon Ct. Plattsmouth, NE 68048</p>
            </div>
            <ul className="sofia_regular 2xl:text-[20px] text-base text-white font-semibold space-y-4 mt-4 ">
              <li className="flex items-center xl:gap-8 md:gap-2 gap-2 ">
                <MdOutlineEmail className="md:text-2xl text-xl text-[#b48104] " />
                contactus@nauticald.com
              </li>
              <li className="flex items-start xl:gap-8 md:gap-2 gap-2 ">
                <FaPhone className="md:text-2xl text-xl text-[#b48104] " />
                +1 (402) 203-9156 <br />
                +1 (423) 840-0006
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <hr className="w-full text-blue-950 mt-8 mb-4" />
          <div className="text-center flex items-center justify-between md:flex-row flex-col md:gap-0 gap-5">
            <p className="open-sans md:text-base text-sm text-main-color capitalize">
              © Copyright 2024{" "}
              <span className="coustard-regular">Nautical Dynamics</span> all
              rights reserved
            </p>
            <div className="md:text-base underline text-sm text-white flex items-center gap-5 capitalize">
              <Link
                to="/terms"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Terms
              </Link>
              <Link
                to="/policy"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Privacy
              </Link>
              <Link
                to="/refund-policy"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
