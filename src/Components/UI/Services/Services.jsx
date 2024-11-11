import React from "react";
import buggie from "../../../assets/buggie.jpg";
import roys from "../../../assets/rolls.jpg";
import { NavLink } from "react-router-dom";
import "./services.scss";
const Services = () => {
  const service = [
    {
      id: 1,
      img: buggie,
      title: "Ride a buggy in Dubai and have fun",
      text: "Experience the thrill of a dune buggy tour in Dubai with us. We offer free hotel pick-up & drop-off service. Book now",
      btn: (
        <NavLink to="/servicebuggy" className="services__link">
          <p>LEARN MORE</p>
          <svg
            className="services__icon"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="services__path"
              d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
            />
            <circle className="circle" cx="16" cy="16" r="15.5" />
          </svg>
        </NavLink>
      ),
    },
    {
      id: 2,
      img: roys,
      title: "Photoshoot with luxury car rental Dubai",
      text: "Professional car photoshoot as an additional type of service at Terra Car Rental",
      btn: (
        <NavLink to="/servicecar" className="services__link">
          <p>LEARN MORE</p>
          <svg
            className="services__icon"
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="services__path"
              d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
            />
            <circle className="circle" cx="16" cy="16" r="15.5" />
          </svg>
        </NavLink>
      ),
    },
  ];
  return (
    <div className="services">
      <div className="container">
        <div className="services__wrapper">
          <div className="contact__nav">
            <NavLink to="/" className="navlink">
              Luxury cars for Rent in Dubai
            </NavLink>
            /
            <NavLink to="/" className="navlink">
              Services
            </NavLink>
          </div>
          <h2 className="contact__title">Services</h2>
          <div className="services__items">
            {service?.map((elem) => (
              <div className="services__item" key={elem.id}>
                <img src={elem.img} alt="Rasm" className="services__img" />
                <h3 className="services__name">{elem.title}</h3>
                <p className="services__text">{elem.text}</p>
                {elem.btn}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
