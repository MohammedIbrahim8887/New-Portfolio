import { useState } from "react";
import codingMan from "./assets/coding-man.svg";
import download from "./assets/download.svg";
import scrolldowndark from "./assets/scrolldown-dark.svg";
import scrolldownlight from "./assets/scrolldown-light.svg";
import "./index.css";

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

  function changeSkill() {
    setInterval(() => {
      setSkill((prevSkill) => {
        if (prevSkill === skills[skills.length - 1]) {
          return skills[0];
        }
        return skills[skills.indexOf(prevSkill) + 1];
      });
    }, 2000);
  }

  changeSkill();

  return (
    <div className="flex flex-col">
      <div className="Home md:mx-16 md:mt-48 max-md:mt-24 max-md:mx-6 flex flex-row justify-between">
        <div className="left-home md:w-2/5 mt-6 max-md:flex flex-col gap-6">
          <p className="large-text-home md:text-6xl max-md:text-2xl max-md:text-center">
            Hello there, <br />
            I'm <span className="colored-text">Mohammed Ibrahim</span>
          </p>
          <img src={codingMan} className="md:hidden" />
          <p className="small-text-home md:text-xl max-md:text-md text-justify md:my-10 md:tracking-wide">
            I'm a <span className="colored-text">{skill}</span> who specializes
            in creating and developing amazing digital experiences. At the
            moment, I'm working at{" "}
            <span className="colored-text">{places[2]}</span> on creating
            user-friendly, human-centered products.
          </p>
          <button className="btn flex flex-row gap-4 max-md:w-3/4 justify-center self-center ">
            <img src={download} />
            My Resume
          </button>
        </div>
        <div className="max-md:hidden right-home">
          <img src={codingMan} />
        </div>
      </div>
      <div
        className={`scroll flex justify-center md:mt-32 max-md:mt-10 ${
          dark ? scrolldowndark : scrolldownlight
        }`}
      >
        <img src={dark ? scrolldownlight : scrolldowndark} alt="scroll" />
      </div>
    </div>
  );
}
