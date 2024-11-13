import React from "react";
import "../styles/uslugs.scss";
import tayota from "../assets/uslug-tayota.jpg";
import mclaren from "../assets/uslug-mclaren.jpg";
import camaro from "../assets/uslug-camaro.jpg";
import checkbox from "../assets/checkbox.png";
import { NavLink, useLocation } from "react-router-dom";

const Servicecar = () => {
  const location = useLocation()?.pathname;
  const data = [
    {
      id: 1,
      img: tayota,
      num: 1000,
      person: "one person",
    },
    {
      id: 3,
      img: mclaren,
      num: 2000,
      person: "two person",
    },
    {
      id: 3,
      img: camaro,
      num: 3000,
      person: "three person",
    },
  ];
  return (
    <div className="servicecar">
      <div className="container">
        <div className="contact__nav">
          <NavLink to="/" className="navlink">
            Luxury cars for Rent in Dubai
          </NavLink>
          /
          <NavLink to="/services" className="navlink">
            Services
          </NavLink>
          /
          <NavLink to={location} className="navlink">
            {"S" +
              location.slice(2, 8) +
              location.slice(8, 9).toUpperCase() +
              location.slice(9)}
          </NavLink>
        </div>
        <div className="servicecar__wrapper">
          {data?.map((elem) => (
            <div key={elem?.id} className="servicecar__item">
              <img src={elem?.img} alt="" className="servicecar__img" />
              <div className="servicecar__box">
                <p className="servicecar__holat">BASIC</p>
                <div className="servicecar__persons">
                  <div className="servicecar__number">{elem?.num}</div>
                  <p className="servicecar__person">{elem?.person}</p>
                </div>
                <p className="servicecar__text">
                  Driving a sports car and a premium photo shoot in Dubai. Book
                  yourself a trip to the most exciting adventure in the desert,
                  and then enjoy the traditional Arab hospitality
                </p>
                <h3 className="servicecar__title">Package Inclusions:</h3>
                <div className="servicecar__inclusions">
                  <h4 className="servicecar__inclusion">
                    <img src={checkbox} alt="" className="servicecar__icon" />
                    <p className="servicecar__name">Premium Transfer to camp</p>
                  </h4>
                  <h4 className="servicecar__inclusion">
                    <img src={checkbox} alt="" className="servicecar__icon" />
                    <p className="servicecar__name">
                      Dune Buggy riding 1.5 hours
                    </p>
                  </h4>
                  <h4 className="servicecar__inclusion">
                    <img src={checkbox} alt="" className="servicecar__icon" />
                    <p className="servicecar__name">Falcone shoting</p>
                  </h4>
                  <h4 className="servicecar__inclusion">
                    <img src={checkbox} alt="" className="servicecar__icon" />
                    <p className="servicecar__name">Camel</p>
                  </h4>
                  <h4 className="servicecar__inclusion">
                    <img src={checkbox} alt="" className="servicecar__icon" />
                    <p className="servicecar__name">VIP room</p>
                  </h4>
                  <h4 className="servicecar__inclusion">
                    <img src={checkbox} alt="" className="servicecar__icon" />
                    <p className="servicecar__name">Fruits, Drinks, BBQ</p>
                  </h4>
                  <button className="servicecar__btn">
                    <a href="tel:+998507189807">BOOK NOW</a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Servicecar;
