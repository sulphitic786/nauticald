import aboutus from "../assets/imgs/aboutus.jpg";
import aboutwebfo from "../assets/imgs/aboutwebfo.jpg";
import { FaFacebookF } from "react-icons/fa";
import Left from "../assets/imgs/Left.png";
import Right from "../assets/imgs/Right.png";
import q1 from "../assets/imgs/q1.png";
import q2 from "../assets/imgs/q2.png";
import user1 from "../assets/imgs/user1.png";
import { CiMobile4 } from "react-icons/ci";
import { MdOutlineWebAsset } from "react-icons/md";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from 'swiper/modules';  
import { FaPhone } from "react-icons/fa6";
import "swiper/css/pagination";
import { MdOutlineEmail } from "react-icons/md";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareWhatsapp } from "react-icons/fa6";
import logo from "../assets/imgs/logo.png";
import { RiSeoLine } from "react-icons/ri";
import { FaDigitalOcean } from "react-icons/fa6";
import { BiLogoBlender } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";




const HomePage = () => {
  const [counterStart, setCounterStart] = useState(false);
  const services = [
    {
      icon: <MdOutlineWebAsset className="fa fa-facebook" />,
      title: "Web Development",
      description:
        "Help your company increase product knowledge. To maintain communication with potential clients, sell your products, and generate more sales and leads for your business.",
    },
    {
      icon: <RiSeoLine className="fa fa-facebook" />,
      title: "Expert SEO Development ",
      description:
        "SEO increases engagement, traffic, and conversions. It improves the quality of traffic, and brand awareness, and builds trust.",
    },
    {
      icon: <CiMobile4 className="fa fa-facebook" />,
      title: "Mobile App Development",
      description:
        "Elevate your business with custom mobile app development. Enhance product knowledge within your company, maintain seamless communication with potential clients.",
    },
    {
      icon: <FaDigitalOcean className="fa fa-facebook" />,
      title: "Digital marketing",
      description:
        "Transform your business with strategic digital marketing solutions. Increase brand visibility, connect with clients, effectively promote your products, and drive sustained growth.",
    },
    {
      icon: <FiFigma className="fa fa-facebook" />,
      title: "Graphic designing",
      description:
        "Our Created Websites impact how your brand is perceived. It is an important part of your online marketing presence. Build trust with your audience and stand out from the competition.",
    },
    {
      icon: <BiLogoBlender  className="fa fa-facebook" />,
      title: "Logo designing",
      description:
        "Create a lasting impression with professional logo design services. A well-crafted logo not only represents your brand identity but also communicates your values and vision to your audience",
    },
    {
      icon: <AiOutlineProduct  className="fa fa-facebook" />,
      title: "Product designing",
      description:
        "Transform your brand with innovative product design that blends style and functionality. We create user-centered solutions that stand out and meet your audience’s needs.",
    },
    {
      icon: <MdAdsClick  className="fa fa-facebook" />,
      title: "Google ads",
      description:
        "Maximize your business reach with Google Ads. Drive targeted traffic, increase conversions, and grow your brand with tailored ad campaigns that deliver measurable results.",
    },
    {
      icon: <FaFacebookF   className="fa fa-facebook" />,
      title: "Facebook ads",
      description:
        "Boost your business with Facebook Ads. Reach a targeted audience, increase engagement, and drive conversions with tailored campaigns that grow your brand and generate more sales.",
    },
  ];
  const testimonials = [
    {
      name: "John, Tech Startup Founder",
      image: user1,
      feedback: "Their web development team took our vision and turned it into a powerful, user-friendly platform. The seamless experience has been a game-changer for our business."
    },
    {
      name: "Sarah, E-commerce Business Owner",
      image: user1,
      feedback: "The mobile app they developed for us has boosted our customer engagement dramatically. We've seen a significant increase in mobile sales thanks to their expertise."
    },
    {
      name: "Michael, Data Analyst",
      image: user1,
      feedback: "Their data analysis services helped us uncover key insights, leading to more informed decisions. We now have a clearer strategy for our business growth."
    }
  ];
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
    const yPosition = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: yPosition,
      behavior: 'smooth'
    });
  };

 
  

  return (
    <>
      <div className=" text-white flex flex-col lg:py-40 py-28 items-center justify-center px-[3%] text-center" id="home">
        <main className="text-center space-y-5 " data-aos="fade-right">
          <h1 className="md:text-6xl text-3xl font-bold mb-4 coustard-regular hover:text-[#b48104] text-gradient md:leading-[80px] leading-8">
          Web Development
& <br />Digital Marketing
Company
          </h1>
          <p className="md:text-2xl text-lg  open-sans text-black">
          Best &nbsp;
            <span className="text-[#b48104] coustard-regular capitalize">
            Digital Marketing Services
            </span>
            &nbsp;from Top Rated Digital Marketing Experts
          </p>
          <p className=" text-black  text-base">
          A Well-Known Our Digital Marketing Company focused on Client Business Growth Only. 
            <br className="md:block hidden" /> Our digital marketing experts are offering Digital Marketing Solutions for businesses for more than 10 Years.
          </p>
          <div className="flex md:gap-5 gap-2 justify-center items-center md:flex-row flex-col">
            <a href="#services" className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px]">
              Our Services
            </a>
            <a href="#contactus" className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px]">
              Contact Us
            </a>
          </div>
        </main>
      </div>

      <section className=" md:px-[3%] px-[5%] py-[5%]" id="about">
        <div className="flex items-center justify-center  gap-10 md:flex-row flex-col-reverse">
          <div className="md:w-1/2 w-full">
            <img src={aboutus} alt="" className="rounded-[20px]" />
          </div>
          <div className="md:w-1/2 w-full ">
            <p className="xl:text-2xl lg:text-lg text-sm text-black coustard-regular text-gradient">
              Who We Are
            </p>
            <h2 className="xl:text-[38px] lg:text-[28px] text-[23px] open-sans lg:leading-10 leading-6">
            A Well Known Digital Marketing Agency.
            </h2>
            <p className="text-black xl:leading-7 lg:leading-6  xl:text-lg lg:text-base text-sm tracking-wider pt-7 ">
            We are one of the finest Web Development and Digital Marketing Companies renowned for using the latest online marketing techniques and the most sophisticated tools that help your business get a digital edge.
             Our team of passionate
              professionals is committed to helping businesses harness the power
              of technology to achieve their goals. We believe in innovation,
              collaboration, and delivering results that matter. Let us be the
              driving force behind your digital success.
            </p>
            {/* <button className="mt-10">hello</button> */}
            <div className="mt-10">
            <a href="#contactus" className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white  text-[17px] ">
              Contact Us
            </a>
            </div>
          </div>
        </div>
      </section>

      <section className="md:px-[3%] px-[5%] pt-[5%]">
        <ScrollTrigger
          onEnter={() => setCounterStart(true)}
          onExit={() => setCounterStart(false)}
        >
          <div className="">
            <div className="text-center">
              <h1 className="md:text-6xl text-3xl font-bold mb-2 coustard-regular hover:text-[#b48104] text-gradient lg:leading-[80px] md:leading-[60px] leading-8">
                Numbers That Define Our Success
              </h1>
              <p className="md:text-xl text-base  open-sans text-black">
                From successful projects to satisfied clients, our numbers speak{" "}
                <br className="md:block hidden" /> for themselves, showcasing
                our commitment to delivering excellence in every service we
                provide.
              </p>
            </div>

            <div className="row grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 text-black my-10 gap-8">
              <div className="counter text-black count1 text-center">
                <p className="md:text-2xl text-base  open-sans text-black">
                  Happy clients
                </p>
                <h1 className="value coustard-regular text-4xl pt-2 text-[#b48104]">
                  {counterStart && (
                    <CountUp start={0} end={1000} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </div>

              <div className="counter text-black count1 text-center">
                <p className="md:text-2xl text-base  open-sans text-black">
                  Done projects
                </p>
                <h1 className="value coustard-regular text-4xl pt-2 text-[#b48104]">
                  {counterStart && (
                    <CountUp start={0} end={950} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </div>

              <div className="counter text-black count1 text-center">
                <p className="md:text-2xl text-base  open-sans text-black">
                  Team Members
                </p>
                <h1 className="value coustard-regular text-4xl pt-2 text-[#b48104]">
                  {counterStart && (
                    <CountUp start={0} end={750} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </div>

              <div className="counter text-black count1 text-center">
                <p className="md:text-2xl text-base  open-sans text-black">
                  Years Active
                </p>
                <h1 className="value coustard-regular text-4xl pt-2 text-[#b48104]">
                  {counterStart && (
                    <CountUp start={0} end={10} duration={2} delay={0} />
                  )}
                  +
                </h1>
              </div>
            </div>
          </div>
        </ScrollTrigger>
      </section>

     
      <section className="promo-section md:px-[3%] px-[5%] py-[5%]" id="services">
        <div className="">
          <div className="section-headline text-center">
            <h2 className="text-lg open-sans text-black">
              Empowering Your Business <br />
              <span className="text-[#b48104] coustard-regular md:text-6xl text-3xl">
                with Tailored Solutions
              </span>
            </h2>
            <p className="open-open-sans text-base text-black">
              Explore our comprehensive range of services designed <br />
              to meet your unique needs. From web and app development to graphic
              design and data analysis
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-10 gap-8 pt-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="single-promo-hover single-promo-1 text-center md:px-6 px-3 md:py-10 py-5"
              >
                <div className="circle-icon flex justify-center items-center">
                  <span className="text-white text-3xl">{service.icon}</span>
                </div>
                <h5 className="mt-4 coustard-regular text-[#b48104] md:text-xl text-base">
                  {service.title}
                </h5>
                <p className="text-black open-sans md:text-base text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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



      <section className="2xl:py-40 md:py-20 py-14 2xl:px-[100px] px-[5%]" id="testimonial">
      <div className="flex justify-center mb-[115px]">
        <div className="flex justify-between items-center md:w-[70%] w-full">
          <img src={q1} alt="" className="2xl:w-[117px] md:w-[85px] w-8" />
          <h1 className="open-sans 2xl:text-[66px] xl:text-[50px] text-4xl text-main-color capitalize text-center">
            What Our Clients Are Saying
          </h1>
          <img src={q2} alt="" className="2xl:w-[117px] md:w-[85px] w-8" />
        </div>
      </div>

      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}
        className="swiper mySwiper md:!w-[70%] w-full"
      >
        <div className="swiper-wrapper  md:pt-32 pt-9 md:pb-12 pb-7">
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center">
                <div className="w-[100px] h-[100px]">
                  <img src={testimonial.image} alt="" className="rounded-[30px]" />
                </div>
                <h3 className=" text-gradient coustard-regular text-center md:text-2xl text-xl md:pt-10 pt-3">
                  {testimonial.name}
                </h3>
                <p className="text-[#7D8C95] xl:text-2xl 2xl:leading-[60px] md:text-xl md:leading-10 text-base leading-7 sofia_light pt-5 text-center open-sans">
                  "{testimonial.feedback}"
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>

        <div className="flex justify-center absolute bottom-0 md:left-[40%] left-[30%] md:right-[40%] right-[30%] mb-5 z-50">
          <div className="swiper-button-prev flex items-center justify-center cursor-pointer">
            <img src={Left} alt="Prev" />
          </div>
          <div className="swiper-button-next flex items-center justify-center cursor-pointer">
            <img src={Right} alt="Next" />
          </div>
        </div>
      </Swiper>
    </section>







    <section className="md:px-[5%] px-[5%] py-[5%]" id="contactus">

        <div className="flex lg:gap-20 gap-10 md:flex-row flex-col justify-between">
          <div className="lg:w-[55%] md:w-[50%] w-full">
            <h3 className="text-text-color 2xl:text-[80px] xl:text-[70px] lg:text-6xl md:text-5xl text-3xl inter font-black capitalize coustard-regular">
              Contact
            </h3>
            <p className=" 2xl:pt-[56px] xl:pt-12 lg:pt-9 pt-5 inter font-normal 2xl:text-xl  lg:text-lg text-sm text-text-color leading-6 open-sans">
              If you are looking for assistance in building a portfolio, or want
              the best advice to help propel your career, get in
              touch with us today!
            </p>
            <h3 className="font-black inter text-xl pt-10 open-sans open-sans">
              For booking inquiries, please contact us :
            </h3>

            <div className="flex  md:gap-8 gap-4 md:pt-10 pt-5 lg:flex-row flex-col">
              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base  coustard-regular">
             
                <FaPhone className="md:text-3xl text-xl text-[#b48104] " />
0948347374              </p>
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
          
                <FaSquareFacebook  className="md:text-3xl text-xl text-[#b48104] " />
                Facebook
              </p>


              <p className="flex items-center xl:gap-8 md:gap-2 gap-2 inter font-normal lg:text-xl text-base coustard-regular">
          
                <FaSquareWhatsapp   className="md:text-3xl text-xl text-[#b48104] " />
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

            <img src={logo} alt="" className="w-36 cursor-pointer" onClick={() => scrollToSectionWithOffset('home')} />
            <p className="pt-2 text-white text-base leading-7 open-sans md:text-left text-center">
            At the heart of our company is a passion for innovation and digital transformation. We specialize in providing a wide range of services, including web development, app development, graphic design, and data analysis. Whether you're a startup looking to establish a digital presence or an established business aiming to scale, we are here to deliver solutions that cater to your specific needs.
            </p>

          
          </div>
          <div className="xl:w-[50%] md:w-[20%] w-full flex items-center justify-center">
            <ul className="sofia_regular 2xl:text-[20px] text-base text-white font-semibold space-y-4 capitalize ">
           <li><button onClick={() => scrollToSectionWithOffset('home')} className="hover:text-red-600">Home</button></li>
              <li><button onClick={() => scrollToSectionWithOffset('about')} className="hover:text-red-600">About</button></li>
              <li><button onClick={() => scrollToSectionWithOffset('services')} className="hover:text-red-600">Services</button></li>
             
              <li><button onClick={() => scrollToSectionWithOffset('contactus')} className="hover:text-red-600">Contact Us</button></li>
            
            </ul>
          </div>
        </div>




        <div className="footer-bottom">
          <hr className="w-full text-blue-950 mt-8 mb-4" />
          <div className="text-center">
            <p className="open-sans md:text-[20px] text-sm text-main-color capitalize">
              © Copyright 2024 <span className="coustard-regular">Nautical Dynamics</span> all rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
