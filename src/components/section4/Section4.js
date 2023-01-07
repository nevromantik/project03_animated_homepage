import React, { useEffect } from "react";
import AOS from "aos";
import "./Section4.css";
function Section4() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="section4_wrap">
      <div className="section4_input">
        <h1 className="section4_h1">Be the first to know</h1>
        <p className="section4_p">
          Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          <br /> nullam nunc justo sagittis suscipit ultrices.
        </p>
        <span>
          Email{" "}
          <input
            type="text"
            placeholder="Enter a valid email address"
            className="input_s4"
          ></input>{" "}
          <button className="section4_btn">submit</button>
        </span>
      </div>
    </div>
  );
}

export default Section4;
