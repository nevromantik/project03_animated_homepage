import React from "react";
import "./Section3.css";
import { useEffect } from "react";
import AOS from "aos";
import section3image from "./section3image.jpg";
function Section3() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="section3_wrap">
        <div className="section3_square"></div>
        <div
          className="section3_circle"
          data-aos={"zoom-in-left"}
          data-aos-duration={"3000"}
        ></div>

        <div
          className="section3_box"
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={400}
        >
          <h3 className="section3_h3">Creative Design Team</h3>
          <p className="section3_box_p">
            Elit ut aliquam purus sit amet luctus venenatis. <br /> Ridiculus
            mus mauris vitae ultricies leo integer <br /> malesuada. Massa enim
            nec dui nunc mattis <br />
            enim. Sagittis vitae et leo duis ut. Lacus <br /> suspendisse
            faucibus interdum.
          </p>
          <button className="hero_btn">LEARN MORE</button>
        </div>
        <div
          className="section3_image"
          data-aos={"fade-right"}
          data-aos-duration={"2000"}
        >
          <img
            src={section3image}
            alt="woman"
            className="section3_img"
            width={580}
            height={635}
          ></img>
        </div>
      </div>

      <div className="mobile_section3">
        <div
          className="section3_box"
          data-aos={"fade-up"}
          data-aos-duration={"2000"}
          data-aos-delay={400}
        >
          <h3 className="section3_h3">Creative Design Team</h3>
          <p className="section3_box_p">
            Elit ut aliquam purus sit amet luctus venenatis. <br /> Ridiculus
            mus mauris vitae ultricies leo integer <br /> malesuada. Massa enim
            nec dui nunc mattis <br />
            enim. Sagittis vitae et leo duis ut. Lacus <br /> suspendisse
            faucibus interdum.
          </p>
          <button className="hero_btn">LEARN MORE</button>
        </div>
      </div>
    </>
  );
}

export default Section3;
