import React from "react";
import "../styles/blogview3.scss";
import car3 from "../assets/cars3.jpg";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const BlogView3 = () => {
  const { t } = useTranslation();

  return (
    <div className="blogview3">
      <div className="container">
        <div className="blogview3_container">
          <div className="blogview3_naviget">
            <NavLink to="/">
              {t("luxuryCarsForRent")} / {t("blog")} / {t("topReasonsToRent")}
            </NavLink>
          </div>
          <div className="blogview3_blog">
            <div className="blogview3_title">
              {t("topDestinationsTitle")}
            </div>
            <div className="blogview3_text">
              {t("topDestinationsText1")}
              <br /> <br /> {t("destinationAbuDhabi")}
            </div>
            <div className="blogview3_img">
              <img width={1300} height={800} src={car3} alt="" />
            </div>
            <div className="blogview3_text2">
              {t("topDestinationsText2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogView3;
