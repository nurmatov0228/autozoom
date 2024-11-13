import React from "react";
import "../styles/about.scss";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // i18next import

const About = () => {
  const { t } = useTranslation(); // Tarjimani chaqirish

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__wrapper">
          <div className="contact__nav">
            <NavLink to="/" className="navlink">
              {t("luxuryCarsForRent")} {/* Tarjima */}
            </NavLink>
            /
            <NavLink to="/contact" className="navlink">
              {t("aboutUs")} {/* Tarjima */}
            </NavLink>
          </div>
          <h2 className="contact__title about__title">{t("aboutUs")}</h2>
          <div className="about__part">
            <h4 className="about__h4">
              {t("welcomeMessage")}
            </h4>
            <p className="about__text">
              {t("rentalExperienceDescription")}
            </p>
          </div>
          <div className="about__part">
            <h3 className="about__h3">{t("whyAutoZoom")}</h3>
            <p className="about__text">
              <h5 className="about__h5">{t("elegantCarFleet")}</h5>
              {t("elegantCarFleetDescription")}
            </p>
            <p className="about__text">
              <h5 className="about__h5">{t("worryFreeRental")}</h5>
              {t("worryFreeRentalDescription")}
            </p>
            <p className="about__text">
              <h5 className="about__h5">{t("transparencyTrust")}</h5>
              {t("transparencyTrustDescription")}
            </p>
            <p className="about__text">
              <h5 className="about__h5">{t("serviceAtYourLevel")}</h5>
              {t("serviceAtYourLevelDescription")}
            </p>
          </div>
          <div className="about__part">
            <p className="about__text">
              <h5 className="about__h5">{t("ourMission")}</h5>
              {t("missionDescription")}
            </p>
            <p className="about__text">
              <h5 className="about__h5">{t("contactUs")}</h5>
              {t("contactDescription")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
