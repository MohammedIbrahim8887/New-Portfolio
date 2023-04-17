import { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import person from "./assets/person.png";
import qouteOpen from "./assets/qouteOpen.svg";
import qouteClose from "./assets/qouteClose.svg";
import lineLight from "./assets/line.svg";
import lineDark from "./assets/line-dark.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Testimonial({ dark }) {
  const testimony = [
    {
      image: person,
      name: "Nebil Ibrahim",
      place: "Hulu Express, CEO",
      word: "Lorem ipsum dolor sit amet consectetur. At ut at at justo at tempor. Nunc lobortis vel parturient faucibus mauris non. ",
    },
    {
      image: person,
      name: "Esubalew Amenu",
      place: "AWURA,Lead Developer",
      word: "Lorem ipsum dolor sit amet consectetur. At ut at at justo at tempor. Nunc lobortis vel parturient faucibus mauris non. ",
    },
    {
      image: person,
      name: "Zewengel",
      place: "Hope Enterprise University College, ICT Head",
      word: "Lorem ipsum dolor sit amet consectetur. At ut at at justo at tempor. Nunc lobortis vel parturient faucibus mauris non.",
    },
    {
      image: person,
      name: "Bedri Elias",
      place: "Saint Mary's University, Computer Science Student",
      word: "Lorem ipsum dolor sit amet consectetur. At ut at at justo at tempor. Nunc lobortis vel parturient faucibus mauris non.",
    },
  ];

  const [selectedPersonIndex, setSelectedPersonIndex] = useState(0);

  function Person() {
    return testimony.map((person, index) => {
      const isSelected = index === selectedPersonIndex;
      return (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay={100 * index}
          className={`person flex flex-row md:gap-6 md:mb-6 ${
            dark ? "notClickedTestimonialLight" : "notClickedTestimonialDark"
          } w-full p-4`}
          style={{
            backgroundColor: isSelected ? "#14b789" : "",
            color: isSelected ? "white" : "",
          }}
          key={index}
          onClick={() => setSelectedPersonIndex(index)}
        >
          <div className="person-img my-auto ">
            <img src={person.image} alt={person.name} className="w-9/12 " />
          </div>
          <div className="person-info flex flex-col gap-2">
            <div className="text-xl font-medium">{person.name}</div>
            <div>{person.place}</div>
          </div>
        </div>
      );
    });
  }

  function Word() {
    return (
      <div
        className="relative word-container flex flex-col gap-6 w-[50rem] h-[30rem]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div className="absolute top-0 left-0 right-0">
          <img src={qouteOpen} alt="qouteIcon" className="md:w-16" />
        </div>
        <div className="absolute top-44 left-6 text-lg md:text-xl font-medium px-16">
          {testimony[selectedPersonIndex].word}
        </div>
        <div className="absolute bottom-10 right-0">
          <img src={qouteClose} alt="qouteIcon" className="md:w-16" />
        </div>
      </div>
    );
  }

  function MobileTestimonial() {
    return (
      <Splide aria-label="My Favorite Images">
        {testimony.map((person) => {
          return (
            <SplideSlide>
              <div
                className={` ${
                  dark
                    ? "notClickedTestimonialLight"
                    : "notClickedTestimonialDark"
                } flex flex-col p-4 rounded-lg h-80`}
              >
                <div
                  className="flex justify-center"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="100"
                >
                  <img src={person.image} alt={person.name} className="" />
                </div>
                <div
                  className="qoute-holder"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="200"
                >
                  <div>
                    <img src={qouteOpen} className="w-[0.8rem]" />
                  </div>
                  <div className="text-sm p-4 text-justify">{person.word}</div>
                  <div className="flex justify-end">
                    <img src={qouteClose} className="w-[0.8rem]" />
                  </div>
                </div>
                <p
                  className="flex justify-center text-lg font-medium"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="300"
                >
                  {person.name}
                </p>
                <div
                  className="flex justify-center text-sm mx-6 text-center "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="400"
                >
                  <p>{person.place}</p>
                </div>
              </div>
            </SplideSlide>
          );
        })}
      </Splide>
    );
  }

  return (
    <div
      className="Testimonial flex flex-col md:mx-16 md:my-32 max-md:mt-24 max-md:mx-6"
      id="Testimonial"
    >
      <div
        className="about-header flex flex-row gap-6 md:my-16 max-md:my-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="md:text-4xl max-md:text-2xl">
          100. Time to Brag a little
        </div>
        <img
          class="max-md:hidden w-2/5"
          src={dark ? lineLight : lineDark}
          alt="line"
        />
      </div>
      <div className="max-md:hidden flex flex-row justify-between">
        <div className="right-side">
          <Person />
        </div>
        <div className="left-side">
          <Word />
        </div>
      </div>
      <div className="md:hidden">
        <MobileTestimonial />
      </div>
    </div>
  );
}
