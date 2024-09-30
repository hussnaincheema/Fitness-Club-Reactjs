import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import Linkedin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer_container">
      <hr />
      <div className="footer">
        <div className="social_links">
          <img src={Github} alt="Footer Image" />
          <img src={Instagram} alt="Footer Image" />
          <img src={Linkedin} alt="Footer Image" />
        </div>

        <div className="logo_f">
          <img src={Logo} alt="" />
        </div>
      </div>

      <div className="blur footer_blur_1"></div>
      <div className="blur footer_blur_2"></div>
    </div>
  );
};

export default Footer;
