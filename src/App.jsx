import "./App.css";
import Brands from "./Brands/Brands";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./header/Header";
// import Header from "./header/Header";
import Layout from "./Layout/Layout";
import Services from "./Services/Services";
import WeHelpYou from "./WeHelpYou//WeHelpYou";
import WhatWeDo from "./WhatWeDo/WhatWeDo";
import { useEffect, useState } from "react";
import { IoArrowUpOutline } from "react-icons/io5";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const scrollActive = () => {
    setIsVisible(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
    return () => {
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.clientX - 15);
      setY(e.clientY - 10);
    };
    window.addEventListener("mousemove", handleCursor);
    return () => {
      window.removeEventListener("mousemove", handleCursor);
    };
  }, []);
  return (
    <>
      <div
        className="hidden md:block fixed z-20 top-[0] left-[0] w-[60px] h-[60px] rounded-[50%] pointer-events-none bg-mainColor opacity-[0.5]"
        style={{ top: y, left: x }}
      ></div>
      <Header />
      <Layout />
      <Brands />
      <WeHelpYou />
      <Services />
      <WhatWeDo />
      <Contact />
      <Footer />
      <a
        href="#top"
        className={`fixed bottom-2 right-5 w-10 h-10 grid place-items-center text-[2.1rem] bg-gradient-to-r from-yellow-400 to-green-300 rounded-full opacity-0 transition-transform duration-300 z-40 ${
          isVisible ? "opacity-100 translate-y-[-20px]" : ""
        }`}
        aria-hidden="true"
      >
        <IoArrowUpOutline />
      </a>
    </>
  );
}

export default App;
