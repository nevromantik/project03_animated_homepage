import React, { useEffect } from "react";
import "./Hero.css";
import heroImg from "./hero_img.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="hero_container">
        <div
          className="hero_section_left"
          data-aos={"fade-right"}
          data-aos-duration={"2000"}
        >
          <h2 className="hero_h2">
            {" "}
            Visual Design <br /> & Art Director
          </h2>
          <p className="hero_p">
            Hi, I am Mark, focusing on <br /> creating emotional experiences.
          </p>
          <button className="hero_btn">READ MORE</button>
        </div>

        <div
          className="hero_section_circle"
          data-aos={"zoom-in"}
          data-aos-duration={"3000"}
          data-aos-delay="500"
        ></div>
        <div
          className="hero_image"
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
        >
          <img src={heroImg} alt="man" width={600} height={700}></img>
        </div>
      </div>
    </>
  );
}

export default Hero;
