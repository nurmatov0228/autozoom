import React from "react";
import { NavLink } from "react-router-dom";
import './rental.scss'
const Rental = () => {
  return (
    <div className="rental">
      <div className="about__container">
        <div className="rental__wrapper">
          <iframe
            width="769"
            height="500"
            src="https://www.youtube.com/embed/rsHmvxJ86PA"
            title="Terra-rentacar"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
          <div className="rental__box">
            <h2 className="contact__title rental__title">
              SPORTS CAR RENTAL DUBAI
            </h2>
            <p className="rental__text">
              Terra L L C a Car is a Top Luxury Car Rental Dubai based company,
              We offer sports car rental, and supercar rental in Dubai. The best
              luxury car rental process provided by our fleet . We own a diverse
              range of luxury supercar rental and sports car rental Dubai style
              , including Rolls Royce, Lamborghini, Maserati, Ferrari, Mercedes
              Benz, Porsche, and Range Rover, to name a few. Rent a car with the
              best car rental company in Dubai.
            </p>
            <NavLink to="/cars" className="rental__link">
              <p>ALL CARS</p>
              <svg
                className="rental__icon"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="rental__path"
                  d="M13 10L21 16.5L13 23L17.5714 16.5L13 10Z"
                />
                <circle className="circle" cx="16" cy="16" r="15.5" />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rental;
