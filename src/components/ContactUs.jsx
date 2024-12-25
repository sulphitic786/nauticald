import React, { useState } from "react";
import logo from "../assets/imgs/logo.png";
import { FaPhone } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";

function ContactUs() {
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
  return (
    <div>
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

            <div className="flex  md:gap-8 gap-4 md:pt-10 items-start pt-5 lg:flex-row flex-col">
              <p className="flex items-start xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base  coustard-regular">
                <FaPhone className="md:text-3xl text-xl text-[#b48104] " />
                +1 (402) 203-9156 <br />
                +1 (423) 840-0006
              </p>
              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base coustard-regular">
                <MdOutlineEmail className="md:text-3xl text-xl text-[#b48104] " />
                contactus@dynamicd.com
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
    </div>
  )
}

export default ContactUs
