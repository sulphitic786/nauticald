import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import DigitalMarketing from "./components/DigitalMarketing";
import Footer from "./components/Footer";
import GraphicPackage from "./components/GraphicPackage";
import HomePage from "./components/HomePage";
import LogoPackage from "./components/LogoPackage";
import Navbar from "./components/Navbar";
import PolicyPage from "./components/PolicyPage";
import ProductDesignPackage from "./components/ProductDesignPackage";
import RefundPolicy from "./components/RefundPolicy";
import SeoPackage from "./components/SeoPackage";
import TermsPage from "./components/TermsPage";
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
        <Route
          exact
          path="/webmaintainancepackage"
          element={<WebMaintainance />}
        />
        <Route exact path="/logopackage" element={<LogoPackage />} />
        <Route exact path="/graphicpackage" element={<GraphicPackage />} />
        <Route
          exact
          path="/digitalmarketingpackage"
          element={<DigitalMarketing />}
        />
        <Route
          exact
          path="/productdesigningpackage"
          element={<ProductDesignPackage />}
        />
        <Route exact path="/terms" element={<TermsPage />} />
        <Route exact path="/policy" element={<PolicyPage />} />
        <Route exact path="/refund-policy" element={<RefundPolicy />} />
      </Routes>

      <Footer />
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
