
import { useState } from "react";
import logo from "../assets/imgs/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
      <section className="bg-white">
        {/* Desktop Navbar */}
        <nav className="px-[5%] md:px-[3%] py-4 w-full lg:flex hidden justify-between items-center fixed z-50 bg-white shadow-lg">
          <div className="flex justify-center w-40">
            <img src={logo} alt="" className=" w-full h-full cursor-pointer"  onClick={() => scrollToSectionWithOffset('home')}/>
          </div>
          <div>
            <ul className="flex 2xl:space-x-20 open-sans lg:space-x-8 md:space-x-4 text-black uppercase poppins text-base font-medium leading-7">
              <li><button onClick={() => scrollToSectionWithOffset('home')} className="hover:text-main-color">Home</button></li>
              <li><button onClick={() => scrollToSectionWithOffset('about')} className="hover:text-main-color">About</button></li>
              <li><button onClick={() => scrollToSectionWithOffset('services')} className="hover:text-main-color">Services</button></li>
            </ul>
          </div>
          <div className="flex">
            <button
              onClick={() => scrollToSectionWithOffset('contactus')}
              className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white text-[17px]"
            >
              Contact Us
            </button>
          </div>
        </nav>

        {/* Mobile Navbar */}
        <nav className="p-4 lg:hidden fixed w-full z-[999] bg-white shadow-lg">
          <div className="flex items-center justify-between">
            <img src={logo} alt="" className=" w-28" />
            <button
              className="flex text-[#b48104] focus:outline-none"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>

          <div className={`${isOpen ? 'block' : 'hidden'} text-center mt-6`}>
            <ul className="items-center justify-between text-black uppercase text-lg font-medium leading-7 space-y-6 open-sans">
              <li><button onClick={() => scrollToSectionWithOffset('home')} className="hover:text-main-color">Home</button></li>
              <li><button onClick={() => scrollToSectionWithOffset('about')} className="hover:text-main-color">About</button></li>
              <li><button onClick={() => scrollToSectionWithOffset('services')} className="hover:text-main-color">Services</button></li>
            </ul>

            <div className="flex gap-6 md:flex-row flex-col justify-center mt-5">
              <button
                onClick={() => scrollToSectionWithOffset('contactus')}
                className="bg-gradient-to-r from-[#ceb371] to-[#b48104] rounded-lg py-2 px-6 open-sans uppercase text-white text-[17px]"
              >
                Contact Us
              </button>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
