import lineLight from "./assets/line.svg";
import lineDark from "./assets/line-dark.svg";
import coffeeMan from "./assets/coffeeMan.svg";
import telegram from "./assets/telegram.svg";
import github from "./assets/githubDark.svg";
import linkedin from "./assets/linkedin.svg";
import email from "./assets/email.svg";
import mobile from "./assets/mobile.svg";
import emailLight from "./assets/emailLight.svg";
import linkedinLight from "./assets/linkedinLight.svg";
import githubLight from "./assets/githubLight.svg";
import telegramLight from "./assets/telegramLight.svg";
import mobileLight from "./assets/mobileLight.svg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function Contact({ dark }) {
  function Socials() {
    return (
      <div className="Socials flex flex-col gap-6 max-md:mt-6">
        <div
          className="phone-holder flex flex-row gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="100"
        >
          <div className="phone-img">
            <img src={dark ? mobileLight : mobile} alt="phone" />
          </div>
          <div>+25146410664</div>
        </div>
        <div
          className="email-holder flex flex-row gap-6"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <div className="email-img">
            <img src={dark ? emailLight : email} alt="email" />
          </div>
          <div>mohammedibrahim4641@gmail.com</div>
        </div>
        <div
          className="social-holder flex flex-row gap-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <a href="https://www.linkedin.com/in/mohammed-ibrahim-45a1b9247/">
              <img src={dark ? linkedinLight : linkedin} alt="linkedin" />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
            <a href="https://github.com/MohammedIbrahim8887">
              <img src={dark ? githubLight : github} alt="github" />
            </a>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
            <a href="t.me/MrSentinelTelescope">
              <img src={dark ? telegramLight : telegram} alt="telegram" />
            </a>
          </div>
        </div>
      </div>
    );
  }

  function Form() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
      alert("Email sent successfully");
      emailjs
        .sendForm(
          "service_jz67h3g",
          "template_w17ujxo",
          form.current,
          "LS4YKDd0NgtmcSWob"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
    };
    return (
      <form
        ref={form}
        onSubmit={sendEmail}
        className="form-holder flex flex-col gap-6 md:mt-16 max-md:mt-10"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="700"
      >
        <div className="flex md:flex-row max-md:flex-col gap-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            className={`px-4 py-2  rounded-md ${
              dark ? "inputLight" : "inputDark"
            }`}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className={`px-4 py-2  rounded-md ${
              dark ? "inputLight" : "inputDark"
            }`}
          />
        </div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className={`px-4 py-2  rounded-md ${
            dark ? "inputLight" : "inputDark"
          }`}
        />
        <textarea
          placeholder="Message"
          name="message"
          className={`p-4 h-72  rounded-md ${
            dark ? "inputLight" : "inputDark"
          }`}
        />
        <div className="btn flex flex-row gap-4 w-fit">
          <img src={email} />
          <input type="submit" value="Send" />
        </div>
      </form>
    );
  }

  return (
    <div
      className="Contact flex flex-col justify-between md:mx-16 md:my-32 max-md:mt-24 max-md:mx-6"
      id="Contact"
    >
      <div
        className="about-header flex flex-row gap-6 md:justify-end md:my-16 max-md:my-6"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="md:text-4xl max-md:text-2xl">
          101. Let's Grab a Coffee
        </div>
        <img
          class="max-md:hidden w-2/5"
          src={dark ? lineLight : lineDark}
          alt="line"
        />
      </div>
      <div className="content-holder-contact flex md:flex-row max-md:flex-col-reverse justify-between mt-16">
        <div className="left-side-contact flex flex-col">
          <Socials />
          <Form />
        </div>
        <div
          className="right-side-contact "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <img src={coffeeMan} alt="Coffee Man" className="" />
        </div>
      </div>
    </div>
  );
}
