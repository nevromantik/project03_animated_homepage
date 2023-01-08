import React from "react";
import "./Footer.css";
import img from "./img.png";
import { IoLocationOutline } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
function Footer() {
  return (
    <div className="footer_wrap">
      <div className="footer_box1">
        <div className="f_p1">
          <img src={img} alt="img" width={800} height={700}></img>
          <div className="footer_box1_s2">
            <h1 className="footer_h1">Contact Us</h1>
            <p className="footer_p1">
              Use our contact form for all information requests or contact us
              directly using <br /> the contact information below.
            </p>
            <p className="footer_p2">
              Feel free to get in touch with us via email or phone
            </p>
            <h4 className="footer_h4">Sign up for the newsletter</h4>
            <p className="footer_p3">
              Want to be the first to read our news? Subscribe to the <br />{" "}
              newsletter to keep abreast of all events.
            </p>
            <input
              type="text"
              placeholder="Enter a valid email address"
              className="input_s4"
            ></input>
            <button className="footer_btn">SUBMIT</button>
          </div>
        </div>
      </div>

      <div className="footer_box2">
        <div className="footer_b2_b1">
          <IoLocationOutline
            color={"orange"}
            className="icons_footer"
          ></IoLocationOutline>
          <div className="f_box2_txt">
            <h1 className="f_b2_h1">Our Office Location</h1>
            <p className="f_b2_p">
              The Interior Design Studio Company <br />
              The Courtyard, Al Quoz 1, Colorado, USA
            </p>
          </div>
        </div>

        <div className="footer_b2_b2">
          <BsFillTelephoneFill
            className="icons2_footer"
            color={"orange"}
          ></BsFillTelephoneFill>
          <div className="f_box2_txt">
            <h1 className="f_b2_h1">Phone (Landline)</h1>
            <p className="f_b2_p">
              + 912 3 567 8987
              <br />+ 912 5 252 3336
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
