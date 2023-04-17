import { useState } from "react";
import lineLight from "./assets/line.svg";
import lineDark from "./assets/line-dark.svg";
import point from "./assets/point.svg";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Experience({ dark }) {
  const workedPlaces = [
    {
      name: "AWURA",
      role: "Flutter & Lead UI/UX Intern",
      work: [
        "Worked as the Lead UI/UX designer in creating 3 products which have 200k+ downloads on the GooglePlay Store",
        "Helped the Flutter development team in creating fast, usable, and extensive user experience",
        "Worked as the Lead reviewer of the JavaScript course that is learnt by more than 2000+ people",
      ],
      technologies: ["Flutter", "Figma", "UI/UX"],
      timeline: "December 2022-persent",
      isClicked: true,
    },
    {
      name: "The Forge (Lyft)",
      role: "Backend Software Engineer Intern",
      work: [
        "Worked as a backend software engineer in designing the System Architechture and developing the lyft car rendtal system",
      ],
      technologies: ["Python", "UML", "Software Architecture", "Unit Testing"],
      timeline: "March 2023-April 2023",
      isClicked: false,
    },
    {
      name: "Hulu Express",
      role: "UI/UX Intern",
      work: [
        "Designed the Hulu Express mobile application to ensure more than 5,000+ monthly users can seemly interact with the app",
      ],
      technologies: ["Figma", "Adobe XD"],
      timeline: "June 2022- September 2022",
      isClicked: false,
    },
    {
      name: "Hope Enterprise University College",
      role: "ICT Club Vice-President & Lead FullStack Developer",
      work: [
        "Mentored 40+ students in learning web development",
        "Worked as the lead frontend developer in creating the university ICT club website",
        "Led Various Seminars and trainings to help students and staff members in integrating technology with their daily life and their professional carrers",
        "Lectured 40+ students part-time in the university ICT club including senior students in various technologies such as Flutter, React, and Java",
      ],
      technologies: [
        "HTML & CSS",
        "JavaScript",
        "Figma",
        "React",
        "Tailwind",
        "Java",
      ],
      timeline: " February 2022-present",
      isClicked: false,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  function LeftSide() {
    return (
      <div className="max-md:overflow-x-auto">
        <div className="max-md:scrollable-menu flex md:flex-col">
          {workedPlaces.map((place, index) => {
            return (
              <button
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={100 * index}
                key={index}
                className={`place-name flex-shrink-0 flex justify-start py-4 px-6 md:text-xl max-md:text-lg ${
                  dark
                    ? activeIndex === index
                      ? "isClicked"
                      : "notClickedLight"
                    : activeIndex === index
                    ? "isClicked"
                    : "notClickedDark"
                }`}
                onClick={() => {
                  setActiveIndex(index);
                }}
              >
                {place.name}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  function RightSide() {
    return (
      <div
        className="Right-side-container flex flex-col gap-6 md:w-1/2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="position md:text-2xl md:font-medium max-md:text-xl max-md:font-medium">
          {workedPlaces[activeIndex].role}
        </div>
        <div className="timeline w-fit px-4 max-md:py-2 flex md:justify-center max-md:justify-start md:font-medium max-md:text-sm">
          {workedPlaces[activeIndex].timeline}
        </div>
        {workedPlaces[activeIndex].work.map((work, index) => {
          return (
            <div
              className="work-container flex flex-row gap-6 max-md:font-normal"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={1000 * index}
            >
              <img src={point} className="w-2" alt="point" />
              <div className="work">{work}</div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div
      className="Experience justify-center md:mx-16 md:my-32 max-md:mt-16 max-md:mx-6 "
      id="Experience"
    >
      <div
        className="md:text-4xl max-md:text-2xl flex flex-row gap-6 "
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
      >
        <div className="md:text-4xl max-md:text-2xl">010. My Experience</div>
        <img
          class="max-md:hidden w-1/4"
          src={dark ? lineLight : lineDark}
          alt="line"
        />
      </div>
      <div className="Experience-Container flex md:flex-row max-md:flex-col justify-start md:gap-44 max-md:gap-6 pt-10">
        <div
          className="places flex md:flex-col max-md:flex-row"
          workedPlaces={workedPlaces}
        >
          <LeftSide />
        </div>
        <RightSide />
      </div>
    </div>
  );
}
