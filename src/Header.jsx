import { useState } from "react";
import logoLightMode from "./assets/logo-lightmode.svg";
import logoDarkMode from "./assets/logo-darkmode.svg";
import lightBtn from "./assets/light-mode.svg";
import darkBtn from "./assets/dark-mode.svg";
import darkModeNav from "./assets/dark-mode-nav.svg";
import lightModeNav from "./assets/light-mode-nav.svg";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Testimonial from "./Testimonial";
import Contact from "./Contact";
import "./App.css";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Header({ onClick, dark }) {
  const [logo, setLogo] = useState(logoLightMode);
  const [themeBtn, setThemeBtn] = useState(lightBtn);
  const [navBtn, setNavBtn] = useState(lightModeNav);
  const [openNav, setOpenNav] = useState(false);

  const scrollToAbout = () => {
    document.getElementById("About").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setOpenNav(false);
    }, 400);
  };

  const scrollToHome = () => {
    document.getElementById("Home").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setOpenNav(false);
    }, 400);
  };

  const scrollToExperience = () => {
    document
      .getElementById("Experience")
      .scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setOpenNav(false);
    }, 400);
  };

  const scrollToProjects = () => {
    document.getElementById("Projects").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setOpenNav(false);
    }, 400);
  };

  const scrollToContact = () => {
    document.getElementById("Contact").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      setOpenNav(false);
    }, 400);
  };

  const toggleThemeBtn = () => {
    if (onClick) {
      onClick();
    }
    setThemeBtn((prevBtn) => (prevBtn === lightBtn ? darkBtn : lightBtn));
    setLogo((prevLogo) =>
      prevLogo === logoLightMode ? logoDarkMode : logoLightMode
    );
    setNavBtn((prevNav) =>
      prevNav === lightModeNav ? darkModeNav : lightModeNav
    );
  };

  const toggleNav = () => {
    setOpenNav((prevNav) => !prevNav);
  };

  return (
    <div className="nav relative z-50">
      <div
        className={`Header fixed top-0 left-0 right-0 ${
          dark ? "lightNav" : "darkNav"
        }`}
      >
        <div className="wrapper flex flex-row justify-between md:px-16 md:py-6 max-md:p-6">
          <div
            className="Header-logo"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button onClick={scrollToHome}>
              <img src={logo} alt="Logo" className="max-md:w-1/2" />
            </button>
          </div>
          <div className="max-md:hidden Header-nav self-center">
            <ul className="flex flex-row gap-16 ">
              <li
                className="nav-list"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="100"
              >
                <button onClick={scrollToHome}>HOME</button>
              </li>
              <li
                className="nav-list"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="200"
              >
                <button onClick={scrollToAbout}>ABOUT</button>
              </li>
              <li
                className="nav-list"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="300"
              >
                <button onClick={scrollToExperience}>EXPERIENCE</button>
              </li>
              <li
                className="nav-list"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="400"
              >
                <button onClick={scrollToProjects}>PROJECTS</button>
              </li>
              <li
                className="nav-list"
                data-aos="fade-up"
                data-aos-duration="500"
                data-aos-delay="500"
              >
                <button onClick={scrollToContact}>CONTACT</button>
              </li>
            </ul>
          </div>
          <div
            className="flex flex-row gap-2"
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="600"
          >
            <button className="Header-theme-btn" onClick={toggleThemeBtn}>
              <img src={themeBtn} alt="Theme Button" className="max-md:w-1/2" />
            </button>
            <button className="md:hidden" onClick={toggleNav}>
              <img src={navBtn} alt="Mobile Navigation bar" />
            </button>
          </div>
        </div>
        <div
          className={`md:hidden mobile-nav ${
            openNav ? (dark ? "lightNav" : "darkNav") : "hidden"
          } flex justify-center pb-6 fixed top-18 left-0 right-0`}
        >
          <ul className="flex flex-col text-center gap-2">
            <li className="nav-list">
              <button onClick={scrollToHome}>HOME</button>
            </li>
            <li className="nav-list">
              <button onClick={scrollToAbout}>ABOUT</button>
            </li>
            <li className="nav-list">
              <button onClick={scrollToExperience}>EXPERIENCE</button>
            </li>
            <li className="nav-list">
              {" "}
              <button onClick={scrollToProjects}>PROJECTS</button>
            </li>
            <li className="nav-list">
              {" "}
              <button onClick={scrollToContact}>CONTACT</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
