import React from "react";
import "./location.scss";
const Location = () => {
  return (
    <div className="loc-city">
      <div className="container">
        <div className="loc-city__wrapper">
          <div className="loc-city__location">
            <h2 className="contact__title">Location</h2>
            <p className="loc-city__text">Beaches</p>
            <p className="loc-city__text">Al Mamzar</p>
            <p className="loc-city__text">Art Foundation</p>
            <p className="loc-city__text">Al-Rahba</p>
            <p className="loc-city__text">Corniche</p>
            <p className="loc-city__text">Saadiyat Island</p>
            <p className="loc-city__text">Burj-khalifa</p>
            <p className="loc-city__text">Marina</p>
            <p className="loc-city__text">Deira</p>
            <p className="loc-city__text">Jumeirah</p>
            <p className="loc-city__text">Burj al-arab</p>
          </div>
          <div className="loc-city__location">
            <h2 className="contact__title">City</h2>
            <p className="loc-city__text">Fujairah</p>
            <p className="loc-city__text">Sharjah</p>
            <p className="loc-city__text">Abu Dhabi</p>
            <p className="loc-city__text">Dubai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
