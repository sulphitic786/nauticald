import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/imgs/logo.png";
import { RiArrowDropDownLine } from "react-icons/ri";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

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
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (!event.target.closest(".dropdown")) {
  //       setIsDropdownOpen(false);
  //     }
  //   };

  //   document.addEventListener("click", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  return (
    <section className="bg-white">
      <nav className="px-[5%] md:px-[3%] py-4 w-full lg:flex hidden justify-between items-center fixed z-50 bg-white shadow-lg">
        <div className="flex justify-center w-40">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full cursor-pointer"
            onClick={() => scrollToSectionWithOffset("home")}
          />
        </div>
        <div>
          <ul className="flex space-x-8 text-black uppercase text-base font-medium">
            <li>
              <button
                onClick={() => scrollToSectionWithOffset("home")}
                className="hover:text-main-color"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSectionWithOffset("about")}
                className="hover:text-main-color"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSectionWithOffset("services")}
                className="hover:text-main-color"
              >
                Services
              </button>
            </li>
            <li
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-main-color">
                Packages
                <RiArrowDropDownLine
                  className={`ml-2 transition-transform transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-0 mt-0 w-52 bg-white text-sm border border-gray-200 shadow-lg">
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/webpackage")}>
                      Web Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/seopackage")}>
                      SEO Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/webmaintainancepackage")}>
                      Web Maintenance Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/logopackage")} className="capitalize">
                    logo Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/graphicpackage")} className="capitalize">
                    graphic Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/digitalmarketingpackage")} className="capitalize">
                    Digital Marketing Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/productdesigningpackage")} className="capitalize">
                    Product Designing Package
                    </button>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </div>
        <div className="flex">
          <button
            onClick={() => scrollToSectionWithOffset("contactus")}
            className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 uppercase text-white text-[17px]"
          >
            Contact Us
          </button>
        </div>
      </nav>
      <nav className="p-4 lg:hidden fixed w-full z-[999] bg-white shadow-lg">
        <div className="flex items-center justify-between">
          <img src={logo} alt="" className=" w-28" />
          <button
            className="flex text-[#b48104] focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        <div className={`${isOpen ? "block" : "hidden"} text-center mt-6`}>
          <ul className="items-center justify-between text-black uppercase text-lg font-medium leading-7 space-y-3 open-sans">
            <li>
              <button
                onClick={() => scrollToSectionWithOffset("home")}
                className="hover:text-main-color"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSectionWithOffset("about")}
                className="hover:text-main-color"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSectionWithOffset("services")}
                className="hover:text-main-color"
              >
                Services
              </button>
            </li>
            <li className="relative">
              <button
                className="flex items-center justify-center w-full hover:text-main-color"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Packages
                <RiArrowDropDownLine
                  className={`ml-2 transition-transform transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white text-sm border border-gray-200 shadow-lg">
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/webpackage")}>
                      Web Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/seopackage")}>
                      SEO Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/webmaintainancepackage")}>
                      Web Maintenance Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/logopackage")} className="capitalize">
                    logo Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/graphicpackage")} className="capitalize">
                    graphic Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/digitalmarketingpackage")} className="capitalize">
                    Digital Marketing Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer ">
                    <button onClick={() => navigate("/productdesigningpackage")} className="capitalize">
                    Product Designing Package
                    </button>
                  </li>
                </ul>
              )}
            </li>

            {/* <li
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center hover:text-main-color">
                Packages
                <RiArrowDropDownLine
                  className={`ml-2 transition-transform transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isDropdownOpen && (
                <ul className="absolute mt-0 w-52 bg-white text-sm border border-gray-200 shadow-lg">
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/webpackage")}>
                      Web Package
                    </button>
                  </li>
                  <li className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer">
                    <button onClick={() => navigate("/seopackage")}>
                      SEO Package
                    </button>
                  </li>
                  <li
                    className="px-4 py-2 hover:bg-[#b48104] hover:text-white cursor-pointer"
                    onClick={() =>
                      scrollToSectionWithOffset("web-maintenance-package")
                    }
                  >
                    Web Maintenance Package
                  </li>
                </ul>
              )}
            </li> */}
          </ul>

          <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
            <button
              onClick={() => scrollToSectionWithOffset("contactus")}
              className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white text-[17px]"
            >
              Contact Us
            </button>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
