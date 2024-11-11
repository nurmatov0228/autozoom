import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about__container">
        <div className="footer__wrapper">
          <div className="footer__left">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="footer__logo" />
            </NavLink>
            <h2 className="contact__title footer__title">
              LUXURY CAR RENTAL IN EMIRATES
            </h2>
            <p className="footer__text">
              Rent sports and luxury cars directly without intermediaries. Rent
              a car in Dubai with Auto Zoom Car Rental - safety and driving
              pleasure.
            </p>
            <button className="footer__button">GET BEST OFFER</button>
          </div>
          <div className="footer__right">
            <div className="footer__navbar">
              <div className="footer__lists">
                <div className="footer__car-list">
                  <NavLink to="/cars" className="footer__h4">
                    CARS
                  </NavLink>
                  <NavLink className="footer__text">
                    Budget cars Rental Emirates
                  </NavLink>
                  <NavLink className="footer__text">
                    Sports cars Rental Emirates
                  </NavLink>
                  <NavLink className="footer__text">
                    Hyper cars Rental Emirates
                  </NavLink>
                  <NavLink className="footer__text">
                    Luxury cars Rental Emirates
                  </NavLink>
                  <NavLink className="footer__text">
                    Suv cars Rental Emirates
                  </NavLink>
                  <NavLink className="footer__text">
                    Cabriolet cars Rental Emirates
                  </NavLink>
                </div>
                <div className="footer__other-list">
                  <NavLink to="/blog" className="footer__h4">
                    BLOG
                  </NavLink>
                  <NavLink to="/services" className="footer__h4">
                    SERVICES
                  </NavLink>
                  <div className="footer__contact-list">
                    <NavLink to="/contact" className="footer__h4">
                      CONTACTS
                    </NavLink>
                    <p className="footer__text">
                      Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                    </p>
                    <a href="tel:+998507189807" className="footer__text">
                      +998 (50) 718 98 07
                    </a>
                    <p className="footer__text">Working hours: 24/7</p>
                  </div>
                </div>
                <div className="footer__other-list1">
                  <div className="footer__about-list">
                    <NavLink className="footer__h4" to="about">
                      ABOUT US
                    </NavLink>
                    <NavLink className="footer__text" to="/">
                      Our Team
                    </NavLink>
                    <NavLink className="footer__text" to="faq">
                      FAQ
                    </NavLink>
                  </div>
                  <div className="footer__follow-list">
                    <h4 className="footer__h4" id="follow">
                      Follow Us
                    </h4>
                    <div className="footer__icons">
                      <a
                        href="https://www.instagram.com/_kadyrovv0_6/"
                        className="footer__icon"
                      >
                        <FaInstagram />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=100090272936864"
                        className="footer__icon"
                      >
                        <FaFacebook />
                      </a>
                      <a
                        href="https://www.youtube.com"
                        className="footer__icon"
                      >
                        <FaYoutube />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className="contact__hr footer__hr" />
            <div className="footer__end">
              <p className="footer__text">
                © 2024 Terra Car Rental. United Arab Emirates.
              </p>
              <NavLink className="footer__text">Terms and Conditions</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
