import React, { useState } from "react";
import rasmEn from "../../assets/languageEn.png";
import rasmRu from "../../assets/languageRu.png";
import rasmBg from "../../assets/logo.png";
import rasmCar from "../../assets/porche.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import i18next from "i18next"; // Import i18next for language change
import { useTranslation } from "react-i18next"; // Import useTranslation hook for translations
import "./navbar.scss";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { t } = useTranslation(); // useTranslation hook

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language); // Change language dynamically
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_container">
          <div className="navbar_languages">
            <img
              width={30}
              height={30}
              src={rasmEn}
              alt="English Language"
              onClick={() => handleLanguageChange("en")} // Change to English on click
            />
            <img
              width={30}
              height={30}
              src={rasmRu}
              alt="Russian Language"
              onClick={() => handleLanguageChange("ru")} // Change to Russian on click
            />
          </div>
          <div className="navbar_search">
            <div className="navbar_input">
              <FaSearch className="navbar_icon" />
              <input type="text" placeholder={t("searchPlaceholder")} />
            </div>
          </div>
          <div className="navbar_logo">
            <NavLink to="/">
              <img width={110} height={60} src={rasmBg} alt="Logo" />
            </NavLink>
          </div>
          <div className="navbar_navlink">
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("CARS")}
            </NavLink>

            <div className="dropdown">
              <NavLink
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                to="/brand"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {t("BRAND")}
              </NavLink>
              {showDropdown && (
                <div
                  className="dropdown-menu"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* Dropdown items go here */}
                </div>
              )}
            </div>

            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("SERVICES")}
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("ABOUT_US")}
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("CONTACT")}
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {t("BLOG")}
            </NavLink>
          </div>
        </div>
        <a className="navbar_phon" href="tel:+998 (99) 000 04 41">
          +998 (99) 000 04 41
        </a>
      </div>
    </div>
  );
};

export default Navbar;
