import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "./Section5.css";
function Section5() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="section5_wrap">
      <div className="section5_first">
        <h1
          className="section5_h1"
          data-aos={"fade-down"}
          data-aos-duration={"2000"}
          data-aos-delay={300}
        >
          Capabilities
        </h1>
        <p
          className="section5_p"
          data-aos={"fade-down"}
          data-aos-duration={"2000"}
          data-aos-delay={300}
        >
          The result of our company branding process is a comprehensive brand
          guideline that can be <br /> used to design a and other design assets
          like brand illustrations that reflect <br /> the new brand.
        </p>
      </div>

      <div className="section5_second">
        <div className="section5_cards">
          <div
            className="section5_card1"
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
          >
            <h4 className="section5_h4">Brand strategy</h4>
            <p className="section5_p_card"> - Brand equity audit</p>
            <p className="section5_p_card"> - Audience analysis</p>
            <p className="section5_p_card"> - Competitive review</p>
            <p className="section5_p_card"> - Strategic direction</p>
          </div>

          <div
            className="section5_card2"
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={500}
          >
            <h4 className="section5_h4">Brand identity</h4>
            <p className="section5_p_card"> - Visual positioning</p>
            <p className="section5_p_card"> - Visual identity system</p>
            <p className="section5_p_card"> - Icon & illustration guides</p>
            <p className="section5_p_card"> - Brand application</p>
          </div>

          <div
            className="section5_card3"
            data-aos={"fade-up"}
            data-aos-duration={"1000"}
            data-aos-delay={700}
          >
            <h4 className="section5_h4">Communication strategy</h4>
            <p className="section5_p_card"> - Verbal identity</p>
            <p className="section5_p_card"> - Tagline exploration</p>
            <p className="section5_p_card"> - Communication style guide</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section5;
