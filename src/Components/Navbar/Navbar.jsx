import React, { useState } from "react";
import rasmEn from "../../assets/languageEn.png";
import rasmRu from "../../assets/languageRu.png";
import rasmBg from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import i18next from "i18next"; 
import { useTranslation } from "react-i18next"; 
import "./navbar.scss";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false); // State for burger menu toggle
  const { t } = useTranslation(); 

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language); 
  };

  const toggleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu); // Toggle the burger menu
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
              onClick={() => handleLanguageChange("en")}
            />
            <img
              width={30}
              height={30}
              src={rasmRu}
              alt="Russian Language"
              onClick={() => handleLanguageChange("ru")}
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
          <div className={`navbar_navlink ${burgerMenu ? "active" : ""}`}>
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
                  {/* Dropdown items */}
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
          
          <div className="burger-button" onClick={toggleBurgerMenu}>
            <span className={`burger-line ${burgerMenu ? "open" : ""}`}></span>
            <span className={`burger-line ${burgerMenu ? "open" : ""}`}></span>
            <span className={`burger-line ${burgerMenu ? "open" : ""}`}></span>
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
