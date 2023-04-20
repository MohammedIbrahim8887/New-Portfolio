import lineLight from "./assets/line.svg";
import lineDark from "./assets/line-dark.svg";
import githubDark from "./assets/githubDark.svg";
import githubLight from "./assets/githubLight.svg";
import demoDark from "./assets/demoDark.svg";
import demoLight from "./assets/demoLight.svg";
import Mesob from "./assets/Mesob.webp";
import Hope from "./assets/ictclub.webp";
import ExpertsWay from "./assets/Expertsway.webp";
import mobileMesob from "./assets/mesobmobile.webp";
import mobileHope from "./assets/ictMobile.webp";
import mobileExperts from "./assets/expertswaymobile.webp";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Projects({ dark }) {
  const projects = [
    {
      name: "Hope Enterprise University College ICT Club",
      technologies: ["HTML & CSS", "JavaScript", "Figma", "Tailwind"],
      description:
        "A website for the University’s ICT Club that shows club members, shows events, and ICT Club related news.",
      links: {
        github: "https://github.com/MohammedIbrahim8887/IctClubSite.io",
        demo: "https://mohammedibrahim8887.github.io/IctClubSite.io/",
      },
      image: { desktop: Hope, mobile: mobileHope },
    },
    {
      name: "Mesob Lisbon",
      technologies: ["HTML & CSS", "JavaScript", "Figma", "Tailwind"],
      description:
        "A website for a Portuguese restaurant in Lisbon, Portugal. It shows the restaurant's menu, location, and contact information.",
      links: {
        github: "https://github.com/MohammedIbrahim8887/Mesob.io",
        demo: "https://mohammedibrahim8887.github.io/Mesob.io/",
      },
      image: { desktop: Mesob, mobile: mobileMesob },
    },
    {
      name: "Experts Way",
      technologies: ["Figma", "Flutter", "Dart", "Rest API"],
      description:
        "An E-learning Platform that turns people from programming Noobs to programming Elites",
      links: { demo: "" },
      image: { desktop: ExpertsWay, mobile: mobileExperts },
    },
  ];

  function Showcase() {
    return projects.map((project, index) => {
      return (
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          className={`max-md:hidden showcase-holder flex flex-row gap-10 my-6 ${
            index % 2 !== 0 ? "flex-row-reverse" : ""
          }`}
        >
          <div className="img-holder md:max-w-4xl">
            <img src={project.image.desktop} alt={project.name} />
          </div>
          <div className="info-holder flex flex-col justify-center gap-6">
            <div className="title colored-text md:text-2xl font-medium">
              {project.name}
            </div>
            <div
              className={`description ${
                dark ? "bg-[#14B789]" : "bg-[#2F3D44]"
              } p-16 text-white md:text-lg md:font-medium`}
            >
              {project.description}
            </div>
            <div className="technologies flex flex-row text-sm md:gap-6 md:px-6 justify-end">
              {project.technologies.map((tech, index) => {
                return (
                  <div
                    className="tech"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={200 * index}
                  >
                    {tech}
                  </div>
                );
              })}
            </div>
            <div className="links flex flex-row justify-end md:gap-6 md:px-6">
              <div
                className="github"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="200"
              >
                <a href={project.links.github}>
                  <img src={dark ? githubLight : githubDark} alt="github" />
                </a>
              </div>
              <div
                className="demo"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="400"
              >
                <a href={project.links.demo}>
                  <img src={dark ? demoLight : demoDark} alt="demo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  function MobileShowcase() {
    return projects.map((project) => {
      return (
        <div
          className={`md:hidden mobile-showcase-holder flex flex-col gap-10 my-6 rounded-lg p-6 ${
            dark ? " " : "text-white"
          }`}
          style={{
            backgroundImage: `url(${project.image.mobile})`,
            backgroundSize: "cover",
            backgroundColor: dark
              ? "rgba(245, 245, 245, 0.1)"
              : "rgba(38, 50, 56, 0.8)",
          }}
        >
          <div
            className="title md:text-2xl max-md:text-xl font-semibold "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            {project.name}
          </div>
          <div
            className={`description font-medium `}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            {project.description}
          </div>
          <div className="technologies flex flex-row text-sm gap-4">
            {project.technologies.map((tech, index) => {
              return (
                <div
                  className="tech"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={300 * index}
                >
                  {tech}
                </div>
              );
            })}
          </div>
          <div className="links flex flex-row max-md:gap-4">
            <div
              className="github"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="400"
            >
              <a href={project.links.github}>
                <img src={dark ? githubLight : githubDark} alt="github" />
              </a>
            </div>
            <div
              className="demo"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="500"
            >
              <a href={project.links.demo}>
                <img src={dark ? demoLight : demoDark} alt="demo" />
              </a>
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <div
      className="Projects flex flex-col justify-between md:mx-16 md:my-32 max-md:mt-24 max-md:mx-6"
      id="Projects"
    >
      <div
        className="about-header flex flex-row md:justify-end  gap-6 md:mb-10"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="md:text-4xl max-md:text-2xl">
          011. Some things I've Built
        </div>
        <img
          class="max-md:hidden w-2/5"
          src={dark ? lineLight : lineDark}
          alt="line"
        />
      </div>
      <Showcase />
      <MobileShowcase />
    </div>
  );
}
