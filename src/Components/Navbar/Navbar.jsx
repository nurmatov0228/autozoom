import React from "react";
import rasmEn from "../../assets/languageEn.png";
import rasmRu from "../../assets/languageRu.png";
import rasmBg from "../../assets/logo.png";
import { FaSearch } from "react-icons/fa";
import "./navbar.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar_container">
          <div className="navbar_languages">
            <img width={30} height={30} src={rasmEn} alt="English Language" />
            <img width={30} height={30} src={rasmRu} alt="Other Language" />
          </div>
          <div className="navbar_search">
            <div className="navbar_input">
              <FaSearch className="navbar_icon" />
              <input type="text" placeholder="Search..." />
            </div>
          </div>
          <div className="navbar_logo">
            <NavLink to="/">
              <img width={110} height={60} src={rasmBg} alt="" />
            </NavLink>
          </div>
          <div className="navbar_navlink">
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CARS
            </NavLink>
            <NavLink
              to="/brand"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              BRAND
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              SERVICES
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              ABOUT US
            </NavLink>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CONTACTS
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              BLOG
            </NavLink>
          </div>
        </div>
        <a className="navbar_phon" href="tel:+998901234567">+998 90 123 45 67</a>
      </div>
    </div>
  );
};

export default Navbar;
