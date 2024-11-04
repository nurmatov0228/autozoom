import React from "react";
import "./budgetcars.scss";
import axios from "axios";
import Card from "../Card/Card";

const BudgetCars = () => {
  const API = `https://realauto.limsa.uz/api/cars`;

  axios
    .get(API)
    .then((e) => e.json())
    .then((data) => {
      console.log(data);
    })
    .catch(function (error) {
      console.log(error);
    });
  return (
    <div className="budget">
      <div className="container">
        <div className="budget__container">budgetcar</div>
        <Card />
      </div>
    </div>
  );
};

export default BudgetCars;
