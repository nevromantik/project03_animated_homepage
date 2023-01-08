import React from "react";
import "./Section7.css";
import { useEffect } from "react";
import AOS from "aos";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import img from "./section7.jpg";
function Section7() {
  return (
    <div className="section7_wrap">
      <div className="section7_first">
        <h1 className="section7_h1">
          We design digital <br /> products and <br /> brands
        </h1>

        <div className="section7_counterdiv">
          <CountUp end={30} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="counter_wrap">
                  <span ref={countUpRef} className="counter" />{" "}
                  <span className="percentage">%</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="section7_txt">
            Sample text. Click to select the text box. Click <br /> again or
            double click to start editing the text. Sample text. <br /> Click to
            select the text box. Click <br /> again or double click to start
            editing the text
          </p>
        </div>

        <div className="section7_counterdiv">
          <CountUp end={60} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="counter_wrap">
                  <span ref={countUpRef} className="counter" />{" "}
                  <span className="percentage">%</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="section7_txt">
            Sample text. Click to select the text box. Click <br /> again or
            double click to start editing the text. Sample text. <br /> Click to
            select the text box. Click <br /> again or double click to start
            editing the text
          </p>
        </div>

        <div className="section7_counterdiv">
          <CountUp end={10} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <div className="counter_wrap">
                  <span ref={countUpRef} className="counter" />{" "}
                  <span className="percentage">%</span>
                </div>
              </VisibilitySensor>
            )}
          </CountUp>
          <p className="section7_txt">
            Sample text. Click to select the text box. Click <br /> again or
            double click to start editing the text. Sample text. <br /> Click to
            select the text box. Click <br /> again or double click to start
            editing the text
          </p>
        </div>
      </div>
      <div className="section7_second">
        <img src={img} alt="img" width={700} height={700}></img>
      </div>
    </div>
  );
}

export default Section7;
