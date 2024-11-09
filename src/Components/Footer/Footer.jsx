import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import "./footer.scss";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="about__container">
        <div className="footer__wrapper">
          <img src={logo} alt="Logo" className="footer__logo" />
          <div className="footer__left"></div>
          <div className="footer__right"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
