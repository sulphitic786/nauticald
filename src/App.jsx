
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { useNavigate } from "react-router-dom";
import SeoPackage from "./components/SeoPackage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WebDev from "./components/WebDev";
import WebMaintainance from "./components/WebMaintainance";
import LogoPackage from "./components/LogoPackage";
import GraphicPackage from "./components/GraphicPackage";
import DigitalMarketing from "./components/DigitalMarketing";
import ProductDesignPackage from "./components/ProductDesignPackage";
import TermsPage from "./components/TermsPage";
import ContactUs from "./components/ContactUs";
import PolicyPage from "./components/PolicyPage";

function App() {
  const [isAOSActive, setIsAOSActive] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth <= 768) {
        setIsAOSActive(false);
      } else {
        setIsAOSActive(true);
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (isAOSActive) {
      AOS.init({
        duration: 700,
        easing: "ease-out-cubic",
      });
    } else {
      // Clean up AOS classes to prevent animation effects
      const elements = document.querySelectorAll("[data-aos]");
      elements.forEach((el) => {
        el.removeAttribute("data-aos");
        el.classList.remove("aos-animate");
      });
    }
  }, [isAOSActive]);

  return (
    <>
   
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/seopackage" element={<SeoPackage />} />
        <Route exact path="/webpackage" element={<WebDev />} />
        <Route exact path="/webmaintainancepackage" element={<WebMaintainance />} />
        <Route exact path="/logopackage" element={<LogoPackage />} />
        <Route exact path="/graphicpackage" element={<GraphicPackage />} />
        <Route exact path="/digitalmarketingpackage" element={<DigitalMarketing />} />
        <Route exact path="/productdesigningpackage" element={<ProductDesignPackage />} />
        <Route exact path="/termspage" element={<TermsPage />} />
        <Route exact path="/policypage" element={<PolicyPage />} />
      </Routes>
     
      <Footer/>
    </>
  );
}

export default App;

// Custom button function
export const useNavigateButton = () => {
  const navigate = useNavigate();

  // The function to call for navigation
  const navigateTo = (path) => {
    navigate(path); // Navigate to the given path
  };

  return { navigateTo };
};
