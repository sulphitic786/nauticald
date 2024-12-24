
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { useNavigate } from "react-router-dom";
import SeoPackage from "./components/SeoPackage";
import Navbar from "./components/Navbar";
import WebDev from "./components/WebDev";
import WebMaintainance from "./components/WebMaintainance";

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
      </Routes>
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
