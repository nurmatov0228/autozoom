import React from "react";
import "./footer.scss";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa6";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="about__container">
        <div className="footer__wrapper">
          <div className="footer__left">
            <NavLink to="/">
              <img src={logo} alt="Logo" className="footer__logo" />
            </NavLink>
            <h2 className="contact__title footer__title">
              {t("luxuryCarRentalEmirates")}
            </h2>
            <p className="footer__text">{t("footerDescription")}</p>
            <button className="footer__button">{t("getBestOffer")}</button>
          </div>
          <div className="footer__right">
            <div className="footer__navbar">
              <div className="footer__lists">
                <div className="footer__car-list">
                  <NavLink to="/cars" className="footer__h4">
                    {t("cars")}
                  </NavLink>
                  <NavLink className="footer__text">{t("budgetCars")}</NavLink>
                  <NavLink className="footer__text">{t("sportsCars")}</NavLink>
                  <NavLink className="footer__text">{t("hyperCars")}</NavLink>
                  <NavLink className="footer__text">{t("luxuryCars")}</NavLink>
                  <NavLink className="footer__text">{t("suvCars")}</NavLink>
                  <NavLink className="footer__text">{t("cabrioletCars")}</NavLink>
                </div>
                <div className="footer__other-list">
                  <NavLink to="/blog" className="footer__h4">
                    {t("blog")}
                  </NavLink>
                  <NavLink to="/services" className="footer__h4">
                    {t("services")}
                  </NavLink>
                  <div className="footer__contact-list">
                    <NavLink to="/contact" className="footer__h4">
                      {t("contacts")}
                    </NavLink>
                    <p className="footer__text">{t("address")}</p>
                    <a href="tel:+998507189807" className="footer__text">
                      {t("phone")}
                    </a>
                    <p className="footer__text">{t("workingHours")}</p>
                  </div>
                </div>
                <div className="footer__other-list1">
                  <div className="footer__about-list">
                    <NavLink className="footer__h4" to="about">
                      {t("aboutUs")}
                    </NavLink>
                    <NavLink className="footer__text" to="/">
                      {t("ourTeam")}
                    </NavLink>
                    <NavLink className="footer__text" to="faq">
                      {t("faq")}
                    </NavLink>
                  </div>
                  <div className="footer__follow-list">
                    <h4 className="footer__h4" id="follow">
                      {t("followUs")}
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
              <p className="footer__text">{t("footerEnd")}</p>
              <NavLink className="footer__text">{t("termsConditions")}</NavLink>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
