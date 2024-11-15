import React, { useState, useEffect } from "react";
import rasmEn from "../../assets/languageEn.png";
import rasmRu from "../../assets/languageRu.png";
import rasmBg from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import "./navbar.scss";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [burgerMenu, setBurgerMenu] = useState(false);
  const [cars, setCars] = useState([]); // API-dan olingan mashinalar ro'yxati
  const [searchTerm, setSearchTerm] = useState(""); // Foydalanuvchi kiritayotgan matn
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const API = `https://realauto.limsa.uz/api/cars`;
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setCars(data); // Agar data massiv bo'lsa, uni setCars ga o'rnatamiz
        } else {
          console.error("API dan qaytgan data massiv emas:", data);
          setCars([]); // xatolik yuzaga kelgan taqdirda bo'sh massiv
        }
      })
      .catch((error) => console.error("Xato:", error));
  }, []);

  const handleSearch = () => {
    // Kiritilgan matnga mos avtomobillarni qidiring
    const filteredCars = cars.filter((car) =>
      car.model?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log("Filtered Cars:", filteredCars); // Qidiruv natijalarini konsolda ko'rsatadi

    // Keyinchalik natijalarni "cars" sahifasida ko'rsatish uchun filteredCars massivini saqlang yoki to'g'ridan-to'g'ri sahifaga o'tkazish kodini yozing.
    navigate("/cars", { state: { filteredCars } });
  };

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
    setBurgerMenu(!burgerMenu);
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

          {/* Burger Button */}
          <div
            className={`burger-btn ${burgerMenu ? "open" : ""}`}
            onClick={toggleBurgerMenu}
          >
            <div className="burger-btn__line"></div>
            <div className="burger-btn__line"></div>
            <div className="burger-btn__line"></div>
          </div>

          {/* Burger Menu Links */}
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
    </div>
  );
};

export default Navbar;
