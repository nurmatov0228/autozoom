import React from "react";
import "./card.scss";
import { NavLink } from "react-router-dom";
const Card = ({ item, location }) => {
  const body = () => {
    if (location === "budget") {
      return (
        <NavLink to={`/caritem/${item?.id}`} className="navlink">
          <div className="card__container">
            <div className="card__image-wrapper">
              <img
                className="card__image"
                src={`https://realauto.limsa.uz/api/uploads/images/${item?.car_images[0]?.image?.src}`}
                alt={item?.name_en}
              />
            </div>
            <h4 className="card__title">
              {item?.brand?.title} {item?.model?.name}
            </h4>
            <div className="card__price">
              <span>AED 0</span>
              <span>$ 0</span>
            </div>
            <p className="card__text">per day: {item?.limitperday}</p>
          </div>
        </NavLink>
      );
    } else {
      return <h2>not found</h2>;
    }
  };

  return (
    <div className="card">
      <div className="container">{body()}</div>
    </div>
  );
};

export default Card;
