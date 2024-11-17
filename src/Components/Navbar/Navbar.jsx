import React, { useState, useEffect } from "react";
import rasmEn from "../../assets/languageEn.png";
import rasmRu from "../../assets/languageRu.png";
import rasmBg from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./navbar.scss";
import Loader from "../../Pages/Loader";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false); // Loader holati
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const API = `https://realauto.limsa.uz/api/cars`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          console.error("API dan qaytgan data massiv emas:", data);
          setCars([]);
        }
      })
      .catch((error) => console.error("Xato:", error));
  }, []);

  const handleSearch = () => {
    const filteredCars = cars.filter((car) =>
      car.model?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Cars:", filteredCars);
    navigate("/cars", { state: { filteredCars } });
  };

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const handleLanguageChange = (language) => {
    setIsLoading(true); // Loaderni yoqish
    i18next.changeLanguage(language).then(() => {
      setTimeout(() => setIsLoading(false), 1000); // 1 soniyadan so'ng loaderni o'chirish
    });
  };

  const toggleBurgerMenu = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <div className="navbar">
      {isLoading ? (
        <Loader />
      ) : (
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
                <FaSearch onClick={handleSearch} className="navbar_icon" />
                <input
                  type="text"
                  placeholder={t("searchPlaceholder")}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="navbar_logo">
              <NavLink to="/">
                <img width={110} height={60} src={rasmBg} alt="Logo" />
              </NavLink>
            </div>

            <div
              className={`burger-btn ${burgerMenu ? "open" : ""}`}
              onClick={toggleBurgerMenu}
            >
              <div className="burger-btn__line"></div>
              <div className="burger-btn__line"></div>
              <div className="burger-btn__line"></div>
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
          </div>

          <a className="navbar_phon" href="tel:+998 (99) 000 04 41">
            +998 (99) 000 04 41
          </a>
        </div>
      )}{" "}
      {/* Loaderni ko'rsatish */}
    </div>
  );
};

export default Navbar;
