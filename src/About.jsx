import { useState } from "react";
import lineLight from "./assets/line.svg";
import lineDark from "./assets/line-dark.svg";
import codingMan from "./assets/coding-man.svg";
import point from "./assets/point.svg";

export default function About({ dark }) {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "C++",
    "Java/Kotlin",
    "Flutter",
    "MySQL/Postgress/SQL Server",
    "MongoDB",
  ];

  function Skill() {
    return skills.map((skill) => {
      return (
        <div className="skill-holder flex flex-row gap-4 self-center max-md:text-sm">
          <img src={point} alt="" className="point w-2" />
          <div className="skill max-md:w-1/2">{skill}</div>
        </div>
      );
    });
  }

  return (
    <div className="About flex flex-row justify-between md:mx-16 md:my-32 max-md:mt-24 max-md:mx-6 ">
      <div className="right-about">
        <img src={codingMan} alt="" className="max-md:hidden" />
      </div>
      <div className="left-about md:w-1/2 flex flex-col self-center">
        <div className="about-header flex flex-row gap-6">
          <div className="md:text-4xl max-md:text-2xl">00. About Me</div>
          <img class="w-2/5" src={dark ? lineLight : lineDark} alt="line" />
        </div>
        <img src={codingMan} className="md:hidden my-10" />
        <div className="small-text-about flex flex-col text-justify md:text-xl max-md:text-md gap-6 md:mt-10 md:w-5/6 md:tracking-wide">
          <div>
            Hello! My name is Mohammed, and I adore making stuff on the
            internet. I am a third-year computer science student at Hope
            Enterprise University College. I specialize in{" "}
            <span className="colored-text">Front End development </span>
            but flexible in working in the{" "}
            <span className="colored-text">Back End development</span> and{" "}
            <span className="colored-text">Mobile Development</span>.
          </div>
          <div>
            Today, I've had the opportunity to work at a{" "}
            <span className="colored-text">Delivery start-up</span>, an
            <span className="colored-text"> outsourcing</span>, and a{" "}
            <span className="colored-text">student-led development team</span>.
            My major emphasis at <span className="colored-text">AWURA</span>{" "}
            these days is creating accessible, inclusive products and digital
            experiences for a variety of customers.
          </div>
          <div>Here are a few technologies I've lately worked with:</div>
          <div className="skill-container grid grid-cols-2 gap-6 max-md:gap-x-16">
            <Skill />
          </div>
        </div>
      </div>
    </div>
  );
}
