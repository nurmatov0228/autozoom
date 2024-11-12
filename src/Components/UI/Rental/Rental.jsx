import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18next
import './rental.scss';

const Rental = () => {
  const { t } = useTranslation(); // Hook to access translation

  return (
    <div className="rental">
      <div className="about__container">
        <div className="rental__wrapper">
          <iframe
            width="769"
            height="500"
            src="https://www.youtube.com/embed/rsHmvxJ86PA"
            title="Terra-rentacar"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="rental__box">
            <h2 className="contact__title rental__title">
              {t("sportsCarRentalDubai")}
            </h2>
            <p className="rental__text">
              {t("rentalDescription")}
            </p>
            <NavLink to="/cars" className="rental__link">
              <p>{t("allCars")}</p>
              <svg
                className="rental__icon"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="rental__path"
                  d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
                />
                <circle className="circle" cx="16" cy="16" r="15.5" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
