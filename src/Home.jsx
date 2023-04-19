import { useState, useEffect } from "react";
import codingMan from "./assets/coding-man.svg";
import download from "./assets/download.svg";
import scrolldowndark from "./assets/scrolldown-dark.svg";
import scrolldownlight from "./assets/scrolldown-light.svg";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Home({ dark }) {
  const skills = [
    "Sofware Engineer",
    "Frontend Developer",
    "UI/UX Designer",
    "Flutter Developer",
  ];

  const places = [
    "Hulu Express",
    "Hope Enterprise University College",
    "AWURA",
  ];

  const [skill, setSkill] = useState(skills[0]);

  function updateSkill(skill) {
    const skillElement = document.getElementById("skill");
    skillElement.classList.add("fade-out");
    setTimeout(() => {
      setSkill(skill);
      skillElement.classList.remove("fade-out");
      skillElement.classList.add("fade-in");
      setTimeout(() => {
        skillElement.classList.remove("fade-in");
      }, 500);
    }, 500);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      let index = skills.indexOf(skill);
      if (index === skills.length - 1) {
        index = 0;
      } else {
        index++;
      }
      updateSkill(skills[index]);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [skill, skills]);

  return (
    <div className="Home flex flex-col" id="Home">
      <div className="Home md:mx-16 md:mt-48 max-md:mt-24 max-md:mx-6 flex flex-row justify-between">
        <div
          className="left-home md:w-2/5 mt-6 max-md:flex flex-col gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <p className="large-text-home md:text-6xl max-md:text-2xl max-md:text-center">
            Hello there, <br />
            I'm <span className="colored-text">Mohammed Ibrahim</span>
          </p>
          <img src={codingMan} className="md:hidden" alt="Coding Man" />
          <p className="small-text-home md:text-xl max-md:text-md text-justify md:my-10 md:tracking-wide">
            I'm a{" "}
            <span className="colored-text" id="skill">
              {skill}
            </span>{" "}
            who specializes in creating and developing amazing digital
            experiences. At the moment, I'm working at{" "}
            <span className="colored-text">{places[2]}</span> on creating
            user-friendly, human-centered products.
          </p>
          <button className="btn flex flex-row gap-4 max-md:w-3/4 justify-center self-center ">
            <img src={download} alt="download" />
            My Resume
          </button>
        </div>
        <div
          className="max-md:hidden right-home"
          data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-delay="1000"
          data-aos-duration="1000"
        >
          <img src={codingMan} />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1300"
        className={`scroll flex justify-center md:mt-32 max-md:mt-10 ${
          dark ? scrolldowndark : scrolldownlight
        }`}
      >
        <img src={dark ? scrolldownlight : scrolldowndark} alt="scroll" />
      </div>
    </div>
  );
}
