import React from "react";
import "../styles/blogview1.scss";
import car1 from "../assets/cars1.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogVew1 = () => {
  const { t } = useTranslation();

  return (
    <div className="blogview">
      <div className="container">
        <div className="blogview_container">
          <div className="blogview_naviget">
            <NavLink to="/">
              {t("luxuryCarsForRent")} / {t("blog")} / {t("topReasonsToRent")}
            </NavLink>
          </div>
          <div className="blogview_blog">
            <div className="blogview_title">
              {t("topDestinationsTitle")}
            </div>
            <div className="blogview_text">
              {t("topDestinationsText1")}
              <br /> <br /> {t("destinationAbuDhabi")}
            </div>
            <div className="blogview_img">
              <img width={1300} height={800} src={car1} alt="" />
            </div>
            <div className="blogview_text2">
              {t("topDestinationsText2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogVew1;
