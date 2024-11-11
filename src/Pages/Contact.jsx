import React from "react";
import "../styles/contact.scss";
import { NavLink } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { HiOutlinePhone } from "react-icons/hi2";
import { MdMailOutline } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact">
      <div className="about__container">
        <div className="contact__wrapper">
          <div className="contact__nav">
            <NavLink to="/" className="navlink">
              Luxury cars for Rent in Dubai
            </NavLink>
            /
            <NavLink to="/contact" className="navlink">
              Contacts
            </NavLink>
          </div>
          <div className="contact__header">
            <h2 className="contact__title">HAVE ANY QUESTIONS?</h2>
            <p className="contact__description">We will be glad to help</p>
          </div>
          <div className="contact__body">
            <h3 className="contact__titlecha">Head office</h3>
            <div className="contact__box">
              <div className="contact__office">
                <a
                  className="contact__info"
                  href="https://maps.app.goo.gl/ybN9EC7KwG9CtZQf6"
                  target="_blank"
                >
                  <IoLocationOutline className="contact__icon" />
                  <p>
                    Elite 3 Sports City, Dubai 26W8 24J, United Arab Emirates
                  </p>
                </a>
                <a className="contact__info" href="tel:+998507189807">
                  <HiOutlinePhone className="contact__icon" />
                  <p>+998 (50) 718 98 07</p>
                </a>
                <a
                  className="contact__info"
                  href="mailto:hkadyrov.3006@gmail.com"
                >
                  <MdMailOutline className="contact__icon" />
                  <p>hkadyrov.3006@gmail.com</p>
                </a>
              </div>
              <div className="contact__office">
                <a
                  className="contact__info"
                  href="https://t.me/dark_net_001"
                  target="_blank"
                >
                  <GrSend className="contact__icon" />
                  <p>dark_net_001</p>
                </a>
                <a
                  className="contact__info"
                  href="https://www.instagram.com/_kadyrovv0_6/"
                  target="_blank"
                >
                  <FaInstagram className="contact__icon" />
                  <p>@_kadyrovv0_6</p>
                </a>
                <a
                  className="contact__info"
                  href="https://www.facebook.com/profile.php?id=100090272936864"
                  target="_blank"
                >
                  <FaFacebookSquare className="contact__icon" />
                  <p>Hasan Qodirov</p>
                </a>
              </div>
            </div>
            <hr className="contact__hr" />
            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14458.951170983506!2d55.218642!3d25.042971!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dda73765d53%3A0x97a75a7af7de0788!2sDubai%20International%20Cricket%20Stadium!5e0!3m2!1sen!2sus!4v1730722726460!5m2!1sen!2sus"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
