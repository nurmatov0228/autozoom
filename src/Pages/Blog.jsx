import React from "react";
import "../styles/blog.scss";
import car1 from "../assets/cars1.jpg";
import car2 from "../assets/cars2.jpg";
import car3 from "../assets/cars3.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Blog = () => {
  const { t } = useTranslation();

  return (
    <div className="blog">
      <div className="container">
        <div className="blog__container">
          <div className="blog_naviget">
            <NavLink to="/">{t("luxuryCarsForRent")} / {t("blog")}</NavLink>
          </div>
          <div className="blog_title">
            <h1>{t("blog")}</h1>
          </div>
          <div className="blog_box">
            <div className="blog_box1">
              <div className="blog_img">
                <img width={200} height={250} src={car1} alt="" />
              </div>
              <div className="blog_text">
                <div className="blog_text1">
                  <h1>{t("topDestinationsTitle")}</h1>
                </div>
                <div className="blog_text2">
                  <h3>{t("topDestinationsDescription")}</h3>
                </div>
                <div className="blog_text3">
                  <p>{t("date1")}</p>
                </div>
              </div>
            </div>
            <div className="page"><NavLink to="/blogview1">{t("more")}</NavLink></div>

            <div className="blog_box1">
              <div className="blog_img">
                <img width={200} height={250} src={car2} alt="" />
              </div>
              <div className="blog_text">
                <div className="blog_text1">
                  <h1>{t("topPhotoSpotsTitle")}</h1>
                </div>
                <div className="blog_text2">
                  <h3>{t("topPhotoSpotsDescription")}</h3>
                </div>
                <div className="blog_text3">
                  <p>{t("date2")}</p>
                </div>
              </div>
            </div>
            <div className="page"><NavLink to="/blogview2">{t("more")}</NavLink></div>

            <div className="blog_box1">
              <div className="blog_img">
                <img width={200} height={250} src={car3} alt="" />
              </div>
              <div className="blog_text">
                <div className="blog_text1">
                  <h1>{t("reasonsToRentTitle")}</h1>
                </div>
                <div className="blog_text2">
                  <h3>{t("reasonsToRentDescription")}</h3>
                </div>
                <div className="blog_text3">
                  <p>{t("date3")}</p>
                </div>
              </div>
            </div>
            <div className="page"><NavLink to="/blogview3">{t("more")}</NavLink></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
