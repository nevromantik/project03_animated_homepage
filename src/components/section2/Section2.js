import React from "react";
import "./Section2.css";
import { useEffect } from "react";
import AOS from "aos";
import icon1 from "./section2icon1.png";
import icon2 from "./section2icon2.png";
import icon3 from "./section2icon3.png";
import icon4 from "./section2icon4.png";

const cards = [
  { image: icon1, title: "Graphic Design" },
  { image: icon2, title: "Web Design" },
  { image: icon3, title: "Branding & Printing" },
  { image: icon4, title: "Web Development" },
];
function Section2() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="section2_wrap">
      <div
        className="section2_first"
        data-aos={"fade-down"}
        data-aos-delay="400"
        data-aos-duration={"3000"}
      >
        <h2 className="section2_h2">We provide the Perfect Solution</h2>
      </div>
      <div
        className="section2_second"
        data-aos={"fade-down"}
        data-aos-duration={"2000"}
      >
        <p className="section2_p">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur <br /> sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>
      <div className="section2_cards_wrap">
        {cards.map((el, index) => {
          return (
            <div
              className="section2_card"
              key={index}
              data-aos={"zoom-in-up"}
              data-aos-duration={"2000"}
            >
              <img
                src={el.image}
                alt={el.title}
                data-aos={"flip-left"}
                data-aos-duration={"2000"}
                delay="900"
              ></img>
              <p className="section2_card_p">{el.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Section2;
