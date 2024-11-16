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
                  <NavLink
                    to={`/cars/8df92f41-b98f-4dec-b48f-28ed1f5c5e0e`}
                    className="footer__text"
                  >
                    {t("budgetCars")}
                  </NavLink>
                  <NavLink
                    to={`/cars/7430fb57-0757-4677-aeaf-6277fd3a9e62`}
                    className="footer__text"
                  >
                    {t("sportsCars")}
                  </NavLink>
                  <NavLink
                    to={`/cars/f4691810-8485-468f-bca3-ef9f6d31fa69`}
                    className="footer__text"
                  >
                    {t("hyperCars")}
                  </NavLink>
                  <NavLink
                    to={`/cars/690d01e3-99fb-4fc0-baf1-ca860b767c87`}
                    className="footer__text"
                  >
                    {t("luxuryCars")}
                  </NavLink>
                  <NavLink
                    to={`/cars/c53f688c-29e3-47d5-b904-a0ec8300cc6a`}
                    className="footer__text"
                  >
                    {t("suvCars")}
                  </NavLink>
                  <NavLink
                    to={`/cars/7b2c6420-3e14-4e4e-9903-5e6ee45e59b1`}
                    className="footer__text"
                  >
                    {t("cabrioletCars")}
                  </NavLink>
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
