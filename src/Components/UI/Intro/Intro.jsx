import React from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Intro.scss";
import Brend from "../../../Pages/Brend";

const Intro = () => {
  const { t } = useTranslation();

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500
  };

  return (
    <div className="intro">
      <div className="container">
        <div className="intro__container">
          <div className="intro_title">
            <h2>{t("title")}</h2>
            <br />
            <h2>{t("number")}</h2>
          </div>
          <div className="intro_text">
            <p>{t("description")}</p>
            <br />
            <div className="intro_see">
              <NavLink to="/cars">{t("seeAlll")}</NavLink>
              <svg
                className="imgbtn"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="path"
                  d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
                />
                <circle className="circle" cx="16" cy="16" r="15.5" />
              </svg>
            </div>
          </div>
          <div className="intro_slide">
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <h3>
                    <img
                      src="https://terra-rentacar.uz/assets/4W-CpaXs4Oo.png"
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src="https://terra-rentacar.uz/assets/3W-C2l-m8Z-.png"
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src="https://terra-rentacar.uz/assets/1W-CCFlS9pW.png"
                      alt=""
                    />
                  </h3>
                </div>
                <div>
                  <h3>
                    <img
                      src="https://terra-rentacar.uz/assets/2W-RcGsQ6_1.png"
                      alt=""
                    />
                  </h3>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
      <Brend/>
    </div>

    
  );
};

export default Intro;
