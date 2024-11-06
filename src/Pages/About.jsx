import React from "react";
import "../styles/about.scss";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__wrapper">
          <div className="contact__nav">
            <NavLink to="/" className="navlink">
              Luxury cars for Rent in Dubai
            </NavLink>
            /
            <NavLink to="/contact" className="navlink">
              About us
            </NavLink>
          </div>
          <h2 className="contact__title about__title">ABOUT US</h2>
          <div className="about__part">
            <h4 className="about__h4">
              Welcome to Auto Zoom Car Rental Co LLC – Your Partner in
              Unforgettable Journeys in Dubai!
            </h4>
            <p className="about__text">
              In a world where every trip is an adventure, Auto Zoom Car Rental
              Co LLC offers you a unique car rental experience in the heart of
              Dubai.
            </p>
          </div>
          <div className="about__part">
            <h3 className="about__h3">Why Auto Zoom?</h3>
            <p className="about__text">
              <h5 className="about__h5">Elegant Car Fleet:</h5>We provide you
              the opportunity to choose from our luxurious car fleet – from
              sleek sedans to powerful SUVs. We have a vehicle to match your
              style and meet your needs.
            </p>
            <p className="about__text">
              <h5 className="about__h5">Worry-Free Rental:</h5>Our goal is to
              make your journey as comfortable as possible. Flexible rental
              terms, the option to hire with a driver, and a wide range of
              additional services – all for your convenience.
            </p>
            <p className="about__text">
              <h5 className="about__h5">Transparency and Trust:</h5>We value
              every customer, so our prices are honest and transparent. No
              hidden fees, no unexpected surprises. Trust us, and we will make
              your rental experience straightforward and clear.
            </p>
            <p className="about__text">
              <h5 className="about__h5">Service at Your Level:</h5>Our friendly
              and professional team is ready to bring your ideas to life. We aim
              not just to provide a car but to create a genuine automotive
              experience for you.
            </p>
          </div>
          <div className="about__part">
            <p className="about__text">
              <h5 className="about__h5">Our Mission:</h5>
              Auto Zoom Car Rental Co LLC is created with one goal – to make
              every journey unforgettable. We strive to offer you not just a car
              but the key to new experiences and adventures.
            </p>
            <p className="about__text">
              <h5 className="about__h5">Contact Us:</h5>
              Trust the professionals – trust Auto Zoom Car Rental Co LLC. Get
              in touch with us today to start your exciting journey through
              Dubai in our stylish and reliable cars. Allow yourself to savor
              every moment of your trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
