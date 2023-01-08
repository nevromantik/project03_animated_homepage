import React from "react";
import { useEffect } from "react";
import "./Section8.css";
import img1 from "./card3.png";
import img2 from "./card1.png";
import img3 from "./card2.png";

function Section8() {
  return (
    <div className="section8_wrap">
      <div className="section8_first">
        <h1 className="section8_h1">Our Projects</h1>
        <p className="section8_p">
          “You can do anything you set your mind to.” <br />- Benjamin Franklin
        </p>
      </div>
      <div className="section8_second">
        <div className="section8_card card1">
          <h2 className="section8_card_h2">About Us</h2>
          <p className="section8_card_p">
            Good content is everything. In a world <br /> that is oversaturated
            with content, you’ll <br />
            learn from successful writers and <br />
            bloggers how to create content that <br />
            matters and resonates with your <br /> audience.
          </p>
        </div>

        <div className="section8_card mcard1">
          <img src={img1} alt="img" className="mcard1"></img>
        </div>

        <div className="section8_card card3">
          <h2 className="section8_card_h2 h2card3">Our Strategy</h2>
          <p className="section8_card_p">
            Good content is everything. In a world <br /> that is oversaturated
            with content, you’ll <br />
            learn from successful writers and <br />
            bloggers how to create content that <br />
            matters and resonates with your <br /> audience.
          </p>
        </div>
      </div>

      <div className="section8_second third">
        <div className="section8_card mcard3">
          <img src={img2} alt="img" className="mcard3"></img>
        </div>
        <div className="section8_card card1 card2">
          <h2 className="section8_card_h2 ">Our Mission</h2>
          <p className="section8_card_p">
            Good content is everything. In a world <br /> that is oversaturated
            with content, you’ll <br />
            learn from successful writers and <br />
            bloggers how to create content that <br />
            matters and resonates with your <br /> audience.
          </p>
        </div>
        <div className="section8_card">
          <img src={img3} alt="img"></img>
        </div>
      </div>
    </div>
  );
}

export default Section8;
