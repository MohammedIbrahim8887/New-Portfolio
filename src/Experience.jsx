import { useState } from "react";
import lineLight from "./assets/line.svg";
import lineDark from "./assets/line-dark.svg";

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
      isClicked: true,
    },
    {
      name: "Hulu Express",
      role: "UI/UX Intern",
      work: [
        "Designed the Hulu Express mobile application to ensure more than 5,000+ monthly users can seemly interact with the app",
      ],
      technologies: ["Figma", "Adobe XD"],
      timeline: "June 2022- September 2022",
      isClicked: true,
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
      isClicked: true,
    },
  ];

  function LeftSide() {
    workedPlaces.map((place) => {
      return (
        <div className="place">
          <div className="place-name">{place.name}</div>
        </div>
      );
    });
  }

  return (
    <div className="Experience flex flex-row justify-center md:mx-16 md:my-32 max-md:mt-16 max-md:mx-6 ">
      <div className="md:text-4xl max-md:text-2xl flex flex-row gap-6 justify-center">
        <div className="md:text-4xl max-md:text-2xl">01. My Experience</div>
        <img class="w-1/4" src={dark ? lineLight : lineDark} alt="line" />
      </div>
      <div className="Experience-Container">
        <div className="places" workedPlaces={workedPlaces}></div>
      </div>
    </div>
  );
}
