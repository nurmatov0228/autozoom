import React from "react";
import "../styles/blogview2.scss";
import car2 from "../assets/cars2.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogView2 = () => {
  const { t } = useTranslation();

  return (
    <div className="blogview1">
      <div className="container">
        <div className="blogview1_container">
          <div className="blogview1_naviget">
            <NavLink to="/">
              {t("luxuryCarsForRent")} / {t("blog")} / {t("topReasonsToRent")}
            </NavLink>
          </div>
          <div className="blogview1_blog">
            <div className="blogview1_title">
              {t("topDestinationsTitle")}
            </div>
            <div className="blogview1_text">
              {t("topDestinationsText1")}
              <br /> <br /> {t("destinationAbuDhabi")}
            </div>
            <div className="blogview1_img">
              <img width={1300} height={500} src={car2} alt="" />
            </div>
            <div className="blogview1_text2">
              {t("topDestinationsText2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView2;
