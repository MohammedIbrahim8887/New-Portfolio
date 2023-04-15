import { useState } from "react";
import logoLightMode from "./assets/logo-lightmode.svg";
import logoDarkMode from "./assets/logo-darkmode.svg";
import lightBtn from "./assets/light-mode.svg";
import darkBtn from "./assets/dark-mode.svg";
import darkModeNav from "./assets/dark-mode-nav.svg";
import lightModeNav from "./assets/light-mode-nav.svg";
import "./App.css";
import "./index.css";

export default function Header({ onClick, dark }) {
  const [logo, setLogo] = useState(logoLightMode);
  const [themeBtn, setThemeBtn] = useState(lightBtn);
  const [navBtn, setNavBtn] = useState(lightModeNav);
  const [openNav, setOpenNav] = useState(false);

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
    <div className="nav relative">
      <div
        className={`Header fixed top-0 left-0 right-0 ${
          dark ? "lightNav" : "darkNav"
        }`}
      >
        <div className="wrapper flex flex-row justify-between md:px-16 md:py-6 max-md:p-6">
          <div className="Header-logo">
            <img src={logo} alt="Logo" className="max-md:w-1/2" />
          </div>
          <div className="max-md:hidden Header-nav self-center">
            <ul className="flex flex-row gap-16 ">
              <li className="nav-list">HOME</li>
              <li className="nav-list">ABOUT</li>
              <li className="nav-list">EXPERIENCE</li>
              <li className="nav-list">PROJECTS</li>
              <li className="nav-list">CONTACT</li>
            </ul>
          </div>
          <div className="flex flex-row gap-2">
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
            openNav ? "" : "hidden"
          } flex justify-center pb-6 fixed top-32 left-0 right-0`}
        >
          <ul className="flex flex-col text-center gap-2">
            <li className="nav-list">HOME</li>
            <li className="nav-list">ABOUT</li>
            <li className="nav-list">EXPERIENCE</li>
            <li className="nav-list">PROJECTS</li>
            <li className="nav-list">CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
