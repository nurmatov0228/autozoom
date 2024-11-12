import React from "react";
import "../styles/contact.scss";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdMailOutline } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact">
      <div className="about__container">
        <div className="contact__wrapper">
          <div className="contact__nav">
            <NavLink to="/" className="navlink">
              {t("luxuryCarsForRent")}
            </NavLink>
            /
            <NavLink to="/contact" className="navlink">
              {t("contacts")}
            </NavLink>
          </div>
          <div className="contact__header">
            <h2 className="contact__title">{t("haveAnyQuestions")}</h2>
            <p className="contact__description">{t("gladToHelp")}</p>
          </div>
          <div className="contact__body">
            <h3 className="contact__titlecha">{t("headOffice")}</h3>
            <div className="contact__box">
              <div className="contact__office">
                <a
                  className="contact__info"
                  href="https://maps.app.goo.gl/ybN9EC7KwG9CtZQf6"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLocationOutline className="contact__icon" />
                  <p>{t("address")}</p>
                </a>
                <a className="contact__info" href="tel:+998507189807">
                  <HiOutlinePhone className="contact__icon" />
                  <p>{t("phone")}</p>
                </a>
                <a
                  className="contact__info"
                  href="mailto:hkadyrov.3006@gmail.com"
                >
                  <MdMailOutline className="contact__icon" />
                  <p>{t("email")}</p>
                </a>
              </div>
              <div className="contact__office">
                <a
                  className="contact__info"
                  href="https://t.me/dark_net_001"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GrSend className="contact__icon" />
                  <p>{t("telegram")}</p>
                </a>
                <a
                  className="contact__info"
                  href="https://www.instagram.com/_kadyrovv0_6/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="contact__icon" />
                  <p>{t("instagram")}</p>
                </a>
                <a
                  className="contact__info"
                  href="https://www.facebook.com/profile.php?id=100090272936864"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookSquare className="contact__icon" />
                  <p>{t("facebook")}</p>
                </a>
              </div>
            </div>
            <hr className="contact__hr" />
            <div className="contact__map">
              <iframe
                src={t("mapEmbedLink")}
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
