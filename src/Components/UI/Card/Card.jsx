import React from "react";
import "./card.scss";

const Card = ({ item }) => {
  return (
    <div className="card">
      <div className="container">
        <div className="card__container">
          <img src={item.imageUrl} alt={item.name} className="card__image" />
          <div className="card__details">
            <h3 className="card__name">{item.name}</h3>
            <p className="card__price">AED {item.price} / per day</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
