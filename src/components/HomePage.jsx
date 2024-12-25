import aboutus from "../assets/imgs/aboutus.jpg";
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
import { RiSeoLine } from "react-icons/ri";
import { FaDigitalOcean } from "react-icons/fa6";
import { BiLogoBlender } from "react-icons/bi";
import { FiFigma } from "react-icons/fi";
import { AiOutlineProduct } from "react-icons/ai";
import { MdAdsClick } from "react-icons/md";
import Navbar from "./Navbar";
import ContactUs from "./ContactUs";




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
    {/* <Navbar/> */}
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

<ContactUs/>





    </>
  );
};

export default HomePage;
