import React from "react";
import "./Section6.css";
import { useEffect } from "react";
import AOS from "aos";
function Section6() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="section6_wrap">
      <div className="section6_first">
        <h1
          className="section6_h1"
          data-aos={"fade-left"}
          data-aos-duration={"2000"}
          data-aos-delay={300}
        >
          What We Do
        </h1>
        <ul data-aos={"fade-right"} data-aos-duration={"2000"}>
          <li className="s6_li">Neque laoreet suspendisse</li>
          <li className="s6_li">Interdum consectetur</li>
          <li className="s6_li">Lorem ipsum dolor sit amet</li>
          <li className="s6_li">Suspendisse interdum consectetur</li>
        </ul>
        <button
          className="section6_btn"
          data-aos={"fade-right"}
          data-aos-duration={"2000"}
        >
          READ MORE
        </button>
      </div>
      <div
        className="section6_second"
        data-aos={"fade-left"}
        data-aos-duration={"2000"}
        data-aos-delay={300}
      ></div>
    </div>
  );
}

export default Section6;
