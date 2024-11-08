import React from "react";
import rasmEn from "../../assets/languageEn.png";
import rasmRu from "../../assets/languageRu.png";
import rasmBg from "../../assets/logo.png";
import rasmCar from "../../assets/porche.png";
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
              <img width={110} height={60} src={rasmBg} alt="Logo" />
            </NavLink>
          </div>
          <div className="navbar_navlink">
            <NavLink
              to="/cars"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CARS
            </NavLink>

            <div className="dropdown">
              <NavLink
                to="/brand"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                BRAND
              </NavLink>
              <div className="dropdown-menu">
                <div className="dropdown-column">
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/d714a6ff-1959-4189-89f7-957853352e77.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Nissan</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/7b2501cb-a785-469f-bc99-1674e239c48c.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">BMW</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={30}
                      height={20}
                      src="https://realauto.limsa.uz/api/uploads/images/f228bf46-e678-4807-a34b-ce617f8faac3.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Audi</span> Emirates
                  </NavLink>
                </div>
                <div className="dropdown-column">
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={35}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/42084fd5-2311-47c3-9f4c-12b44ae08716.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Chevrolet</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={30}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/18515cef-39ef-4e5e-9a77-3df3b12ddd42.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Toyota</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/b847eb62-cb01-479e-9946-511c8cbccb1a.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Mercedes-Benz</span>{" "}
                    Emirates
                  </NavLink>
                </div>
                <div className="dropdown-column">
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/0d22afa6-b549-423e-9a14-014c6c6b2eea.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Tesla</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={20}
                      src="https://realauto.limsa.uz/api/uploads/images/444e9e4b-7e00-49dc-a63a-ae930dd855d7.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Hummer</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/d585d075-18ce-414b-8644-49d371d08afc.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Rolls-Royce</span>{" "}
                    Emirates
                  </NavLink>
                </div>
                <div className="dropdown-column">
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/a55c6334-87ad-4aa0-89f5-4fe40ed456d3.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Cadillac</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/ac1ecd80-fb27-4d64-b97a-d078e3fe2b34.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Ferrari</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/fcfed7fd-9e03-41b3-b642-f1a148409e74.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Lamborghini</span>{" "}
                    Emirates
                  </NavLink>
                </div>
                <div className="dropdown-column">
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={30}
                      height={30}
                      src="https://realauto.limsa.uz/api/uploads/images/bd538eac-b552-475f-9311-c8c5e5828064.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Mustang</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/88cb3468-a77e-4a56-84da-c6ba26fb9453.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Koenigsegg</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/ac6d8dcf-54a5-4087-a867-e95e35585fce.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Bugatti</span> Emirates
                  </NavLink>
                </div>
                <div className="dropdown-column">
                  <NavLink to="/cars" className="dropdown-item">
                    <img width={25} height={25} src={rasmCar} alt="Car Icon" />
                    Rent <span className="brand-name">Tesla</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={25}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/1a79be94-4d25-46de-9aa5-2acade6d407a.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">McLaren</span> Emirates
                  </NavLink>
                  <NavLink to="/cars" className="dropdown-item">
                    <img
                      width={35}
                      height={25}
                      src="https://realauto.limsa.uz/api/uploads/images/5078b893-a026-4846-b46c-a7fb736e16a4.png"
                      alt="Car Icon"
                    />
                    Rent <span className="brand-name">Bentley</span> Emirates
                  </NavLink>
                </div>
              </div>
            </div>

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
              to="/contact"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              CONTACT
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              BLOG
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
